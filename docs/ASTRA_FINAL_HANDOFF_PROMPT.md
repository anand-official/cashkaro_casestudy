> Current release: **CashKaro Order Check**. The material below is historical and may describe superseded concepts. Read `docs/FINAL_SUBMISSION.md` and `docs/REVIEW_RESPONSE.md` from the repository root. Raw AI exports remain incomplete.

> **Historical handoff / superseded strategy.** The final 11 Sep 2026 decision is CashKaro Shortlist, with the retailer overlay rejected as the lead. Read [FINAL_SUBMISSION.md](FINAL_SUBMISSION.md) and the current README. The original contents below are preserved as the decision history.

# Master handoff prompt for GPT Astra — CashKaro APM submission owner

You are the final owner of a high-stakes CashKaro Associate Product Manager case-study submission.

Your job is not to "make the existing website prettier." Your job is to **audit, decide, rewrite, rebuild, test and deploy the best defensible final submission**.

Act simultaneously as a Principal Product Manager, Staff Product Designer, Senior Product Engineer, UX writer, growth/experimentation PM, technical PM, skeptical hiring-panel reviewer and ruthless final editor.

## Start here — mandatory reading order

1. **Original assignment PDF** supplied alongside this prompt. Read it first and treat it as the authoritative source.
2. GitHub repository: **https://github.com/anand-official/cashkaro_casestudy**
3. In the repo, read at minimum:
   - `docs/ORIGINAL_ASSIGNMENT_TEXT.md` (text extraction / backup only; PDF remains authoritative)
   - `transcripts/CHATGPT_PRIMARY_CONTEXT.md`
   - `docs/EXTERNAL_FEEDBACK_AND_STRATEGY_REVIEW.md`
   - `transcripts/01-chatgpt-handoff.txt`
   - `transcripts/02-qwen-behavioral-analysis.txt`
   - `transcripts/03-deepseek-principal-pm-review.md`
   - `transcripts/04-cross-model-working-notes.md`
   - `docs/FINAL_SUBMISSION.md`
   - `docs/PRODUCT_STRATEGY_AND_BUILD_PLAN.md`
   - `docs/SUBMISSION_CONTENT_BLUEPRINT.md`
   - `docs/EVIDENCE_AND_ASSUMPTIONS_MATRIX.md`
   - current website/prototype source.
4. Inspect the current deployed site from the URL in the repo README, but treat it as a draft.

Do not preserve existing work because effort was already spent. Preserve only what survives review.

## Critical new information — do not miss this

The previous direction was an Android retailer-app Shopping Companion: surface CashKaro when a supported retailer is already open.

An external product then gave a direct commercial critique:

> A retailer pays CashKaro when CashKaro gives it traffic or influences user intent. If CashKaro appears only after the user has already chosen and opened the retailer, CashKaro may simply recapture/steal attribution rather than create retailer value. Instead, intervene where the user is still deciding — e.g. YouTube product reviews, comparison/SEO pages such as 91mobiles-like content — and add value through product comparison, decision summaries, reviews, cashback/effective-price intelligence. Use Google Universal Cart as inspiration.

Treat this as material evidence that **re-opens the product decision**.

The retailer-overlay concept is NOT locked.

Your first senior-PM task is to decide whether the final submission should:
- KEEP it,
- MODIFY it substantially,
- or REJECT/PIVOT from it.

Do not build until you can defend that choice commercially, behaviorally and technically.

## The strongest current strategic reframing to investigate

The problem may not be "CashKaro is absent after a user enters a retailer."

The more valuable intervention point may be:

> **CashKaro should become useful while the user is still deciding what to buy or where to buy it, then route the final choice through CashKaro.**

Potential concept to investigate — not automatically accept:

### CashKaro Decision Companion / Savings Cart

Potential narrow MVP: high-consideration products such as smartphones.

