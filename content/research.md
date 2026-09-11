<section class="case-section" id="existing">
<p class="section-label">01 / Existing-feature audit</p>

## The baseline already includes tracking, email and support.

Checked against public CashKaro pages on **11 September 2026**. This is a public documentation audit; the authenticated Android and web journeys and actual notification delivery were not accessed. That limitation matters because the proposed connection between these capabilities may already exist in some form.

| Capability | Public evidence | Implication for Order Check |
| --- | --- | --- |
| Earnings states and acknowledgement emails | [How it works](https://cashkaro.com/how-it-works) describes pending, confirmed, requested, paid and cancelled states | Reuse the ledger and existing messages |
| Stored click-outs | Same help page describes retailer exit clicks in missing-cashback enquiries | A visit record is plausible; an accessible service is still unverified |
| Existing recovery workflow | [Dedicated help](https://cashkaro.com/gethelp/my-cashback-rewards-is-missing/my-cashback-rewards-did-not-track-what-can-i-do) asks for retailer, purchase date, reference and amount | Prefill reliable visit context; do not invent a new ticket system |
| Price comparison | [CashKaro’s Play listing](https://play.google.com/store/apps/details?id=com.cashkaro) advertises comparison | Comparison alone was not a defensible Shortlist differentiator |
| One receipt joining visits, user reports, policy and support | Not established by this public audit | Validate in the logged-in baseline before claiming novelty |

The proposed value is reduced context loss and a clearer next action. It is not a claim that CashKaro currently lacks an earnings history or customer support. If the authenticated audit already shows this continuity, the appropriate task is to fix the observed usability defect in that flow.
</section>

<section class="case-section" id="commercial">
<p class="section-label">02 / Commercial and policy checks</p>

## Conflicting guidance is a product dependency, not a detail to average away.

The latest retrieval in this revision differs from parts of the prior review’s snapshot. Public pages may change and parsed pages may expose multiple interface states. The following records what was retrievable, not an independently approved policy.

| Source | Relevant finding on 11 Sep 2026 | Treatment |
| --- | --- | --- |
| [Amazon terms](https://cashkaro.com/stores/amazon) | Missing Rewards: report within 30 days of order; tracking description starts 48 hours after shipment | Purchase date and shipment date are different inputs |
| [Flipkart terms](https://cashkaro.com/stores/flipkart) | Missing cashback: within 30 days of order; summary and detailed tracking durations differ | Do not hard-code a universal tracking timer |
| [General help](https://cashkaro.com/how-it-works) | Generic three-day wait and ten-day reporting guidance | Conflicts with merchant pages; operations must resolve applicability |
| Dedicated missing-cashback help, linked above | Offers a sixty-minute tracking promise after entering a ticket | Do not turn help copy into a guarantee that a claim will succeed |

Both merchant pages restrict pre-existing cart/wishlist items; other exclusions still apply. Amazon benefits are restricted Rewards. Flipkart cashback is subject to the relevant category and order terms. Multi-item reports may represent one purchase; deduplicate before counting orders. Consumer terms do not reveal negotiated commission, incrementality clauses or feed rights.

**Proposed source-of-truth rule:** an operations-approved, merchant-specific policy with effective dates and an auditable owner. Preserve the version at the visit and verify the applicable policy again for recovery. Conflicting or stale rules suppress automatic deadlines; they surface a support route promptly. Never extend or shorten someone’s real claim window using a guessed fallback.

Public redemption guidance distinguishes bank-eligible confirmed cash from gift-card-only Rewards. Confirmed cash and Rewards can be combined for gift-card redemption at the stated ₹250 minimum. This is why the prototype’s ₹180 cash plus ₹80 Rewards account can redeem a gift card but has not reached the cash-only bank threshold. Those balances are fictional.
</section>

<section class="case-section" id="google">
<p class="section-label">03 / Google Universal Cart</p>

## Preserve context. Do not assume Google’s distribution or contracts.

Google’s [19 May 2026 announcement](https://blog.google/products-and-platforms/products/shopping/google-shopping-cart/) describes a cross-merchant cart, shopping assistance and a U.S. rollout starting with Search and Gemini, with YouTube and Gmail to follow. The merchant remains responsible for the sale. This is a source about Google’s announced product, not proof of universal availability in India.

The [Cart API overview](https://developers.google.com/merchant/ucp/guides/overview/cart-overview), updated 10 September 2026, describes one-way cart creation/transfer into a merchant system and distinguishes it from checkout and payment. It does not supply CashKaro with a universal catalog, retailer-cart access or affiliate attribution permission.

The strategic inference is two-sided. Continuity across discovery and purchase can be useful. But Google owns large discovery surfaces, so cloning the visible cart misses the distribution advantage and creates a competitor dependency. CashKaro should first test a useful improvement at an intent surface it actually has. Order Check borrows continuity of context, not Google’s cart API.
</section>

<section class="case-section" id="qualitative">
<p class="section-label">04 / Qualitative provenance</p>

## Three inputs, three different evidentiary roles.

| Input | What was supplied | What it can support | What it cannot support |
| --- | --- | --- | --- |
| Inherited single-user account | A prior reasoning record describing small rewards, payout uncertainty and retailer-app friction | Questions and hypotheses for research | Prevalence, causality, a fabricated interview transcript or a headphone discovery need |
| External product feedback | A message shared by the candidate questioning late-entry affiliate economics | An adversarial commercial argument | Verified employer/title, partner approval or private contract facts |
| Claude Cowork review | The supplied review of commit f482fb6 | A critique to verify and act on | Independent market validation or unquestioned implementation instructions |

The stakeholder’s identity and employer are omitted in this public revision. The original role label was not independently verified. The [anonymized summary](source-material/EXTERNAL_PRODUCT_FEEDBACK.md) is labelled as edited context; it is not a raw transcript. Earlier Git history may still contain the original record.

No new interviews were performed in this revision. The proposed [purchase-reconstruction worksheet](docs/RESEARCH_WORKSHEET.md) has a blank observation table. The candidate should collect actual behaviour before claiming the trust mechanism is validated. Five to eight conversations can reveal misunderstandings and contrary examples; they cannot estimate a representative adoption rate.
</section>

<section class="case-section" id="reach">
<p class="section-label">05 / Desktop proxy</p>

## Web device share is not shopping order share.

[Statcounter’s India view](https://gs.statcounter.com/platform-market-share/desktop-mobile-tablet/india) reports August 2026 web usage at **34.97% desktop, 64.45% mobile and 0.58% tablet**. This describes the measured web mix, not orders, CashKaro customers or native-app shopping.

For the brief’s extension question, use that desktop share only as a starting proxy. Let d = 0.3497, k = desktop orders per measured web unit relative to non-desktop web, and a = native-app orders as a fraction of all shopping orders. A deliberately simplified estimate is:

**Desktop order share = (1 − a) × d·k / (d·k + 1 − d).**

| Explicit scenario assumptions | Estimated desktop order share |
| --- | --- |
| k = 0.5; native-app share a = 0.8 | 4.2% |
| k = 1; a = 0.6 | 14.0% |
| k = 2; a = 0.4 | 31.1% |

The middle case is a working planning scenario, not an Indian shopping statistic. These scenarios are not confidence bounds; different inputs can exceed 34.97%. Therefore the web share is not a mathematical upper bound. Extension reach is lower again after eligibility, installation and active use. Replace this model using CashKaro’s device order data plus a credible all-shopping source before investment.

If revisited, an extension needs a versioned registry of eligible domains, paths, benefit types and exclusions; approved affiliate destinations; operations ownership; expiry; a refresh mechanism and a kill switch. Unknown or expired mappings must not advertise an entitlement. The [Android permission reference](https://developer.android.com/reference/android/Manifest.permission#SYSTEM_ALERT_WINDOW) separately establishes that drawing above other apps requires special access; permission acceptance and allowed use remain adoption and policy questions for the rejected overlay.
</section>

<section class="case-section" id="prototype-data">
<p class="section-label">06 / Prototype data contract</p>

## Real source checks. Fictional accounts and events.

| Element | Provenance and boundary |
| --- | --- |
| Merchant names, benefit distinctions and source links | Public CashKaro sources, checked 11 Sep 2026 |
| Public guidance conflict | Actual conflict between retrieved help and merchant terms; no internal approval obtained |
| ₹180 cash, ₹80 Rewards and ₹90 order benefit | Fictional fixtures to exercise pending/confirmed and redemption distinctions; not calculated from a real order |
| Visit, purchase and event dates | Fictional fixtures around a fixed 11 Sep 2026 demo clock; not a historical terms archive |
| Reviewed-policy option | Illustrative enquiries from day +3 through day +30; explicitly simulated, not CashKaro approval |
| Order reference and amount entered into support draft | Reviewer-entered fictional values; held only in page memory; nothing submitted |
| Account persistence, order reconciliation, notifications, affiliate redirect and support APIs | Proposed production capabilities; not connected in this static prototype |

The active prototype has no live price ranking. The previous Flipkart price snapshots were insufficiently verified for a purchase comparison. A third-party tracker cannot repair that without confirming variant, merchant, seller, eligibility and checkout price. The old implementation is preserved in Git history; its diagnosis is explicitly superseded.
</section>

<section class="case-section" id="decisions">
<p class="section-label">07 / Decision trail</p>

## Two pivots, each open to challenge.

1. **Overlay → Shortlist:** commercial feedback challenged entering after the retailer had already won the shopper. The first revision explored earlier research utility.
2. **Shortlist → Order Check:** independent critique exposed weak discovery evidence, low-frequency category choice, shallow continuity and fragile prices. Primary checks also showed the proposed notification replacement already partly exists.
3. **Order Check → validation gate:** choose a connected status/recovery improvement, then require an authenticated baseline audit, behavioural research, policy reconciliation and a powered economics check before launch.

[Full response to Claude’s review](docs/REVIEW_RESPONSE.md) · [Public decision log](docs/DECISION_LOG.md) · [AI interaction completeness](ai-transcript.html)
</section>

<section class="case-section" id="assumptions">
<p class="section-label">08 / Assumptions and decisions</p>

## The facts that could reverse the recommendation.

| Assumption | Evidence today | Owner / next validation | Decision if false |
| --- | --- | --- | --- |
| Unresolved order uncertainty contributes to later bypass | Inherited N=1 and behavioural reasoning | Product: actual purchase reconstruction | Prefer the observed friction or value problem |
| Current interfaces lose visit-to-support context | Public documentation only | Design: authenticated walkthrough and task test | Improve existing flow; do not duplicate it |
| Sufficient reachable existing users | No cohort denominator supplied | Analytics: pre-period click-intent reach and order variance | Stop or narrow to a service improvement without a growth claim |
| Records can be joined reliably | Some records publicly documented; internal schema unknown | Engineering and data: sample joins, ambiguity audit | Add matching capability or reduce scope |
| Merchant claim windows can be reconciled | Conflicting public guidance | Operations / partnerships: effective-dated approval | Disable automated deadlines and related reminders |
| Contribution exceeds servicing cost | No retained commission or support cost supplied | Finance and analytics: marginal economics | Do not scale on raw tracked count alone |
| Better clarity changes future routing | Unproven core hypothesis | Randomized test with later-purchase decomposition | Report recovery-only value honestly or stop |
| Complete raw AI sessions can be supplied | Reconstructions, extracts and reviews only | Candidate: original exports | Submission remains noncompliant if required sessions are absent |
</section>
