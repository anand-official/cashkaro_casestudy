# CashKaro APM — Astra handoff index

This repository is the working record for the CashKaro APM assignment and should be treated as the source of truth for the next agent, together with the **original assignment PDF supplied separately**.

## Read in this order

1. [`docs/ORIGINAL_ASSIGNMENT_TEXT.md`](./ORIGINAL_ASSIGNMENT_TEXT.md) — searchable extraction of the original brief. The PDF is authoritative.
2. [`../transcripts/CHATGPT_PRIMARY_CONTEXT.md`](../transcripts/CHATGPT_PRIMARY_CONTEXT.md) — structured reconstruction of the primary ChatGPT reasoning and decision evolution.
3. [`INSIDER_PM_FEEDBACK_AND_STRATEGY_REVIEW.md`](./INSIDER_PM_FEEDBACK_AND_STRATEGY_REVIEW.md) — latest insider PM critique that materially re-opens the product decision.
4. [`ASTRA_FINAL_HANDOFF_PROMPT.md`](./ASTRA_FINAL_HANDOFF_PROMPT.md) — exact execution mandate for Astra.
5. [`PRODUCT_STRATEGY_AND_BUILD_PLAN.md`](./PRODUCT_STRATEGY_AND_BUILD_PLAN.md) — previous strategy/build plan; useful context, but pre-insider-feedback and therefore not sacred.
6. [`SUBMISSION_CONTENT_BLUEPRINT.md`](./SUBMISSION_CONTENT_BLUEPRINT.md) — previous narrative blueprint.
7. [`EVIDENCE_AND_ASSUMPTIONS_MATRIX.md`](./EVIDENCE_AND_ASSUMPTIONS_MATRIX.md) — evidence discipline / prohibited claims.
8. [`FINAL_SUBMISSION.md`](./FINAL_SUBMISSION.md) — previous written case; now a draft because the insider feedback challenges the retailer-overlay mechanism.
9. [`PRE_SUBMISSION_REVIEW.md`](./PRE_SUBMISSION_REVIEW.md) — previous QA checklist.
10. Current website/prototype source at the repository root — treat as a draft implementation, not the final product direction.

## Strategic status right now

The previous lead hypothesis was an Android retailer-app Shopping Companion that surfaced CashKaro after a supported retailer app was already open.

That is **no longer locked**.

Latest insider PM feedback argues that this can look like attribution recapture after the retailer has already won the purchase. The product decision must therefore be re-opened around an upstream intervention while the user is still choosing what/where to buy.

Current strongest direction to investigate:

> **Do not wait until the retailer has already won. Become useful while the user is still choosing — then route the purchase through CashKaro.**

A promising concept is a narrow **CashKaro Decision Companion / Savings Cart** for high-consideration purchases, inspired by (not copied from) Google Universal Cart: capture consideration from research surfaces, add decision value, compare effective price/cashback and reviews, then route the chosen merchant through CashKaro.

## Important transcript note

The assignment asks for the complete AI interaction transcript. The repository contains the primary structured ChatGPT context and working artifacts that were recoverable. Do **not** call a reconstructed handoff a verbatim raw transcript. If exact exports of external AI sessions are still missing at submission time, flag them as a manual requirement rather than fabricate them.

## Repository

https://github.com/anand-official/cashkaro_casestudy