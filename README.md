# CashKaro APM Case Study — Shopping Companion

Interactive submission for **“Making CashKaro part of the shopping habit.”**

**Author:** Ujjawal Anand  
**North star:** Tracked orders per existing user per quarter, on a fixed cohort.

## Final-agent handoff — start here

If you are Astra / ChatGPT Work / another execution agent taking over this submission:

### **[`HANDOFF_TO_ASTRA.md`](HANDOFF_TO_ASTRA.md)**

That file points to the authoritative assignment transcript, complete compiled ChatGPT context, Qwen/DeepSeek source material, strategy documents, current prototype and the autonomous final-submission prompt.

The actual execution instructions are in:

### **[`docs/ASTRA_MASTER_PROMPT.md`](docs/ASTRA_MASTER_PROMPT.md)**

Do not begin by redesigning the site. Read the assignment and context first.

## Current live draft

**Website:** https://cashkaro-ujjawal-anands-projects.vercel.app

**Written case:** [`docs/FINAL_SUBMISSION.md`](docs/FINAL_SUBMISSION.md)  
**Final QA:** [`docs/PRE_SUBMISSION_REVIEW.md`](docs/PRE_SUBMISSION_REVIEW.md)

The site is a working draft, not a sacred implementation. The final agent may rewrite/rebuild it if doing so materially improves the submission.

## Source / AI context

- [`source-material/ORIGINAL_ASSIGNMENT_TRANSCRIPT.md`](source-material/ORIGINAL_ASSIGNMENT_TRANSCRIPT.md) — parsed authoritative brief
- [`docs/AI_CONTEXT_HANDOFF.md`](docs/AI_CONTEXT_HANDOFF.md) — compiled primary ChatGPT reasoning and decision history
- [`source-material/PRIMARY_HANDOFF_TO_EXTERNAL_AGENTS.md`](source-material/PRIMARY_HANDOFF_TO_EXTERNAL_AGENTS.md) — detailed pre-red-team handoff
- [`source-material/QWEN_BEHAVIORAL_ANALYSIS_TEXT.md`](source-material/QWEN_BEHAVIORAL_ANALYSIS_TEXT.md) — Qwen adversarial analysis + later corrections
- [`source-material/DEEPSEEK_PRINCIPAL_PM_REVIEW.md`](source-material/DEEPSEEK_PRINCIPAL_PM_REVIEW.md) — DeepSeek principal-PM review
- [`source-material/README.md`](source-material/README.md) — source manifest / transcript caveat
- [`transcripts/README.md`](transcripts/README.md) — AI-transcript compliance index

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

The submission is designed as an **interactive product decision artifact**, not a feature mockup dressed up as a case study.
