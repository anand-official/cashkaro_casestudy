# AI interaction manifest

Updated 13 September 2026. Author: Ujjawal Anand.

The assignment requires the complete transcript of my AI interactions. This manifest states, session by session, exactly what exists and what does not. It is deliberately specific about gaps, because an accurate incomplete record is worth more than a complete-looking one that is partly reconstructed.

## Tiers

Every record below is one of three kinds. They are never blended.

| Tier | Meaning | Evidential weight |
| --- | --- | --- |
| **A** | Verbatim export, unedited | Establishes what was actually asked and answered |
| **B** | Received copy: a pasted conversation supplied outside the original tool | Establishes content, not completeness |
| **C** | Authored record: a decision log or review written afterwards with AI assistance | Evidence of reasoning; not a transcript |

## Session ledger

| Session | Tier | Available record | Status |
| --- | --- | --- | --- |
| Earlier ChatGPT reasoning | C | `CHATGPT_PRIMARY_CONTEXT.md` | Reconstruction with labelled redactions. Not verbatim. Raw export outstanding. |
| Claude, early strategy | B | `Pasted markdown(20260911-161512).md`, supplied privately | Prompts and responses present; "pasted" sections collapsed by the source interface |
| Qwen, behavioural research | B | `Pasted markdown(20260911-161707).md` privately; public extract retained at `source-material/QWEN_BEHAVIORAL_ANALYSIS_TEXT.md` | Multi-turn copy with an abrupt section break and referenced attachments not included |
| DeepSeek, principal-PM review | B | `Pasted text (2).txt` prompt and `Pasted markdown(20260911-161555).md` response, supplied privately | Prompt and response pair received. Cannot establish whether other sessions contributed. |
| Claude, Shortlist review | B | `CLAUDE_COWORK_REVIEW.md`, supplied privately; reviewed commit `f482fb6` | Review artifact, not the full interaction |
| Claude, later router critique | C | Summaries inside the 13 September mandate and follow-up | The full source file was not located among available records. Summaries are labelled as summaries. |
| Gemini | — | Referenced inside the supplied Claude strategy conversation | Originating session not supplied. Listed rather than dropped. |
| Build execution: Shortlist, Order Check, Universal Skill | C | `CLAUDE_CODE_BUILD_SESSIONS.md` and the public decision records | Authored session record derived from mandates and commit history. Raw export outstanding. |
| Intermediate router reasoning | C | Outcome described in the handoff and the latest mandate | Full intervening conversation not supplied. |

Attribution note: the `161555` markdown and `Pasted text (2)` belong to DeepSeek; the `161707` markdown belongs to Qwen. No model identity is inferred from interface artifacts.

## Fingerprints of received copies

- Claude strategy: SHA-256 `b86a2b140c03a58a061d4af598cf60672b85aebda0da2ab0e52f1ce1b460b16b`
- DeepSeek response: `044cefe072b4fe45c36e8a23109f342d627799465909fa18b12b4106b48a89ca`
- DeepSeek prompt: `908354d107ced32c3cce255a0ed3072c11373f48b4483ce3a6dbd18d33aa6787`
- Qwen conversation: `7f04fa2b40167b4660f75010d268ab7a0d88dfbeb5d66240b810517f3c37d743`

A fingerprint identifies a received file. It does not establish the authenticity or completeness of the original session. Raw attachments remain private and are not published on the public site.

## Outstanding before submission

Four records require a raw export, listed here so the panel can see precisely what is missing:

1. The complete contributing ChatGPT sessions.
2. The later Claude router critique, in full.
3. The intervening reasoning session between the ChatGPT-specific router and the universal proposal.
4. The originating Gemini contribution, or confirmation that it was not materially used.

Export instructions and the drop-in location are in [`raw/README.md`](raw/README.md). Files placed there are supplied to the review panel as a private package; complete transcripts do not need to be publicly hosted, and third-party or personal material is not published here.

## What is not claimed

- No missing conversation has been fabricated or reconstructed and presented as verbatim.
- The public decision log, review response and skeptical review are tier C. They are AI-assisted authored documents, not transcripts.
- The external commercial critique is human stakeholder input, with role and identity unverified. It is not an AI session and is filed at `source-material/EXTERNAL_PRODUCT_FEEDBACK.md`.
- No independent AI review of the final rebuild is claimed.

**The complete-transcript requirement is not yet satisfied. The four gaps above are named rather than papered over.**
