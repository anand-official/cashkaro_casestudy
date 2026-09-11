# CashKaro Shortlist — production release

**Live:** https://cashkaro-shortlist.vercel.app/  
**Prototype:** https://cashkaro-shortlist.vercel.app/prototype  
**Audit:** https://cashkaro-shortlist.vercel.app/compliance  
**Repository branches:** `main` and `submission/shortlist-final`.

Verified in the public browser without Vercel sign-in on 11 September 2026. The scoped deployment alias shown by the connector requires login; use the public production domain above for the hiring panel.

The implementation was published in commit `230a3b9fe8b8918ac0c227f5b45dd78f2e00d849`; subsequent release bookkeeping records the verified URL and production QA. The final revision is the head of the two branches above. The original overlay remains in repository history and in `docs/archive/`.

## Verified on production

- Case homepage and clean prototype route load publicly.
- Confirmed model/source and personal note survive reload.
- Merchant handoff requires acknowledgement and reports a simulated click-out, not an order.
- Decision-log reader loads its correct source and finds text.
- Compliance page visibly reports the missing full AI transcript.
- Attached PDF path returns the site's 404 page; the public assignment link opens the text transcription already in the repository.

Full local/responsive verification and its device limits are documented in [QA_REPORT.md](QA_REPORT.md).

## Reproduce and redeploy

Run `npm ci`, `npm run build`, `npm run check`. Production is the generated `dist/` directory. `vercel.json` also supports a normal source build. `.gitignore`, `.vercelignore` and the build filter exclude the original attached PDF and private working execution record. The public release uses reviewed case/code materials and existing public source records.

The release was uploaded through the authorized Vercel deployment tool. Automatic GitHub-to-Vercel deployment was not established; a future repository update needs an explicit deployment or a separately configured Git integration. No backend or API key is required for this static demonstration.

## Remaining candidate requirement

Attach the complete contributing AI conversation exports to the actual submission, with appropriate privacy review. Current records are labelled reconstructions, extracts or an authored decision log. The original interview is unavailable and remains qualified as inherited evidence. Verify the actual receipt time, deadline and submission destination.
