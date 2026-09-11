# Insider PM feedback — commercial critique and required strategy re-open

**Date:** 11 Sep 2026

## Raw feedback from Anmol (CashKaro insider PM / product context)

> "Understand a retailer pays us when we give traffic to him or influence user intent.
>
> What the app you made do is essentially stealing traffic from the app when the user has already made the decision to buy from respective retailer.
>
> So essentially if you want to make this, make it for surfaces where user make decision e.g. YouTube video of a phone, blogs on mobile like 91mobile, look at SEO ranking for mobile mostly comparing website exist.
>
> Essentially intercept where the user is still to make a buying decision and add value there by things like shopping companion, price compare, summarization of top attributes, Reddit reviews and others.
>
> Check Google Universal Cart for inspiration."

## Why this feedback matters

This is not a copy/UI comment. It attacks the commercial mechanism of the current Android retailer-overlay hypothesis.

The existing overlay direction assumed that if CashKaro appears after a retailer app is opened, CashKaro can recover a bypassed affiliate transaction. That may increase CashKaro-attributed orders, but the retailer may already have won the user before CashKaro entered the journey. In that case CashKaro can look like an attribution interceptor rather than a source of incremental traffic or influence.

That is exactly the distinction the case already identified as:

- **CashKaro incrementality:** did CashKaro tracked orders increase?
- **Retailer incrementality:** did CashKaro create/influence a purchase or merchant choice that the retailer would not otherwise have received?

The insider feedback says this is not a theoretical edge case. It is a first-order reason to challenge the current solution.

## Consequence

The existing retailer-app overlay is no longer a locked product direction.

It must be treated as a **strong behavioral idea with a potentially fatal commercial flaw**.

The final submission should show this change in thinking rather than hide it.

A credible narrative can be:

1. We first reframed the problem from "forgetfulness" to "CashKaro is absent when shopping context exists."
2. That led to an Android retailer-overlay concept.
3. Red-teaming exposed partner incrementality as a kill gate.
4. Insider PM feedback sharpened the issue: entering *after the retailer has already won the user* may recapture attribution without creating retailer value.
5. Therefore we move the intervention **upstream into the consideration/decision stage**, where CashKaro can genuinely influence merchant/product choice and then send qualified traffic.

That is stronger product thinking than defending the first prototype.

## New strategic question

> **Where can CashKaro enter the journey while the user is still deciding what to buy or where to buy it — and add enough decision value that both the shopper and the retailer benefit?**

This changes the causal mechanism from:

`retailer app already open → cashback overlay → attribution activation`

into something closer to:

`research / consideration context → CashKaro decision value → merchant/product choice influenced → qualified click-out → tracked order`

## Candidate surfaces to investigate

These are NOT automatically the final solution. They are now the highest-priority space to evaluate.

### 1. YouTube / review content

Example: user watches a phone review before choosing a model or merchant.

Potential CashKaro job:
- identify / accept the product under consideration,
- summarize the decision-relevant attributes,
- compare effective prices across eligible retailers,
- surface cashback and card/merchant offers,
- show review/community evidence,
- let the user save the item into a cross-merchant consideration list,
- route the final retailer choice through CashKaro.

### 2. SEO / comparison / editorial pages

Examples: 91mobiles-like comparison pages, phone review blogs, buying guides, search result journeys.

This is a stronger commercial moment than the retailer app because merchant choice may still be open.

### 3. Cross-surface "decision cart" / consideration list

A user could save products from research surfaces into CashKaro before checkout. CashKaro can then work as a decision layer:
- compare merchant prices,
- calculate effective value after cashback,
- summarize specs / key trade-offs,
- surface trusted review signals,
- monitor price/availability,
- route the final purchase.

This is conceptually closer to Google's Universal Cart than the previous overlay.

## Google Universal Cart — useful inspiration, not a template

Google announced Universal Cart at I/O 2026 as a cross-merchant shopping hub. Users can add products while using Google Search, Gemini, YouTube, or Gmail; the cart can then monitor deals, price drops, availability and other shopping signals.

The important product principle for CashKaro is not "copy Google's cart." It is:

> **Own a cross-surface consideration object before checkout, then keep adding decision value until the user is ready to buy.**

Google's UCP Cart API documentation describes cart building as happening before explicit checkout intent. That maps directly to the insider PM's point: enter while decision is still fluid, not after the merchant has already won.

## A promising revised concept to evaluate

### CashKaro Decision Companion / Savings Cart

Narrow MVP candidate: high-consideration consumer electronics (e.g. smartphones).

Possible user journey:

1. User is researching a phone on YouTube, Google, a comparison site, or a review article.
2. User saves/shares the product into CashKaro (or uses a supported browser surface where CashKaro can identify the product legitimately).
3. CashKaro creates a decision card:
   - key attributes / trade-offs,
   - retailer options,
   - effective price after cashback,
   - supported bank/merchant offers where reliable,
   - review / community summary,
   - price history or price-drop watch if feasible.
4. User compares options inside a CashKaro consideration list.
5. When ready, user chooses the merchant via CashKaro.
6. CashKaro sends qualified traffic while the merchant choice was still contestable.
7. Order is tracked through the normal approved affiliate path.

This direction potentially creates a more defensible value exchange:

- **User:** less research fragmentation + better effective-price decision.
- **CashKaro:** becomes relevant earlier and earns the tracked order.
- **Retailer:** receives a user whose merchant choice was genuinely influenced by CashKaro.

## Hard questions Astra must answer before choosing this direction

1. Does this create enough decision value to change merchant choice, or is it just an AI shopping demo?
2. What exact surface gets us into the journey without invasive permissions?
3. Is "Share to CashKaro" too dependent on memory to solve the original habit problem?
4. Can Android app links / share targets / browser surfaces give enough context without Accessibility/screen reading?
5. What data sources are required for product identity, structured specs, retailer pricing, cashback eligibility and review summaries?
6. Which data can CashKaro plausibly already possess through affiliate feeds / merchant catalog relationships, and which requires new capability?
7. Is consumer electronics the right first segment because AOV and research intensity make the value more meaningful?
8. Does the solution materially improve the assignment north star: tracked orders per existing user per quarter?
9. How do we test incremental merchant influence, not only CashKaro attribution?
10. What is the smallest prototype that tests decision value before building a broad agent/cart platform?

## Current recommendation

**RE-OPEN THE PRODUCT DECISION.**

Do not ship the retailer-app overlay as the final answer merely because we already prototyped it.

The strongest current strategic direction is to investigate an **upstream decision companion / cross-surface savings cart**, probably starting with a narrow high-consideration category, while preserving the original insight that CashKaro should appear inside an existing shopping journey rather than rely on users remembering to start with CashKaro.

The new synthesis is:

> **Do not wait until the retailer has already won. Become useful while the user is still choosing — then route the purchase through CashKaro.**

This should be treated as a product decision to prove, not a conclusion to decorate.