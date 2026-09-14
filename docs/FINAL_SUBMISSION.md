# CashKaro Connector: final strategic proposal

Author: Ujjawal Anand. September 2026.

Canonical content: `content/case.md`. Rendered at `index.html`.

<section class="case-section brief-cover" id="metric" data-part="problem">
<p class="section-label">01 / The mandate</p>

# More purchases through CashKaro.<br><em>The same existing users.</em>

Someone has just picked their phone. Model, colour, shop, all decided. Their thumb is over Buy Now.

That is the second CashKaro is worth real money to them. It is also the second they are not thinking about CashKaro at all. Everything below is about closing that gap.

<div class="outcome-visual"><span class="visual-label">The required outcome</span><div class="metric-fraction"><strong>Valid tracked orders</strong><span>Existing users in the fixed cohort</span></div><span class="quarter-label">per quarter</span></div>

<div class="cover-decision"><span class="visual-label">Proposed product</span><strong>CashKaro Connector</strong><p>A connectable CashKaro account that any assistant can call to check a chosen purchase and return an approved retailer route.</p></div>

<p class="slide-source">Ujjawal Anand · Concept proposal · September 2026<br><a href="../source-material/cashkaro_assignment.pdf">CashKaro assignment</a> · <a href="../prototype.html">Open interactive prototype ↗</a></p>
</section>

<section class="case-section" id="problem" data-part="problem">
<p class="section-label">02 / Problem selection</p>

## Four reasons people skip us. Only one is about the moment.

People walk past CashKaro for different reasons, and that distinction matters more than it sounds, because each reason needs a different fix.

If the cashback on a purchase is fifteen rupees, no reminder is going to change anyone's mind. If someone doubts the money ever arrives, a faster route only gets them to a promise they already distrust. If the product simply is not eligible, nothing helps at all.

Then there is the fourth kind of person. They know us. They trust us. They would happily take the money. And they still buy direct, because at the moment they decide, coming through CashKaro means stopping, switching apps, and finding the thing all over again.

That one is not a persuasion problem. It is a design problem, and it is the one I picked.

<div class="cause-map"><div><span>Value</span><strong>“The benefit is too small.”</strong></div><div><span>Trust</span><strong>“Will I receive it?”</strong></div><div><span>Eligibility</span><strong>“Does this purchase qualify?”</strong></div><div class="selected-cause"><span>Selected focus · recall + re-entry</span><strong>“I have decided. Do I need to start again?”</strong></div></div>

<p class="takeaway">So this is a bet on one slice: purchases where the benefit is real and the only thing in the way is the detour. How big that slice is, I cannot yet tell you. Section 04 is honest about that.</p>
</section>

<section class="case-section" id="journey" data-part="problem">
<p class="section-label">03 / Purchase journey</p>

## The gap is about four seconds wide.

Research happens everywhere. A YouTube review, a friend's WhatsApp message, six open tabs, and increasingly a conversation with an assistant. CashKaro cannot own all of that and should not try.

But every one of those paths ends in the same place: a person who has made up their mind and is about to pay. That is a far smaller target, and it is the only one we need to hit.

<div class="journey-visual"><div class="journey-stages"><div><span>01</span><strong>Need</strong><small>Set a budget</small></div><div><span>02</span><strong>Research</strong><small>Search · video · AI</small></div><div class="decision-moment"><span>03</span><strong>“This is the one.”</strong><small>Product + merchant chosen</small></div><div><span>04</span><strong>Checkout</strong><small>Retailer completes order</small></div></div><div class="journey-branch"><span class="branch-label">Today's extra task</span><p>Remember CashKaro → re-enter → locate the route</p><span class="branch-label proposed">Proposed handoff</span><p>Offer CashKaro here → preserve the selected purchase</p></div></div>

<p class="slide-source">Illustrative journey. Exact variant and an eligible pre-cart route are required; existing carts cannot be assumed recoverable.</p>
</section>

<section class="case-section" id="evidence" data-part="problem">
<p class="section-label">04 / Evidence quality</p>

## What I actually know, and what I am guessing.

Here is the uncomfortable part of this submission. I have one detailed user conversation, which I inherited, and the brief's own statement that existing users buy without us. That is the entire evidence base.

The conversation is genuinely useful. It describes preferring the retailer's own app, not wanting to switch, rewards too small to bother with, and real doubt about whether the money turns up. It points at my hypothesis. It does not prove it, and one person never could.

