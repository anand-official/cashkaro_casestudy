<section class="case-section" id="reading" data-part="record">
<p class="section-label">01 / How to read this record</p>

## Three kinds of record. Labelled, never blended.

The brief asks for the complete transcript of my AI interactions. Some of that material is a verbatim export. Some of it is a copy I received without its full session. Some of it is a document I authored with AI assistance after the fact. Those are not the same evidence, so this page never presents one as another.

<div class="provenance-tiers">
<div class="tier-raw"><span class="tier-mark">A</span><strong>Verbatim export</strong><p>The session as it occurred, unedited.</p><small>Highest weight. Establishes what was actually asked and answered.</small></div>
<div class="tier-copy"><span class="tier-mark">B</span><strong>Received copy</strong><p>A pasted conversation, complete or partial, supplied outside the original tool.</p><small>Content is reliable. Whether it is the whole session often is not.</small></div>
<div class="tier-authored"><span class="tier-mark">C</span><strong>Authored record</strong><p>A decision log or review response written afterwards, with AI assistance.</p><small>Evidence of reasoning. Never a substitute for a transcript, and not labelled as one.</small></div>
</div>

<p class="takeaway">No missing conversation has been reconstructed and presented as verbatim. Where a record is incomplete, the completeness ledger in section 06 says so in specific terms.</p>
</section>

<section class="case-section" id="roster" data-part="record">
<p class="section-label">02 / The roster</p>

## Four models, four jobs, and the failure mode of each.

I did not use one assistant for everything. Each was given the job it is genuinely good at, and each was assumed to be confidently wrong somewhere.

<div class="roster-grid">
<div><span class="roster-role">Behavioural research</span><strong>Qwen</strong><p>Mapped the causes of bypass: value, trust, eligibility, recall.</p><em>Failure mode: produced plausible Indian market statistics without retrievable sources. Only the reasoning survived; the numbers did not.</em></div>
<div><span class="roster-role">Adversarial review</span><strong>DeepSeek</strong><p>Ran a principal-PM critique against the Shortlist build.</p><em>Failure mode: critiqued the artifact rather than the commercial model. Useful on rigour, silent on incrementality.</em></div>
<div><span class="roster-role">Strategy and critique</span><strong>Claude</strong><p>Challenged diagnosis quality, purchase frequency and distribution. Forced the largest single reversal in this project.</p><em>Failure mode: readily agreed with a well-argued wrong answer when the framing was not challenged first.</em></div>
<div><span class="roster-role">Reasoning and execution</span><strong>ChatGPT</strong><p>Primary thinking partner, then the build of the site and the prototype.</p><em>Failure mode: optimised for a finished-looking artifact. Every quantified claim it produced had to be traced or removed.</em></div>
</div>

<p class="slide-source">Gemini appears once, cited inside the Claude strategy conversation, and contributed nothing I can trace to a decision, so it is recorded in the manifest rather than claimed here. A human commercial critique from an industry contact shaped the affiliate-economics section; that is stakeholder input rather than an AI session, filed in <a href="source-material/EXTERNAL_PRODUCT_FEEDBACK.md">external feedback</a>.</p>
</section>

<section class="case-section" id="pivots" data-part="record">
<p class="section-label">03 / How the thinking changed</p>

## Seven positions. Six of them are dead.

Every stage below was, at the time, a defensible answer. The record matters more than the conclusion, so the abandoned versions remain in Git history and in marked archives rather than being edited out.

