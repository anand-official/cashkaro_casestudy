# Qwen — Behavioral Analysis of Contextual Interventions for CashKaro

> **Source note:** This is a text extraction / working copy of the analytical core of the Qwen research PDF supplied in the ChatGPT workstream. The original Qwen PDF was substantially longer because it also contained a large bibliography/search-output appendix. This file preserves the product-relevant analysis. Treat Qwen conclusions as adversarial research input, **not ground truth**; several recommendations were explicitly corrected later in `docs/AI_CONTEXT_HANDOFF.md`.

## Behavioral barriers to CashKaro activation in existing users

The analysis framed the challenge as overcoming behavioral patterns and psychological barriers that can suppress CashKaro routing among existing users. It used qualitative evidence from a single respondent and explicitly acknowledged that this is rich but non-generalizable evidence.

Hypotheses discussed:
- intention/action gap
- economic/value threshold
- trust/reward-loop erosion
- shopping-context friction
- discovery/eligibility/value-comparison gap
- awareness/habit

The respondent said ₹50–₹60 cashback was not important enough to make them care strongly, and described confidence in actually receiving cashback as roughly 50/50 after prior tracking failures. Qwen interpreted the combination as low perceived value plus high perceived risk.

Qwen also emphasized shopping-context friction. The respondent described a retailer-first journey: open retailer app → find product → check platform/card offers → purchase. The respondent said they frequently remain where they already are rather than leaving the current shopping journey. Qwen interpreted this as context-switching aversion.

The analysis also noted a discovery/value-comparison gap: the respondent checks native platform/card offers first, so an external cashback layer competes with offers already visible in the retailer interface. Qwen flagged a key unknown: whether native offers/coupons and CashKaro cashback are stackable or mutually exclusive for specific retailers/categories.

Awareness/habit was another hypothesis: the respondent generally did not think about CashKaro and said they would not particularly notice if it disappeared. Qwen correctly noted that this is especially pronounced for a low-engagement respondent and cannot establish prevalence for the core cohort.

### Qwen's respondent-level evidence table

| Hypothesis | Qwen's rating from this respondent | Evidence cited |
|---|---|---|
| H1: Intention/action gap | Moderate | “forget about it”, “too much effort”; confounded by other causes |
| H2: Economic/value threshold | Strong at respondent level | ₹50–₹60 not important enough |
| H3: Trust/reward-loop erosion | Strong at respondent level | ~50/50 payout confidence after tracking failures |
| H4: Shopping-context friction | Strong at respondent level | tendency to stay in current retailer journey |
| H5: Discovery/value-comparison gap | Moderate | checks native/card offers first |
| H6: Awareness/habit | Strong at respondent level | does not think about CashKaro / would not notice disappearance |

**Later correction by ChatGPT:** These “Strong” labels are only strong evidence that a mechanism existed for **this respondent**. They are weak evidence about population prevalence. Do not repeat them as cohort truths.

---

# Assessing the V1 hypothesis: retailer-level context

Qwen assessed the V1 hypothesis as surfacing a CashKaro prompt when an existing user opens a supported retailer app. The core hypothesis is that knowing the user has entered a supported shopping environment may be enough context to make CashKaro relevant without needing product-level knowledge.

Qwen liked the direction because it prioritizes behavioral efficacy over product-level complexity and avoids depending on screen scraping or richer UI understanding. It treated the retailer app as the user's established shopping environment and CashKaro as an external consideration the user otherwise has to remember.

Qwen argued that a lightweight contextual intervention could address the respondent's tendency to “stop where you are,” but also correctly warned that context alone does not solve low value or broken trust.

It argued that a generic rate message may be less persuasive than an explicit value message. It suggested examples such as:

> “Unlock an additional ₹80 cashback on top of your 10% card offer.”

**Later correction:** This copy is **not valid for V1** because V1 does not know the current item, price, card offer, or stackability. The surviving principle is “communicate value honestly,” not the fabricated item-level value message.

---

# Sensitivity model

Qwen recommended modeling potential impact as a chain of sequential probabilities instead of inventing a single leakage rate.

Conceptual framework:

> **Potential incremental tracked orders ≈ Sessions × Coverage × Adoption × Exposure × Activation rate × Purchase conversion × Incremental effect**