Possible journey:
- user researches on YouTube, search, comparison/editorial content or review communities,
- user legitimately sends/saves the product into CashKaro (or uses another compliant supported surface),
- CashKaro normalizes product identity,
- compares eligible merchant options and effective price after cashback,
- summarizes decision-relevant attributes/trade-offs,
- surfaces reliable review/community evidence,
- maintains a cross-merchant consideration list / savings cart,
- optionally monitors price/availability if feasible,
- user chooses merchant while choice is still contestable,
- CashKaro routes the qualified click-out and tracks the order through the approved affiliate path.

The point is NOT "add AI features." The point is to prove a moment where CashKaro genuinely influences user/merchant choice.

## Google Universal Cart inspiration

Research Google's May 2026 Universal Cart announcement and official UCP/Cart API material yourself.

Use it only as inspiration for the principle:

> **Create a cross-surface consideration object before checkout, then keep adding decision value until purchase.**

Do not copy Google blindly. CashKaro has different assets, economics and data access.

## Locked assignment constraints

The north star remains:

**TRACKED ORDERS PER EXISTING USER PER QUARTER, ON A FIXED COHORT.**

Do not replace it with CTR, app opens, overlay impressions, save-to-cart rate, agent sessions, GMV, or new-user growth. Those can be mechanism/business metrics only.

The submission must preserve the brief's roughly 50/50 balance:

### Understanding the right problem
- framing
- user understanding
- evidence
- segmentation
- business understanding
- explicit assumptions
- breadth of solution exploration
- prioritization/trade-offs
- why the chosen problem/solution wins

### Making the right product decision
- product judgment
- UX/execution
- technical feasibility
- GTM
- measurement
- rollout and scale/change/kill

## Preserve the best prior reasoning unless invalidated

Important insights worth carrying forward:

### Missing denominator
CashKaro observes routed purchases better than the direct eligible purchases it is trying to recover.

Therefore:

**Prediction accuracy != incremental opportunity.**

This is why simple cadence-based reminder targeting was deprioritized.

### Evidence discipline
One qualitative respondent surfaced context friction, low mental availability, value threshold, trust erosion and native-offer salience. This is mechanism evidence, not population prevalence.

### Commercial distinction
Always separate:

**CashKaro incrementality** — more tracked orders for CashKaro.

**Retailer incrementality** — did CashKaro actually influence/produce incremental traffic, merchant choice or conversion value?

The external feedback makes retailer incrementality even more central.

## Evidence rules

Never fabricate:
- leakage rate,
- adoption rate,
- conversion rate,
- uplift,
- partner approval,
- private affiliate contract terms,
- retailer incrementality,
- product-data access,
- API availability.

Label important claims as fact, direct user evidence, public evidence, inference, assumption or kill gate.

Use a small number of high-quality sources that change a decision. Prefer primary/official sources.

## Product decision standard

Do not produce a fake matrix where everything looks good.

Explicitly compare at least:
- home-screen / quick access,
- browser extension,
- contextual push,
- share/deep-link,
- discovery/shopping agent,
- previous retailer-overlay Companion,
- upstream decision-companion / savings-cart direction.

For each, evaluate behavior fit, reach, user value, retailer value, feasibility, data dependencies, trust/privacy, and ability to move tracked orders per existing user.

The final chosen concept should survive the strongest counterargument.

## If the upstream decision-companion wins

Do not build an everything-agent.

Narrow aggressively.

Strong candidate: one high-consideration category, e.g. smartphones, because:
- users research before purchase,
- merchant choice may remain open,
- structured attributes exist,
- comparison behavior is common,
- AOV makes cashback more meaningful.

But verify this instead of assuming it.

Define the smallest MVP that tests whether CashKaro can change a merchant/purchase decision.

Potential prototype states might include:
1. Research surface / product captured.
2. CashKaro decision card with key trade-offs.
3. Cross-retailer effective-price comparison including cashback.
4. Evidence/review summary with provenance.
5. Save to consideration/savings cart.
6. User chooses retailer and activates Shop via CashKaro.
7. Approved affiliate handoff.
8. Tracked cashback state later.

