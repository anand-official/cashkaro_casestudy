# Product decision history

AI-assisted authored reconstruction, updated 13 September 2026. Not a verbatim transcript or a statement that every decision was personally authored by the candidate.

| Stage | Proposal | Challenge | Decision |
| --- | --- | --- | --- |
| 1 | Predictive/contextual shopping reminders | CashKaro cannot observe all direct purchases; click-outs are incomplete intent | Reject as lead; preserve missing-denominator insight |
| 2 | Android retailer-app overlay | Permission cost, interruption, app-open ambiguity and retailer attribution recapture | Reject as lead; preserve contextual entry and ITT offer randomization |
| 3 | Move upstream into consideration | Mentor argued economic value requires useful shopping influence | Treat as a strategic challenge, not customer validation |
| 4 | Headphone Shortlist / owned discovery | Claude review of f482fb6 found weak diagnosis, frequency, distribution and continuity | Reject; keep benefit-type honesty and evidence discipline |
| 5 | Order Check | Current earnings/recovery already exist; uncertain incremental UX and indirect growth mechanism | Supersede the implementation at f9c0d64 |
| 6 | ChatGPT-specific purchase router | Candidate-supplied summary of an independent critique challenged invocation, reach and commercial acceptance | Drop guaranteed automatic routing and single-host framing |
| 7 | Universal Shopping Skill | A universal backend still cannot guarantee host placement, partner approval or merchant incrementality | Choose bounded strategic proposal with platform adapters, shared router, Share second surface and explicit kill gates |

The candidate's latest mandate explicitly selected the ambitious universal direction for a product-strategy assignment. This revision did not independently validate demand. It makes the architecture, trade-offs and stop decisions reviewable.

## Corrections that changed the delivered product

- The ₹1,200 phone example is a fictional offer fixture, not a current Flipkart rate.
- Product recommendation and merchant choice precede CashKaro. No commission-ranked alternatives.
- Pay-today and potential benefit are separate. Rewards are not bank cash or an immediate discount.
- “Connect once” applies to a supported account/platform relationship, not universal automatic login.
- Contextual surfacing is demonstrated as the desired host behavior; explicit invocation is a separately selectable mode.
- The quote and route are revalidated; carted items, stale policy, zero benefit, missing context and prohibited reattribution fail closed.
- A route is not a tracked order or a confirmed reward.
- Raw copied sessions received privately are acknowledged accurately; no reconstruction is passed off as a full export.

See [review response](REVIEW_RESPONSE.md), [skeptical review](SKEPTICAL_REVIEW.md), [interview defense](INTERVIEW_DEFENSE.md) and [manifest](../transcripts/README.md).

## 13 September, refinement after external feedback

Strategy frozen. Added the documented Telegram routing precedent and narrowed destination dependence to the mainstream journey. Redesigned the prototype around a neutral conversation with review-only configuration. No change to north star or experiment. The full newer Claude file could not be located; the supplied critique summary remains labelled as such.

## 13 September 2026: assignment alignment and product-led presentation

The user requested a formal product-management narrative and more interactive prototype. This revision retains the strategy and experiment. It makes the relationship to the brief explicit: the original bypass problem is unchanged; Share/deep-link routing and contextual assistance are foundations; owning discovery is rejected. The investment recommendation is a bounded validation effort with conditional expansion.

The host prototype now responds to budget and priority choices, exposes product trade-offs and permits reconsideration. These are deterministic fictional research interactions, separate from CashKaro benefit logic. They do not introduce a CashKaro recommender or live AI service. This is an authored execution note, not a verbatim transcript.

## 13 September 2026: 15-section core and guided phone walkthrough

The candidate reported a mentor's maximum of 15 slide-equivalent sections and requested more visual explanation. The main case was condensed from 20 long-form sections to 15 visual sections, retaining the original problem, assessment of all five suggested directions, metric, evidence limitations, commercial concerns and validation gates. Detailed supporting pages remain available.

The candidate also cited https://developers.google.com/merchant/ucp as the desired demo presentation. Its animated phone journey informed an original six-chapter CashKaro walkthrough with playback and chapter controls. The Google animation is not reused; CashKaro continues to hand off to retailer checkout. The full interactive prototype is retained as a second mode. This is an authored execution note, not a raw AI transcript.

## 13 September 2026: connector framing, device prototype and an expanded test matrix

**Renamed from Universal Shopping Skill to CashKaro Connector.** A "skill" implies something built per host and shipped into someone else's app. A connector is the pattern assistants already use for Gmail, Drive and calendars: the user authorises an account once, and any supported assistant calls it when the task needs it. The mechanism did not change. The framing now matches how the capability is actually distributed and reviewed, and it makes the ask of a platform smaller and more familiar. Earlier names remain in Git history and in the archived documents.

**Expanded the prototype from nine scenarios to sixteen**, grouped by what each one tests: benefit outcomes, eligibility refusals, attribution limits, service failures and revalidation. The additions are drawn from how affiliate cashback actually breaks rather than from generic error handling.

| Scenario | Stops at | Why it exists |
| --- | --- | --- |
| Third-party coupon applied | Eligibility check | Outside coupons commonly void affiliate commission. Showing a benefit we would not be paid is worse than showing none. |
| Cash on delivery excluded | Eligibility check | Prepaid-only policies are ordinary; the payment method changes eligibility. |
| New-customer-only benefit | Eligibility check | Headline rates are frequently restricted to a retailer's new customers, which an existing CashKaro user often is not. |
| Connector unreachable | Eligibility check | The service can be down. The purchase must survive that. |
| Authorisation expired | Route creation | A stored connector token expires; the recovery is reconnect, not silent failure. |
| Benefit reduced at revalidation | Route creation | The rate can drop between the check and the route. The lower number requires fresh consent. |
| Retailer price changed | Route creation | A route must never be created against a stale price. |

Eleven of the sixteen scenarios refuse. `scripts/check.mjs` now asserts that every scenario stops exactly where its fixture declares, so a refusal cannot silently become a success.

**Rebuilt the walkthrough as a device experience.** The journey now starts on a phone home screen with the assistant unopened, because the first honest fact about this product is that the journey does not start with CashKaro. Connection is presented as a system-style sheet, the handoff is an app switch, and the route confirmation arrives as a notification. A narration panel states what is happening and why at each of seven chapters. The states, rules and refusals are unchanged; only the presentation is new.

**Rejected: wiring a live Gemini API key into the prototype.** Three reasons. It would misrepresent the architecture, because in the real product the model belongs to the host and CashKaro supplies the tool the host calls; a key in a public static site is readable by anyone; and a non-deterministic demo cannot make the guarantee this prototype exists to make, which is that the same input always produces the same refusal. The brief also states it is not looking for an AI chat box. If a live model is wanted later, it belongs in a separate labelled sandbox behind a server-side proxy, not in the submission artifact.