Interpretation:

- **Sessions:** supported retailer sessions per existing user.
- **Coverage:** share of sessions technically/commercially eligible for the intervention.
- **Adoption:** share of randomized users completing required setup/permissions.
- **Exposure:** share of eligible sessions where the intervention actually appears.
- **Activation rate:** share of exposed sessions where the user explicitly activates CashKaro.
- **Purchase conversion:** share of activated sessions producing a purchase.
- **Incremental effect:** the portion that represents new tracked orders rather than orders that would have been tracked anyway.

This sensitivity framework survived later review.

Qwen then inserted illustrative assumptions such as 60% adoption, 80% exposure, 30% activation and speculated about a 5–10% north-star uplift and “statistical significance.”

**Later correction:** These numbers were rejected. They have no CashKaro baseline, sample-size, variance or power-analysis support. Statistical significance cannot be inferred from uplift percentage alone.

---

# Economic viability and partner attestation

Qwen argued that economic viability depends on incremental affiliate contribution exceeding implementation/servicing/compliance costs, and that the experiment should observe not only order count but also economics such as GMV and commission margin where internally available.

Qwen emphasized partner attestation: the mechanism must comply with CashKaro's retailer/affiliate arrangements and attribution rules.

This broad risk survived later review.

However, Qwen also extrapolated from public Amazon/Flipkart affiliate information and generic cookie windows as though those public rules necessarily represented CashKaro's own negotiated terms.

**Later correction:** Public affiliate program terms are only industry proxies. CashKaro may operate through negotiated direct/network arrangements with different rules. The defensible conclusion is:

> Partner eligibility, attribution rules and economics must be validated with CashKaro's Partnerships/Affiliate/Legal teams before launch.

Qwen also cited generic “fintech app development cost” estimates.

**Later correction:** These generic app-cost estimates were rejected as irrelevant noise because CashKaro already has an app, backend, attribution system, engineering organization and retailer data. The case should discuss relative engineering complexity and required capabilities, not quote costs to build an entire fintech app.

---

# Future-state dependencies

Qwen suggested richer product-level context could improve relevance later, e.g. calculating total savings or comparing offers.

It correctly separated that richer future-state question from the core V1 hypothesis, but it also suggested AI/ML on historical/browsing behavior as a personalization path.

**Later correction:** Predictive AI was explicitly removed from V1 because it reintroduces the same inference problem and creates additional privacy/data complexity. Product-aware future value should only be shown if CashKaro later gains privacy-safe, partner-supported product/category/price context.

Future-state example allowed only as a clearly labelled concept:

> **Estimated ₹320 cashback on this purchase**

Not part of V1.

---

# Experiment recommendations from Qwen

Qwen correctly anchored success to:

> **incremental tracked orders per randomized existing user**

rather than pill impressions, taps or activation rate.

It recommended guardrails such as:
- permission adoption / revocation
- pill dismissal
- uninstall
- attribution/tracking failure
- user complaints / support volume
- partner/commercial issues

These remain useful.

Qwen argued that prompt messaging should counter value/trust barriers, but again proposed item-level messages like “Unlock an extra ₹X cashback on this item” and “Beat the best offer inside.”

**Later correction:** Rejected for V1 because CashKaro does not have the required product/native-offer context.

---

# Net contribution of Qwen to the final case

## Kept
- barriers are stacked; solving context alone may not solve value/trust
- retailer-level context is a legitimate V1 hypothesis
- sensitivity/reach model rather than fabricated leakage rate
- primary metric must remain incremental tracked orders per randomized user
- permission, annoyance, tracking and partner economics are major guardrails
- product-level context belongs, if anywhere, in a later privacy-safe state

## Rejected / modified
- population-level confidence from one respondent
- product-aware V1 copy
- “beat the best offer” messaging
- arbitrary adoption/activation/uplift numbers
- claims of statistical significance without power analysis
- generic app-development cost estimates
- direct application of public affiliate terms to CashKaro contracts
- AI/predictive browsing as a V1 requirement

The important lesson was not “Qwen proved the idea.” It was that Qwen exposed the strongest reasons the idea could fail and helped make those risks explicit in the final experiment and kill gates.
