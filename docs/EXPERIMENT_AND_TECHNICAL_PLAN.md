<section class="case-section" id="protocol">
<p class="section-label">01 / Causal protocol</p>

## Fix the population, the clock and the counting rule.

**Population:** accounts classified as existing before the measurement quarter begins, using CashKaro’s established definition and a frozen list. A proposed operational definition is registration before the quarter; validate it with the assignment owner before a real experiment. Retain all assigned accounts, including inactive users and zeros. Fraud/test-account exclusions must be defined before randomization and applied symmetrically.

**Assignment:** stable randomization by authenticated user, stratified by pre-period tracked-order count and prior use of the two launch merchants. The primary estimand is treatment minus control mean unique valid tracked orders per assigned existing user during one quarter. Count all categories, not just the two launch paths.

**Trigger:** first qualifying click intent on an audited retailer path, logged identically in both arms before any assignment-specific UI or notification. The first-click trigger cannot be affected by treatment because no earlier treatment has been shown. Any promotional exposure before that trigger would invalidate this argument. Subsequent clicks, receipt opens and reported purchases are outcomes/mediators, not eligibility filters.

**Control:** the actual existing CashKaro journey, including its normal emails and support. No feature is deliberately degraded. Treatment adds the connected receipt and any explicitly consented eligible service reminder. Unrelated campaigns should be balanced or recorded.

**Counting:** deduplicate with merchant + canonical order ID; do not count each item postback as a separate order. Count the order by purchase date in the quarter, not click date or claim resolution date. Preserve a first-seen event, attribution source, reversals and correction history. If a stable order ID or purchase date cannot be obtained, quantify missingness and resolve the definition before claiming a causal order effect; do not quietly drop differential missing records.

**Reporting:** first quarter result at Q-end +30 days; repeat at +90 for late arrivals. For an illustrative Q4 2026 experiment, these are 30 January and 31 March 2027. Show still-pending/right-censored records and the share with unknown shipment date. Use equal observation windows and backfill both arms. These are reporting cutoffs, not claims that all orders finalize within ninety days.

Report 95% confidence intervals, the pre-specified analysis and balance checks. Use the actual overdispersed count distribution to simulate power; a simple normal approximation below is only a sizing check. Decide sequential monitoring or fixed-horizon analysis before collecting results. Safety monitoring continues throughout.

**Secondary measures:** first-trigger-group ITT; clarity task completion; purchase reports per first-trigger user; later distinct valid purchases; recovered attribution; support enquiries and minutes; reversal rates; opt-out rate; redirect completion. Customer sentiment and feature engagement explain the mechanism but cannot substitute for the primary outcome.
</section>

<section class="case-section" id="retailer-test">
<p class="section-label">02 / Economic interpretation</p>

## Separate counted attribution, retained value and merchant demand.

A recovered legitimate affiliate order can improve CashKaro’s tracked-order metric. It does not demonstrate a new consumer purchase. Report the assigned-user effect for the index journey, recovered orders and later distinct purchases separately. These components should reconcile to the all-order result; do not add overlapping counts.

More routed orders also do not establish additional retailer sales across channels. To make that claim, the retailer would need an approved randomized holdout or comparable experiment with all-channel purchase outcomes and agreed attribution boundaries. CashKaro-only records cannot supply that denominator. The proposal does not assume a retailer will agree to this study.

A practical contribution check uses incremental retained commission after customer benefits, less variable support, messaging, infrastructure, reversals and recurring operations. Include changes in existing-order costs, not only the cost of new receipts. Initial engineering cost belongs in a separate payback calculation. Public commission percentages cannot stand in for CashKaro’s actual retained contribution.

Let c be incremental quarterly servicing cost per assigned existing user, and m retained contribution per incremental valid order before that service cost. Then the simplified break-even effect is **δ_min = c / m**, provided m is positive. If recovery and later orders have different economics, calculate them separately.

| Illustrative c | Illustrative m | Break-even orders / existing user |
| --- | --- | --- |
| ₹0.25 | ₹25 | 0.010 |
| ₹0.50 | ₹20 | 0.025 |
| ₹1.00 | ₹10 | 0.100 |

Every input is invented for sensitivity, not an estimate of CashKaro’s costs or earnings. Analytics and finance must replace them. Define the minimum worthwhile effect and acceptable uncertainty before looking at treatment results.
</section>

<section class="case-section" id="reach-model">
<p class="section-label">03 / Reach and power</p>

## Small local wins can vanish in the full cohort.

For an intervention with no effect outside an unaffected first-trigger group, cohort effect **δ = q × τ**, where q is that group’s share of the fixed cohort and τ is its average treatment effect. This translation assumes no spillovers or earlier treatment exposure. Estimate q in the shadow control trigger; do not use treatment-only adoption to create a causal subgroup.