<div class="evidence-split"><div><span class="visual-label">Available evidence</span><strong class="evidence-number">1<span>inherited respondent</span></strong><p>Retailer-app preference, switching reluctance, small rewards and uncertain payout confidence.</p><p>The brief separately establishes bypass among existing users.</p></div><div><span class="visual-label">Not established</span><ul><li>Which cause explains most lost orders</li><li>CashKaro users' AI-shopping overlap</li><li>Demand for this integration</li><li>Incremental order uplift</li></ul></div></div>

<p class="takeaway">The fix is not more opinion. Sit with users, walk back through their last three purchases including the dull ones, and count how many were routes we could have won and did not. Do that before asking anybody whether they like the feature.</p>

<p class="slide-source"><a href="../research.html">Evidence ledger and limitations ↗</a> · No new interviews or internal telemetry claimed.</p>
</section>

<section class="case-section" id="why-now" data-part="problem">
<p class="section-label">05 / Why now</p>

## Why now, and not in two years.

Shopping research used to sprawl across search, video and a dozen tabs. It is starting to collapse into a single conversation, and that conversation ends with a recommendation rather than a page of links.

If that holds, the end of a chat becomes a place where purchases get decided. Which is exactly where we just said the gap sits.

<div class="market-visual"><div><span class="visual-label">Already distributed</span><div class="surface-cloud"><span>Google Search</span><span>YouTube</span><span>Retailer apps</span><span>Social</span></div><p>CashKaro does not own every starting point.</p></div><div class="market-shift"><span class="visual-label">Emerging compression</span><strong>Need<br>Research<br>Recommendation</strong><span class="conversation-bracket">One conversation</span><p>A purchase handoff becomes strategically valuable.</p></div></div>

Worth being clear about what this does not prove. OpenAI's product-discovery work and Google's Universal Cart tell us large companies are building here. They say nothing about how many Indians shop this way, and nothing about how many of them are ours. Google's cart work launches in the US first.

<p class="slide-source"><a href="https://openai.com/index/powering-product-discovery-in-chatgpt/">OpenAI · 24 Mar 2026</a> · <a href="https://blog.google/products-and-platforms/products/shopping/google-shopping-cart/">Google · 19 May 2026</a></p>
</section>

<section class="case-section" id="assets" data-part="problem">
<p class="section-label">06 / Why CashKaro</p>

## CashKaro has already built a version of this.

A 2025 CashKaro Campus Partner listing describes a Telegram bot called **Deals Anytime**. You send it a product link. It sends back a cashback link.

Read that again, because it is the same shape as this proposal. The shopper is somewhere else, has already found the thing, and hands it over. The only real difference is that an assistant can offer to do it instead of waiting to be asked.

It matters because the hard parts already exist inside the company: the affiliate relationships, the benefit rules, the account identity, the payout plumbing. This is a new front door onto machinery that already runs.

<div class="precedent-visual"><div><span class="visual-label">Documented precedent</span><strong>Product link</strong><span class="flow-arrow" aria-hidden="true">↓</span><strong>Telegram bot</strong><span class="flow-arrow" aria-hidden="true">↓</span><strong>Cashback link</strong></div><div class="capability-stack"><span class="visual-label">Capabilities to build on</span><p>Affiliate relationships</p><p>Benefit rules + attribution</p><p>Account identity + reward settlement</p><strong>Extend the route.<br>Do not rebuild discovery.</strong></div></div>

<p class="slide-source"><a href="../research.html#telegram">Source and verification limits ↗</a> · A precedent is encouraging, not load-bearing. It tells us nothing about whether those APIs can be reused, whether the bot is still used, whether a host would approve us, or whether any of it adds orders.</p>
</section>

<section class="case-section" id="segment" data-part="problem">
<span id="missing" class="anchor-alias"></span><p class="section-label">07 / Segment and opportunity</p>

## The honest arithmetic of who this reaches.

<div class="segment-chain"><span>Existing CashKaro transactor</span><b aria-hidden="true">+</b><span>Recent AI product research</span><b aria-hidden="true">+</b><span>Supported purchase ahead</span></div>

Three things have to be true of the same person before any of this matters to them. They already buy through CashKaro. They have started researching with an assistant. And they have a supported purchase coming up.

Stack those and the number shrinks quickly. Say one in ten of the cohort clears all three, and each of those buys 0.2 more times through us. Spread across everyone we assigned, that is 0.02 extra orders a head.

I made both numbers up. They are there to show the shape of the problem, not to forecast anything. The point is the arithmetic: a feature that works beautifully for a tenth of people still has to survive being averaged across the other nine. That is what the experiment in section 13 has to be built to detect.

Sizing it properly needs a sampled survey joined, with consent, to prior order data. The phone here is just an example. Picking a real category means weighing how often people buy it, how much of it is eligible, and how big the benefit is, all at once.

