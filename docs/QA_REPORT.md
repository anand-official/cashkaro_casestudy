# Final submission QA

Date: 11 September 2026. Scope: the static submission and its interactive web simulation. These checks are not user research or validation of real affiliate tracking.

## Verified

| Area | Check and result |
| --- | --- |
| Authoritative brief | The original attached PDF was read and its integrity checked locally; public release links the existing text transcription |
| Build | `npm run build` and `npm run check` pass across all six generated routes |
| Narrative | 1,403 problem words / 1,334 solution words, approximately 51/49; appendices excluded |
| Static integrity | Local page links/assets and fragment targets exist; unique HTML IDs and one h1 per route; all application JavaScript passes syntax checking |
| Evidence arithmetic | Restricted Amazon Rewards are excluded from the cash-only sort; included only under the explicit Rewards comparison preference |
| Capture | Example link → possible match → explicit model confirmation → saved source; no arbitrary source fetch |
| Input handling | `javascript:` and credential-bearing links rejected in code checks; active-content URL rejection also verified in browser |
| Persistence | Saved Sony source and personal note survive browser reload; script-like note text remains literal text |
| Model/priority controls | Sony/JBL switching, battery priority and arrow/Home keyboard tab navigation work |
| Merchant handoff | Disabled until acknowledgement; click-out is distinct from retailer-reported pending and rejected states |
| No-reward option | Croma remains visible; its simulated handoff has no reward-confirmation control |
| Failure states | Stale scenario blocks every affected handoff; restore button explicitly restores a snapshot; unavailable Amazon does not block Flipkart |
| Dialog accessibility | Escape closes the dialog and returns focus to its opener; labelled checkbox and status selector work |
| Mobile navigation | Menu opens, exposes Brief audit and closes on Escape |
| Mobile journey | Capture, model confirmation, note, product switching, comparison preference and handoff verified at 375 CSS px content width |
| Narrow reading | Case/evidence at 360 CSS px content width have no page-level horizontal overflow; wide evidence tables scroll within their containers |
| AI record | Authored decision record loads and phrase search returns matches; Qwen selector points to the correct source artifact |
| Reach calculator | Inputs 10% and 0.2 produce 0.02 incremental orders/user/quarter, labelled assumptions; 101% produces a validation message |
| Compliance visibility | Missing raw AI transcript requirement is visible in the rendered audit |
| Visual review | Desktop case/prototype and mobile case/prototype/handoff screenshots inspected; stretched product image and collapsed heading spacing corrected |

## Execution limits

The managed preview ran at `http://terminal.local:4173/`. Desktop Chrome was used directly. Responsive mobile checks used the same live pages inside fixed-width iframes (375/390 px outer widths; 360/375 px content after desktop scrollbars). This tests the responsive CSS and interactive page at narrow widths; it is not a real-device Android/iOS, mobile Safari or native share-sheet test.

The browser automation environment intermittently timed out and emitted extension-origin metadata errors. Successful UI checks are listed above; those extension errors are not application defects. The screenshot timeout recovered using the documented browser screenshot API. No claim of a formal WCAG certification, measured p95 service latency, load test, offline support or real merchant/network integration is made.

Screenshots are in `docs/qa/`. The mobile case screenshot preceded a small heading-spacing correction; the final generated HTML includes the correction. Reproduce the build with `npm ci`, `npm run build`, `npm run check`.

## Remaining submission requirement

The full AI transcript remains incomplete. Available reconstructions/extracts are explicitly labelled. The original interview is missing, so it remains inherited qualitative evidence only. Receipt time and submission destination require the candidate's verification.
