<section class="case-section" id="existing">
<p class="section-label">Public product audit / 11 September 2026</p>

## Comparison is already here. Continuity is the proposed bet.

CashKaro's [Google Play listing](https://play.google.com/store/apps/details?id=com.cashkaro) advertises price comparison. Its [headphones category](https://cashkaro.com/product/earphones-headphones-offers) and individual product pages expose merchant comparison and rewards. I therefore rejected “add price comparison” as a novel proposal.

The proposed change is an explicit research entry, saved source and decision note, and continuity through merchant choice. Logged-in account functionality was not audited: absence of a matching saved-list feature is not established. If the internal audit finds one, reuse it and test entry/clarity rather than build another list.

Observed public content is evidence of a displayed capability, not a guaranteed live inventory feed, tested purchase flow or private API.
</section>

<section class="case-section" id="commercial">
<p class="section-label">Commercial evidence</p>

## Use the applicable rule, not the biggest percentage.

| Primary source | Observation on 11 Sep 2026 | Product consequence |
| --- | --- | --- |
| [CashKaro: Amazon](https://cashkaro.com/stores/amazon) | Mobile phones/Apple products listed at 0%; electronics at 1%; Rewards differ from bank cashback | No generic phone-saving promise; preserve reward type |
| [CashKaro: Flipkart](https://cashkaro.com/stores/flipkart) | Audio at 1.95%, capped at ₹130; Apple Audio excluded; pre-existing cart/wishlist/save-for-later restrictions | Evaluate model/category rules and cap; Shortlist never writes a retailer cart |
| [CashKaro: Croma](https://cashkaro.com/stores/croma) | Active page says cashback unavailable; title suggests a promotional cashback rate | Prioritize active eligibility; retain a no-cashback alternative |
| [CashKaro help](https://cashkaro.com/how-it-works) | Click-outs, pending/confirmed states and missing-cashback process documented | A click cannot be represented as a tracked or paid order |

These are public customer-facing terms, not CashKaro's negotiated affiliate contracts. The retrieved markup includes both app-eligible and app-ineligible modal text; it cannot establish which path is active. Partner-specific app/browser attribution needs a real device and integration check.

Some product pages also contain generated prose with implausible percentage values. The demo ignores that prose and records the visible comparison rows as **reference snapshots**, with the underlying store rules taking precedence before an actual purchase. We have not validated a checkout price, a user's eligibility, delivery, bank offers or commission collection.
</section>

<section class="case-section" id="google">
<p class="section-label">Google Universal Cart / primary research</p>

## Borrow the persistent decision. Do not borrow unearned infrastructure.

[Google's May 19, 2026 announcement](https://blog.google/products-and-platforms/products/shopping/google-shopping-cart/) introduces a cart across merchants and Google surfaces, with deal/stock insights. It announced a U.S. Search/Gemini rollout for summer, with YouTube/Gmail later; this is not evidence of availability in India.

[The Cart API overview](https://developers.google.com/merchant/ucp/guides/overview/cart-overview) separates pre-checkout basket building from payments. It documents one-way creation/transfer; synchronization is not part of that initial capability. [Implementation reference](https://developers.google.com/merchant/ucp/implementation/2026-04-08/cart-api).

**Inference for this case:** a durable consideration object can create value before a merchant wins. CashKaro still needs its own acquisition surface, catalog rights, eligibility logic and permitted click-out. UCP is neither an open comparison database nor a substitute for affiliate approval. No UCP integration is proposed for V1.
</section>

<section class="case-section" id="qualitative">
<p class="section-label">Inherited qualitative evidence</p>

## One respondent. A summarized record. Several plausible mechanisms.

The [Qwen working extract](source-material/QWEN_BEHAVIORAL_ANALYSIS_TEXT.md) describes one respondent's context friction, low-value threshold, uncertain payout confidence and retailer-first journey. The [ChatGPT reconstruction](transcripts/CHATGPT_PRIMARY_CONTEXT.md) records subsequent corrections. I have not interviewed that respondent or recovered the original interview.

I use this as **inherited qualitative input**, not raw user testimony. No sentence from it is presented as a newly verified participant quote. Its role is to expand the hypothesis set beyond forgetfulness, not to prove segment size or preference for Shortlist.

Proposed next research: eight initial sessions with existing users facing an actual purchase, spanning frequent, sparse and lapsed CashKaro use. Observe their current process before introducing the concept; then test capture, unprompted return, reward comprehension and merchant choice. Add sessions when new mechanisms keep appearing. This work has not been conducted.
</section>

<section class="case-section" id="reach">
<p class="section-label">Reach and behavior proxies</p>

## A device share is not a shopping-order share.

[Statcounter India](https://gs.statcounter.com/platform-market-share/desktop-mobile-tablet/india) reports August 2026 web usage of 64.45% mobile, 34.97% desktop and 0.58% tablet. These are web-usage observations, not e-commerce orders; native-app shopping is missing. A one-third desktop-shopping estimate would be a weak proxy under an explicit equal-mix assumption, not a measured fact.

[Google's 2024 SEA video research](https://business.google.com/en-all/think/search-and-video/boost-engagement-youtube-marketing-strategy/) supports video's role in research, but covers Southeast Asian markets rather than the CashKaro India cohort and comes from the platform selling video ads. It supplies a directional analogy only. No behavior percentage is transferred to this case.

For investment sizing, request actual existing-user device mix, category purchase frequency, eligible model/merchant coverage, existing comparison usage and experiment variance. The missing data is not replaced with a market-size slide.
</section>

<section class="case-section" id="prototype-data">
<p class="section-label">Prototype data manifest</p>

## Real source snapshots. No live shopping integration.

All prices below are the values CashKaro displayed when retrieved on 11 Sep 2026, not independently verified merchant checkout quotes. Specific color, seller, stock, delivery and offer eligibility need revalidation. Reward amounts are displayed estimates, not promises; the demo never labels them cash paid.

| Model / black | Merchant | Displayed seller price | Displayed benefit | Reference |
| --- | --- | --- | --- | --- |
| Sony WH-CH720N | Amazon | ₹8,979 | ₹90 Rewards | [CashKaro product page](https://cashkaro.com/sony-wh-ch720n-wireless-over-ear-active-noise-cancellation-headphones-with-mic/CKS-Headphones-000435?ppsfacet%5BColour%5D=Black) |
| Sony WH-CH720N | Flipkart | ₹14,990 | ₹130 Cashback | Same product source |
| JBL Tune 770NC | Amazon | ₹5,999 | ₹60 Rewards | [CashKaro product page](https://cashkaro.com/jbl-tune-770nc-wireless-over-ear-anc-headphones-with-mic/CKS-Headphones-000544?ppsfacet%5BColour%5D=Black) |
| JBL Tune 770NC | Croma | ₹5,999 | No CashKaro cashback | Same product source + Croma store state |
| JBL Tune 770NC | Flipkart | ₹9,999 | ₹130 Cashback | Same product source |

Manufacturer attributes: [Sony specifications](https://www.sony.co.in/headphones/products/wh-ch720n/spec) list approximately 192g and maximum 35 hours of music with noise cancellation on. [JBL specifications](https://www.jbl.com/TUNE770NC.html) list 232g, 44 hours with ANC on and foldability. Battery claims are manufacturer laboratory maxima; they are not equivalent real-world tests. The prototype does not rank sound quality or invent review consensus.

Product photos are unchanged CashKaro-hosted packshots, credited in the [asset provenance manifest](assets/product-image-sources.json). No ownership or open-license claim is made.

The prototype's stale-offer, unavailable-store and tracking controls are explicitly **simulated scenario states**. They are not observations of an actual outage or purchase.
</section>

<section class="case-section" id="decisions">
<p class="section-label">Decision log</p>

## The changes in judgment are part of the submission.

| Stage | What was proposed or challenged | Final treatment |
| --- | --- | --- |
| Predicted reminders | Infer shopping timing from routed history | Deprioritized: accuracy does not identify incremental opportunity |
| Retailer overlay | Detect an already-open retailer app | Rejected as lead: commercial value and permission risk |
| Insider PM challenge | Enter where buying decisions remain open | Incorporated as stakeholder input; not a partner approval |
| Universal Cart analogy | Persistent cross-surface consideration | Retained principle; rejected universal checkout/infrastructure assumptions |
| Smartphone shortlist | Narrow by researched, expensive products | Changed after mobile-reward exclusions and caps were inspected |
| Comparison feature | Present as a new product capability | Corrected: public CashKaro comparison already exists |
| Headphone Shortlist | Persist research context through a merchant decision | Chosen as a capped learning bet, contingent on impact and economics |
| Broad agent / Reddit summaries | Add recommendation intelligence | Cut: rights, evaluation, cost and data quality do not earn V1 complexity |

[Raw insider feedback](source-material/INSIDER_PM_WHATSAPP_RAW.txt) · [Earlier overlay submission](docs/archive/RETAILER_OVERLAY_SUBMISSION.md) · [Current full case](docs/FINAL_SUBMISSION.md)
</section>

<section class="case-section" id="assumptions">
<p class="section-label">Unresolved claims</p>

## What must still be learned inside CashKaro.

| Assumption | Current confidence | Evidence needed / owner |
| --- | --- | --- |
| Research continuity is a user problem worth solving | Hypothesis | Observed real purchase journeys / Product Research |
| Shortlist earns a first capture and return | Unknown | Task observation plus randomized invitation funnel / Product |
| Category reach can move the all-user metric | Unknown | Category/device baseline and full-quarter ITT / Analytics |
| Two merchant paths approve this exact flow | Unknown | Written terms, placement and attribution review / Partnerships |
| Product/price data can be reused and kept current | Public capability visible; internal contract unknown | Service audit, rights and freshness tests / Engineering + Catalog |
| More CashKaro orders mean enough retailer value | Not established | Partner-run causal retailer-outcome test / Partnerships + Merchant |
| Complete AI transcript is supplied | Incomplete | Raw exports of every contributing session / Candidate |

No adoption rate, uplift, contract, API availability, user-testing result or partner approval has been invented.
</section>
