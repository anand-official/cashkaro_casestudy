# Universal Shopping Skill 4.1 QA

13 September 2026. Revision: consumer conversation and review sheet.

- Build and release checks pass. The router model and experiment source are unchanged from 4.0.
- Default experience: neutral assistant, three fictional product cards, no configuration sidebar. Original vector artwork loads locally; no external image dependency.
- Browser-tested all benefit scenarios: ₹1,200 Cashback, ₹65 cap, restricted Rewards, zero benefit, unsupported merchant, missing context, expired policy, prior affiliate referral and route-service failure.
- Success and direct-exit journeys preserve product, merchant and variant. Existing cart/wishlist answer blocks activation. Rewards never create a cash-effective-price row.
- ChatGPT, Claude and Gemini explicit modes, ChatGPT contextual mode and Share tested. Host changes require reconnection. Disconnect hides itself after use. Changing scenarios resets the purchase without changing recommendation ranking.
- Native modal uses an accessible title, labelled controls and close button; keyboard focus stays within the modal and Escape returns to the trigger. Return-to-conversation focuses the current stage or first product. Visible CTA wording is included in accessible button names.
- Six pages × 360/390/768/1280 CSS-pixel frames: 24 checks, no page-level overflow. Mobile product cards scroll inside the conversation. 360px success journey and bottom sheet tested; the sheet has its own vertical scroll.
- At 200% root text size in the narrow frame, research, benefit, handoff and review sheet have no horizontal page overflow.
- Reduced-motion media rules disable animations and transforms; simulated check delays are 360/400ms. No OS-level reduced-motion setting or real screen reader was exercised.
- No application-origin console errors observed. Browser-extension errors are excluded.
- Current screenshots: `docs/qa/refined-desktop.jpg` and `refined-mobile.jpg`. The mobile image records an iframe test, not a physical device.

## Limitations

No live AI integration, retailer attribution, physical-phone, consumer comprehension or exhaustive WCAG test. The new Claude review file remains unlocated despite attachment and Library searches; the user-supplied summary is labelled. Telegram is a documented precedent, not a live bot test.

## Historical 4.0 checks

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
