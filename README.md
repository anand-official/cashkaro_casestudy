# CashKaro APM Case Study — Working Submission

Interactive product assignment for **“Making CashKaro part of the shopping habit.”**

**Author:** Ujjawal Anand  
**North star:** Tracked orders per existing user per quarter, on a fixed cohort.

## Final-agent handoff — start here

If you are Astra / ChatGPT Work / another execution agent taking over this submission:

### **[`HANDOFF_TO_ASTRA.md`](HANDOFF_TO_ASTRA.md)**

Then follow:

### **[`docs/HANDOFF_INDEX.md`](docs/HANDOFF_INDEX.md)**  
### **[`docs/ASTRA_MASTER_PROMPT.md`](docs/ASTRA_MASTER_PROMPT.md)**

Read the original assignment PDF first if it is attached to your session. The text extraction in this repo is for search/convenience; the PDF is authoritative.

## Important: the product decision has been re-opened

The previous lead hypothesis was an **Android retailer-app Shopping Companion** that surfaced CashKaro after a supported retailer app was already open.

That direction is now **challenged, not locked**.

An insider PM raised a first-order commercial problem: retailers pay CashKaro for traffic/influence. If CashKaro appears only after the shopper has already chosen and opened the retailer, the feature may recapture attribution rather than create retailer value.

The latest strategy therefore asks:

> **Where can CashKaro become useful while the user is still deciding what to buy or where to buy it — then route that decision through CashKaro?**

The strongest new hypothesis to investigate is an **upstream Decision Companion / Savings Cart** across research/consideration surfaces, potentially starting with a narrow high-consideration category such as smartphones. This is inspired by the cross-surface principle behind Google Universal Cart, not a mandate to copy it.

Read the full insider feedback here:

### **[`docs/INSIDER_PM_FEEDBACK_AND_STRATEGY_REVIEW.md`](docs/INSIDER_PM_FEEDBACK_AND_STRATEGY_REVIEW.md)**

## Source / AI context

- [`docs/ORIGINAL_ASSIGNMENT_TEXT.md`](docs/ORIGINAL_ASSIGNMENT_TEXT.md) — searchable extraction of the original assignment
- [`transcripts/CHATGPT_PRIMARY_CONTEXT.md`](transcripts/CHATGPT_PRIMARY_CONTEXT.md) — structured primary ChatGPT decision history including the latest insider-PM challenge
- [`docs/AI_CONTEXT_HANDOFF.md`](docs/AI_CONTEXT_HANDOFF.md) — previous compiled reasoning
- [`source-material/PRIMARY_HANDOFF_TO_EXTERNAL_AGENTS.md`](source-material/PRIMARY_HANDOFF_TO_EXTERNAL_AGENTS.md) — detailed earlier handoff
- [`source-material/QWEN_BEHAVIORAL_ANALYSIS_TEXT.md`](source-material/QWEN_BEHAVIORAL_ANALYSIS_TEXT.md) — Qwen adversarial analysis / corrections
- [`source-material/DEEPSEEK_PRINCIPAL_PM_REVIEW.md`](source-material/DEEPSEEK_PRINCIPAL_PM_REVIEW.md) — DeepSeek principal-PM review
- [`source-material/README.md`](source-material/README.md) — source manifest / transcript caveats
- [`transcripts/README.md`](transcripts/README.md) — AI transcript compliance index

## Existing product artifacts

These represent the previous retailer-overlay direction and should be treated as **drafts to audit**, not conclusions to preserve:

- `docs/FINAL_SUBMISSION.md`
- `docs/PRODUCT_STRATEGY_AND_BUILD_PLAN.md`
- `docs/SUBMISSION_CONTENT_BLUEPRINT.md`
- `docs/EVIDENCE_AND_ASSUMPTIONS_MATRIX.md`
- `docs/PRE_SUBMISSION_REVIEW.md`
- `index.html`
- `prototype.html`
- `research.html`
- `ai-transcript.html`

## Current live draft

**Website:** https://cashkaro-ujjawal-anands-projects.vercel.app

The current site is a working draft. It may be rewritten or replaced once the final product decision is revalidated.

## Locked assignment principle

Whatever final product wins, it must ladder to:

> **Tracked orders per existing user per quarter, on a fixed cohort.**

The final submission must maintain roughly equal depth on **problem understanding** and **product decision**, make assumptions explicit, show real trade-offs, explain technical feasibility and GTM, and state what would make the team scale, modify or kill the direction.

The submission is intended to be an **interactive product-decision artifact**, not a polished feature mockup with weak reasoning.