Do not imply CashKaro can scrape arbitrary screens or access protected content. Choose a legitimate acquisition surface (share sheet, browser/extension where supported, explicit URL import, CashKaro search, partner feed, etc.) and explain its trade-offs.

## Technical feasibility

High-level only, but real.

If the concept requires:
- product identity extraction,
- structured specs,
- merchant catalogs,
- current price,
- cashback eligibility/rates,
- bank offers,
- review/community summaries,
- price history,

state where each datum plausibly comes from and what is missing.

Do not assume a magical universal API.

If a manually curated/limited catalog is the right MVP to test product value before full infrastructure, say so.

## Experiment design

The primary success metric must ladder to tracked orders per existing user per quarter.

If the product is a decision-stage companion, design a causal experiment around exposure/availability of the companion, not only people who self-select into using it.

Possible primary metric:
**incremental tracked orders per randomized eligible existing user**.

Mechanism metrics may include:
- product capture/save rate,
- comparison engagement,
- merchant-choice changes,
- CashKaro click-out,
- tracked order,
- repeat use.

Guardrails should include:
- abandonment,
- trust/accuracy complaints,
- stale price/offer errors,
- attribution/tracking failures,
- latency,
- merchant/affiliate objections,
- unit economics.

If possible, define a way to distinguish attribution recapture from true merchant influence.

## GTM

Choose one first segment and explain why.

Do not say "launch to 10%" without power/operational logic.

If the product is smartphone-decision focused, consider existing CashKaro Android users showing high-consideration electronics intent, but only use signals CashKaro can actually observe or legally obtain.

## AI transcript requirement

The assignment explicitly asks for the complete AI interaction trail.

The repo now contains the raw/working artifacts we were able to recover and a structured ChatGPT context file. Do not describe a reconstructed handoff as a verbatim raw transcript.

If the final submission still lacks exact exports of any model session that materially affected the work, flag that clearly as a manual requirement instead of inventing content.

## Website and submission execution

After you make the product decision:

1. Rewrite the case narrative around the final decision.
2. Update the decision log so the pivot is visible rather than hidden.
3. Rebuild or refactor the prototype to represent the chosen product accurately.
4. Make the website feel like a top-tier consumer-product review artifact, not a student portfolio template.
5. Use strong editorial hierarchy, restrained brand cues, excellent typography/spacing, clear diagrams and credible product UI.
6. Avoid generic AI gradients, glassmorphism, decorative dashboards and fake data.
7. Make the prototype actually interactive.
8. Ensure desktop/mobile accessibility and responsive QA.
9. Audit every requirement in the original PDF.
10. Commit the final source to GitHub and deploy to Vercel.

You may replace the current implementation entirely if that improves the final submission.

## Definition of done

You are done only when:
- the original PDF has been audited line by line,
- the final problem framing is defensible,
- external product feedback has been incorporated explicitly,
- the chosen solution beats the alternatives for a clear reason,
- user + CashKaro + retailer value are aligned,
- the prototype shows only plausible capabilities,
- technical/data dependencies are honest,
- measurement is causal,
- GTM and kill gates are explicit,
- the AI work trail is accessible and honestly labelled,
- the live site passes mobile + desktop QA,
- every link works,
- production deployment works,
- repo is updated,
- one final skeptical hiring-panel pass has been completed.

## Final handoff format

When finished, return:

A. Final product decision and one-paragraph rationale
B. Final production URL
C. GitHub commit / branch
D. What materially changed from the previous retailer-overlay direction
E. Assignment-compliance checklist
F. Evidence/assumption/kill-gate summary
G. Remaining genuine unknowns
H. Any manual item Ujjawal must still supply before submission

Do not stop to ask about fonts, colors or routine implementation choices. Own those decisions.
Escalate only if a decision changes the fundamental strategy, requires credentials/approval you do not have, or would create an unsupported factual claim.