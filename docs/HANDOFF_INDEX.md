> Current release: **CashKaro Order Check**. The material below is historical and may describe superseded concepts. Read `docs/FINAL_SUBMISSION.md` and `docs/REVIEW_RESPONSE.md` from the repository root. Raw AI exports remain incomplete.

> **Historical handoff / superseded strategy.** The final 11 Sep 2026 decision is CashKaro Shortlist, with the retailer overlay rejected as the lead. Read [FINAL_SUBMISSION.md](FINAL_SUBMISSION.md) and the current README. The original contents below are preserved as the decision history.

# CashKaro APM — Astra handoff index

This repository is the working record for the CashKaro APM assignment and should be treated as the source of truth for the next agent, together with the **original assignment PDF supplied separately**.

## Read in this order

1. [`docs/ORIGINAL_ASSIGNMENT_TEXT.md`](./ORIGINAL_ASSIGNMENT_TEXT.md) — searchable extraction of the original brief. The PDF is authoritative.
2. [`../transcripts/CHATGPT_PRIMARY_CONTEXT.md`](../transcripts/CHATGPT_PRIMARY_CONTEXT.md) — structured reconstruction of the primary ChatGPT reasoning and decision evolution.
3. [`EXTERNAL_FEEDBACK_AND_STRATEGY_REVIEW.md`](./EXTERNAL_FEEDBACK_AND_STRATEGY_REVIEW.md) — latest external product critique that materially re-opens the product decision.
4. [`ASTRA_FINAL_HANDOFF_PROMPT.md`](./ASTRA_FINAL_HANDOFF_PROMPT.md) — exact execution mandate for Astra.
5. [`PRODUCT_STRATEGY_AND_BUILD_PLAN.md`](./PRODUCT_STRATEGY_AND_BUILD_PLAN.md) — previous strategy/build plan; useful context, but pre-external-feedback and therefore not sacred.
6. [`SUBMISSION_CONTENT_BLUEPRINT.md`](./SUBMISSION_CONTENT_BLUEPRINT.md) — previous narrative blueprint.
7. [`EVIDENCE_AND_ASSUMPTIONS_MATRIX.md`](./EVIDENCE_AND_ASSUMPTIONS_MATRIX.md) — evidence discipline / prohibited claims.
8. [`FINAL_SUBMISSION.md`](./FINAL_SUBMISSION.md) — previous written case; now a draft because the external feedback challenges the retailer-overlay mechanism.
9. [`PRE_SUBMISSION_REVIEW.md`](./PRE_SUBMISSION_REVIEW.md) — previous QA checklist.
10. Current website/prototype source at the repository root — treat as a draft implementation, not the final product direction.

## Strategic status right now

The previous lead hypothesis was an Android retailer-app Shopping Companion that surfaced CashKaro after a supported retailer app was already open.

That is **no longer locked**.

Latest external product feedback argues that this can look like attribution recapture after the retailer has already won the purchase. The product decision must therefore be re-opened around an upstream intervention while the user is still choosing what/where to buy.

Current strongest direction to investigate:

> **Do not wait until the retailer has already won. Become useful while the user is still choosing — then route the purchase through CashKaro.**

A promising concept is a narrow **CashKaro Decision Companion / Savings Cart** for high-consideration purchases, inspired by (not copied from) Google Universal Cart: capture consideration from research surfaces, add decision value, compare effective price/cashback and reviews, then route the chosen merchant through CashKaro.

## Important transcript note

The assignment asks for the complete AI interaction transcript. The repository contains the primary structured ChatGPT context and working artifacts that were recoverable. Do **not** call a reconstructed handoff a verbatim raw transcript. If exact exports of external AI sessions are still missing at submission time, flag them as a manual requirement rather than fabricate them.

## Repository

https://github.com/anand-official/cashkaro_casestudy