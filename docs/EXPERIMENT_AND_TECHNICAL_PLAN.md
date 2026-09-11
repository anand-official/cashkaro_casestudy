<section class="case-section" id="protocol">
<p class="section-label">Experiment protocol / proposed</p>

## Test the availability of Shortlist, not the enthusiasm of its adopters.

**Population:** freeze all eligible existing accounts at experiment start using an agreed existing-user definition. Exclude only predeclared operational restrictions such as test/fraud accounts; do not remove users for failing to open or save. Record coverage limitations. Define historical-category or declared-intent subgroups before exposure and keep the all-cohort result primary.

**Unit:** stable user/account ID across devices. Randomize 1:1, stratified by pre-period order frequency and platform when reliable. Treatment receives availability plus an owned-surface invitation. Control keeps the current experience, including current comparison features. No extra blanket reward subsidy or unequal CRM pressure.

**Primary:** sum of unique tracked orders placed in the experiment quarter divided by the fixed assigned users, treatment minus control. Count all categories. Use the company's authoritative order grain; where networks report item lines, normalize consistently and do not count one split shipment as multiple orders. Keep both arms' tracking windows equal and allow the same reporting lag after quarter end.

**Analysis:** intention to treat. Report absolute order difference per user, confidence interval and percentage change only if the control baseline supports interpretation. Pre-register a two-sided 5% error rate and 80% power as proposed statistical choices, then calculate sample size from internal user-level variance and the economic minimum effect. Consider pre-period covariate adjustment if it is specified in advance. Do not invent a sample size without those inputs.

For an approximate equal-arm planning calculation, users per arm ≈ 2 × (z(0.975) + z(0.8))² × user-level order variance ÷ minimum effect². Validate assumptions with the actual zero-inflated order distribution or resampling. This formula is a planning tool, not an achieved power claim.

**Before launch:** verify A/A assignment, deduplication, logging completeness, sample-ratio mismatch and cross-device assignment. Disable experiment-triggered discounts in both arms. Lock analysis and stop criteria before looking at the outcome.

**Interpretation:** a wide interval crossing meaningful benefit and harm is inconclusive. A null estimate after adequate power is not redeemed by save-rate growth. A positive category effect accompanied by negative all-category effect suggests substitution. Attrition remains in the denominator; consent withdrawals follow the predeclared lawful data policy, with sensitivity analysis if records must be removed.
</section>

<section class="case-section" id="retailer-test">
<p class="section-label">Separate commercial question</p>

## Retailer influence cannot be proved with affiliate tags alone.

Capture an optional intended merchant before comparison to understand possible switching. Changes are self-reported diagnostics and can be biased. They are not a counterfactual.

For a partner willing to participate, design a randomized encouragement or availability test across a consented audience whose **total retailer purchases across channels** the retailer can observe. Compare total orders and retailer contribution, including affiliate costs, using a lawful measurement mechanism and pre-agreed matching/aggregation. Confirm balance, contamination and off-platform visibility. CashKaro's tracked-order events alone cannot run this test.

If partner data or agreement is unavailable, report retailer incrementality as unresolved, limit investment and do not represent partnership acceptance as evidence of causal lift. Choice switching may be commercially valuable to a selected merchant without increasing total category demand; neither is interchangeable with CashKaro attribution growth.
</section>

<section class="case-section" id="reach-model">
<p class="section-label">Reach and economics</p>

## A useful feature can still be too small.

For a predeclared eligible subgroup, the no-spillover decomposition is **overall Δ orders/user = eligible share × subgroup Δ orders/user**. The subgroup effect must include non-adoption; multiplying by adoption again would double-count dilution. Where treatment spills into other categories or users, use the measured all-cohort ITT instead of this simplification.

<div class="calculator" id="reach-calculator"><p class="note">Planning calculator · starts blank · user-entered assumptions, not CashKaro data</p><label>Eligible share of fixed cohort (%)<input id="reach-share" type="number" min="0" max="100" step="any" inputmode="decimal" placeholder="Enter an assumption"></label><label>Incremental orders per eligible user / quarter<input id="reach-effect" type="number" step="any" inputmode="decimal" placeholder="Enter an assumption"></label><output id="reach-result" aria-live="polite">Enter both assumptions to calculate the all-cohort effect.</output></div>

**Economics:** compare treatment and control net contribution, where net contribution equals collected commission less cashback/Rewards cost, reversals and incremental data/support/operating costs. Confirm with Finance whether a reported commission field is gross or already net; never subtract rewards twice. Keep one-time build cost separately in the investment decision. Use the merchant's margin and commission costs for its business case.

**Minimum effect:** Finance and Product set the smallest quarterly effect worth rollout at expected reachable population and fully loaded servicing cost. Require the pre-agreed uncertainty bound and healthy guardrails, not merely a positive point estimate. No numerical commercial hurdle is asserted without these inputs.
</section>

<section class="case-section" id="architecture">
<p class="section-label">Proposed architecture</p>

## An auditable registry beats a confident guess.