<div class="reach-visual"><div><strong>10%</strong><span>reachable cohort</span></div><b>×</b><div><strong>0.2</strong><span>extra orders / reachable user</span></div><b>=</b><div class="reach-result"><strong>0.02</strong><span>extra orders / assigned user</span></div></div>

<p class="slide-source">Illustrative assumptions, not forecast or observed uplift. Broad adoption statistics cannot supply this denominator. <a href="../experiment.html#reach-model">Explore reach dilution ↗</a></p>
</section>

<section class="case-section decision-slide" id="decision" data-part="bridge">
<span id="alternatives" class="anchor-alias"></span><p class="section-label">08 / Direction selection</p>

## What I would build, and what I would leave alone.

The brief offered five directions. Four of them are solving for a shopper who has not decided yet, or who needs reminding. The more interesting person is the one who has already decided and is one tap away from paying somebody else.

Taking them in turn. A widget makes CashKaro easier to open, which helps only if opening it was the hard part. Reminders need to know what somebody is about to buy, and all we see is click-outs, so most of those prompts would arrive at the wrong moment about the wrong thing. An extension reaches a desktop browser, in a country that shops on its phone.

None of those are bad ideas. They are careful answers to a different question.

Share is the one I kept, because it already solves the part that matters: the shopper brings us the exact thing they are buying. Its weakness is that they have to remember to do it. What follows is Share with the remembering taken out.

<div class="decision-matrix"><div><strong>Widget / quick access</strong><span>Less entry effort; recall remains.</span><b>Not the lead</b></div><div><strong>Browser extension</strong><span>Retain contextual assistance; browser reach is limited.</span><b>Build on principle</b></div><div><strong>Contextual reminders</strong><span>Incomplete intent signals risk irrelevant prompts.</span><b>Not the lead</b></div><div class="retained"><strong>Share / deep link</strong><span>Preserve context; still requires remembering to share.</span><b>Retain foundation</b></div><div><strong>Owned discovery agent</strong><span>Requires new research habits and costly product data.</span><b>Reject ownership</b></div></div>

<div class="decision-banner"><strong>Recommend: CashKaro Connector</strong><p>Potential recall reduction across external surfaces. Lower deployment control, uncertain reach and partner dependence.</p></div>

<p class="slide-source">This is an own-direction extension, which the brief allows. If hosts will not surface us at the right moment, Share is probably the better first surface, and I would rather find that out cheaply. <a href="../research.html#alternatives">Full prioritisation ↗</a></p>
</section>

<section class="case-section" id="experience" data-part="solution">
<p class="section-label">09 / Customer experience</p>

## The choice stays with the shopper.

Connect the account once, the way you would connect a calendar. Then just shop. Ask whatever you were going to ask, pick whatever you were going to pick.

CashKaro does not appear until the end, on a purchase you have already chosen. CashKaro never suggests what to buy, and it never reorders what the assistant suggested.

<ck-walkthrough aria-label="CashKaro interactive purchase journey"></ck-walkthrough>
<div class="experience-story static-story"><div class="story-choice"><span class="visual-label">01 / Choose</span><img src="assets/phones/aster.svg" alt="Fictional Aster 9 phone" width="320" height="250"><strong>Aster 9</strong><span>“This is the one.”</span></div><div class="story-benefit"><span class="visual-label">02 / Check + consent</span><img src="assets/cashkaro-logo.svg" alt="CashKaro" width="120" height="30"><strong>₹1,200</strong><span>estimated Cashback</span><dl><div><dt>Pay today</dt><dd>₹39,999</dd></div><div><dt>Potential benefit later</dt><dd>₹1,200</dd></div></dl><span class="story-action">Continue with Cashback →</span></div><div class="story-retailer"><span class="visual-label">03 / Complete</span><span class="retailer-mark" aria-hidden="true">↗</span><strong>Same product.<br>Same retailer.</strong><p>Checkout, payment and fulfillment remain with the retailer.</p></div></div>

<p class="slide-source static-story-source">Fictional product and offer; no instant discount, live integration or transaction. Actual retailer eligibility may differ substantially.</p>

<a href="../prototype.html" class="button primary">Try the interactive prototype ↗</a>
</section>

<section class="case-section" id="architecture" data-part="solution">
<p class="section-label">10 / How it actually works</p>

## One authorisation. Three tool calls. One signed affiliate route.

Underneath the conversation this is a small and fairly boring piece of plumbing, which is the point. The host finds three tools over MCP. The shopper approves the account once. Nothing gets called until there is a real purchase to check.

