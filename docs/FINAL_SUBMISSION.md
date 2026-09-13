# CashKaro Universal Shopping Skill — final strategic proposal

Author: Ujjawal Anand. September 2026.

Canonical content: `content/case.md`. Rendered at `index.html`.

<section class="case-section" id="metric" data-part="problem">
<p class="section-label">01 / Assignment alignment</p>

## The original problem remains the mandate.

This proposal addresses the problem in the [CashKaro assignment](../source-material/cashkaro_assignment.pdf): **existing users, including previous transactors, continue to make eligible purchases without routing them through CashKaro.** The user misses a potential benefit; CashKaro misses an attributable transaction.

The brief leaves the causes open and describes its product directions as starting points. We are therefore not replacing the assigned problem. We are selecting one potential cause, identifying the users affected, and proposing a different point of intervention.

<div class="metric-panel"><span>North star · fixed cohort</span><strong>Tracked orders / existing user / quarter</strong><p>The proposal succeeds only if it increases total valid tracked orders among the users originally assigned to the experiment.</p></div>

**Selected problem:** the effort of remembering and re-entering CashKaro after reaching a purchase decision elsewhere. **Proposed response:** make CashKaro available at that decision, with the chosen product preserved. This builds on the brief's Share/deep-link direction and the contextual value of an extension. It does not require CashKaro to own product discovery.
</section>

<section class="case-section" id="problem" data-part="problem">
<p class="section-label">02 / Problem selection</p>

## Distinguish an unavailable benefit from an avoidable lost order.

Bypass can have several explanations. A shopper may forget CashKaro, find the additional steps inconvenient, distrust the payout, see little value in the reward, or buy an excluded product. These causes require different interventions.

The initial focus is **recall and re-entry friction where a meaningful benefit could otherwise be earned**. This is attractive because reducing the extra effort can affect the route of an existing purchase without requiring more purchase demand. It is also close to CashKaro's existing role in attribution and rewards.

CashKaro's mainstream [documented journey](https://cashkaro.com/how-it-works) starts with entering CashKaro and selecting a retailer. Its [Deals Anytime Telegram precedent](../research.html#telegram) shows that external link conversion also exists. “Destination dependence” describes the remaining burden of deliberately inserting CashKaro into a journey; it does not mean every purchase must start on its homepage.

This remains a problem hypothesis. If small benefits or payout distrust explain most bypass in the target segment, improving access alone will be insufficient.
</section>

<section class="case-section" id="journey" data-part="problem">
<p class="section-label">03 / Purchase journey</p>

## Intervene when the decision is complete and the route is still open.

A shopper may move between Google, YouTube, an assistant and a retailer before deciding. The sequence below is illustrative, not a claim that every user follows the same path.

<div class="journey-map"><div><span>01 / Need</span><strong>Set requirements</strong><p>Budget, priorities and constraints.</p></div><div><span>02 / Evaluate</span><strong>Research alternatives</strong><p>Search, video, assistants or retailers.</p></div><div class="moment"><span>03 / Opportunity</span><strong>Choose the purchase</strong><p>Product decided. Route still actionable.</p></div><div><span>04 / Complete</span><strong>Retailer checkout</strong><p>Payment, delivery and returns.</p></div></div>

At stage three, the user has already invested effort in a decision. Asking them to restart that journey introduces another task at the point they want to finish.

The opportunity is to preserve the chosen product, merchant and variant while checking the eligible benefit. A product recommendation alone is insufficient context. Missing details require clarification, and an item already in a retailer cart may not qualify. The product must recognise when the opportunity has passed.
</section>

<section class="case-section" id="evidence" data-part="problem">
<p class="section-label">04 / Evidence and limits</p>

## The evidence supports investigating friction, not declaring its prevalence.

The inherited **one-respondent account** describes shopping in retailer apps, reluctance to switch, low CashKaro salience, rewards perceived as too small, and roughly 50/50 subjective confidence in payment. This provides useful competing explanations. It does not establish a representative segment, observed conversion loss or willingness to use an AI integration.

The assignment establishes bypass. CashKaro's public instructions establish the need for an eligible route. Platform documentation establishes emerging commerce capabilities. None establishes how many existing CashKaro users reach purchase decisions inside assistants. No new interviews, internal telemetry or authenticated account audit are claimed here.

