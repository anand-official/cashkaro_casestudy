# CashKaro Shortlist — final product decision

Author: Ujjawal Anand. September 2026.

Canonical content: `content/case.md`. Rendered at `index.html`.

<section class="case-section" id="problem" data-part="problem">
<p class="section-label">01 / The problem</p>

## An eligible purchase is an opportunity. It is not automatically a commission CashKaro has earned.

The brief asks us to increase **tracked orders per existing user per quarter, on a fixed cohort**. It establishes that existing users bypass CashKaro; it deliberately leaves the cause open. It does not establish how much leakage exists, which segment contains it, or whether every recoverable attribution is commercially sustainable. [Brief, pp. 1–3](../source-material/ORIGINAL_ASSIGNMENT_TRANSCRIPT.md)

My working diagnosis: **for an existing user making a considered purchase, CashKaro may arrive after both the product and retailer have been chosen.** At that point, cashback competes with the effort of restarting and uncertainty about getting paid. The better opening is a decision still in progress.

<div class="thesis-box"><span>Job to be done · hypothesis</span><p>“Help me keep my research together and choose where to buy, with the price, reward and conditions clear.”</p></div>

This is a deliberately narrow problem: online headphone shoppers who have used CashKaro before and have not settled on a merchant. It does not explain every bypassed order. Checkout urgency, poor tracking and low rewards can each require a different intervention.
</section>

<section class="case-section" id="evidence" data-part="problem">
<p class="section-label">02 / Evidence that changed the diagnosis</p>

## Forgetting can be a rational response to weak value.

