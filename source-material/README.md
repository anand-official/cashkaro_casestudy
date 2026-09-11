# Source Material Manifest

This directory exists so a new execution agent can understand the assignment and the AI/product reasoning without needing access to the original ChatGPT UI.

## Files

### `ORIGINAL_ASSIGNMENT_TRANSCRIPT.md`
Parsed text from the original 3-page CashKaro APM Intern Product Assignment supplied by the candidate.

If the original binary PDF is separately available, use the PDF as the authoritative source. The transcript is included here so the repository remains self-contained for reading and auditing.

### `PRIMARY_HANDOFF_TO_EXTERNAL_AGENTS.md`
Detailed product investigation handoff created before the final external-AI review. It captures the move from reminder/prediction thinking to the missing-denominator critique and the Android Shopping Companion hypothesis.

### `QWEN_BEHAVIORAL_ANALYSIS_TEXT.md`
Product-relevant analytical core of Qwen's adversarial behavioral research, together with explicit notes identifying recommendations that were later rejected or corrected.

The original Qwen output also contained a very large search/bibliography appendix; the product-relevant analysis is what has been preserved here. Qwen output is process evidence, not a factual authority.

### `DEEPSEEK_PRINCIPAL_PM_REVIEW.md`
DeepSeek's principal-PM synthesis/red-team. It is intentionally preserved even where the final case disagrees with it, because the assignment asks to show what AI advice was challenged and rejected.

## Primary ChatGPT context

The consolidated current-thread reasoning is in:

[`../docs/AI_CONTEXT_HANDOFF.md`](../docs/AI_CONTEXT_HANDOFF.md)

That document is the fastest way to understand what ultimately survived the multi-model review and why.

## Transcript-completeness caveat

The CashKaro brief asks for complete AI interaction transcripts. These source files preserve the material available to this workstream and make the decision evolution auditable, but **they should not be misrepresented as a byte-for-byte export of every UI conversation** unless raw exports have actually been added.

If additional raw Claude/Gemini/Qwen/DeepSeek/ChatGPT exports are available, add them under `transcripts/` before final submission and update `transcripts/README.md`.
