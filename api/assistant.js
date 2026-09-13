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

// Model availability differs by key type and changes over time. Try in order and use the
// first that answers, so a renamed or retired model degrades to the next instead of 404ing.
const MODELS = ['gemini-2.5-flash', 'gemini-flash-latest', 'gemini-2.5-flash-lite', 'gemini-3.5-flash'];

export default async function handler(req, res) {
  const key = process.env.GEMINI_API_KEY;

  // Diagnostic: report which models this key can reach. Never returns the key itself.
  if (req.method === 'GET') {
    if (!key) return json(res, 503, { error: 'no_key' });
    try {
      const r = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${key}`);
      const d = await r.json();
      if (!r.ok) return json(res, 502, { status: r.status, detail: d?.error?.message?.slice(0, 200) });
      const names = (d.models || [])
        .filter(m => (m.supportedGenerationMethods || []).includes('generateContent'))
        .map(m => m.name.replace('models/', ''));
      return json(res, 200, { available: names.slice(0, 40) });
    } catch (e) { return json(res, 500, { error: String(e).slice(0, 120) }); }
  }

  if (req.method !== 'POST') return json(res, 405, { error: 'method_not_allowed' });
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
  const timer = setTimeout(() => controller.abort(), 9000);

  const payload = JSON.stringify({
    systemInstruction: { parts: [{ text: SYSTEM }] },
    contents: [{ role: 'user', parts: [{ text: query }] }],
    generationConfig: {
      temperature: 0.7,
      // 2.5-class models spend tokens on hidden reasoning before emitting anything. Left at a
      // low cap the whole budget goes to thinking and the completion comes back empty, so turn
      // thinking off for what is a short structured answer and leave real headroom.
      maxOutputTokens: 800,
      thinkingConfig: { thinkingBudget: 0 },
      responseMimeType: 'application/json',
      responseSchema: {
        type: 'OBJECT',
        properties: { id: { type: 'STRING', enum: ['aster', 'orion', 'luma'] }, text: { type: 'STRING' } },
        required: ['id', 'text']
      }
    }
  });

  try {
    let r = null, used = null, lastStatus = 0;
    for (const model of MODELS) {
      const attempt = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${key}`,
        { method: 'POST', headers: { 'content-type': 'application/json' }, signal: controller.signal, body: payload }
      );
      if (attempt.ok) { r = attempt; used = model; break; }
      lastStatus = attempt.status;
      // 404 = renamed/retired, 503 = overloaded, 429 = per-model quota. All worth trying the
      // next model for. Auth and malformed-request errors are terminal, so stop immediately.
      if (![404, 503, 429].includes(attempt.status)) break;
    }
    clearTimeout(timer);
    if (!r) return json(res, 502, { error: 'upstream', status: lastStatus, fallback: true });

    const data = await r.json();
    const raw = data?.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!raw) return json(res, 502, { error: 'empty_completion', fallback: true });

    let parsed;
    const cleaned = raw.trim().replace(/^```(?:json)?/i, '').replace(/```$/, '').trim();
    try { parsed = JSON.parse(cleaned); }
    catch {
      const m = cleaned.match(/\{[\s\S]*\}/);
      if (!m) return json(res, 502, { error: 'unparseable', fallback: true });
      try { parsed = JSON.parse(m[0]); } catch { return json(res, 502, { error: 'unparseable', fallback: true }); }
    }

    const pick = CATALOGUE.find(p => p.id === parsed.id);
    const text = String(parsed.text || '').trim();

    // Fail closed on every boundary the product depends on.
    if (!pick) return json(res, 502, { error: 'off_catalogue', fallback: true });
    if (!text || text.length > 600) return json(res, 502, { error: 'bad_length', fallback: true });
    if (FORBIDDEN.test(text)) return json(res, 502, { error: 'mentioned_benefit', fallback: true });

    return json(res, 200, { id: pick.id, text, live: true, model: used });
  } catch (err) {
    clearTimeout(timer);
    const aborted = err?.name === 'AbortError';
    return json(res, aborted ? 504 : 500, { error: aborted ? 'timeout' : 'proxy_error', fallback: true });
  }
}