<div class="mcp-contract">
<div><code>check_route</code><span>product · variant · merchant · URL · source</span><b>supported / unsupported / needs-context / stale</b><small>Policy version and reason code. Never probabilistic.</small></div>
<div><code>get_benefit</code><span>validated context · scoped token</span><b>kind · amount or range · cap · exclusions · checked_at · expires_at</b><small>An unknown amount stays unknown, never an estimate.</small></div>
<div><code>create_route</code><span>quote ID · account token · consent · idempotency key</span><b>short-lived signed redirect, or a typed refusal</b><small>Revalidates policy and source. No arbitrary target URLs.</small></div>
</div>

<p class="auth-strip"><b>Account linking:</b> OAuth 2.0 authorisation code with PKCE. Scoped, revocable token. No retailer password, no card details, no chat history.</p>

### The affiliate link is minted at step 3, not before.

<ol class="link-flow">
<li><b>Programme credentials</b><span>Existing advertiser or network publisher ID per merchant, on an effective-dated tracking template.</span></li>
<li><b>Mint a click</b><span><code>create_route</code> binds account, merchant, canonical product, variant and time. That click ID becomes the SubID.</span></li>
<li><b>Build the deeplink</b><span>Tracking URL carrying publisher ID + SubID + encoded product URL. Allowlisted, signed, short-lived.</span></li>
<li><b>Hand off</b><span>Shopper lands on the product page via the tracking domain, which records the click.</span></li>
<li><b>Merchant reports</b><span>Network returns a transaction with the same SubID, order value and commission.</span></li>
<li><b>Join and credit</b><span>SubID → click → account. Pending until the return window confirms or reverses it.</span></li>
</ol>

<div class="link-limits"><span><b>Deeplink depth varies.</b> Some programmes resolve only to a category or home page.</span><span><b>App handoff is not guaranteed.</b> It needs the merchant to honour tracked universal links. Web is the fallback.</span><span><b>Most programmes are last-click.</b> Where another affiliate holds the click, CashKaro stands down.</span><span><b>Rates are capped and excluded.</b> Phones often carry low or zero commission, so the connector must be able to return nothing.</span></div>

<p class="takeaway">The assistant recommends, CashKaro checks and mints the route, the retailer sells. The model is allowed to be creative about phones. Nothing is allowed to be creative about whether you get paid.</p>

<p class="slide-source">Proposed interfaces, not existing CashKaro APIs. <a href="../experiment.html#architecture">Full contract, auth and failure handling ↗</a> · <a href="../prototype.html">Four surfaces in the prototype ↗</a></p>
</section>

<section class="case-section" id="trust" data-part="solution">
<span id="scope" class="anchor-alias"></span><p class="section-label">11 / Scope and trust</p>

## Ship the boring version first.

One host we have actually reviewed. Two merchant paths we have actually approved. Connect an account, check the purchase in front of you, say plainly what the conditions are, and get a yes before doing anything.

That is the whole first release. It is deliberately unexciting, because the thing most likely to kill this is not a missing feature. It is a handoff that quietly does not track.

Which is also why the wording stays careful the whole way through. A route gets created, then an order gets tracked, then a reward gets confirmed. Three separate events, often weeks apart, and the shopper should always know which one they are looking at.

<div class="trust-visual"><div><span class="state-label">Cashback</span><strong>Conditional cash later</strong><p>The retailer's full price is payable today.</p></div><div><span class="state-label">Rewards</span><strong>Restricted redemption</strong><p>Never presented as bank cash.</p></div><div><span class="state-label caution">Unverified / ineligible</span><strong>Continue directly</strong><p>Preserve the choice; make no benefit claim.</p></div></div>

<p class="scope-exclusion"><strong>Outside V1:</strong> recommendation engine, retailer comparison, checkout, cart repair, scraping and coupon injection.</p>

<p class="slide-source">The prototype carries sixteen scenarios across five groups: benefit outcomes, eligibility refusals, attribution limits, service failures and revalidation. Eleven of them refuse. <a href="../prototype.html#interactive">Test them ↗</a></p>
</section>

<section class="case-section" id="economics" data-part="solution">
<p class="section-label">12 / Commercial assessment</p>

## The question a retailer will ask, so we should ask it first.

Suppose this works and tracked orders go up. Here is the awkward follow-up: did the retailer sell anything it would not have sold anyway?

Some of the early gain will be a sale that was always going to happen, now carrying our tag instead of nobody's, or instead of another affiliate's. The shopper is genuinely better off. The retailer may be no better off at all. A partner who works that out before we do will price it accordingly.

