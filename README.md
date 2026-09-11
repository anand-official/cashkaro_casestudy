# CashKaro Shortlist — APM submission

**Author:** Ujjawal Anand · **Decision:** 11 September 2026  
**North star:** tracked orders per existing user per quarter, on a fixed cohort.

The final recommendation is a persistent research shortlist for existing users choosing non-Apple headphones. Reject the Android retailer overlay as the lead; test useful participation before the retailer decision is settled. This is a bounded product proposal, not a claim of validated demand, approved affiliate integration or measured business lift.

## Review the submission

- `index.html` — the complete case, with equal problem and solution depth
- `prototype.html` — interactive, sourced two-model demonstration
- `research.html` — primary evidence, assumptions and decision changes
- `experiment.html` — causal protocol, economics and technical ownership
- `ai-transcript.html` — available source records and missing-export disclosure
- `compliance.html` — original assignment audit and candidate requirements
- [Assignment text transcription](source-material/ORIGINAL_ASSIGNMENT_TRANSCRIPT.md) — public reference; the original attached PDF remains authoritative

Publication identifiers and QA results are recorded in [Release](docs/RELEASE.md) and [QA report](docs/QA_REPORT.md) when verified. Earlier deployment URLs in historical files are not the final release record.

## Build and maintain

```sh
npm ci
npm run build
npm run check
```

The six pages are generated from `content/` by `scripts/build.mjs`. Edit those sources, not the generated HTML or generated final-document mirrors. The prototype behavior and sourced catalog live in `assets/prototype.js` and `assets/catalog.js`. `npm run dev` uses Vite for local development; production is static output in `dist/`. Vercel configuration is included. No secrets or external data service are needed for the demonstration.

The prototype saves only its own local-browser state. No real purchase, affiliate attribution, partner event, native Android receiver or authenticated account persistence is implemented.

## Evidence and history

[Final case](docs/FINAL_SUBMISSION.md) · [Evidence register](docs/EVIDENCE_AND_ASSUMPTIONS_MATRIX.md) · [Experiment/technical plan](docs/EXPERIMENT_AND_TECHNICAL_PLAN.md) · [Compliance audit](docs/ASSIGNMENT_COMPLIANCE_AUDIT.md)

The prior overlay case is preserved in [the archive](docs/archive/RETAILER_OVERLAY_SUBMISSION.md). Earlier handoff and strategy files remain as labeled historical records. Supplied source material and AI artifacts have not been rewritten to agree with the final decision.

## Genuine incomplete requirement

The brief requests **complete AI interaction transcripts**. Available reconstructions/extracts are labeled honestly. The candidate must export the contributing sessions, including the final execution conversation. See [transcript index](transcripts/README.md). The original interview is also unavailable; the case treats it only as inherited qualitative input. Verify the 72-hour deadline from the actual receipt time and submit through the required destination.
