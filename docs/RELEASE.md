# CashKaro Order Check — production release

Date: 11 September 2026. Version: **3.0.0**.

- [Public production homepage](https://cashkaro-shortlist.vercel.app/)
- [Deployed prototype](https://cashkaro-shortlist.vercel.app/prototype)
- [AI trail and completeness warning](https://cashkaro-shortlist.vercel.app/ai-transcript)
- [Assignment compliance audit](https://cashkaro-shortlist.vercel.app/compliance)
- Implementation commit: `28a2a26bea3b08eb932d0641fc4587372a8a7a71`.
- Release branch: `submission/order-check-reviewed`; public default branch: `main`. Subsequent release-record updates have their own commit.
- Superseded review baseline: `f482fb6`, retained in history and the earlier Shortlist branch.

The public domain retains the earlier project name for continuity. Its current product is Order Check. Deployment is explicit through Vercel; automatic GitHub-to-Vercel integration is not assumed. The generated public bundle uses an allowlist and excludes private attachments, original named feedback, private execution summaries, the old catalog and the local QA harness.

## Verification performed

The local build/check commands passed. All six routes were checked at 360, 390, 768 and 1280 px; the two pages affected by the final navigation edit were rechecked at every width. Mobile purchase reporting, support drafts, redemption distinctions, reminder consent/deduplication, expiry and service recovery passed. See [the QA report](QA_REPORT.md).

The public homepage, clean prototype URL, AI trail and compliance page loaded without login. The deployed no-order and support-recovery flows worked. The original named-feedback URL returned the custom page-not-found screen. Public Git history still retains the prior record; history was not rewritten.

The response to Claude was loaded through the production AI reader. Its displayed source text exactly matched the local UTF-8 artifact with SHA-256:

`3ea58d9d4f901979ec944c222888bee92af29575abff0a1a604abad008cb7122`

A separate command-line HTTP byte check did not complete because the environment cancelled network approval. The production checks above used the actual public browser journey. This release does not claim an independent byte comparison of every deployed asset.

## What this release does not establish

No physical-device, screen-reader, real affiliate, support, notification, payout or CashKaro integration test was performed. The behavioural mechanism remains unvalidated and the public claim-policy conflict is unresolved for production use. Raw AI exports are still required for assignment compliance; the candidate must verify the deadline and supply an honest personal judgment note. Neither website deployment nor this record closes those requirements.