<div class="pivot-track">
<div><span class="pivot-index">01</span><div class="pivot-body"><strong>Contextual shopping reminders</strong><p class="pivot-challenge">Challenged: CashKaro observes click-outs, not purchases. The denominator for "missed" orders does not exist.</p><p class="pivot-outcome">Rejected as the lead. The missing-denominator insight survived into the measurement design.</p></div></div>
<div><span class="pivot-index">02</span><div class="pivot-body"><strong>Android retailer-app overlay</strong><p class="pivot-challenge">Challenged: permission cost, interruption, and a route that recaptures attribution the retailer already owns.</p><p class="pivot-outcome">Rejected as the lead. Contextual entry and offer randomisation survived.</p></div></div>
<div><span class="pivot-index">03</span><div class="pivot-body"><strong>Move upstream into consideration</strong><p class="pivot-challenge">Challenged by a mentor: economic value requires genuine influence on the purchase, not earlier presence.</p><p class="pivot-outcome">Retained as a strategic hypothesis. Explicitly not treated as customer validation.</p></div></div>
<div class="pivot-major"><span class="pivot-index">04</span><div class="pivot-body"><strong>Shortlist: CashKaro owns discovery</strong><p class="pivot-challenge">Challenged by an independent Claude review of commit <code>f482fb6</code>: weak diagnosis, low category frequency, no distribution, no continuity.</p><p class="pivot-outcome">Rejected. This was the expensive reversal, and the correct one. Benefit-type honesty and evidence discipline survived.</p></div></div>
<div><span class="pivot-index">05</span><div class="pivot-body"><strong>Order Check</strong><p class="pivot-challenge">Challenged: current earnings and missing-cashback recovery already exist in the product. The incremental mechanism was indirect.</p><p class="pivot-outcome">Superseded at commit <code>f9c0d64</code>.</p></div></div>
<div><span class="pivot-index">06</span><div class="pivot-body"><strong>ChatGPT-specific purchase router</strong><p class="pivot-challenge">Challenged: invocation cannot be guaranteed, reach is unproven in India, and a single host is a commercial dependency, not a strategy.</p><p class="pivot-outcome">Guaranteed routing and single-host framing dropped.</p></div></div>
<div class="pivot-current"><span class="pivot-index">07</span><div class="pivot-body"><strong>CashKaro Connector</strong><p class="pivot-challenge">Still challenged: a universal backend cannot guarantee host placement, partner approval or merchant incrementality.</p><p class="pivot-outcome">Chosen as a bounded proposal with platform adapters, a shared router, Share as a second surface, and explicit kill gates. Reframed from a per-host “shopping skill” to a single connectable account, on the model of a Gmail or Drive connector: the user connects CashKaro once, and any assistant that supports connectors can call it. The surviving objection is published, not resolved.</p></div></div>
</div>

<p class="takeaway">The value of this trail is not that the final answer is clever. It is that six earlier answers were killed on stated grounds, and the reason each one died is still legible.</p>
</section>

<section class="case-section" id="rejected" data-part="record">
<p class="section-label">04 / What I rejected</p>

## Every one of these was fluent, confident and wrong.

AI produces a respectable-looking answer cheaply. That is precisely the risk the brief names. These are the specific outputs I overruled, and the reason each one failed.

<div class="reject-list">
<div><p class="reject-had">"Earn ₹1,200 cashback on this phone at Flipkart."</p><p class="reject-kept"><strong>Replaced with a labelled fictional fixture.</strong> A rate I cannot verify, printed next to a real retailer's name, is a fabricated commercial claim. Every figure in the prototype is now explicitly fictional.</p></div>
<div><p class="reject-had">Rank the alternatives by the cashback CashKaro earns.</p><p class="reject-kept"><strong>Removed entirely.</strong> The moment commission influences the recommendation, the assistant stops being trustworthy and the product stops being defensible. Product and merchant are chosen before CashKaro is invoked.</p></div>
<div><p class="reject-had">Show one number: the effective price after cashback.</p><p class="reject-kept"><strong>Split into two.</strong> What the shopper pays today is certain. What they may receive later is conditional. Merging them is the most common dark pattern in this category.</p></div>
<div><p class="reject-had">"Connect once and every purchase is tracked automatically."</p><p class="reject-kept"><strong>Narrowed to a supported account relationship.</strong> It is not universal automatic login, and the copy no longer implies that it is.</p></div>
<div><p class="reject-had">Assume the assistant will surface CashKaro at the right moment.</p><p class="reject-kept"><strong>Made host-dependent.</strong> Contextual surfacing is the desired behaviour, not a guaranteed one. Explicit invocation is demonstrated as a separate mode because it is the case we actually control.</p></div>
<div><p class="reject-had">Recover the shopper's existing cart into a tracked route.</p><p class="reject-kept"><strong>Fails closed.</strong> A carted item cannot be reattributed. The prototype refuses this case rather than demonstrating a flow that would not survive a merchant's terms.</p></div>
<div><p class="reject-had">Measure success by feature adoption.</p><p class="reject-kept"><strong>Held to tracked orders per existing user per quarter, all channels, fixed cohort.</strong> A metric that moves only the feature is not a success metric. The brief says so, and it was right.</p></div>
<div><p class="reject-had">Let the model write the benefit and the refusals too, so the whole demo feels alive.</p><p class="reject-kept"><strong>Split it instead.</strong> The shopping recommendation is generated live, because in the real product the model belongs to the host. Everything CashKaro decides stays deterministic. The proxy is locked to a fixed catalogue and screens the reply for benefit language, so asking it to rank by cashback is refused and falls back to the scripted answer. Tested with that exact prompt.</p></div>
<div><p class="reject-had">Write up the missing sessions from memory so the transcript looks complete.</p><p class="reject-kept"><strong>Refused.</strong> A fabricated transcript in a submission that is graded on honesty about evidence is a worse failure than an incomplete one. The gaps are listed in section 06.</p></div>
</div>