The following comparisons deliberately use hypothetical inputs. They expose necessary steps, not forecast winners. Reach is the fraction of the entire existing-user cohort passing every listed step in a quarter; figures are not additive across options.

| Option | Illustrative calculation | Cohort effect, orders/user |
| --- | --- | --- |
| Order Check | 10% first-trigger reach × 0.10 order effect | 0.010 |
| Widget / quick access | 20% active installed reach × 0.05 effect | 0.010 |
| Desktop extension | 10% eligible desktop-user reach × 20% active installation × 0.25 effect | 0.005 |
| Overlay | 50% eligible Android reach × 10% special-access adoption × 50% approved route coverage × 0.20 effect | 0.005 |
| Share / deep link | 10% relevant late-remembering reach × 20% valid share completion × 0.20 effect | 0.004 |
| Shortlist | 3% discovery reach × 20% capture × 50% return × 0.30 effect | 0.0009 |
| Broad discovery assistant | 5% active discovery reach × 0.20 effect | 0.010 |

These inputs are intentionally uncalibrated. A plausible-looking multiplication is not evidence that any step will occur. The proposed decision uses evidence fit, distribution and dependency cost, while the table identifies what must be measured. A blind shopping reminder has no defensible intent-trigger estimate from click-outs alone and is excluded from a numerical forecast.

<div class="calculator"><strong>Explore the reach assumption</strong><p class="note">These fields begin with the Order Check illustration. Edit them; the result is arithmetic, not observed uplift.</p><label>First-trigger reach (% of fixed cohort)<input id="reach-share" type="number" min="0" max="100" step="0.1" value="10"></label><label>Extra orders per first-trigger user<input id="reach-effect" type="number" step="0.01" value="0.10"></label><output id="reach-result" aria-live="polite">Scenario result: 0.010 incremental tracked orders per existing user / quarter.</output></div>

For a two-sided 5% test with 80% power and equal allocation, the elementary mean-difference approximation is **n per arm ≈ 2 × (1.96 + 0.84)² × σ² / δ² = 15.68σ²/δ²**. No variance reduction or favourable covariance is assumed.

| Hypothetical reach q | Hypothetical τ | δ across cohort | σ, cohort order SD | Approx. full-cohort users per arm |
| --- | --- | --- | --- | --- |
| 10% | 0.10 | 0.010 | 1.5 | 352,800 |
| 25% | 0.10 | 0.025 | 1.5 | 56,448 |
| 10% | 0.10 | 0.010 | 3.0 | 1,411,200 |

A triggered analysis with τ = 0.10 and triggered σ = 1.5 would need about 3,528 triggered users per arm under the same approximation. At 10% reach, recruiting those 7,056 triggers requires about **70,560 assigned users overall**. A small triggered sample is not a small recruitment task. It also does not automatically power the unadjusted all-cohort primary result.

Use historical quarter-level order variance, covariates, feasible sample, actual q and economic δ_min to choose duration and power. If infeasible, report usability and operational findings as such; do not manufacture a cohort-growth conclusion from a small pilot.
</section>

<section class="case-section" id="architecture">
<p class="section-label">04 / System and operations</p>

## A thin experience on top of auditable records.

| Component | Proposed contract | What needs verifying or building |
| --- | --- | --- |
| Merchant policy registry | Merchant/path/category scope; effective dates; owner approval; claim clock; tracking clock; redemption type; expiry; source version | Operations must reconcile conflicting pages. Admin workflow and service may need to be built. |
| Visit receipt | Account + click ID + retailer + timestamp + approved route + policy version | Existing exit records and accessibility are unverified; receipt write can be asynchronous |
| User purchase report | Visit reference; explicit purchase date; source=user; optional shipment date with source=user | A report never becomes merchant-confirmed solely because a user entered it |
| Reconciliation adapter | Approved order/click identifiers; retailer acknowledgement; amounts; state changes; received time | Audit batch versus event feeds, ambiguous joins, duplicates, late corrections and multi-item orders |
| Next-action evaluator | Known state + applicable approved rule + required clock inputs | Suppress countdowns when a prerequisite, effective rule or shipment date is unknown |
| Existing support adapter | Context prefill; explicit reference and amount; submission idempotency; enquiry state | Verify support integration rather than inventing an API. Manual prefill is the first fallback. |
| Message coordinator | Existing notification history + consent + dedupe + daily cap + quiet hours | Reuse existing channel; no push on every click-out; no unapproved automated claim |

The prototype uses `assets/order-model.js` for deterministic date, eligibility and redemption logic and page memory for demo inputs. Production event names below are a proposed contract, not existing endpoints. No arbitrary retailer URL scraping, app surveillance, LLM or RAG is necessary for the chosen product.