Before committing to a build, research should reconstruct users' last three online purchases: where the decision formed, when CashKaro was considered, whether a benefit existed, and why it was bypassed. Include routine purchases and people who do not use AI. The [evidence ledger](../research.html) distinguishes documentary facts, inherited user evidence, inference and assumptions.
</section>

<section class="case-section" id="why-now" data-part="problem">
<p class="section-label">05 / Market context</p>

## AI changes the purchase handoff, even before it becomes mainstream.

Shopping already begins outside CashKaro. Google's report of shopping-related YouTube searches by over 200 million logged-in users in India in July 2025 illustrates this distribution of attention. It measures activity, not transactions or CashKaro overlap. [Source](https://blog.google/intl/en-in/products/platforms/fueling-the-next-era-of-creator-led-shopping-experiences-in-india/)

Assistants can bring requirements, comparison and a purchase decision into one conversation. OpenAI's product-discovery investments and Google's Universal Cart make that emerging handoff worth investigating. Google's announced initial rollout is US-focused; neither source proves adoption within our Indian user cohort. [OpenAI](https://openai.com/index/powering-product-discovery-in-chatgpt/) · [Google](https://blog.google/products-and-platforms/products/shopping/google-shopping-cart/)

The strategic question is whether CashKaro can participate when those decisions become purchases. The near-term decision is to fund a bounded validation effort, not to assume AI already represents a material transaction share. [India research and measurement limits](../research.html#india).
</section>

<section class="case-section" id="segment" data-part="problem">
<p class="section-label">06 / Initial segment</p>

## Start with existing users who can encounter the proposed moment.

The initial conceptual segment is existing CashKaro users with a prior valid tracked transaction, recent AI-assisted product research and supported online shopping activity. Their familiarity with CashKaro reduces the need to explain the underlying benefit; their research behaviour creates a plausible external handoff.

Segment size is unknown. A sampled first-party survey, linked with consent to pre-period order and category data, would estimate reach and identify survey nonresponse. We should not infer representativeness from enthusiasts who volunteer to try the skill.

The phone in the prototype makes the interaction easy to evaluate. It is **not a recommendation to pursue phone purchases as the growth strategy**. Category selection must consider repeat opportunities, route eligibility and meaningful benefits together. Beauty, fashion, home and accessories are candidates to investigate, not validated priorities. The first pilot would use two merchant paths selected after those checks.
</section>

<section class="case-section" id="missing" data-part="problem">
<p class="section-label">07 / Opportunity sizing</p>

## A useful feature can still be too small to move the business metric.

CashKaro observes its own exits and attributed orders more directly than purchases completed elsewhere. An untracked click does not establish a sale, and an AI session does not establish an eligible purchase. Opportunity sizing needs a denominator beyond feature activity.

Let **r** be the share of the fixed cohort with an eligible, reachable AI purchase opportunity, and **d** the incremental valid orders per such user during the quarter. A planning approximation is **r × d**, after displacement and invalid orders. This is a sensitivity model, not a causal estimate.

For illustration, 10% reach and 0.2 additional orders per reachable user yield only 0.02 orders per assigned user. These are hypothetical inputs. The [experiment workbench](../experiment.html#reach-model) shows how reach, economics and statistical power determine whether the opportunity merits further investment.
</section>

<section class="case-section" id="assets" data-part="problem">
<p class="section-label">08 / Company advantage</p>

## Extend a capability CashKaro has already demonstrated.

CashKaro's [2025 Campus Partner listing](https://unstop.com/internships/campus-partner-internship-cashkaro-1545241) describes creating cashback links through its **Deals Anytime Telegram bot**. A related listing describes sending product links to the bot. This is company-specific evidence of external routing, rather than a capability inferred solely from the core app.

The proposal generalises that pattern: accept a selected purchase from another surface, determine the eligible benefit and return an approved route. The precedent does not establish reusable APIs, current bot adoption, account-linking behaviour or AI-platform approval. Those require separate verification.

CashKaro's relevant assets are its affiliate relationships, benefit rules, attribution processes and reward settlement. An assistant can recommend a product without owning those obligations. CashKaro can provide the reward service without building a competing recommendation engine. The advantage is operational, although it is not exclusive: platforms and other affiliates could develop comparable capabilities.
</section>

<section class="case-section" id="alternatives" data-part="problem">
<p class="section-label">09 / The brief's proposed directions</p>

## Build on the relevant directions and explain the departures.

The five suggested directions address different reasons for bypass. The selected product combines elements of two; it does not dismiss them all.

| Direction in the brief | Problem it addresses | Decision and rationale |
| --- | --- | --- |
| **Widget / quick access** | CashKaro is remembered, but entry takes effort | Useful low-effort improvement. Not the lead because it still requires recall before purchase. |
| **Browser extension** | The shopper forgets CashKaro while browsing a retailer | Retain the contextual-assistance principle. An extension alone leaves retailer-app and assistant journeys outside its reach; installed reach and fresh eligibility rules need validation. |
| **Contextual reminders** | The user needs a timely prompt | Not the lead. CashKaro click-outs provide incomplete intent signals, creating a risk of irrelevant interruptions. |
| **Share / deep link** | CashKaro is remembered after a product is found | **Retain as the routing foundation and alternative surface.** It preserves product context, but remembering to share remains the user's responsibility. |
| **Shopping agent / discovery** | CashKaro needs a reason to enter earlier | Reject owning discovery. Winning another research destination requires product data and a new habit, without demonstrated demand for either. |

The Universal Shopping Skill is an own-direction extension under the brief: it tests whether a host can offer the existing routing value at purchase intent. If users must repeatedly remember to invoke it, its advantage over Share becomes substantially weaker.

The earlier overlay, Shortlist and Order Check concepts are retained in the [decision history](../ai-transcript.html). They respectively introduced permission and attribution risk, a new discovery habit, or an indirect repeat-order mechanism.
</section>

<section class="case-section" id="decision" data-part="problem">
<p class="section-label">10 / Recommendation</p>

## Validate contextual distribution before committing to scale.

**Recommend CashKaro Universal Shopping Skill, powered by one Purchase Router and platform-specific adapters.** The assistant retains responsibility for recommendations. After the user selects a product and merchant, CashKaro checks the benefit and offers an approved route with explicit consent.

This direction offers a potential reduction in repeated recall and a reusable capability across external surfaces. It loses to Share on deployment control, current reach certainty and commercial simplicity. The recommendation is therefore for staged investment with decision gates, not a broad launch or an assumed uplift.

The independent critique challenged platform-controlled invocation and favoured Share as the first surface. That criticism materially shapes this proposal: establish distribution and partner feasibility first, preserve Share as a separate option, and stop if the contextual advantage cannot be demonstrated.

Retailer economics remain unresolved. A user benefit and an additional CashKaro-tracked order do not, by themselves, establish an additional retailer sale.
</section>

<section class="case-section" id="experience" data-part="solution">
<p class="section-label">11 / Customer experience</p>

## Preserve the decision. Make the benefit understandable.

The [interactive prototype](../prototype.html) lets the reviewer change shopping priorities and budget, compare fictional products, select one and reconsider the choice. This represents the host assistant's role. CashKaro enters only after selection and does not influence product ranking.

The proposed interaction has four commitments:

1. **Keep the selected purchase intact.** Transfer the product, merchant and variant without asking the user to repeat the research.
2. **Explain the value before asking for activation.** Separate the price payable today from potential Cashback or restricted Rewards later.
3. **Make participation voluntary.** Connect an account, review conditions and explicitly accept the route, or continue without CashKaro.
4. **Set an accurate expectation at handoff.** A route can be ready before an order is tracked or a benefit is confirmed.

The neutral assistant, product specifications, offers, connection and retailer destination are simulated. Contextual placement illustrates the intended experience, not an approved integration. Reviewer scenarios expose the product's limits without occupying the default shopping view.
</section>

<section class="case-section" id="scope" data-part="solution">
<p class="section-label">12 / First release</p>

## Deliver a reliable handoff before expanding the proposition.

The first release should support one reviewed host integration and two commercially approved merchant paths. Its customer promise is narrow: check a specific purchase, explain the eligible benefit and preserve the destination when the user continues.

| Included in the first release | Deferred or excluded |
| --- | --- |
| Purchase-specific eligibility and benefit checks | CashKaro product recommendations or commission-based rankings |
| Revocable account connection for that surface | A universal account connection across unrelated platforms |
| Clear conditions, consent and approved routing | Automatic coupon injection or hidden attribution changes |
| Direct continuation when a benefit cannot be offered | Cart repair, checkout, payment or fulfillment |
| Operations ownership of supported rules | Broad catalog coverage before reliable maintenance exists |

This scope deliberately avoids a new discovery habit. The user already has a product decision; the product helps complete it through an eligible route. Later tracking visibility may reuse CashKaro's existing processes, but it is not essential to validate the initial handoff.
</section>

<section class="case-section" id="architecture" data-part="solution">
<p class="section-label">13 / Product responsibilities</p>

## One capability, with clear ownership at every step.

The universal element is CashKaro's routing capability. Each host needs its own integration and approval. The architecture should preserve the same customer promise across those differences.

<div class="boundary-grid"><div><span>AI assistant</span><h3>Select the purchase</h3><p>Requirements, research, recommendation and user choice.</p></div><div><span>CashKaro</span><h3>Check and route</h3><p>Account identity, benefit rules, explicit consent and approved attribution.</p></div><div><span>Retailer</span><h3>Complete the order</h3><p>Current price, availability, payment, fulfillment and returns.</p></div></div>

ChatGPT, Claude and Gemini are potential surfaces, not confirmed distribution partners. Share-to-CashKaro is an alternative entry into the same capability. It remains a distinct customer behaviour with its own activation cost.

MCP and APIs can connect systems; they cannot grant placement or commercial permission. The [technical appendix](../experiment.html#architecture) defines the proposed interfaces and validation responsibilities. No existing internal API is assumed, and no CashKaro language model is required.
</section>

<section class="case-section" id="trust" data-part="solution">
<p class="section-label">14 / Benefit integrity</p>

## Accuracy is part of the value proposition.

A benefit card creates a financial expectation. It must distinguish the retailer's checkout price, estimated Cashback and restricted Rewards. A conditional effective value may help explain Cashback, but it cannot be presented as an instant discount. Rewards must retain their redemption restrictions.

Eligibility depends on more than merchant support. Product, variant, category, caps, exclusions, channel and traffic-source permission can change the result. A stale or incomplete check should produce an honest explanation, not an estimated amount presented with false confidence.

The prototype includes a ₹65 capped benefit, zero benefit, Rewards, unsupported merchant, missing context, expired policy, prior referral and route failure. It blocks activation when the user says the item is already carted. That answer is not proof of actual retailer cart state.

In every failure, the selected product remains available and the user can continue directly. Only the chosen purchase and required account authorization should be shared, not the full conversation, payment credentials or unrelated browsing history.
</section>

<section class="case-section" id="economics" data-part="solution">
<p class="section-label">15 / Business model</p>

## Separate attribution growth from retailer demand creation.

CashKaro can gain a valid tracked order when a purchase that would have gone directly to a retailer follows an approved CashKaro route. The retailer may still have received that order without CashKaro. This is potentially **attribution recapture with an explicit user benefit**, not demonstrated incremental retailer demand.

Partnerships must agree which traffic sources, deep links and attribution practices are permissible before a path is enabled. Visible value and user consent are necessary, but neither overrides merchant or network terms. Known earlier referrals require an approved handling policy; the product must not silently replace them. Unknown referral history cannot be treated as proof that no earlier referral exists.

The [affiliate-industry review](../research.html#attribution) informs these safeguards. Commercial evaluation should include retained commission, reversals, support costs and partner objections. Establishing retailer incrementality requires retailer-level evidence or a separate holdout. Merchant switching, comparison and abandonment recovery may create additional value later, but are outside the initial proposition.
</section>

<section class="case-section" id="feasibility" data-part="solution">
<p class="section-label">16 / Delivery feasibility</p>

## Resolve the dependencies that determine the customer experience.

The first delivery milestone is evidence that a supported purchase can make the complete journey. Product, partnerships, engineering and operations should jointly verify three dependencies before an outcome experiment.

**Distribution:** can one host offer CashKaro at an actionable purchase moment, or does the user need to remember an explicit command? The distinction determines whether the proposed recall benefit exists.

**Commercial and operational readiness:** can the selected merchant paths accept this traffic, provide maintainable rules and attribute a qualifying order correctly? The Telegram precedent supports investigating reuse; it does not answer these questions.

**Purchase continuity:** can the integration preserve the exact destination, validate changing conditions and recover safely from missing information or timeout?

Engineering can then wrap reusable CashKaro capabilities or propose missing services. A bounded integration assessment should establish effort, ownership and operating costs before a delivery commitment. Detailed schemas, latency targets and failure handling belong in the [implementation plan](../experiment.html#architecture).
</section>

<section class="case-section" id="measurement" data-part="solution">
<p class="section-label">17 / Outcome experiment</p>

## Evaluate the users assigned, including those who never activate.

Freeze the eligible existing-user cohort before treatment and randomize at account level, stratifying by pre-period order frequency and merchant mix. Treatment receives integration access and onboarding; control retains the current CashKaro experience.

**Primary outcome: the difference in valid tracked orders over a full quarter per originally assigned existing user, across all CashKaro channels and categories.** Include non-connectors, users who never encounter an offer, users who decline it and users with no orders. Connection and usage cannot become post-assignment eligibility rules.

Predefine deduplication, validity, exclusions and the backfill cutoff. Report pending and confirmed order quality separately; neither replaces the assigned north star. Growth in AI-routed orders with unchanged total orders is channel displacement.

Connection, opportunity, surfacing and activation explain the mechanism. They do not establish causality on their own. The [full protocol](../experiment.html) retains intention-to-treat analysis, power requirements, reach dilution, contribution economics and a separate approach to retailer incrementality.
</section>

<section class="case-section" id="launch" data-part="solution">
<p class="section-label">18 / Activation and rollout</p>

## Earn expansion through successive evidence gates.

Initial recruitment should use CashKaro-owned invitations to the predefined segment. A concrete purchase example can explain the value and account connection. Organic host-directory discovery is not a dependable acquisition plan.

First, use the prototype to assess whether users understand the benefit, recognise the conditions and can continue through both success and failure. Second, run a limited technical and partner pilot to verify product continuity, rule accuracy and attribution. Third, proceed to the fixed-cohort outcome experiment only when reach and sample requirements are credible.

These stages answer different questions. Usability does not establish demand, and a technically successful route does not establish incremental orders. Expansion to more hosts or merchants should follow the evidence from each stage.

If only explicit invocation is available, evaluate that experience separately. Share may be the better first operational surface in that situation, but success there would not validate contextual AI distribution.
</section>

<section class="case-section" id="gates" data-part="solution">
<p class="section-label">19 / Investment criteria</p>

## Define what would stop, change or expand the product.

The product should not continue simply because the routing capability can be reused. Each material uncertainty needs an owner, a measurement plan and a decision before wider exposure.

<div class="kill-grid"><div><b>01 / Reach</b><p>Eligible AI purchase opportunities are too infrequent to move the cohort outcome.</p></div><div><b>02 / Distribution</b><p>Repeated explicit recall removes the proposed advantage over Share.</p></div><div><b>03 / Permission</b><p>Merchant or network terms reject the traffic source or attribution treatment.</p></div><div><b>04 / Reliability</b><p>Product continuity, benefit accuracy or attribution cannot meet the agreed standard.</p></div><div><b>05 / User value</b><p>The available benefit does not justify the added interaction.</p></div><div><b>06 / Incrementality</b><p>Orders move between CashKaro channels without increasing the total.</p></div><div><b>07 / Economics</b><p>Contribution deteriorates after rewards, reversals, support and platform costs.</p></div><div><b>08 / Competition</b><p>Hosts provide superior native incentives and no longer need the capability.</p></div></div>

Thresholds should be set from observed cohort variance, operating costs and the consequences of errors before launch. Misleading benefits or unauthorized redirects require immediate suspension. An underpowered result requires an explicit decision about further evidence, not a declaration of success. [Gate owners and decision rules](../experiment.html#rollout).
</section>

<section class="case-section" id="defense" data-part="solution">
<p class="section-label">20 / Final assessment</p>

## The recommendation is ambitious; the commitment is conditional.

The case for this product is that CashKaro may be able to serve an existing purchase without owning the surface where the decision began. It builds on an external-routing precedent and extends two directions in the assignment: preserving context through links and offering assistance at a relevant moment.

The evidence does not yet establish that this is CashKaro's largest growth opportunity. It establishes a coherent strategic hypothesis with a specific user moment, relevant company capabilities and identifiable risks. A small validation investment is justified; broad rollout is not yet justified.

I would change the lead if research shows limited reachable demand, if Share produces comparable value with lower effort, or if approved affiliate economics cannot sustain the benefit. The product decision should be defended through those tests, not through the quality of its presentation.

The submission provides the proposed experience and the conditions under which it should proceed. [Evidence](../research.html), [decision history](../ai-transcript.html) and the [assignment audit](../compliance.html) make the supporting material and remaining requirements explicit.
</section>
