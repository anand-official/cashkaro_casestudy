# CashKaro Universal Shopping Skill — final strategic proposal

Author: Ujjawal Anand. September 2026.

Canonical content: `content/case.md`. Rendered at `index.html`.

<section class="case-section" id="metric" data-part="problem">
<p class="section-label">01 / The assignment</p>

## Grow orders. Keep the denominator.

CashKaro earns when an eligible purchase follows its affiliate route. The [original brief](../source-material/ORIGINAL_ASSIGNMENT_TRANSCRIPT.md) reports that existing users, including past transactors, still buy directly. It deliberately leaves the cause open.

<div class="metric-panel"><span>North star · fixed cohort</span><strong>Tracked orders / existing user / quarter</strong><p>More connections, tool calls or click-outs do not count as success unless total valid tracked orders increase.</p></div>

This proposal targets **re-entry friction at a finalized purchase decision**. It does not assert that all bypass is forgetfulness, that every order can earn a benefit, or that AI already dominates Indian shopping. The ambition is distribution independence; the proof must still be incremental orders within a quarter.
</section>

<section class="case-section" id="problem" data-part="problem">
<p class="section-label">02 / Diagnosis</p>

## The extra step is part of the problem.

CashKaro's mainstream [documented journey](https://cashkaro.com/how-it-works) remains destination-first: enter CashKaro, choose a retailer, then shop. It is not the only route. Its [Deals Anytime Telegram precedent](../research.html#telegram) already points to external link conversion. **Destination dependence** describes the residual recall and re-entry burden in the mainstream journey, not a claim that external routing is impossible.

This is a structural interpretation of the journey, not a measured root cause across the user base. A better shortcut will not fix inadequate rewards, excluded products, low trust or a superior competing offer. Those are competing explanations, not implementation details.

The job to be done: **“I've decided what to buy. Help me earn the benefit I qualify for without making me redo that decision.”** Unlike another destination, a callable service could meet an explicit purchase request where it occurs.
</section>

<section class="case-section" id="journey" data-part="problem">
<p class="section-label">03 / User journey</p>

## Find the handoff, not another homepage.

The following is an illustrative journey to validate with real purchases. Users may loop between stages or begin inside a retailer; they do not necessarily use every platform.

<div class="journey-map"><div><span>01 / Need</span><strong>“I need a new phone.”</strong><p>Budget, camera, battery.</p></div><div><span>02 / Decide</span><strong>Search · video · assistant</strong><p>Research and narrow options.</p></div><div class="moment"><span>03 / Opportunity</span><strong>“This is the one.”</strong><p>Product decided. Route still actionable.</p></div><div><span>04 / Purchase</span><strong>Retailer checkout</strong><p>Pay, receive, return if needed.</p></div></div>

The skill enters at stage three, before adding items to a retailer cart. A finalized product does not necessarily establish a merchant or exact variant. If either is missing, ask for that context; do not pick a merchant for its commission. If the shopper has already carted the item, the proposed route may be ineligible. Do not promise seamless recovery.
</section>

<section class="case-section" id="evidence" data-part="problem">
<p class="section-label">04 / What we know</p>

## Evidence for friction. A hypothesis about the surface.

The inherited **one-respondent account** describes retailer-app shopping, reluctance to switch, low CashKaro salience, small rewards that feel unimportant and roughly 50/50 subjective confidence in payout. These are reported attitudes and behaviour, not observed transactions or population estimates. Their preference for an integrated experience is hypothetical willingness, not adoption.

The brief establishes bypass among existing users. Public CashKaro instructions establish routing requirements. Neither establishes how many existing users finish purchase decisions in AI assistants. No new interviews, authenticated CashKaro audit or internal telemetry were available for this rebuild.

The [evidence ledger](../research.html) separates primary documentation, survey findings, inherited user evidence and assumptions. The next research task is to reconstruct the last three purchases with existing users, including non-AI and routine purchases. Look for an actual lost route and its cause, rather than asking whether they like an AI feature.
</section>

<section class="case-section" id="why-now" data-part="problem">
<p class="section-label">05 / Why now</p>

## AI accelerates a wider distribution problem.

