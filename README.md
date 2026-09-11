# CashKaro APM Case Study — Shopping Companion

Interactive submission for **“Making CashKaro part of the shopping habit.”**

**Author:** Ujjawal Anand  
**North star:** Tracked orders per existing user per quarter, on a fixed cohort.

## Live submission

**Website:** https://cashkaro-ujjawal-anands-projects.vercel.app

**Written case:** [`docs/FINAL_SUBMISSION.md`](docs/FINAL_SUBMISSION.md)  
**Final QA:** [`docs/PRE_SUBMISSION_REVIEW.md`](docs/PRE_SUBMISSION_REVIEW.md)

The submission is deliberately structured around the assignment's 50/50 evaluation split: understand the right problem first, then make and defend one product decision.

## Product decision

The case argues that the core opportunity is not simply “remind users more.” Existing users naturally begin shopping inside retailer apps, while CashKaro depends on them remembering to alter that journey before purchase.

> **Do not predict when shopping might happen. Make CashKaro available when shopping context already exists.**

The chosen product hypothesis is an **Android-first Shopping Companion**: retailer-aware, explicitly opt-in, explicitly activated per shopping session, and intentionally not product-aware in V1.

> **Earn the right to be present once. Earn the right to participate every time.**

## V1 boundaries

### Ships conceptually
- Android-first existing-user cohort
- supported retailer context
- non-blocking activation pill
- explicit session activation
- existing affiliate/deep-link attribution path
- activation + later tracking proof
- suppression / retailer controls
- randomized-offer instrumentation

### Does not ship
- Accessibility-based screen reading
- product/cart/search inspection
- exact per-product cashback
- price comparison
- checkout detection
- AI shopping agent
- auto-activation

## Measurement

Randomize the **offer** of Shopping Companion, not only successful enablers. Analyze intention-to-treat.

> **Primary experiment metric: incremental tracked orders per randomized existing user.**

Mechanism metrics explain the result; they do not replace the north star.

## Commercial and product kill gates

1. Permission/setup adoption
2. Retailer / affiliate partner approval and economics
3. Causal tracked-order uplift
4. Enough cohort-level reach after all multipliers

A key distinction in the case is **CashKaro incrementality vs retailer incrementality**: more attributed orders for CashKaro do not automatically imply more economic value for the retailer.

## Repository artifacts

- `index.html` — case-study narrative
- `prototype.html` — interactive Shopping Companion prototype
- `research.html` — evidence + decision log
- `ai-transcript.html` — AI work-log interface
- `docs/FINAL_SUBMISSION.md` — final written submission
- `docs/PRODUCT_STRATEGY_AND_BUILD_PLAN.md` — product/build plan
- `docs/SUBMISSION_CONTENT_BLUEPRINT.md` — narrative blueprint
- `docs/EVIDENCE_AND_ASSUMPTIONS_MATRIX.md` — claim/evidence discipline
- `docs/PRE_SUBMISSION_REVIEW.md` — final senior-PM QA checklist
- `transcripts/README.md` — AI-transcript compliance index

The submission is designed as an **interactive product decision artifact**, not a feature mockup dressed up as a case study.
