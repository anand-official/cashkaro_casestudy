# CashKaro APM Case Study — Pre-Submission Review

**Owner:** Ujjawal Anand  
**Live production build:** https://cashkaro-ujjawal-anands-projects.vercel.app  
**Status:** Product direction locked; submission in final QA.

## Executive review

The submission should be judged as a **product decision**, not an overlay mockup.

The argument is:

1. The assignment optimizes **tracked orders per existing user per quarter on a fixed cohort**.
2. “Users forget CashKaro” is plausible but incomplete.
3. CashKaro has a **missing denominator**: routed-order history does not reveal the full set of direct retailer shopping journeys.
4. Therefore, predicting the next shopping moment from routed history can be accurate for the wrong users.
5. The stronger intervention point is an **observed retailer shopping context**.
6. The desktop-extension pattern is behaviorally strong because it appears after shopping begins, but it is incomplete for retailer-app journeys.
7. The chosen hypothesis is an **Android-first Shopping Companion**: retailer-aware, explicitly opt-in, explicitly activated per session, and intentionally not product-aware in V1.
8. The product must be validated through a **randomized offer / intention-to-treat experiment**, not a comparison of voluntary adopters.
9. The solution should scale only if permission adoption, partner economics, causal lift and cohort-level reach all survive.

## The four claims the reviewer should remember

> **Do not predict when shopping might happen. Make CashKaro available when shopping context already exists.**

> **CashKaro does not need to become the shopping destination. It can become the savings layer around destinations users already choose.**

> **Earn the right to be present once. Earn the right to participate every time.**

> **Build the experiment, not the fantasy.**

## Submission fidelity audit

### Problem-space requirements

- [x] Problem reframed rather than accepted at face value.
- [x] North star kept exactly aligned to the brief.
- [x] User evidence separated from population-level claims.
- [x] Missing-denominator limitation made explicit.
- [x] Multiple behavioral hypotheses considered.
- [x] Alternative solution directions evaluated and rejected/prioritized.
- [x] Assumptions and internal-data dependencies identified.

### Solution-space requirements

- [x] One lead product direction selected.
- [x] End-to-end experience defined.
- [x] V1 vs later scope clearly separated.
- [x] High-level technical feasibility addressed.
- [x] Permission/privacy boundary explicit.
- [x] Measurement ladders to the assignment north star.
- [x] GTM / first cohort defined.
- [x] Scale / iterate / kill logic defined.
- [x] Interactive prototype demonstrates the causal mechanism.

## Claims that must not appear as facts

- A specific leakage percentage.
- A specific expected uplift before a powered experiment.
- “Retailer app open = purchase intent.”
- “Overlay permission lets CashKaro see product/cart/price.”
- “Zero context switching.”
- “Amazon/Flipkart allow this exact mechanism” without CashKaro partner confirmation.
- “More CashKaro attribution automatically creates retailer incrementality.”
- “Indian users will grant the permission because they are price-sensitive.”

## Prototype QA

The prototype must make these states obvious without narration:

1. CashKaro has just delivered real value.
2. The user is invited to enable the Companion after that value moment.
3. V1 explains its privacy boundary clearly.
4. A supported retailer opens normally.
5. A small cashback pill appears only when value exists.
6. The user explicitly activates cashback for the session.
7. CashKaro confirms activation and later tracking.
8. Product-aware rupee estimates are visually separated as **future**, never represented as V1.

## Experiment QA

Primary experiment metric:

> **Tracked orders per randomized existing user during the experiment window.**

Randomization unit should be the **offer to enable** the Companion. Permission refusal, setup abandonment and non-use remain part of treatment impact.

Mechanism metrics are diagnostic only:

`eligible cohort → setup offer → permission → retailer context → pill exposure → activation → tracked order`

Guardrails should include permission revocation, retailer/global disable, uninstall, complaints, tracking failures, cancellations/returns where relevant, partner restrictions and commission economics.

## Commercial QA

Always separate:

- **CashKaro incrementality:** did tracked orders per existing user increase?
- **Retailer incrementality:** did the retailer gain incremental economic value, or only incur incremental affiliate cost?

If partner economics reject post-entry attribution, the Companion should not scale even if the UX tests well.

## Final outstanding submission risk

The assignment explicitly requests the **complete AI interaction transcript**. The repository currently contains the product reasoning and written submission, but every AI interaction used in the final work should be exported and included before sending the final assignment. Do not label a partial log as complete.

## Final decision

**READY AS A PRODUCT DIRECTION.**  
**READY FOR A CONTROLLED EXPERIMENT SPEC.**  
**NOT A PRODUCTION COMMITMENT until the four kill gates are validated.**
