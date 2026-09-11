# CashKaro Order Check — reviewed product decision

Author: Ujjawal Anand. September 2026.

Canonical content: `content/case.md`. Rendered at `index.html`.

<section class="case-section" id="problem" data-part="problem">
<p class="section-label">01 / Problem framing</p>

## A previous transaction has to earn the next one.

**The decision: test CashKaro Order Check, a clearer connection between a retailer visit, an order’s status and the next appropriate action.** It belongs inside the existing earnings journey. The aim is to increase subsequent purchases routed through CashKaro by reducing unresolved uncertainty after an earlier visit.

The brief’s outcome is **tracked orders per existing user per quarter, on a fixed cohort**. A prettier ledger, a recovered ticket or a higher notification open rate is insufficient on its own. We need to establish whether this change produces more valid tracked orders across that unchanged population, then distinguish recovered attribution from additional future routed purchases.

Eligible purchases can bypass CashKaro for different reasons. Users may forget it, prefer the retailer app, value the reward too little, misunderstand eligibility, or distrust eventual payment. These explanations imply different products. A shortcut addresses effort. A larger benefit addresses value. An intelligible order history addresses uncertainty. Treating all three as a reminder problem would hide the choice.

<div class="thesis-box"><span>The working hypothesis</span><p>When the last reward is hard to understand, remembering CashKaro may still feel like a poor trade.</p></div>

This is a plausible mechanism, not an established cohort finding. I would fund a small validation of the existing journey before committing to a new acquisition surface or a discovery product.
</section>

<section class="case-section" id="evidence" data-part="problem">
<p class="section-label">02 / Evidence and its limits</p>

## The evidence supports investigating trust. It does not prove demand for Shortlist.

