# AI interaction manifest

Updated 13 September 2026. Author: Ujjawal Anand.

The assignment asked for the complete transcript of my AI interactions. The panel later asked for a summarised trail instead, because the raw sessions are longer than anyone has time to read. This manifest is the index to that summary: it states, session by session, what exists and in what form. It stays specific about partial records, because an accurately labelled record is worth more than a complete-looking one that has been filled in.

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
| Earlier ChatGPT reasoning | C | `CHATGPT_PRIMARY_CONTEXT.md` | Reconstruction with labelled redactions. Not verbatim. |
| Claude, early strategy | B | supplied privately as a pasted copy | Prompts and responses present; "pasted" sections collapsed by the source interface |
| Qwen, behavioural research | B | supplied privately as a pasted copy; a public extract is retained at `source-material/QWEN_BEHAVIORAL_ANALYSIS_TEXT.md` | Multi-turn copy with an abrupt section break and referenced attachments not included |
| DeepSeek, principal-PM review | B | prompt and response, both supplied privately | Prompt and response pair received. Cannot establish whether other sessions contributed. |
| Claude, Shortlist review | B | review document supplied privately, against commit `f482fb6` | Review artifact, not the full interaction |
| Claude, later router critique | C | Summaries inside the 13 September mandate and follow-up | The full source file was not located among available records. Summaries are labelled as summaries. |
| Gemini | — | Referenced inside the supplied Claude strategy conversation | Originating session not supplied. Listed rather than dropped. |
| Build execution: Shortlist, Order Check, Connector | C | `CLAUDE_CODE_BUILD_SESSIONS.md` and the public decision records | Authored session record derived from mandates and commit history. |
| Intermediate router reasoning | C | Outcome described in the handoff and the latest mandate | Full intervening conversation not supplied. |

## What is not claimed

- No missing conversation has been fabricated or reconstructed and presented as verbatim.
- The public decision log, review response and skeptical review are tier C. They are AI-assisted authored documents, not transcripts.
- The external commercial critique is human stakeholder input, with role and identity unverified. It is not an AI session and is filed at `source-material/EXTERNAL_PRODUCT_FEEDBACK.md`.
- No independent AI review of the final rebuild is claimed.

**Nothing above has been reconstructed and presented as verbatim. Where a record is partial, it is labelled partial.**
