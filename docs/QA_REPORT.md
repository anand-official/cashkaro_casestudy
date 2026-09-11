# Order Check verification — 11 September 2026

Version: 3.0.0. The original Claude review covered f482fb6 (Shortlist). This report concerns the revised Order Check implementation.

## Observed results

- `npm run build` passes using the existing pinned dependencies. The six-section-per-side case is approximately 51% problem / 49% solution by the build's word-count diagnostic.
- `npm run check` passes public-route and fragment validation, reader artifact availability, JavaScript syntax, publishing exclusions and the meaningful model boundaries below.
- All six pages were loaded in Chrome through a local responsive iframe harness at **360, 390, 768 and 1280 px actual content width**. All 24 checks recorded one H1 and document scroll width equal to viewport width. Tables have intentional internal horizontal scrolling.
- Mobile menu exposes the brief audit, closes with Escape and reports `aria-expanded=false`.
- Mobile journey: close a visit as no order; reopen and explicitly supply the purchase date; see the policy-conflict state; open support; retain retailer, visit date and reported purchase date in the draft. A typed `DEMO-<b>17</b>` reference was displayed literally as text. No claim was transmitted.
- Native dialog dismissed with Escape on mobile and desktop. Desktop recovery summary matched the selected visit.
- Pending ₹90 did not change confirmed balances or bank eligibility. Confirmed Flipkart cash changed cash from ₹180 to ₹270 and unlocked the example bank route. Confirmed Amazon Rewards changed Rewards from ₹80 to ₹170 while bank cash remained ₹180.
- The reviewed-policy reminder scenario required explicit opt-in, produced the fixed example deadline of 13 September 2026 for a 14 August purchase, and blocked a duplicate preview. The preview sent no external message or push-permission request.
- The expired-policy scenario exposed a support enquiry without promising late acceptance. An unavailable policy service disabled a new simulated click-out; the explicit restore control recovered it.

## Automated logic boundaries

Invalid calendar dates, future purchases and purchases preceding the visit are rejected. Unknown purchases do not produce a claim deadline. Unverified/conflicting policies fail closed. The illustrative day-30 boundary remains open on that date and expires the following day. Reminder suppression covers no order, unknown purchase, tracked/confirmed/declined states, missing consent, duplicate delivery, prepared draft, conflicting policy, early window and expiry. Pending amounts and gift-card Rewards cannot unlock cash-only bank redemption.

The production deployment is verified separately in the release record. These are prototype tests, not CashKaro integration tests or behavioural research.

## Evidence

- [24 layout measurements](https://github.com/anand-official/cashkaro_casestudy/blob/main/docs/qa/order-check-layout-qa.json)
- [Desktop case capture](https://github.com/anand-official/cashkaro_casestudy/blob/main/docs/qa/order-check-desktop-case.jpg)
- [Desktop receipt capture](https://github.com/anand-official/cashkaro_casestudy/blob/main/docs/qa/order-check-desktop-prototype.jpg)
- [Mobile Rewards capture with local harness visible](https://github.com/anand-official/cashkaro_casestudy/blob/main/docs/qa/order-check-mobile-prototype.jpg)

These captures are in the GitHub repository. They are not copied to the production website's public bundle. The local harness is excluded from both Git and deployment. Earlier `cashkaro-*` screenshots refer to the superseded Shortlist release.

## Limits

No physical phone, iOS Safari or screen reader test was performed. Responsive iframe checks do not emulate device keyboards, native share/deep-link behaviour or mobile browser chrome. No real merchant postbacks, CashKaro credentials, push delivery, affiliate tracking, support submissions, payouts or statistical treatment results were tested. Some browser geometry/cropped-capture operations timed out; the completed layout measurements used a visible instrumented local harness, and the saved mobile screenshot is an uncropped browser capture.
