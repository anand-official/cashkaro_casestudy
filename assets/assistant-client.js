// Bridge to the live host model, with a deterministic fallback that must never be visible.
//
// The contract: ask() always resolves. It never throws and never leaves the caller waiting.
// If the proxy is missing, slow, rate-limited, or returns something off-catalogue, we return
// the scripted result instead and mark it as scripted. A demo that stalls in front of an
// interviewer is worse than a demo that was never live.

import { research } from './host-model.js';

const TIMEOUT = 7500;

// Once the endpoint has told us it has no key, stop asking for the rest of the session.
let disabled = false;

export const isLiveDisabled = () => disabled;

export async function ask({ query, priority }) {
  const scripted = research({ priority });
  const fallback = { ...scripted, live: false };
  if (disabled || !query) return fallback;

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT);
  try {
    const res = await fetch('/api/assistant', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ query }),
      signal: controller.signal
    });
    clearTimeout(timer);

    if (res.status === 503) { disabled = true; return fallback; }
    if (!res.ok) return fallback;

    const data = await res.json();
    if (!data?.id || !data?.text) return fallback;

    // The live model chooses; the option list and ordering stay ours, so the catalogue,
    // prices and the recommendation-independence guarantee cannot drift.
    const options = scripted.options;
    const recommended = options.find(p => p.id === data.id);
    if (!recommended) return fallback;

    return { options, recommended, reason: data.text, live: true };
  } catch {
    clearTimeout(timer);
    return fallback;
  }
}
