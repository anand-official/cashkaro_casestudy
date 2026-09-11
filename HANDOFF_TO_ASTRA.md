# Start Here — Handoff to Astra / ChatGPT Work

You are taking over the final execution of the CashKaro APM assignment. Do **not** begin by polishing the current website.

## Repository

**https://github.com/anand-official/cashkaro_casestudy**

## First: read the original assignment PDF

The original user-provided CashKaro assignment PDF should be attached alongside this handoff. Read it first and treat it as authoritative.

A searchable text extraction also exists in the repo:

- [`docs/ORIGINAL_ASSIGNMENT_TEXT.md`](docs/ORIGINAL_ASSIGNMENT_TEXT.md)
- [`source-material/ORIGINAL_ASSIGNMENT_TRANSCRIPT.md`](source-material/ORIGINAL_ASSIGNMENT_TRANSCRIPT.md)

## Then read the handoff index

### **[`docs/HANDOFF_INDEX.md`](docs/HANDOFF_INDEX.md)**

It gives the recommended reading order across the product reasoning, AI source material, current implementation and latest strategy state.

## Master execution prompt

### **[`docs/ASTRA_MASTER_PROMPT.md`](docs/ASTRA_MASTER_PROMPT.md)**

Follow this as your execution mandate.

## Critical new information

The previous lead hypothesis was an Android retailer-app Shopping Companion.

That product direction is **no longer locked**.

An insider PM gave a material commercial critique: if CashKaro appears only after the user has already chosen and opened a retailer, CashKaro may be recapturing affiliate attribution instead of creating/influencing retailer traffic. The intervention may need to move **upstream into the consideration/decision stage** — e.g. YouTube reviews, comparison/SEO content and other places where the user is still deciding what/where to buy.

Read the full critique and strategic implications here:

### **[`docs/INSIDER_PM_FEEDBACK_AND_STRATEGY_REVIEW.md`](docs/INSIDER_PM_FEEDBACK_AND_STRATEGY_REVIEW.md)**

The strongest new hypothesis to investigate is a narrow **CashKaro Decision Companion / Savings Cart** that adds decision value before merchant choice is final, inspired by the cross-surface principle behind Google Universal Cart.

Do not accept that hypothesis automatically either. Re-open the product decision and choose the strongest defensible direction.

## Primary ChatGPT context

### **[`transcripts/CHATGPT_PRIMARY_CONTEXT.md`](transcripts/CHATGPT_PRIMARY_CONTEXT.md)**

This is a structured reconstruction of how the reasoning evolved from predicted reminders → missing-denominator critique → journey-position reframe → retailer-overlay Companion → ITT experiment → retailer incrementality risk → latest insider-PM challenge.

It is a context handoff, **not falsely represented as a verbatim raw transcript**.

## Existing external-AI / working material

- [`docs/AI_CONTEXT_HANDOFF.md`](docs/AI_CONTEXT_HANDOFF.md)
- [`source-material/PRIMARY_HANDOFF_TO_EXTERNAL_AGENTS.md`](source-material/PRIMARY_HANDOFF_TO_EXTERNAL_AGENTS.md)
- [`source-material/QWEN_BEHAVIORAL_ANALYSIS_TEXT.md`](source-material/QWEN_BEHAVIORAL_ANALYSIS_TEXT.md)
- [`source-material/DEEPSEEK_PRINCIPAL_PM_REVIEW.md`](source-material/DEEPSEEK_PRINCIPAL_PM_REVIEW.md)
- [`transcripts/README.md`](transcripts/README.md)

## Existing product artifacts

- [`docs/FINAL_SUBMISSION.md`](docs/FINAL_SUBMISSION.md)
- [`docs/PRODUCT_STRATEGY_AND_BUILD_PLAN.md`](docs/PRODUCT_STRATEGY_AND_BUILD_PLAN.md)
- [`docs/EVIDENCE_AND_ASSUMPTIONS_MATRIX.md`](docs/EVIDENCE_AND_ASSUMPTIONS_MATRIX.md)
- [`docs/SUBMISSION_CONTENT_BLUEPRINT.md`](docs/SUBMISSION_CONTENT_BLUEPRINT.md)
- [`docs/PRE_SUBMISSION_REVIEW.md`](docs/PRE_SUBMISSION_REVIEW.md)

These are **pre-insider-feedback drafts** unless updated later. Preserve their strongest reasoning, not their conclusion by default.

## Current implementation

- `index.html`
- `prototype.html`
- `research.html`
- `ai-transcript.html`
- `assets/`

The current live site is a draft. You may rewrite or replace it after the product decision is revalidated.

## Mission

> **Read the brief, inherit the evidence without sunk-cost bias, re-open the product decision using the insider feedback, then autonomously turn this repository into a top-tier, defensible, polished, tested and deployed APM submission.**

Do not declare completion until the brief is audited line-by-line, the final product creates a defensible user/CashKaro/retailer value exchange, mobile/desktop QA passes, all claims are evidence-disciplined, and production deployment works.