**Event integrity:** consume merchant updates idempotently; retain raw-source reference and ordering metadata. A pending record may confirm or decline; a later authoritative reversal can revise an earlier confirmation. That correction is logged, not hidden. Support closure does not imply acceptance; display the retailer decision explicitly. An ambiguous one-to-many match remains unresolved and goes to operations/user clarification.

**Privacy and security:** authenticated, account-scoped access; encrypted order identifiers and retention aligned with CashKaro’s policy; role-controlled operations tooling; avoid order references in notification text and general analytics; allow reminder opt-out. Treat user-entered support text as data. Retention policy and legal basis need internal review, not an invented ninety-day mandate.

**Failure and performance:** return a last-checked timestamp for batch data; suppress unsupported timers; preserve a known good approved redirect when the new service fails. Proposed additional p95 receipt write budget: 100 ms off the redirect path; receipt-read target: 500 ms. If those targets would slow shopping, move the write fully asynchronous. These budgets have not been measured against CashKaro infrastructure.

**Effort:** start with a short engineering/operations discovery spike to inspect sample records and policy ownership. A narrow adapter-and-UI implementation is a medium effort only if those records are accessible; building attribution or support infrastructure makes it materially larger. Estimate after the spike with engineering, design, analytics and a named operations owner. Planning a small UI does not establish that the integration is small.

**If discovery is reopened:** a deterministic approved catalog/search and comparison flow comes before an agent. It needs licensed model identity, prices, eligibility and source timestamps; approved affiliate links; cache expiry and failure handling. RAG over reviews cannot establish current price or payout eligibility. Model/tool cost would be calls × actual provider rates plus retrieval and catalog operations, measured before launch. The rejected branch supplies no justified production latency or cost estimate, so it is not a ready-to-build alternative.
</section>

<section class="case-section" id="events">
<p class="section-label">05 / Proposed event contract</p>

## Observe the transition without pretending to observe the purchase.

| Event | Required meaning | Measurement use |
| --- | --- | --- |
| experiment_assigned | Frozen account, arm, version and pre-period strata | Fixed denominator |
| first_eligible_click_intent | Same audited route rule in both arms; before any treatment exposure | Valid first-trigger subgroup |
| redirect_completed / redirect_failed | Outcome of the existing affiliate handoff | Friction guardrail; not an order |
| receipt_created / receipt_opened | New view exists / viewed | Service reliability and engagement |
| purchase_reported / no_order_reported | User-supplied statement with provenance | Next-action eligibility; not attributed sales |
| merchant_order_observed | Approved source ID, canonical order ID, purchase date, received time | Primary outcome inputs |
| merchant_benefit_changed | Pending, confirmed, rejected or reversed; reason and source | Quality and economics |
| support_draft / enquiry_submitted / enquiry_resolved | Distinct stages; resolution includes accepted or declined | Recovery funnel and service cost |
| reminder_eligible / delivered / opted_out | Consent, rule version, dedupe and delivery result | Relevance, harm and fatigue |

Do not log the contents of order references in broad analytics. Use scoped identifiers with controlled access. Quantify missing joins, late feeds and inconsistent dates by arm. Schema validation and a sample reconciliation to the finance/support records precede causal reporting.
</section>

<section class="case-section" id="rollout">
<p class="section-label">06 / Gates and owners</p>

## Proposed decisions, not a fictional launch record.

| Stage | Owner | Pass / change / stop rule |
| --- | --- | --- |
| Baseline and problem check | Product + design | Observe the actual context-loss problem. Stop duplicate feature work if it already works; redirect if value/friction dominates reconstructed bypasses. |
| Comprehension | Design + product | Proposed 7/8 correctly distinguish visit/order, pending/redeemable and next action without coaching. Revise if below; do not call this a population estimate. |
| Policy and data | Operations + partnerships + engineering | All enabled paths have effective-dated policy approval, valid routing and audited joins. Any unresolved rule disables deadline automation for that path. |
| Safety ramp | Engineering + support | Proposed 1%, then 5% after seven incident-free days. Halt false payout claims, wrong deadlines, unauthorized messages or broken redirects. |
| Powered experiment | Analytics + finance + product | Pre-register δ_min, sample, duration and harm margin using actual data. If sample infeasible, keep a limited usability/operations result. |
| Expansion | Product + finance + operations | Require the lower 95% confidence bound to exceed the pre-specified economic minimum, acceptable reversal/support costs and evidence on later purchases. Hold if a proposed +1 pp redirect-abandonment harm cannot be ruled out with useful precision. |

The 1%/5% ramp, seven-day check and task threshold are proposed choices to calibrate, not observed results. Safety ramp percentages refer to eligible traffic, not a claim about adoption. A ramp cannot substitute for a full-quarter randomized test.

[Return to the case](../index.html#measurement) · [Assignment audit](../compliance.html) · [Response to independent review](../docs/REVIEW_RESPONSE.md)
</section>