<div class="economics-split"><div><span class="visual-label">CashKaro incrementality</span><strong>Did total valid tracked orders increase?</strong><p>Measure across every CashKaro channel.</p></div><span class="not-equal" aria-label="is not equivalent to">≠</span><div><span class="visual-label">Retailer incrementality</span><strong>Did the retailer gain demand or conversion?</strong><p>Requires retailer-level evidence.</p></div></div>

Which is why a shopper saying yes is not the end of the argument. Consent does not override a partner's rules, and it does not give us the right to quietly overwrite somebody else's referral.

<div class="commercial-gate"><b>Before enabling a route</b><span>Approved traffic source</span><span>Agreed attribution handling</span><span>Sustainable retained commission</span></div>

<p class="slide-source">Monitor reversals and support costs. <a href="../research.html#attribution">Affiliate-industry risks ↗</a></p>
</section>

<section class="case-section" id="measurement" data-part="solution">
<p class="section-label">13 / Causal experiment</p>

## Count everyone assigned, including the zeros.

Everyone offered the connector stays in the maths, including the people who never switched it on. That sounds too obvious to write down. It is also the easiest place in this whole plan to fool yourself, because comparing the people who adopted against the people who did not will flatter the feature every single time.

<div class="experiment-visual"><div class="cohort-node">Freeze existing-user cohort → randomize by account</div><div class="experiment-arms"><div><span>Control</span><strong>Current CashKaro experience</strong></div><div><span>Treatment</span><strong>Connector enabled + onboarding</strong></div></div><div class="outcome-node"><strong>Difference in valid tracked orders</strong><span>per originally assigned user · full quarter · all channels</span></div><div class="zeros-row"><span>Never connects ✓</span><span>Never invoked ✓</span><span>Declines ✓</span><span>No orders ✓</span></div></div>

<p class="takeaway">Intention to treat, deduplicated, with a fixed backfill cutoff. And the result I would most want to catch early: plenty of orders arriving through the assistant while the total stays flat. That is not growth. That is people using a different door.</p>

<p class="slide-source">Confirmed-order quality, tracking failures and contribution are companion measures. <a href="../experiment.html#protocol">Full experiment protocol ↗</a></p>
</section>

<section class="case-section" id="launch" data-part="solution">
<span id="feasibility" class="anchor-alias"></span><p class="section-label">14 / Validation and rollout</p>

## Buy information first. Distribution later.

Invite the segment directly, through channels CashKaro already owns. Hoping people stumble across us in a host's connector directory is not a launch plan. It is a wish.

<div class="rollout-visual"><div><span>01 / Understand</span><strong>Purchase research + usability</strong><p>Is re-entry the problem? Is the benefit understood?</p></div><div><span>02 / Prove</span><strong>One host + approved routes</strong><p>Verify placement, context transfer, rules and attribution.</p></div><div><span>03 / Measure</span><strong>Fixed-cohort experiment</strong><p>Establish reach, power and contribution before scale.</p></div><div><span>04 / Expand</span><strong>Additional hosts or Share</strong><p>Only when the preceding gates support investment.</p></div></div>

<p class="slide-source">Delivery effort follows an integration assessment. Share remains a separate behavioural test; its success cannot validate the AI thesis. <a href="../experiment.html#rollout">Ownership and decision rules ↗</a></p>
</section>

<section class="case-section final-slide" id="gates" data-part="solution">
<span id="defense" class="anchor-alias"></span><p class="section-label">15 / Decision criteria</p>

## Eight ways I would know I was wrong.

Writing these down before starting is the only thing that reliably stops a team explaining away a bad result six months later.

<div class="stop-grid"><div><b>Reach</b><span>Too few eligible purchase moments</span></div><div><b>Placement</b><span>Repeated recall erases the advantage</span></div><div><b>Permission</b><span>Partners reject the source or route</span></div><div><b>Reliability</b><span>Context, eligibility or attribution fails</span></div><div><b>User value</b><span>Benefits do not justify the interruption</span></div><div><b>Incrementality</b><span>Orders only shift between channels</span></div><div><b>Economics</b><span>Contribution deteriorates</span></div><div><b>Competition</b><span>Hosts offer superior native incentives</span></div></div>

<p class="takeaway">This is a bounded bet on finding something out, not a commitment to a roadmap. If Share turns out to deliver similar value with less effort and more control, I would take Share and say so.</p>

<p class="slide-source"><a href="../research.html">Evidence</a> · <a href="../experiment.html">Experiment & feasibility</a> · <a href="../ai-transcript.html">AI decision trail</a> · <a href="../compliance.html">Compliance audit</a></p>
</section>
