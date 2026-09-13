// Serverless proxy for the host assistant's product reasoning.
//
// Architecture note, and the reason this endpoint exists at all: in the real product the
// model belongs to the HOST (ChatGPT, Claude, Gemini). CashKaro only supplies a tool the
// host calls. So the shopping conversation may legitimately be generated live, while the
// CashKaro benefit check stays deterministic and fail-closed in assets/router-model.js.
//
// This endpoint therefore has one job: pick from a fixed fictional catalogue and explain
// why. It must never speak about cashback, benefits or CashKaro. If it does, we discard
// the answer and the client falls back to the scripted path.

const CATALOGUE = [
  { id: 'aster', name: 'Aster 9', price: 39999, variant: '256 GB · Graphite', trait: 'Strongest cameras, all-day battery' },
  { id: 'orion', name: 'Orion S', price: 37999, variant: '256 GB · Midnight', trait: 'Longest battery, less versatile camera' },
  { id: 'luma',  name: 'Luma 8',  price: 34999, variant: '128 GB · Sand',     trait: 'Lowest price, lighter build, less storage' }
];

// Anything that would break the "recommendation is independent of the benefit" guarantee.
const FORBIDDEN = /(cashback|cash back|cashkaro|reward|benefit|discount|coupon|affiliate|commission)/i;

const SYSTEM = `You are a shopping assistant helping someone choose a phone in India.

You may ONLY recommend from this catalogue. Never invent products, prices, specs or retailers:
${CATALOGUE.map(p => `- ${p.name} (id: ${p.id}) — ₹${p.price.toLocaleString('en-IN')}, ${p.variant}. ${p.trait}`).join('\n')}

Rules:
- Recommend exactly one phone and justify it against what the shopper actually asked for.
- Two to three sentences. Conversational, specific, no bullet points, no markdown.
- Name the trade-off the shopper accepts by taking your pick.
- NEVER mention cashback, rewards, benefits, discounts, coupons, affiliates or CashKaro. You do not know those exist. Recommending on price-after-benefit is out of scope.
- Respond with strict JSON only: {"id":"<catalogue id>","text":"<your recommendation>"}`;

const json = (res, code, body) => {
  res.statusCode = code;
  res.setHeader('content-type', 'application/json');
  res.setHeader('cache-control', 'no-store');
  res.end(JSON.stringify(body));
};

// Per-instance throttle. Not a real rate limiter, but enough to blunt casual abuse of a
// public demo without adding infrastructure.
const hits = new Map();
const throttled = ip => {
  const now = Date.now();
  const rec = hits.get(ip) ?? { n: 0, t: now };
  if (now - rec.t > 60_000) { rec.n = 0; rec.t = now; }
  rec.n += 1;
  hits.set(ip, rec);
  if (hits.size > 500) hits.clear();
  return rec.n > 12;
};

export default async function handler(req, res) {
  if (req.method !== 'POST') return json(res, 405, { error: 'method_not_allowed' });

  const key = process.env.GEMINI_API_KEY;
  // No key configured is a normal, supported state: the client runs the scripted path.
  if (!key) return json(res, 503, { error: 'no_key', fallback: true });

  const ip = (req.headers['x-forwarded-for'] || '').split(',')[0].trim() || 'unknown';
  if (throttled(ip)) return json(res, 429, { error: 'rate_limited', fallback: true });

  let query = '';
  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : (req.body || {});
    query = String(body.query || '').slice(0, 300);
  } catch { return json(res, 400, { error: 'bad_request', fallback: true }); }
  if (!query) return json(res, 400, { error: 'empty_query', fallback: true });

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 7000);

  try {
    const r = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${key}`,
      {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        signal: controller.signal,
        body: JSON.stringify({
          systemInstruction: { parts: [{ text: SYSTEM }] },
          contents: [{ role: 'user', parts: [{ text: query }] }],
          generationConfig: { temperature: 0.7, maxOutputTokens: 300, responseMimeType: 'application/json' }
        })
      }
    );
    clearTimeout(timer);
    if (!r.ok) return json(res, 502, { error: 'upstream', status: r.status, fallback: true });

    const data = await r.json();
    const raw = data?.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!raw) return json(res, 502, { error: 'empty_completion', fallback: true });

    let parsed;
    try { parsed = JSON.parse(raw); } catch { return json(res, 502, { error: 'unparseable', fallback: true }); }

    const pick = CATALOGUE.find(p => p.id === parsed.id);
    const text = String(parsed.text || '').trim();

    // Fail closed on every boundary the product depends on.
    if (!pick) return json(res, 502, { error: 'off_catalogue', fallback: true });
    if (!text || text.length > 600) return json(res, 502, { error: 'bad_length', fallback: true });
    if (FORBIDDEN.test(text)) return json(res, 502, { error: 'mentioned_benefit', fallback: true });

    return json(res, 200, { id: pick.id, text, live: true });
  } catch (err) {
    clearTimeout(timer);
    const aborted = err?.name === 'AbortError';
    return json(res, aborted ? 504 : 500, { error: aborted ? 'timeout' : 'proxy_error', fallback: true });
  }
}