| Component | Responsibility | Source and missing dependency |
| --- | --- | --- |
| Share receiver / paste UI | Receive explicit text or URL; let user confirm model | Android ACTION_SEND is documented; native integration must be built and tested |
| Identity resolver | Map allowlisted known source/model aliases; ask when ambiguous | Manually verified model + variant IDs; no arbitrary video understanding |
| Product registry | Model, color/variant, attributes, source URL, checked_at | Manufacturer/approved data; rights and update ownership reviewed |
| Merchant offer registry | Seller, price, shipping-known flag, eligibility, reward type, cap, timestamp | Audit existing CashKaro services; negotiate feed rights where missing |
| Eligibility service | Revalidate current terms; distinguish excluded, stale and unknown | Versioned partner rules, explicit domain/path mapping, owner and expiry |
| Handoff service | Generate approved click-out and preserve user/model/merchant identifiers | Existing path only after partner validation; never promise cart preservation |
| Attribution reconciliation | Join signed network events to click IDs; idempotent state transitions | Real network callbacks, deduplication rules and reversal handling |
| Account shortlist | User's saved sources/notes and deletion | New persistence or audited existing service; demo is browser-local only |

[Android receiving documentation](https://developer.android.com/develop/ui/compose/sharing/receive) supports user-initiated text sharing. A share target does not reveal browsing history or grant content scraping rights. Browser Web Share sends from a page; it does not install the native receiving capability shown in this proposal.

**Price arithmetic:** payable amount includes validated shipping/taxes and explicitly applicable discounts. Conditional benefit = minimum of eligible base × rate and cap, applying exclusions and reward type. An effective comparison may subtract a benefit only when the shopper accepts its type and conditions. Unknown shipping/stacking/eligibility makes an exact effective-price claim unavailable. The prototype reproduces sourced displayed estimates instead of claiming to compute the user's entitlement.

**Update policy:** the registry stores source, exact product variant, merchant, category rule version and checked-at timestamp. Recheck before redirect. Cache expiry follows each data source's agreement and volatility; do not invent a universal freshness interval. Disable only the affected offer when stale; keep the research item. A missing feed must not trigger silent substitution or scraped prices.

**Budgets proposed for the engineering spike:** p95 cached comparison under two seconds; recheck times out at five seconds with an honest retry. No LLM request occurs, so LLM cost/query is ₹0. Measure actual database, network, catalog labor, support and hosting cost per useful session. No RAG, tool-calling agent or vector database is justified for this small catalog.

**Security:** validate scheme and host, canonicalize URL, cap input lengths, strip tracking parameters from stored research links and render notes as text. If server-side retrieval is later added, block private/link-local targets, revalidate redirects and DNS, enforce response size/time limits and require approved content access. No background clipboard, Accessibility, Usage Access or overlay permission.
</section>

<section class="case-section" id="events">
<p class="section-label">Instrumentation contract</p>

## State names should tell the truth.

| Event / state | Minimum useful payload | Interpretation |
| --- | --- | --- |
| experiment_assigned | Pseudonymous user ID, arm, cohort_version, timestamp | Source of the fixed denominator |
| shortlist_invitation_seen | Assignment, surface | Exposure diagnostic |
| capture_submitted / identity_confirmed | Source domain, resolved model, ambiguity outcome | User supplied context; no browsing surveillance |
| item_saved / shortlist_returned | Item ID, timestamp | Research continuity diagnostic |
| offer_comparison_viewed | Offer IDs, registry versions | What the user actually saw |
| handoff_requested / clickout_recorded | Click ID, model/variant, merchant, terms version | User intent / successful redirect generation; no order claim |
| order_tracked | Network event ID, normalized order ID, click ID, event time | Retailer/network reported a purchase |
| order_confirmed / reversed | Order ID, final amount, reason, event time | Downstream quality and economics |
| missing_cashback_requested | Order reference submitted with consent, eligible time window | Support state; not proof of a purchase CashKaro can already see |

The public demo records none of these to a server. Its “simulate tracking update” control demonstrates a state machine, not a real order or cashback award.
</section>

<section class="case-section" id="rollout">
<p class="section-label">Rollout gates and owners</p>

## Remove uncertainty in the order that could kill the idea.

1. **Partnerships + Engineering:** confirm two usable merchant paths, category rules, data rights and attribution behavior. Stop if unavailable; do not build a universal feed first.
2. **Product Research + Catalog:** conduct the initial eight task sessions and manually verify up to 20 models. Fix comprehension and identity errors before acquiring traffic.
3. **Analytics:** run A/A checks, baseline power and a full-quarter randomized plan. An operational beta sized to review capacity cannot substitute for the causal test.
4. **Product + Support:** monitor wrong-model/offer incidents, abandonment, opt-outs, missing-cashback reports and update latency. Severe privacy issues or systematic financial misinformation pause immediately.
5. **Finance + Partnerships:** evaluate all-cohort effect, incremental contribution and retailer evidence. Scale only when the complete case holds; expand categories one at a time.

No launch date, staffing commitment, partner deal, adoption rate or uplift is asserted. These are proposed responsibilities and gates for CashKaro's team.
</section>