Search, video, social and retailer apps already shape purchases outside CashKaro. Google reports shopping-related YouTube searches by over 200 million logged-in users in India in July 2025. That is activity, not purchases or CashKaro overlap. [Source](https://blog.google/intl/en-in/products/platforms/fueling-the-next-era-of-creator-led-shopping-experiences-in-india/)

OpenAI now supports richer product discovery and merchant feeds. Google's Universal Cart connects shopping contexts and merchant handoffs; its announced initial rollout is US-focused. These investments make external purchase-intent surfaces strategically credible. They also create powerful competitors. [OpenAI](https://openai.com/index/powering-product-discovery-in-chatgpt/) · [Google](https://blog.google/products-and-platforms/products/shopping/google-shopping-cart/)

The decision is to buy an **option on emerging distribution**, with bounded investment and explicit expiry gates. It is not a forecast of AI transaction share. BCG's consumer research and Bain's India retail report provide context, not our cohort denominator; see [scope and limitations](../research.html#india).
</section>

<section class="case-section" id="segment" data-part="problem">
<p class="section-label">06 / First user</p>

## Existing users with a real AI-assisted purchase ahead.

First recruit accounts with a prior valid tracked transaction before cohort freeze, recent self-reported AI product research and supported online shopping activity. Choose two merchant paths only after commercial and context-transfer checks. Do not require Android if the chosen host works across devices.

A phone makes the interaction legible; it is **not the category growth strategy**. Include research-led purchases in beauty, fashion, home and accessories where approved route rules and enough repeat opportunities exist. Eligibility and frequency must be measured together: a frequent category with tiny or excluded benefits is not automatically attractive.

Estimate reach through a sampled first-party survey linked with consent to pre-period category/order data. Check survey nonresponse and avoid treating CashKaro enthusiasts as representative. Account connection and host events refine the funnel after assignment, but must not redefine the denominator. The claim is initially about this frozen segment, not all CashKaro users.
</section>

<section class="case-section" id="missing" data-part="problem">
<p class="section-label">07 / Opportunity sizing</p>

## The missing denominator still matters.

CashKaro can observe its own exits and attributed orders better than purchases made entirely elsewhere. An AI session is not an eligible purchase; an untracked click is not proof of a sale. Broad AI survey adoption cannot fill that hole.

For planning, let **r** be the fraction of the fixed cohort with an eligible, reachable AI purchase opportunity; let **d** be the incremental valid orders per such user over the quarter. Then cohort gain is approximately **r × d**, after displacement and invalid orders. This decomposition is a sensitivity model, not an identified causal estimate.

If r is 10% and d is 0.2, the illustrative gain is only 0.02 orders per assigned user. If reach is too small, a spectacular activation rate still fails. The [experiment workbench](../experiment.html#reach-model) makes this dilution visible and ties the required effect to contribution, cost and statistical power.
</section>

<section class="case-section" id="assets" data-part="problem">
<p class="section-label">08 / Why CashKaro</p>

## Use the commerce machinery, not a new recommendation model.

CashKaro already has a concrete external-routing precedent. Its [2025 Campus Partner listing](https://unstop.com/internships/campus-partner-internship-cashkaro-1545241) describes using the **Deals Anytime Telegram bot to create cashback links**. A related listing describes sending product links to the bot. This is stronger evidence than inferring routing capability from the core app alone.

**Generalize an existing pattern, rather than invent it from scratch.** The new proposal is a shared, typed routing capability with assistant-specific adapters and contextual purchase handoffs. The bot does not establish reusable internal APIs, AI-host approval, adoption or incremental orders. Those remain validation gates.

<div class="boundary-grid"><div><span>AI assistant</span><h3>What to buy</h3><p>Research, recommendations and product choice.</p></div><div><span>CashKaro</span><h3>How to earn</h3><p>Identity, eligible benefit and approved route.</p></div><div><span>Retailer</span><h3>Complete the sale</h3><p>Price, stock, payment, delivery and returns.</p></div></div>

CashKaro's advantage is operational: fulfilling the reward promise under a known affiliate relationship. It is not exclusive AI intelligence. Platforms could negotiate their own incentives; affiliates could expose similar services. The defensibility question is whether CashKaro can provide better coverage, accurate rules and trusted settlement at acceptable economics.
</section>

<section class="case-section" id="alternatives" data-part="problem">
<p class="section-label">09 / Prioritization</p>

## The safest launch and the strongest strategic bet differ.

These are qualitative judgments with uncertain reach, not fabricated weighted scores. The [detailed comparison](../research.html#alternatives) covers effort, privacy, data and merchant value.

| Direction | Strongest reason to choose it | Decisive cost / reason not to lead |
| --- | --- | --- |
| **Universal Shopping Skill** | Potentially removes repeated recall at an external purchase decision; shared capability across hosts | Highest host-control uncertainty; unknown current reach and affiliate acceptance |
| Share-to-CashKaro | Controllable, explicit, reuses the same router | User must remember to share; exact context and pre-cart rules still matter |
| Android overlay | Context without opening CashKaro first | Permissions, interruption and late attribution; app-open is not buying intent |
| Browser extension | Useful at an existing web-shopping moment | Installed desktop reach and fresh domain rules; mobile app journeys remain outside it |
| Contextual reminders | Owned distribution and simple delivery | Click-outs are incomplete intent signals; fatigue and false positives |
| Order Check | Existing ledger/support foundations | Indirect repeat-order mechanism; cannot solve bypass before first routing |
| Owned discovery agent / Shortlist | Could influence product or merchant choice | Must win a new destination habit and maintain expensive product data |
| Widget / quick access | Cheap reduction in entry effort | Still depends on remembering CashKaro |

Choose Share if the objective is maximum deployment control today. Choose the Skill for a bounded strategic experiment in externally initiated commerce. Do not pretend it wins every criterion.
</section>

<section class="case-section" id="decision" data-part="problem">
<p class="section-label">10 / Product decision</p>

## Become callable at the purchase decision.

**Build CashKaro Universal Shopping Skill, powered by one CashKaro Purchase Router and separate platform adapters.** An assistant passes a finalized product and selected merchant; CashKaro checks the benefit and creates an approved route after explicit consent.

The latest independent critique, supplied as the candidate's summary, rightly challenged guaranteed invocation and recommended Share as more controllable. The response is architectural and experimental: one backend, conditional AI distribution, Share as the second surface, and stop gates for reach and partner acceptance. The full latest review was not supplied; this is not its verbatim conclusion.

The strongest objection survives: if the AI already won the decision for a retailer, this may recapture attribution. Explicit cashback gives a user benefit but does not prove merchant incrementality. The proposal is ambitious precisely because it exposes that commercial bet rather than hiding it inside a slick demo.
</section>

<section class="case-section" id="experience" data-part="solution">
<p class="section-label">11 / The experience</p>

## A small intervention after a big decision.

The [interactive prototype](../prototype.html) uses an original neutral assistant, fictional phones and labelled offer fixtures. Research and ranking happen before CashKaro and never change with benefit size. The user chooses a phone, accepts or explicitly requests the skill, connects a simulated account, checks conditions and chooses whether to continue.

The card leads with **pay today** and a separate **estimated Cashback or Rewards** amount. An after-cashback value is conditional, never the checkout price. Rewards are not subtracted as though they were bank cash. A zero, capped or unverifiable benefit gets an honest state.

The neutral host can demonstrate intended contextual surfacing or explicit invocation. Changing the adapter shows a shared capability, not an approved integration with ChatGPT, Claude or Gemini. Every external platform placement remains a dependency. The retailer destination is simulated; no purchase, payout or real affiliate cookie is created.
</section>

<section class="case-section" id="scope" data-part="solution">
<p class="section-label">12 / MVP</p>

## Three functions. No CashKaro LLM.

V1 accepts product identity, exact merchant URL, selected variant and connected user identity where available. It checks merchant/source permission, context completeness, current benefit policy and the approved handoff method. Connect once per supported account/platform relationship, with revocation; do not imply universal cross-platform login.

| Proposed function | Responsibility | Must not do |
| --- | --- | --- |
| `check_route` | Validate merchant, URL, source surface, variant and policy freshness | Treat assistant confidence as eligibility |
| `get_benefit` | Return typed benefit, estimate, caps, conditions and expiry | Turn an “up to” rate into an entitlement |
| `create_route` | Bind consent and user to a revalidated, approved destination | Redirect arbitrary URLs or silently replace attribution |

No recommender, checkout, wallet, coupon injection, screen scraping, Accessibility, universal cart or SKU knowledge graph ships. Order tracking can later reuse existing systems; it is not required to demonstrate the V1 handoff. A small operations-reviewed route registry precedes broad catalog coverage.
</section>

<section class="case-section" id="architecture" data-part="solution">
<p class="section-label">13 / Universal architecture</p>

## One router. Different contracts with each host.

<div class="route-diagram" role="img" aria-label="ChatGPT, Claude and Gemini adapters connect to one CashKaro Purchase Router; its identity, eligibility and benefit services create an approved retailer route."><div class="adapter-row"><span>ChatGPT adapter</span><span>Claude adapter</span><span>Gemini adapter</span></div><p>Platform-specific tools / MCP / APIs · availability varies</p><div class="router-node"><small>CASHKARO PURCHASE ROUTER</small><strong>Identity + eligibility + benefit + consent</strong></div><p>Revalidate → approved redirect → retailer checkout</p><div class="adapter-row"><span>CashKaro app</span><span>Share surface</span><span>Retailer</span></div></div>

MCP standardizes tool communication; it does not grant app placement, checkout access or commercial rights. A Gemini API tool in a developer-owned assistant is not an installed consumer Gemini integration. Host-specific authorization, discovery and UI reviews remain separate.

The [technical plan](../experiment.html#architecture) defines proposed schemas, source ownership, expiring quotes, signed routes, idempotency and fail-closed behavior. No existing internal endpoint is asserted. The browser demo executes a deterministic local fixture model, not a deployed affiliate service.
</section>

<section class="case-section" id="trust" data-part="solution">
<p class="section-label">14 / Trust and failure</p>

## A route is not a reward guarantee.

A supported merchant is not sufficient. Exact product/category, variant, eligible amount, caps, exclusions, channel and source-of-traffic permission can all change the result. Revalidate immediately before issuing the route; stale quotes cannot be activated.

The prototype includes Rewards, small capped Cashback, zero benefit, unsupported merchant, missing product context, expired policy and a route failure. It also blocks the Cashback CTA if the shopper says the item was already carted. User confirmation is not proof of actual cart contents; production must not overstate it.

On failure, preserve the product and let the user continue without CashKaro. On success say **“Route ready”**, not “Cashback earned.” Tracking and confirmation happen later under retailer rules. Limit shared data to the chosen purchase and account token; no full conversation history, card credentials or unrelated browsing. Disconnect must revoke future use.
</section>

<section class="case-section" id="economics" data-part="solution">
<p class="section-label">15 / Commercial model</p>

## Count CashKaro value and merchant value separately.

AI → retailer can bypass CashKaro. AI → approved CashKaro route → retailer can add valid tracked orders. It may still be **attribution recapture with an explicit user benefit**, rather than new retailer demand.

Before enabling a path, partnerships must approve the source class, deep-link behavior, commission treatment and stand-down rules for existing affiliate referrals. User consent is necessary but does not override those rules. No silent cookie overwrite is allowed; where an earlier affiliate context is known and routing is not permitted, stand down. Unknown provenance requires an agreed handling policy, not a promise that detection is perfect.

The [Honey/network audit](../research.html#attribution) explains the risk without treating allegations as a court finding. Monitor retained commission, reversals and support costs. A retailer-level total-order holdout would test merchant incrementality; CashKaro's own analytics cannot establish it. Merchant comparison, switching and abandonment recovery are possible later bets, not hidden V1 scope.
</section>

<section class="case-section" id="feasibility" data-part="solution">
<p class="section-label">16 / Delivery path</p>

## Propose the missing systems. Price the uncertainty.

First, engineering and operations inspect current redirect creation, account linking, category rules and settlement records. Build a small authenticated service around reusable internals where possible; create the missing rule service where necessary. Use approved product/deep-link metadata, not arbitrary scraping. The model's URL and prose are untrusted input.

Proposed additional router budget: p95 under one second for a cached check and under two seconds for route creation; these are targets, not measurements. On timeout, offer the original destination without benefit claims. CashKaro model inference cost is zero by design; host inference, rule maintenance, APIs, support and adapter operations still cost money.

Estimate delivery after a bounded integration spike, not from the number of screens. Build one reviewed host adapter and two approved merchant paths first. The other adapters in the demo illustrate portability only. [Interfaces, ownership and staged work](../experiment.html#architecture).
</section>

<section class="case-section" id="measurement" data-part="solution">
<p class="section-label">17 / Experiment</p>

## Measure everyone offered the capability.

Freeze the eligible existing-user cohort before treatment. Randomize by user, stratifying on pre-period order frequency and merchant mix. Treatment gets integration access and onboarding; control retains the current CashKaro experience. Connection, invocation and purchase are post-assignment outcomes, not inclusion criteria.

**Primary: difference in valid tracked orders during a full quarter per originally assigned user, across every CashKaro channel and category.** Include non-connectors, never-invoked users and zeros. Define valid-order and exclusion rules in advance; report pending and confirmed quality separately with a fixed backfill cutoff. Do not quietly redefine the north star as confirmed-only orders.

A gain only in AI-routed orders with flat total orders is channel displacement, not success. Track known technical opportunities but acknowledge unobservable host moments. The [protocol](../experiment.html) includes power inputs, reach dilution, attribution maturity, contribution and a distinct retailer experiment.
</section>

<section class="case-section" id="launch" data-part="solution">
<p class="section-label">18 / GTM</p>

## A bounded invitation, not a mass-market promise.

Recruit from the pre-defined existing-user segment through CashKaro-owned invitations and an account connection flow. Explain the benefit using a concrete purchase example. Do not depend on organic app-directory discovery or assume the platform will suggest CashKaro by default.

Separate prototype usability, a technical/partner pilot and a powered outcome experiment. In usability, verify that people understand payable price, conditional benefits, host placement and a failed eligibility check. In the pilot, verify exact-product continuity and attribution before increasing exposure. Analytics must establish feasible sample and duration before the experiment begins.

If contextual invocation is unavailable, test explicit invocation as a different experience and report the residual recall friction. Share-to-CashKaro uses the same router and can ship after path approval; it is a fallback with its own behavioral test, not proof that the AI thesis worked.
</section>

<section class="case-section" id="gates" data-part="solution">
<p class="section-label">19 / Kill gates</p>

## A reusable backend does not excuse a failed thesis.

<div class="kill-grid"><div><b>01 / Reach</b><p>Too few eligible AI purchase moments to move the cohort metric.</p></div><div><b>02 / Distribution</b><p>Hosts cannot surface the skill usefully; repeated recall erases the advantage.</p></div><div><b>03 / Permission</b><p>Merchant or network rejects AI-origin traffic or attribution handling.</p></div><div><b>04 / Reliability</b><p>Context transfer, benefit accuracy or attribution cannot meet the agreed quality bar.</p></div><div><b>05 / User value</b><p>Benefits are too small for the added step; interruptions outweigh savings.</p></div><div><b>06 / Incrementality</b><p>AI orders merely move from another CashKaro channel.</p></div><div><b>07 / Economics</b><p>Contribution declines after rewards, reversals, support and platform costs.</p></div><div><b>08 / Disintermediation</b><p>Hosts offer better native merchant incentives and no longer need this service.</p></div></div>

Set thresholds using cohort variance, cost and error consequences before launch. Immediately disable misleading benefits or unauthorized redirects. An underpowered null result calls for a decision about evidence cost, not a claim of success. The [gate owners and decision rules](../experiment.html#rollout) make stop/change/scale operational.
</section>

<section class="case-section" id="defense" data-part="solution">
<p class="section-label">20 / What would change my mind</p>

## Ambitious direction. Conditional expansion.

I would change the lead if research shows that these users rarely reach purchasable decisions in assistants, that explicit sharing captures comparable value with much less friction, or that approved traffic cannot retain sustainable commission. A capability surviving through Share is useful reuse, but it is not evidence of AI distribution success.

The roadmap earns each expansion: one reviewed AI adapter and a tiny route registry; a fixed-cohort test; additional hosts or Share when the gates pass; only then investigate merchant-value optimization. No parallel rebuild of discovery, payments and tracking.

This is a proposal for CashKaro's next distribution capability, not an announcement of a live partnership. The choice accepts less deployment control in exchange for a chance to reduce repeated recall. The final proof is still additional valid tracked orders. [Evidence](../research.html) · [AI decision history](../ai-transcript.html) · [Assignment audit and remaining exports](../compliance.html).
</section>