The inherited record describes **one respondent** who considered a ₹50–60 benefit unimportant, was roughly uncertain whether payment would arrive, and disliked leaving the retailer app. The original interview recording is unavailable here. These are leads for research, not percentages describing CashKaro users. There is no direct observation of scattered headphone research causing bypass. [Evidence provenance](../research.html#qualitative).

The product audit also changes the proposed solution. CashKaro already documents click-out history, pending and confirmed earnings, acknowledgement emails and missing-cashback enquiries. Therefore, “add tracking notifications” is not a sufficient product decision. The question is whether users can connect those existing parts and identify the next useful action. A logged-in audit remains necessary. [Existing-feature audit](../research.html#existing).

There is a concrete information-quality problem: the current Amazon and Flipkart store terms describe 30-day missing-order reporting, while general help describes 10 days. Amazon’s tracking clock starts after shipment, which a click-out does not reveal. This makes a universal “didn’t track—report within ten days” message unreliable. [Dated policy comparison](../research.html#commercial).

These findings justify an experiment in comprehension and recovery. They do not establish prevalence, that better explanations restore trust, or that trust outweighs small rewards. The strongest disconfirming result would be users already understanding their status while consistently bypassing because the financial value is too low.
</section>

<section class="case-section" id="blind-spot" data-part="problem">
<p class="section-label">03 / Business and measurement</p>

## We see the routed orders. We do not see the missed denominator.

CashKaro’s affiliate records can show a user’s click-outs and attributed orders. They do not expose every eligible purchase made directly in retailer apps. Consequently, declining CashKaro frequency cannot by itself distinguish less shopping, more bypass, poor tracking or a changing category mix.

<div class="denominator"><div><span>Observed or auditable internally</span><strong>Click-outs, attributed orders, benefit states and support events</strong></div><div><span>Missing without additional research</span><strong>All eligible purchases and why the user chose each route</strong></div></div>

Use purchase-reconstruction interviews to investigate the mechanism and internal records to size the eligible population. A consented diary can estimate bypass in its research sample, with recall and selection limitations. Do not claim that a click-out-to-order conversion ratio measures CashKaro’s share of someone’s total shopping.

Three economic quantities also differ: merchant sales, CashKaro-attributed orders and CashKaro contribution after rewards and servicing. A valid recovered order may raise the assignment’s metric while leaving merchant demand unchanged. Additional future routing may redirect a sale that the retailer would already have won. Neither is automatically incremental retailer revenue.

Report recovered orders and later purchases separately. Cost support time, messaging, reversals and integration upkeep against retained commission from incremental valid orders. Partnerships must confirm the applicable attribution and enquiry rules; public consumer terms cannot establish a private commercial agreement.
</section>

<section class="case-section" id="segment" data-part="problem">
<p class="section-label">04 / Who to test first</p>

## Start with existing users who still give CashKaro a chance.

The first exposure is an existing user’s first qualifying click intent to one of two audited retailer paths during the experiment. That signal is visible before the new experience appears. Within this group, examine users with a past tracked transaction and infrequent recent routing, defined entirely using the pre-experiment period. This is an analysis stratum, not a claim that every infrequent user distrusts cashback.

Pilot Amazon and Flipkart because their public rules expose two useful distinctions: cash versus restricted Rewards, and order-date versus shipment-related information. Apply the receipt across **eligible categories** on the audited paths. Do not equate “all categories” with every item earning a reward. A customer-facing launch requires current eligibility and policy checks for each path.

This selection gives the intervention a credible entry point: the person is already using CashKaro and needs clarity about this visit. It avoids betting the order-count outcome on a rare headphone purchase. The app’s current store page introduces the key rule; My Earnings holds the receipt; the return session invites the purchase check.

**The reach limitation is real:** someone who never returns or clicks out cannot benefit in this first experiment. We are testing retention after observed intent, not solving all forgotten purchases. Estimate that reach before staffing the build. If uncertainty is uncommon or the addressable group too small, prioritize the friction or value problem found in purchase histories instead.
</section>

<section class="case-section" id="alternatives" data-part="problem">
<p class="section-label">05 / Alternatives and trade-offs</p>

## Choose the smallest bet that can test the observed barrier.

| Option | What it addresses | Impact constraint | Effort and principal risk | Decision |
| --- | --- | --- | --- | --- |
| Quick access / widget | Remembered intent, too many entry steps | Requires installation and a shopping occasion | Low–medium; opens can rise while orders stall | Next candidate if friction dominates; track valid orders and click-out abandonment |
| Desktop extension | Eligible retailer intent outside CashKaro | Desktop shopping share × install × approved coverage | Medium–high; permissions, mapping freshness, affiliate compliance | Defer pending actual cohort reach |
| Android retailer overlay | Late retailer-app intent | Permission acceptance and supported paths | High; sensitive access, distraction and attribution restrictions | Reject as lead; commercial benefit is unproven |
| Predictive shopping push | Forgetfulness before a purchase | Click-outs do not reveal the next off-platform purchase | Medium; mistimed messages and fatigue | Reject blind triggers |
| Share / deep link | Remembering after finding a product | Requires explicit user action; carts may be ineligible | Medium–high; identity, app routing and attribution | Retain as a separate friction experiment |
| Shortlist / discovery agent | A useful reason to start research here | Discovery reach × capture × return, with weak evidence | High; catalog rights, freshness, distribution and another habit | Withdraw Shortlist as lead |
| Order Check | Uncertainty after observed intent | Current clickers only; repeat behaviour unproven | Medium if existing records are reusable; rule conflicts and support cost | First validation bet |

For scale intuition, consider **invented inputs used only for sensitivity**, not forecasts: reaching 10% of existing users and adding 0.10 orders per reached user gives 0.010 orders per cohort user. A shortlist reaching 3%, with 20% capture, 50% return and 0.30 extra orders per returning saver gives 0.0009. Change the assumptions and the ranking changes. The [full model](../experiment.html#reach-model) includes the other options and makes those dependencies visible.

The choice rests on closer evidence fit and fewer new dependencies, not a made-up impact score.
</section>

<section class="case-section" id="decision" data-part="problem">
<p class="section-label">06 / Product judgment</p>

## Keep the handoff clarity. Drop the discovery thesis.

The previous concept moved from an Android overlay to a headphone Shortlist after external product feedback challenged retailer economics. An independent review then exposed a second mistake: moving earlier in the journey is not automatically valuable if the evidence does not show a discovery problem or a way to reach it.

Google’s Universal Cart offers a useful principle—preserve shopping context across discovery and purchase—but Google owns major intent surfaces. Its May 2026 announcement describes a U.S. rollout beginning with Search and Gemini. Its Cart API transfers carts into a merchant system; it is not a ready-made affiliate integration for CashKaro. This is also a competitive warning for a small, undifferentiated shortlist. [Primary-source analysis](../research.html#google).

**Order Check preserves the strongest part of the earlier work:** explain benefit type, eligibility and tracking state honestly. It drops the unsupported headphone-demand thesis, product-price ranking, saved-link parser and dependence on new discovery distribution. It also rejects a literal reading of the reviewer’s replacement: another tracked email is redundant, and a missing event is not evidence of a failed purchase.

This is a conditional product recommendation. First inspect the authenticated baseline and observe real users reconstructing recent purchases. If CashKaro already connects these steps well, improve the observed defect instead of creating a second ledger. If uncertainty does not change routing, stop this bet. The full [review response](../docs/REVIEW_RESPONSE.md) records which criticisms were accepted and which needed correction.
</section>

<section class="case-section" id="experience" data-part="solution">
<p class="section-label">07 / The experience</p>

## A receipt with a useful next step, even when the answer is unknown.

<a class="button primary" href="../prototype.html">Explore Order Check ↗</a>

1. **Before the visit:** put the relevant eligibility warning beside the existing retailer action, with the full terms available. Show the benefit type and tracking expectation. Avoid an extra compulsory modal on every click-out.
2. **Save the visit:** keep retailer, timestamp, approved route and policy version in a receipt under My Earnings. A successful click-out creates a visit record, not an order or a promise of payment.
3. **On return:** ask whether the shopper ordered. “No order” closes recovery for that visit; “later” leaves it unknown. “Yes” asks for the actual purchase date, which remains distinct from the click-out date.
4. **Explain the state:** an acknowledged order becomes pending; confirmation makes the benefit redeemable under its payment rules; a rejection shows the reason and support path. Silence remains “no update,” with timing based on the applicable rule.
5. **Connect recovery:** prefill known visit context into the existing missing-cashback flow. Request the order reference and amount explicitly. A prepared draft, submitted enquiry and retailer decision remain different states.

The prototype demonstrates these steps with fictional account values and two merchant types. Scenario controls load independent examples, including policy failure and late reporting. No real purchase, notification, support request or affiliate activation occurs.
</section>

<section class="case-section" id="scope" data-part="solution">
<p class="section-label">08 / MVP boundaries</p>

## Improve the existing loop before expanding it.

Ship the receipt, saved policy reference, explicit purchase check, status explanation and support continuity for the two audited paths. Keep the existing earnings ledger as the source of truth. Reuse existing tracking acknowledgements rather than adding another “tracked” message.

Add an optional service reminder only after a user reports a purchase, the applicable claim policy is verified, the action window is approaching and no corresponding tracked order or enquiry already exists. The proposed cap is one reminder per visit and one actionable reminder per account per day, with deduplication, quiet hours and an off switch. An unknown purchase, conflicting deadline or missing shipment event cannot become a “tracking failed” alert.

Wallet progress separates confirmed cash available for bank transfer from combined cash and Rewards available for gift-card redemption. Pending balances do not help reach the minimum. Show the available redemption route without encouraging another purchase simply to cross a threshold. [Redemption source](https://cashkaro.com/how-it-works).

Defer more merchants, localization and account-wide reminder optimization until the first loop proves useful. Do not build an overlay, catalog, checkout, cart importer, shopping agent, automatic claim generator or a new ledger. The prototype uses deterministic rules; there is no reason to put an LLM in a payout-state decision.

These boundaries reduce build scope, but still require operations ownership and reliable joins between visits, orders and enquiries.
</section>

<section class="case-section" id="feasibility" data-part="solution">
<p class="section-label">09 / Feasibility and failure behaviour</p>

## Use real internal records. Treat every missing capability as work.

<div class="architecture"><div><small>01 / Approved configuration</small><strong>Versioned merchant rules</strong><p>Scope, effective dates, tracking clock, claim window and responsible owner.</p></div><div><small>02 / Existing records</small><strong>Visits, orders and enquiries</strong><p>Authenticated identity and deterministic, auditable matching.</p></div><div><small>03 / Customer experience</small><strong>Receipt and next action</strong><p>Known state, supplied context and a clear fallback when policy is uncertain.</p></div></div>

Public help establishes that some records exist; it does not establish a convenient API or event stream. First inspect schemas, identifiers, latency and support integration with engineering and operations. Where only batch reports exist, show “last checked” and use scheduled reconciliation. Do not present batch data as live.

Capture the policy version at click-out. Match merchant callbacks through approved click and order identifiers; deduplicate item-level reports into orders. Keep user-reported purchases separate until a reliable match is available. A date and retailer alone can match several orders, so ambiguity needs an explicit resolution path.

The rule service must represent conflicts, expiry and unavailable data. Public 10-versus-30-day guidance currently blocks automated deadlines until operations resolves the applicable version. An unavailable new receipt service should fall back to CashKaro’s existing approved shopping flow; it should not break shopping or invent eligibility. The prototype disables its own simulated action to make that boundary visible.

Proposed budgets are an additional 100 ms at p95 for receipt creation off the redirect’s critical path and a 500 ms p95 receipt read. They are design targets, not measured production performance. The [technical plan](../experiment.html#architecture) covers ownership, security, events and costs.
</section>

<section class="case-section" id="measurement" data-part="solution">
<p class="section-label">10 / Measurement</p>

## A clearer status matters only if the fixed-cohort outcome moves.

<div class="metric-panel"><span>Primary outcome</span><strong>Unique valid tracked orders placed in the quarter ÷ users in the original existing-user cohort</strong><p>Randomize by user. Retain inactive users and zeros. Count all categories and deduplicate multi-item order reports.</p></div>

Freeze the cohort before the quarter and assign treatment or the existing experience. Log an identical first qualifying click-intent trigger in both arms, before exposing treatment. Report intention-to-treat results for everyone assigned. A secondary analysis among that first-trigger group tests the mechanism; selecting treatment-only receipt openers or later repeat clickers would bias the comparison.

Decompose the outcome into initial journey orders, recovered attribution and subsequent distinct purchases. Report confirmed and reversed orders alongside tracked counts. A recovery-only effect must be described as improved attribution, not a new shopping habit or incremental retailer demand.

For a proposed reporting schedule, publish the quarter outcome at quarter-end +30 days and a late-arrival sensitivity at +90. Retain still-pending orders as explicitly immature; some shipment and confirmation clocks can extend beyond either cutoff. Use the same window in both arms and backfill by purchase date, not the day a ticket was resolved.

Power is a launch decision. Under purely illustrative assumptions of 1.5-order standard deviation and a 0.010-order cohort effect, a simple two-arm calculation needs roughly 353,000 users per arm. That is a warning against promising a quick causal win. Use real variance, reach, budget and an economic minimum before committing to sample size. [Protocol and sensitivity](../experiment.html#protocol).
</section>

<section class="case-section" id="launch" data-part="solution">
<p class="section-label">11 / Launch and activation</p>

## Launch at a moment that already exists.

Begin with an authenticated walkthrough of store eligibility, click-out, return, earnings, missing-cashback and existing email/push behaviour on Android and web. Record where users lose context. Pair it with five to eight proposed “last three purchases” conversations, sampling both repeat users and infrequent past transactors. These interviews have not been conducted; the [worksheet](../docs/RESEARCH_WORKSHEET.md) records the research needed.

In the concept test, alternate the order of the existing and proposed flows. Ask users to explain whether an order is known, whether the displayed benefit can be withdrawn, and what they would do next. Test people who did not buy and people whose order has not shipped, not just successful tracking.

If there is an observed improvement worth testing, run an internal dogfood with synthetic accounts, then a proposed 1% traffic safety ramp on the audited paths. Expand to 5% after seven days without a critical state or policy error. These are proposed operational stages, not a powered experiment or forecasts of adoption.

Discovery is the existing store page and My Earnings. Activation is understanding the saved visit and, where relevant, completing a purchase check. Keep the underlying affiliate route unchanged unless separately approved. Acquisition marketing waits: this first bet concerns existing-user retention. Proceed to a quarter-long randomized test only when internal power and economics calculations justify the available sample.
</section>

<section class="case-section" id="gates" data-part="solution">
<p class="section-label">12 / Scale, change or stop</p>

## Set the decision before seeing the result.

**Before a customer pilot:** resolve every active merchant policy conflict and confirm the existing-flow gap. As a proposed comprehension gate, at least seven of eight task-test participants should correctly distinguish a visit from an order, pending from redeemable value, and the next valid step without coaching. This detects obvious problems; eight participants cannot establish population reliability.

**Halt immediately** for a systematic false payout or failed-tracking assertion, an incorrect deadline, a notification without the required consent, or broken affiliate routing. Investigate every such incident before ramping. Use a proposed one-percentage-point maximum deterioration in click-intent-to-redirect completion as a harm margin; if the experiment cannot rule out that harm with useful precision, hold expansion.

**Scale** only if the lower 95% confidence bound for the all-cohort order effect exceeds a pre-specified economic minimum, the benefit survives reversal and support-cost checks, and later-purchase behaviour supports the retention mechanism. For arithmetic only, ₹0.25 incremental service cost per cohort user and ₹25 retained contribution per incremental valid order imply a break-even effect of 0.010 orders. Replace both with real marginal costs before making the decision.

**Change** if users understand the receipt but rarely need it, or support preparation adds friction. **Stop** if the authenticated baseline already solves the problem, interviews point primarily to reward value, the reachable effect cannot justify cost, or a sufficiently powered result rules out the required benefit.

The implementation is reviewable. Submission compliance still needs the candidate’s complete raw AI interactions and deadline confirmation. Those gaps remain visible in the [brief audit](../compliance.html).
</section>