<p class="takeaway">Taste, in this project, was almost entirely subtractive. The AI's contribution was volume. The judgement was in what did not ship.</p>
</section>

<section class="case-section" id="contribution" data-part="record">
<p class="section-label">05 / Honest attribution</p>

## Where the machine was load-bearing, and where it was not.

<div class="contribution-split">
<div class="contribution-yes"><span class="visual-label">Genuinely load-bearing</span><ul><li>Breadth of the solution space, faster than I would have reached alone</li><li>The adversarial review that killed Shortlist</li><li>Behavioural framing of bypass into four separable causes</li><li>Implementation of the site, the router model and the prototype</li><li>Consistency checking across fifteen sections and five pages</li></ul></div>
<div class="contribution-no"><span class="visual-label">Not load-bearing, despite appearances</span><ul><li>Market sizing. Every generated figure was unsourced and was removed.</li><li>The decision itself. Seven positions were scored against the same commercial gates by hand.</li><li>Evidence. One inherited respondent remains one inherited respondent.</li><li>The choice of what to leave out, which is the whole of section 04.</li></ul></div>
</div>

<p class="slide-source">Supporting documents: <a href="docs/DECISION_LOG.md">decision history</a> · <a href="docs/REVIEW_RESPONSE.md">response to critique</a> · <a href="docs/SKEPTICAL_REVIEW.md">self-review</a> · <a href="docs/INTERVIEW_DEFENSE.md">interview defence</a>. These are tier C. They are authored with AI assistance and are not transcripts.</p>
</section>

<section class="case-section" id="record" data-part="record">
<p class="section-label">06 / Completeness ledger</p>

## The available records, and the gaps, in specific terms.

Read the source material directly below. The manifest tab states, session by session, what exists and what does not.

<div id="transcript-tabs" class="record-tabs" role="group" aria-label="Source records"></div><div class="record-toolbar"><div><h3 id="record-title">Session completeness</h3><p id="record-kind">Available record</p></div><a id="record-download" href="transcripts/README.md">Open source file ↗</a></div><label class="search-label">Search this record<input id="record-search" type="search"></label><p id="record-result" role="status"></p><pre id="record-body" tabindex="0">Loading source record…</pre>
</section>

<section class="case-section" id="outstanding" data-part="record">
<p class="section-label">07 / Outstanding</p>

## Where the raw material sits.

The complete exports travel with the submission as a private package rather than being published here, because they contain personal and third-party material that does not belong on a public page. This page is the summary of what is in them.

The <a href="transcripts/README.md">manifest</a> lists every contributing session and says, for each one, whether it is a verbatim export, a copy received outside the original tool, or a document written afterwards. Where a session is partial, it says so rather than rounding up.

<p class="takeaway">I would rather hand over a record that is accurately labelled than one that looks complete because the gaps were quietly filled in. The brief grades honesty about evidence. That standard has to apply to evidence about my own process first.</p>
</section>
