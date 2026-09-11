# CashKaro APM Case Study — Evidence & Assumptions Matrix

> **Purpose:** Prevent the final submission from presenting hypotheses, proxies, or public affiliate assumptions as facts. Every important claim must have a known evidence status before it enters the main narrative.

---

## Evidence classes

- **A — Assignment fact:** Explicitly stated in the CashKaro brief.
- **B — Direct user evidence:** Observed in our qualitative research; directional, not prevalence evidence.
- **C — Public evidence:** External source supporting market/platform/behavior context.
- **D — Product inference:** Our synthesis; defensible but not directly observed.
- **E — Internal-data dependency:** Cannot be known responsibly without CashKaro data, partner contracts, or experiment results.

Main-deck rule: A/B/C can appear as evidence with correct labels. D must be written as an inference. E must remain an open question, sensitivity variable, or kill gate.

---

| Claim / question | Class | Current status | How it should appear | What would strengthen / falsify it |
|---|---|---|---|---|
| The assignment targets existing users | A | Strong | Fact | None needed |
| North star is tracked orders per existing user per quarter on a fixed cohort | A | Strong | Fact / metric lockup | None needed |
| Direct retailer purchases are a missed opportunity | A | Strong | Fact | None needed |
| CashKaro does not observe the complete denominator of direct eligible purchases | D/E | Strong inference from attribution model, exact visibility unknown | Analytical constraint, not absolute technical claim | Internal event/data architecture review |
| Forgetting can contribute to missed routing | B | Directional | One behavioral hypothesis | Broader interviews / survey |
| Context switching can suppress CashKaro use once shopping starts | B | Directional, strong in interview | Directional user evidence | More qualitative research / behavioral test |
| Small cashback may not justify effort for some users | B | Directional | Value-threshold hypothesis | Segment-level research |
| Tracking failures can weaken willingness to use cashback | B | Directional | Trust hypothesis | Support-ticket/review/internal claim data |
| Retailer-native/card offers dominate attention during shopping | B | Directional | Journey observation | Broader research |
| Predicted shopping timing is structurally limited by incomplete observed history | D | Defensible | Product inference | Internal feature/behavior data could support or weaken |
| Retailer-app open is stronger context than a cadence prediction | D | Core inference | Explicit thesis, phrased as judgment | A/B test of contextual vs predicted reminder |
| Retailer-app open proves purchase intent | — | Rejected | Must never appear | N/A |
| Browser-extension model has strong behavioral fit because it intervenes after shopping starts | C/D | Strong analogy | Analogy, not proof | Extension benchmark evidence |
| Mobile/app shopping is strategically important in India | C | Needs high-quality sourcing in final pass | Supporting context only | Primary/authoritative India shopping source |
| Android Shopping Companion can detect supported app context without reading the screen | C/E | Feasibility needs validation | Technical assumption / gate | Android docs + engineering spike |
| Overlay permission alone is sufficient | — | Rejected | Must never appear | N/A |
| V1 can know the exact product/category/price | — | Rejected | Must never appear | Only possible if approved integrations later exist |
| Product-aware cashback is required for V1 to work | D | Unknown | Future dependency question, not requirement | Test retailer-level V1 first |
| Users will grant required permissions | E | Unknown | Kill gate | Permission-conversion experiment |
| Users will tolerate the pill | E | Unknown | Guardrail / kill gate | Dismissal, disable, uninstall, complaints |
| Partner/affiliate agreements permit this flow | E | Unknown | Kill gate | Written partner/business/legal confirmation |
| Existing carts remain eligible after activation | E | Retailer-specific unknown | Eligibility caveat | Partner rules/internal terms |
| Companion increases tracked orders | E | Unproven | Experiment hypothesis | Randomized ITT experiment |
| High activation among adopters proves success | — | Rejected | Never use as primary proof | N/A |
| Treatment should be analyzed intention-to-treat | D | Strong experiment judgment | Experiment design | Standard causal reasoning |
| CashKaro incrementality equals retailer incrementality | — | Rejected | Must explicitly distinguish | N/A |
| Retailer receives incremental value from intercepted direct sessions | E | Unknown | Commercial kill gate | Partner experiment/attestation |
| A specific baseline leakage rate is known | E | Unknown | Do not invent | Internal purchase/leakage proxy data |
| A specific 5–10% uplift is expected | E | Unknown | Do not invent | Power analysis + experiment |
| ₹X exact cashback can be shown on current item in V1 | — | Rejected | Must never appear | Requires product/price context |
| Best permission moment is after value delivery | D | Strong product hypothesis | Product principle / experiment hypothesis | Compare permission ask timing |
| Two-step consent improves trust/control | D | Strong design hypothesis | UX rationale | Permission + activation research |
| Silent when there is no cashback is better than showing “no cashback” | D | Strong design judgment | UX principle | Interaction test |
| “Every appearance spends trust” | D | Product principle | Framing, not data claim | Guardrail behavior |

---

# Evidence gaps to close before final submission

## Priority 1 — Assignment fidelity

Verify every assignment-derived statement against the original brief and cite it accurately in Research.

## Priority 2 — India/mobile context

Use a small number of high-quality sources only. We do not need a market-research collage. Evidence should answer one question:

> Is mobile/retailer-app shopping sufficiently relevant that a desktop-only extension is an incomplete lead solution for this assignment?

## Priority 3 — Platform feasibility

Validate, at a high level:

- what Android capability can observe foreground-app context,
- what permission/value exchange that creates,
- whether a non-blocking overlay is technically plausible,
- what Play-policy constraints matter.

Do not turn the submission into Android engineering documentation.

## Priority 4 — Public CashKaro trust/value signals

Use public reviews/community posts only as qualitative support for hypotheses such as tracking uncertainty or missed cashback. Do not claim prevalence from review anecdotes.

## Priority 5 — Partner economics

Public affiliate terms can illustrate the class of risk, but must not be presented as CashKaro’s negotiated contract terms. Exact partner approval, attribution windows, rates, and incrementality rules remain internal dependencies.

---

# Claims prohibited from the final main page unless new evidence appears

- “X% of CashKaro orders leak.”
- “Users forget CashKaro most of the time.”
- “India is price-sensitive, therefore users will grant overlay permission.”
- “Amazon/Flipkart allow this exact mechanism.”
- “Overlay permission lets CashKaro know which product is being viewed.”
- “The companion eliminates all context switching.”
- “The feature will create 5–10% uplift.”
- “The retailer benefits because more tracked orders automatically mean more incremental sales.”
- “Users want an AI shopping agent.”
- “Product-aware context is required for launch.”

---

# Final evidence standard

The final case study should distinguish confidence visually and linguistically:

**Fact** — directly supported.

**Evidence** — observed but limited.

**Inference** — our product judgment.

**Assumption** — must be tested.

**Kill gate** — if false, the direction should not scale.

A senior product case study is not one that hides uncertainty. It is one that knows exactly which uncertainties matter enough to change the decision.
