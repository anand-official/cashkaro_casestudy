# CashKaro APM — Order Check

**Current recommendation:** improve the existing earnings and recovery journey with a visit receipt, explicit purchase check and clear next action. This replaces the headphone Shortlist lead after independent review.

**Submission status:** case and prototype are reviewable; the PDF's complete-AI-interaction requirement remains unmet until the candidate supplies actual exports. No new user interviews or authenticated CashKaro audit are claimed.

- [Production website](https://cashkaro-shortlist.vercel.app/)
- [Product decision](docs/FINAL_SUBMISSION.md)
- [Response to Claude Cowork](docs/REVIEW_RESPONSE.md)
- [Evidence and assumptions](docs/EVIDENCE_AND_ASSUMPTIONS_MATRIX.md)
- [Experiment and technical plan](docs/EXPERIMENT_AND_TECHNICAL_PLAN.md)
- [Assignment audit](docs/ASSIGNMENT_COMPLIANCE_AUDIT.md)
- [AI session manifest](transcripts/README.md)
- [Research worksheet and candidate note prompts](docs/RESEARCH_WORKSHEET.md)
- [QA report](docs/QA_REPORT.md)
- [Release record](docs/RELEASE.md)

## Run

Use Node.js with the pinned dependencies in `package-lock.json`.

```sh
npm ci
npm run build
npm run check
```

`content/` is the canonical writing and prototype template. `scripts/build.mjs` generates the six HTML routes, documentation mirrors and an explicit public allowlist in `dist/`. `assets/order-model.js` holds the meaningful date/state/redemption logic exercised by the checks. The prototype is a static simulation with no live account, purchase or payout integration.

`npm run dev -- --host 0.0.0.0 --port 4173` is the Vite development entry point. In the managed preview environment, use the supervisor's `sites-preview start` command.

The deployment URL retains the earlier project name for continuity; the product is Order Check. The Shortlist baseline remains available at commit `f482fb6` and in the clearly labelled historical archive. Older handoff prompts are context, not the current recommendation.

Original private attachments and raw personal messages are not public release inputs. The anonymized external-feedback summary records the argument without claiming the speaker's role. Removing a name from the current release does not rewrite public Git history.
