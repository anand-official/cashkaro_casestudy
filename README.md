# CashKaro APM Case Study — Shopping Companion

Interactive submission for **“Making CashKaro part of the shopping habit.”**

**Author:** Ujjawal Anand  
**North star:** Tracked orders per existing user per quarter, on a fixed cohort.

## Live submission

**Website:** https://cashkaro-apm-case-ujjawal-anands-projects.vercel.app

The live case is deliberately structured around the assignment's 50/50 evaluation split: understand the right problem first, then make and defend one product decision.

## Product decision

The core opportunity is not simply “remind users more.” Existing users naturally begin shopping inside retailer apps, while CashKaro depends on them remembering to alter that journey before purchase.

> **Do not predict when shopping might happen. Make CashKaro available when shopping context already exists.**

The chosen hypothesis is an **Android-first Shopping Companion**: retailer-aware, explicitly opt-in, explicitly activated per shopping session, and intentionally not product-aware in V1.

> **Earn the right to be present once. Earn the right to participate every time.**

## What V1 tests

Can retailer-level shopping context reduce enough behavioral friction to increase **incremental tracked orders per randomized existing user**?

### V1 includes
- Android-first existing-user cohort
- supported retailer context
- lightweight cashback activation pill
- explicit activation each shopping session
- existing affiliate/deep-link attribution path
- activation + later tracking reassurance
- suppression / retailer controls
- randomized-offer instrumentation

### V1 deliberately excludes
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
- `docs/PRODUCT_STRATEGY_AND_BUILD_PLAN.md` — product/build plan
- `docs/SUBMISSION_CONTENT_BLUEPRINT.md` — narrative blueprint
- `docs/EVIDENCE_AND_ASSUMPTIONS_MATRIX.md` — claim/evidence discipline

The submission is designed as an **interactive product decision artifact**, not a feature mockup dressed up as a case study.
