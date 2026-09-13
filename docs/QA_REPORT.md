# Universal Shopping Skill QA

13 September 2026. Browser QA and deterministic boundary checks by the implementation agent.

## Verified

- `npm run build` and `npm run check` pass. Six public routes, local links/anchors, unique IDs, one H1 each, reader artifacts and JavaScript syntax checked.
- Main narrative: 1,532 problem words / 1,505 solution words. Approximately 50/50; depth still requires judgment.
- All six pages checked in browser iframe viewports at 360, 390, 768 and 1,280 CSS pixels: 24 combinations, no page-level horizontal overflow. Wide comparison tables scroll within their own labelled regions.
- Mobile interaction: Orion selection, simulated account connection, eligibility disclosure, pre-cart answer blocks activation, approved answer permits route, Flipkart destination preserves Orion/variant/price.
- Rewards: Luma/Amazon flow shows payable price and restricted Rewards separately, no net cash price; simulated handoff preserves selection.
- Unsupported merchant, missing product context, expired policy, earlier affiliate referral and zero benefit each stop route creation. Service failure recovers to the same product directly with no benefit claimed.
- Share surface displays a distinct explicit action; small ₹65 benefit is visible. Host change disconnects the demo account; Claude explicit-invocation mode does not pretend to be automatic.
- Menu opens and Escape closes it on mobile. Source reader changes records and finds four “Universal” matches in the decision log. Calculator returns 0.1 for 25% × 0.4 and rejects 101% reach.
- No application-origin console errors observed during these checks. Browser-extension metadata errors were present and excluded; Vite connection messages are development diagnostics.
- Release allowlist excludes private originals, raw stakeholder messages, local QA harness and superseded Order Check model. Public identity check passes.

## Fixes during QA

- Account connection scoped to the chosen host/surface.
- Stage focus scrolls to the new content on narrow screens.
- Small functional labels raised to 12px minimum; decorative phone lettering is not content.
- Host copy acknowledges the user's selected alternative instead of claiming every phone is the best recommendation.
- Remaining active reference to Order Check in the feedback summary corrected; research worksheet now tests routing and the competing Share surface.

## Limits

This is a browser simulation, not a real assistant integration, affiliate attribution test or device lab. No physical phone, screen reader, full WCAG certification, real checkout, authenticated CashKaro baseline or consumer comprehension study was performed. Contrast uses restrained dark text and reviewed color pairs; this is not an exhaustive automated accessibility audit. External sources were researched, but historical outbound links may change. Screenshots in `docs/qa/universal-desktop.jpg` and `universal-mobile.jpg` record desktop and a narrow iframe state.

Production verification is a separate release step; do not mistake these local checks for live platform approval.
