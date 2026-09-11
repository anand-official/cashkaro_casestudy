# AI Interaction Log — Submission Index

The CashKaro brief asks for the **complete transcript of AI interactions**, including what was asked, challenged, rejected and how the thinking changed.

AI output is **process evidence**, not a factual source for product claims.

## Available in this repository now

### Primary ChatGPT workstream

**Compiled context / decision history:**  
[`../docs/AI_CONTEXT_HANDOFF.md`](../docs/AI_CONTEXT_HANDOFF.md)

This is the best single-file reconstruction of the current ChatGPT investigation: predicted reminders, missing-denominator critique, qualitative evidence, journey-position reframe, mobile-extension insight, V1 scoping, two activations, experiment design, economics and kill gates.

It is a **compiled handoff**, not a byte-for-byte export of every ChatGPT UI message.

### Pre-red-team handoff

[`../source-material/PRIMARY_HANDOFF_TO_EXTERNAL_AGENTS.md`](../source-material/PRIMARY_HANDOFF_TO_EXTERNAL_AGENTS.md)

This preserves the detailed context handed to external agents before the final red-team phase.

### Qwen — adversarial behavioral research

[`../source-material/QWEN_BEHAVIORAL_ANALYSIS_TEXT.md`](../source-material/QWEN_BEHAVIORAL_ANALYSIS_TEXT.md)

This preserves the product-relevant analytical core of Qwen's research and records which recommendations were later rejected/corrected. The original Qwen output also contained a large bibliography/search appendix.

### DeepSeek — principal-PM synthesis / red-team

[`../source-material/DEEPSEEK_PRINCIPAL_PM_REVIEW.md`](../source-material/DEEPSEEK_PRINCIPAL_PM_REVIEW.md)

This is the detailed DeepSeek review used in the final product decision. It is intentionally preserved even where the final case disagrees with it.

### Original assignment

[`../source-material/ORIGINAL_ASSIGNMENT_TRANSCRIPT.md`](../source-material/ORIGINAL_ASSIGNMENT_TRANSCRIPT.md)

Parsed from the original 3-page PDF supplied by the candidate. If the binary PDF is available in the final submission environment, the PDF is authoritative.

## AI roles used during the broader investigation

1. **ChatGPT — primary product investigation / synthesis**  
   Problem framing, reminder hypothesis, missing-denominator critique, user-research synthesis, Android Companion thesis, two-activation model, experiment design and final product review.

2. **Qwen — adversarial behavioral research**  
   Used to attack the thesis and stress-test value, trust, context friction, reach and economics. Several recommendations were explicitly rejected, including invented quantitative assumptions, product-aware V1 copy and generic app-cost estimates.

3. **DeepSeek — principal-PM synthesis / red-team**  
   Used to structure segment, MVP, experiment, GTM and risks. Several outputs were corrected, including a biased launch cohort and onboarding copy that assumed visibility into direct retailer purchases.

4. **Claude / Gemini and other earlier model passes**  
   These are referenced in prior working material. If raw exports are available, add them here before submission rather than inventing/reconstructing missing turns.

## Submission-completeness rule

Before the assignment is submitted, add the raw transcript/export for **every external AI conversation that materially contributed to the final case** whenever the raw export is actually available.

Do **not** replace a raw transcript with a polished summary and call it complete. Do **not** invent missing transcript turns.

If a raw session cannot be recovered, keep the compiled decision record but label the limitation transparently.

Recommended raw-export naming if more files become available:

- `01-chatgpt-primary-raw.md`
- `02-claude-raw.md`
- `03-gemini-raw.md`
- `04-qwen-raw.md`
- `05-deepseek-raw.md`
- additional sessions in chronological order

## What the reviewer should be able to see

The AI trail should make the evolution legible:

`forgetfulness → predicted reminders → missing-denominator attack → journey-position reframe → browser-extension insight → Android shopping context → retailer-aware V1 → two activations → ITT experiment → partner/reach kill gates`

The value of the log is not how much AI was used. It is whether the final decision shows independent judgment about what to keep, modify and reject.