The inherited research describes **one respondent**, through an AI working summary, who stayed in the retailer journey, prioritized native/card offers, discounted small rewards and distrusted tracking. The raw interview is unavailable. These are mechanisms to investigate, not prevalence findings or independently verified quotes. [Evidence record](../research.html#qualitative)

| Possible cause | What it changes | What would discriminate it |
| --- | --- | --- |
| Low mental availability | CashKaro needs a useful entry before checkout | Observe an unprompted research-to-purchase journey |
| Effort exceeds reward | A faster shortcut may still be insufficient | Compare decisions with and without useful product context |
| Tracking distrust | Showing a larger reward is not the fix | Audit failures and interview users with missing cashback |
| Unclear eligibility | A headline rate can mislead | Ask users to identify the exact reward and exclusions |

Public inspection strengthens the **value/eligibility** hypothesis. CashKaro's Amazon terms currently list no Rewards for mobile phones. Flipkart's audio offer has a ₹130 cap. Croma's active store state says cashback is unavailable, despite a promotional page title. Category rules and current state matter more than headline percentages. [Source notes and dates](../research.html#commercial)

**What this does not prove:** that customers want a shortlist, that headphones are a frequent purchase, or that the proposed entry will be remembered. Those remain the central tests.
</section>

<section class="case-section" id="blind-spot" data-part="problem">
<p class="section-label">03 / The analytical constraint</p>

## The missing purchases are also the missing denominator.

CashKaro's help page documents click-outs and tracked orders. Those records do not, by themselves, reveal every eligible purchase made directly with a retailer. A sparse CashKaro history could mean low shopping activity or heavy bypassing. Exact internal visibility requires a data audit. [CashKaro help](https://cashkaro.com/how-it-works)

<div class="denominator"><div><span>Observed</span><strong>CashKaro click-outs<br>and tracked orders</strong></div><div><span>Not established by these records</span><strong>All eligible direct<br>retailer purchases</strong></div></div>

This is why I deprioritize prediction from purchase cadence. A good prediction can target someone who would already have routed through CashKaro. **Prediction accuracy does not establish incremental opportunity.** Nor does the data gap prove reminders cannot work.

Before a pilot, audit existing-account counts, baseline order mean and variance, category coverage, missing-cashback tickets, reversals and the actual product-data services. Recruit research participants across frequent, sparse and lapsed usage; do not recruit only enthusiastic clickers. A consented purchase diary can reveal mechanisms, with recall and selection bias stated.
</section>

<section class="case-section" id="segment" data-part="problem">
<p class="section-label">04 / Where to start</p>

## Test headphones. Do not assume a phone-sized basket means phone-sized cashback.

The insider feedback suggested smartphone research as an entry point. I retain the **consideration-stage insight**, but change the first category. Amazon's mobile exclusion and Flipkart's model-specific mobile rules weaken a broad phone promise. Non-Apple headphones offer identifiable models, manufacturer specifications and publicly visible merchant comparisons. Research intensity and repeat use in CashKaro's cohort are still hypotheses.

| Segment | Decision |
| --- | --- |
| Existing users researching non-Apple headphones, merchant undecided | First learning wedge; a limited model set makes manual verification possible |
| Users making routine low-consideration purchases | Defer: a research step may add effort without value |
| Users with a current tracking dispute | Prioritize service recovery; do not treat a new feature as a trust repair |
| Smartphone shoppers | Defer until model eligibility and reward economics support the promise |
| New users | Outside the assignment's primary cohort |

**The strongest counterargument is frequency.** Headphones are occasional purchases. This pilot tests whether useful consideration can recover orders; it does not establish a quarterly shopping habit. A high save rate with negligible all-cohort order lift is failure. Expansion to another category needs its own eligibility, data-quality and frequency evidence.
</section>

<section class="case-section" id="alternatives" data-part="problem">
<p class="section-label">05 / Choose between mechanisms</p>

## The overlay solves presence. It does not resolve why the merchant should pay.

The earlier concept detected a retailer app and offered cashback activation. Insider PM feedback exposed the commercial weakness: the retailer may already have won the shopper. This is stakeholder input, not a contract or proof that every late referral is valueless. Combined with sensitive permissions and context-preservation risks, it changes my priority. [Decision history](../research.html#decisions)

| Direction | Strongest reason to build | Decisive limitation | Call |
| --- | --- | --- | --- |
| Home-screen shortcut | Low effort; removes a known navigation step | Still relies on recall; little new decision value | Defer |
| Desktop extension | Contextual entry without an extra save action | Installation and browser-only reach; retailer-stage attribution risk remains | Defer |
| Contextual push | Existing distribution; inexpensive experiment | Click-out history is incomplete intent; fatigue and selection risk | Defer predictive push |
| Late share/deep-link | User initiates; product identity may survive | Merchant/cart context may not survive; eligibility can fail | Use capture upstream |
| Broad shopping agent | Could improve product discovery | New habit plus catalog, rights, cost and accuracy burden | Reject for V1 |
| Android retailer overlay | Appears in an existing shopping context | Partner value uncertain; Usage Access/overlay adoption adds risk | Reject as lead |
| Upstream shortlist | Research continuity plus an explicit merchant decision | Still requires entry, accurate data and enough purchase frequency | Choose a capped pilot |

**Relative delivery effort is a judgment, not a time estimate:** a shortcut or basic owned-surface message is lowest; an extension or explicit share capture adds platform and mapping work; Shortlist adds persistent identity, catalog operations and an eligibility gate. The overlay adds sensitive permission and attribution risk; the broad agent adds the largest data and evaluation burden. I accept Shortlist’s extra effort only for a capped test of earlier decision value.

A desktop extension is not dismissed as “irrelevant in India.” Statcounter reports **34.97% desktop and 64.45% mobile web usage in August 2026**. A rough web-shopping proxy would put desktop around one-third **only if** shopping follows that mix; app purchases are missing, so the actual order share is unknown. This is insufficient to forecast reach. Obtain CashKaro's device split before reconsidering an extension. [Proxy and limitation](../research.html#reach)
</section>

<section class="case-section" id="decision" data-part="problem">
<p class="section-label">06 / The product decision</p>

## Earn a place in the decision. Keep it until the shopper is ready.

**Build CashKaro Shortlist**, an extension of CashKaro's existing comparison capability: capture a research link, confirm the model, save the reason it is under consideration, compare a few material attributes and merchant terms, then explicitly shop through CashKaro.

CashKaro already advertises comparison and exposes headphone product pages. The proposed difference is **continuity across research sessions and an honest decision record**, not “inventing price comparison.” Account-level saved-list capabilities were not inspected; if equivalent functionality already exists, test its research entry and clarity before duplicating it. [Existing product audit](../research.html#existing)

Google's May 19, 2026 Universal Cart announcement supports the persistent-consideration analogy. Its Cart API distinguishes basket building from checkout and initially supports one-way creation/transfer. CashKaro does not inherit Google's Shopping Graph, distribution, merchant integrations or checkout rights. **Shortlist is not a merchant cart and never populates one.** [Google research](../research.html#google)

The value exchange is conditional: the user gets a clearer choice; CashKaro gets an opportunity to earn a routed order; the selected merchant may receive a shopper it would otherwise lose. Moving earlier improves that hypothesis. It does not prove retailer incrementality.
</section>

<section class="case-section" id="experience" data-part="solution">
<p class="section-label">07 / The experience</p>

## Save the question, then resolve the purchase.

<ol class="journey"><li><span>01</span><div><strong>Capture during research</strong><p>Share a public link into the proposed Android receiver, or paste it into Shortlist. Confirm the model; ambiguous links ask for a choice.</p></div></li><li><span>02</span><div><strong>Keep the decision context</strong><p>Save the source and a personal note. Compare weight, ANC-on battery life and price, with sources beside the claims.</p></div></li><li><span>03</span><div><strong>Choose a merchant deliberately</strong><p>See pay-now price, cash cashback or restricted Rewards, caps, freshness and exclusions separately. A no-cashback option stays visible.</p></div></li><li><span>04</span><div><strong>Handoff, then reconcile</strong><p>Check eligibility before leaving. A click-out is recorded; a purchase is only tracked when a retailer/network event arrives.</p></div></li></ol>

The interactive prototype covers capture, model switching, saving/removing, decision notes, comparison, merchant terms, stale/unavailable states, handoff and delayed or rejected tracking. It uses published price snapshots; no affiliate transaction is created. The browser demo does not install an Android share target.

<a class="button primary" href="../prototype.html">Open the interactive Shortlist <span aria-hidden="true">↗</span></a>

**The critical UX distinction:** a ₹60 Amazon Reward is not ₹60 off at checkout or cash in a bank account. The default comparison sorts by pay-now price; reward value is an explicit user preference. Unknown bank-offer stacking, delivery and seller terms are never silently deducted.
</section>

<section class="case-section" id="scope" data-part="solution">
<p class="section-label">08 / What actually ships</p>

## A bounded utility before an agent platform.

| First pilot | Later, only after evidence | Outside V1 |
| --- | --- | --- |
| Up to 20 manually verified non-Apple headphone models; two approved merchant paths | Additional categories with demonstrated demand and viable terms | Universal checkout or retailer cart synchronization |
| Native share receiver plus paste/search fallback; account-based shortlist in the proposed product | Publisher/creator placement with explicit agreement | Screen reading, overlays, background clipboard access |
| Source links, a note, structured attributes and transparent merchant comparison | Opt-in alerts triggered by a verified change to a saved item | Unverified Reddit summaries or arbitrary video transcription |
| Eligibility recheck, click-out receipt and existing missing-cashback entry | Automated feeds with rights, freshness and mapping guarantees | LLM-led prices, reward calculations or merchant ranking |

Twenty models and two merchant paths are **scope caps I propose**, not an assertion of feed access or partner approval. Android is a practical first native integration because an explicit text/link receiver is documented. A responsive web fallback serves other devices; iOS native sharing is deferred.

The prototype stores its shortlist only in this browser. The production proposal needs authenticated account persistence, deletion controls and a reviewed retention policy. No third-party analytics or user input is sent by this demo.
</section>

<section class="case-section" id="feasibility" data-part="solution">
<p class="section-label">09 / Feasibility and data ownership</p>

## Every attractive output needs a source of truth.

<div class="architecture"><div><small>Input</small><strong>Explicit share / paste</strong><p>Confirm product identity</p></div><div><small>Decision data</small><strong>Catalog + offer registry</strong><p>Source, model, variant, timestamp</p></div><div><small>Attribution</small><strong>Approved click-out</strong><p>Recheck → redirect → reconcile</p></div></div>

Start by auditing CashKaro's actual comparison and affiliate services. Reuse verified capabilities where available. Public pages establish a visible feature, not an internal API contract. A catalog operator can seed a limited registry from permitted manufacturer data; Partnerships must confirm rights for merchant prices and affiliate paths. If this cannot be kept current within pilot capacity, reduce scope or stop.

The resolver accepts explicit shared text/URLs. It never assumes a YouTube link contains the product, a transcript or private browsing context. Unsupported inputs fall back to model selection. Production URL processing needs a domain allowlist, redirect revalidation, private-network blocking and size/time limits. Arbitrary URLs must not become a server-side fetch proxy.

**No agent or RAG is required in V1.** Structured lookups, deterministic arithmetic and editorial attribute notes suffice. LLM cost per query is therefore **₹0**; hosting, data verification and support are not free. Proposed engineering targets are cached comparison p95 under two seconds and a five-second recheck timeout; these are acceptance budgets, not measured performance. Unknown data fails closed. [Architecture and event contract](../experiment.html#architecture)
</section>

<section class="case-section" id="measurement" data-part="solution">
<p class="section-label">10 / Causal measurement</p>

## The denominator includes everyone who never uses Shortlist.

Freeze the existing-account cohort before randomization. Assign users to the current experience or availability plus an invitation to Shortlist; keep unrelated promotions the same. Analyze **intention to treat**, including non-openers, non-savers and permission refusals. Predefine any research-intent subgroup before exposure. Do not select the experiment population after people save a product.

<div class="metric-panel"><span>Primary outcome · full quarter</span><strong>All tracked orders ÷ fixed existing users</strong><p>Incremental effect = treatment mean − control mean</p></div>

Count all supported categories, not only Shortlist orders, to catch cannibalization. Deduplicate at the agreed order grain; count purchases in the quarter and allow equal tracking maturation for both arms. Report cancellations/confirmation and net contribution alongside the tracked-order result. A short usability beta cannot claim quarterly success.

Power the test from the cohort's real order variance, economic minimum effect and expected reachable population. Pre-register duration, missing-data handling, significance/power choices and stop rules. Without those inputs, no honest sample size or expected uplift can be supplied. Use an A/A instrumentation check before treatment.

Mechanism metrics—capture, return to shortlist, comparison, click-out, tracking—locate bottlenecks. Retailer-choice changes are **diagnostics**. Only a consented, partner-run randomized comparison of total retailer outcomes across channels can establish retailer lift; CashKaro's own attribution logs cannot. [Full experiment protocol](../experiment.html#protocol)
</section>

<section class="case-section" id="launch" data-part="solution">
<p class="section-label">11 / Launch and distribution</p>

## Solve the first entry before spending on acquisition.

**First validate the job.** Observe existing users with real upcoming headphone purchases across frequent, sparse and lapsed CashKaro usage. Test whether they can capture, return and make a better-informed choice without coaching. An initial eight-session round is a proposed discovery plan, not completed research or a prevalence study.

**Then launch through owned surfaces.** Place a context-relevant invitation on the existing headphone comparison/category surface for randomized treatment users. Show how to save the next review during that first session. Keep Shortlist visible on their next CashKaro visit. This deliberately trades broad reach for an observable first entry; users who never return remain an unresolved reach problem.

**Only then test external distribution.** A willing review publisher or creator could place a disclosed “save to compare” link near a review. That requires negotiated placement, content rights and economics; YouTube and 91mobiles are not claimed partners. Any newly acquired accounts stay outside the fixed-cohort result.

The return loop is saved research → easier decision → explicit merchant choice → tracking clarity → reason to use Shortlist next time. There are no generic reminders in V1. If value does not earn return visits, reactivation messages will not make the underlying job valuable.
</section>

<section class="case-section" id="gates" data-part="solution">
<p class="section-label">12 / Investment decision</p>

## Scale only if the small experiment survives the large denominator.

| Gate | Scale condition | Change or stop condition |
| --- | --- | --- |
| Coverage and accuracy | Approved merchant paths; reliable model, price and eligibility records | Stop reward claims on stale/conflicting data; halt pilot if verification cannot be sustained |
| Causal impact | Full-quarter ITT effect exceeds the pre-agreed economic minimum with the planned uncertainty bound | If underpowered, conclude inconclusive; if adequately powered and immaterial, stop expansion |
| Customer trust | No material harm to abandonment, complaints, tracking reliability or opt-outs | Fix a specific, evidenced bottleneck; severe privacy or systematic wrong-value incidents pause immediately |
| Commercial value | Positive incremental net contribution and partner acceptance, with retailer evidence appropriate to scale | Reject growth that buys more attribution at unacceptable partner or servicing cost |

**Reach sanity check:** overall incremental orders per user = eligible share × incremental orders per eligible user, when spillovers are absent. Both inputs are unknown. A category success diluted to an immaterial cohort result does not pass the brief. [Sensitivity and economics](../experiment.html#reach-model)

CashKaro contribution is collected commission minus rewards/cashback paid, reversals, incremental data and support costs, and operating cost. Evaluate the treatment-control change to avoid crediting baseline revenue or double-counting reward expense. Merchant contribution requires its own margin and commission-cost view.

**My recommendation:** fund the bounded validation and build the utility only through these gates. Reject the retailer overlay as the lead. Preserve the insight that context matters, but earn participation while the decision is still open.
</section>
