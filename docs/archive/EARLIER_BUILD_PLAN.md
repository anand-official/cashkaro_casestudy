> Historical artifact. Superseded by the Universal Shopping Skill on 13 September 2026.

> Current release: **CashKaro Order Check**. The material below is historical and may describe superseded concepts. Read `docs/FINAL_SUBMISSION.md` and `docs/REVIEW_RESPONSE.md` from the repository root. Raw AI exports remain incomplete.

> **Historical handoff / superseded strategy.** The final 11 Sep 2026 decision is CashKaro Shortlist, with the retailer overlay rejected as the lead. Read [FINAL_SUBMISSION.md](FINAL_SUBMISSION.md) and the current README. The original contents below are preserved as the decision history.

# CashKaro APM Case Study — Product Strategy & Build Plan

> **Status:** Planning baseline before any further UI work
>
> **Purpose:** Define exactly what problem we are solving, why this direction is worth pursuing, what we are intentionally not building, what the case-study website must communicate, what the prototype must demonstrate, and what evidence/assumptions must remain explicit.

---

## 0. Executive decision

The case study will argue that CashKaro’s missed opportunity with existing users is not simply a notification problem or a generic “forgetfulness” problem. The deeper issue is **journey position**:

> Existing CashKaro users often begin shopping directly inside retailer apps. CashKaro depends on them remembering to interrupt that natural journey and activate cashback elsewhere. That creates leakage.

The strategic insight is:

> **Do not predict when shopping might happen. Make CashKaro available when shopping context already exists.**

The chosen direction is an **Android-first CashKaro Shopping Companion** that detects supported retailer context at a high level and surfaces a lightweight cashback activation pill.

V1 is intentionally **retailer-aware, not product-aware**.

The product thesis is:

> **CashKaro does not need to become the place where shopping starts. It can become the savings layer around destinations users already choose.**

The solution is a hypothesis, not a claim that the implementation is already production-ready. The case study must demonstrate strong product judgment by showing both the opportunity and the kill gates.

---

# 1. What the assignment is actually asking us to solve

The assignment is centered on **existing CashKaro users** and the north star:

> **Tracked orders per existing user per quarter, measured on a fixed cohort.**

This means the case study is **not** primarily about:

- new-user acquisition,
- app installs,
- brand awareness in the general Indian population,
- increasing app opens for their own sake,
- maximizing notifications,
- maximizing overlay impressions,
- maximizing cashback pill CTR,
- building a shopping super-app.

Those may be useful secondary considerations, but they are not the core objective.

The product decision must answer:

> How can CashKaro capture more eligible shopping journeys from people who already know/use CashKaro but still purchase directly on retailers?

---

# 2. Problem statement

## 2.1 Final problem statement

> **Existing CashKaro users naturally begin shopping inside retailer apps. CashKaro currently depends on them remembering to leave or alter that journey to activate cashback, so eligible shopping opportunities can leak.**

This statement is deliberately narrower than saying “users forget CashKaro.” Forgetting may be one symptom, but it can be caused by several deeper forces:

- low mental availability,
- context-switch friction,
- low perceived cashback value relative to effort,
- uncertainty over eligibility,
- trust erosion from tracking failures,
- urgency inside the retailer journey,
- stronger visibility of retailer-native/card offers.

We should not claim that one of these is universally dominant without CashKaro internal data or broader research.

## 2.2 What we know vs what we infer

### What we know from the assignment

- The target is existing users.
- Direct retailer purchases are a missed opportunity for CashKaro.
- The north star is tracked orders per existing user per quarter on a fixed cohort.
- The assignment explicitly wants problem framing, evidence, prioritization, solution choice, MVP, measurement, GTM, feasibility and kill/scale logic.

### Directional evidence we have

Our qualitative research and adversarial reviews surfaced repeated themes:

- users may forget CashKaro,
- users may consider the extra steps too much effort,
- users may stay inside the retailer app once shopping begins,
- small cashback may not always justify effort,
- tracking failures weaken trust,
- retailer/card offers are often more immediately visible.

This evidence is directional, not population-level proof.

### Key inference

The strongest synthesis is not “people need reminders.” It is:

> **CashKaro is often absent when its value becomes relevant.**

That is why the solution direction should focus on **availability inside an existing shopping context** rather than another generic notification layer.

---

# 3. The missing-denominator problem

A major analytical constraint must remain explicit throughout the case study:

> CashKaro observes purchases routed through CashKaro. It generally does not observe the full set of eligible purchases made directly on retailer apps.

Therefore we do **not** know the true leakage rate from public data.

This has important consequences:

1. We should not fabricate a percentage such as “40% of CashKaro purchases leak.”
2. We should not identify “high leakage users” using only CashKaro click-out history and pretend that is unbiased.
3. Users with frequent CashKaro click-outs may actually be the users leaking the least.
4. A user with sparse CashKaro history may be either inactive or a heavy direct-retailer shopper; CashKaro cannot distinguish those cleanly without additional data.

This is why the case study should use **sensitivity analysis** and a randomized experiment instead of fake certainty.

---

# 4. Why not just send better reminders?

Contextual reminders initially look attractive because forgetfulness is plausible.

The problem is that CashKaro’s own historical data is incomplete:

- it observes routed purchases,
- it does not observe every direct shopping session,
- users who leak the most may look least predictable,
- prediction may fire at the wrong moment,
- frequent reminders risk notification fatigue.

The key strategic distinction is:

> **Predicted intent is weaker than observed shopping context.**

Opening a supported retailer app does not prove purchase intent, but it is stronger evidence of shopping context than a model guessing from cadence/history.

This does **not** mean the user is definitely going to buy. The product must remain lightweight because retailer-app open is context, not proof of imminent checkout.

---

# 5. Why the browser-extension analogy matters

Browser extensions solve an important behavioral problem:

> They surface value after shopping has already started.

That is behaviorally strong because they do not require the user to remember the cashback service first.

The limitation for this assignment is platform reach: India’s shopping behavior is heavily mobile/app-oriented, while a browser extension is primarily useful on desktop/web.

Therefore the insight we borrow is **not “build a browser extension.”**

The insight is:

> **Intervene after the shopping context exists.**

The Shopping Companion is the mobile expression of that principle.

---

# 6. Product thesis

## 6.1 Core thesis

> **CashKaro should become a savings layer that appears around shopping destinations users already choose.**

The job is not to force users to start every purchase inside CashKaro.

The job is to reduce the behavioral cost of earning cashback.

## 6.2 The two activations

This is the core UX concept and should remain central in the prototype.

### Activation 1 — Persistent consent

User decision:

> **“CashKaro may help me while I shop.”**

The user explicitly enables the Shopping Companion and grants whatever supported Android permissions are required.

The best acquisition moment is likely after CashKaro has **already delivered value**, e.g. after a successful cashback tracking/confirmation moment.

Principle:

> **Earn permission with delivered value, not promises.**

### Activation 2 — Transaction/session consent

User decision:

> **“Activate CashKaro for this shopping journey.”**

When a supported retailer app is open and cashback is available, CashKaro surfaces a small activation pill. The user explicitly activates cashback for that session.

CashKaro should not silently auto-activate or hijack attribution just because the companion is enabled.

Principle:

> **Earn the right to be present once; earn the right to participate every time.**

---

# 7. V1 product definition

## 7.1 V1 must ship conceptually as

- Android-first.
- Existing-user-focused.
- Retailer-level context only.
- A small, non-blocking activation pill.
- Explicit user activation.
- Clear retailer-level cashback rate/range.
- Minimal context switching.
- Existing CashKaro attribution/deep-link flow.
- Immediate “cashback activated” reassurance.
- Later “cashback tracked” confirmation where supported.
- Conservative frequency caps.
- Per-retailer disable and global off.
- Silent when there is no cashback/value to offer.

## 7.2 V1 must NOT include

- Accessibility-service-based screen reading.
- Reading product pages, cart contents, messages, or screen text.
- Product recognition.
- Price recognition.
- Exact per-product cashback estimates.
- Price comparison.
- AI/LLM shopping agent behavior.
- Predictive “you are about to shop” models as a dependency.
- Auto-activation without user intent.
- Checkout detection.
- Full shopping discovery/recommendation.
- A claim that CashKaro knows whether the user actually purchased outside CashKaro.

These exclusions are not lack of ambition. They are product discipline.

---

# 8. Future-state direction

The future product can be more contextual **only if** privacy-safe, partner-supported context becomes available.

Example future state:

> **Estimated ₹320 cashback on this purchase**

But this requires reliable product/category/price context through mechanisms such as approved retailer/affiliate APIs or explicit consented integrations.

This future concept should appear in the case study as:

> **A possible evolution, not a V1 requirement.**

The V1 question remains:

> Is retailer-level context alone sufficient to produce meaningful incremental tracked orders?

Only after answering that should CashKaro earn the complexity of richer context.

---

# 9. End-to-end user journey

## Stage A — CashKaro proves value

The user receives a legitimate CashKaro event such as:

> **₹186 cashback tracked**

This is important because CashKaro has demonstrated value before asking for extra permissions.

## Stage B — Companion invitation

Prompt:

> **Never miss cashback next time you shop**
>
> Turn on Shopping Companion and CashKaro can remind you when cashback is available on supported shopping apps.

The UI should clearly explain the privacy boundary:

> Knows: when a supported retailer app is open.
>
> Does not read: products, cart, messages or screen contents.

CTA:

> **Turn on Shopping Companion**

Secondary:

> Maybe later

## Stage C — Shopping happens normally

The user opens a supported retailer app as they normally would.

CashKaro does not take over the experience.

If cashback is unavailable, CashKaro stays silent.

If cashback is available and frequency rules allow, show the pill.

## Stage D — Retailer-context pill

Example:

> **CashKaro · Up to 6% cashback**
>
> **Activate**

Requirements:

- small,
- non-blocking,
- restrained branding,
- auto-hiding,
- no fake product-specific claims,
- no full-screen interruption.

## Stage E — Activation sheet

After tap:

> **Myntra**
>
> **Up to 6% cashback**
>
> Rates vary by category.
>
> **Activate Cashback**

Secondary:

> View rates & exclusions

If a critical eligibility constraint materially affects the purchase, surface it clearly.

Do not recreate a full T&C page in the activation sheet.

## Stage F — Attribution and return

On activation, CashKaro invokes the approved affiliate/deep-link mechanism and returns the user to shopping with the shortest practical disruption.

The case study must not promise “zero context switching” unless that is technically verified.

Preferred language:

> **Shortest practical path from “I’m already shopping” to “Cashback is active.”**

## Stage G — Immediate reassurance

Show briefly:

> **✓ Cashback activated**

Then get out of the way.

## Stage H — Trust closure

When CashKaro receives the tracking event:

> **₹186 cashback tracked**
>
> Pending confirmation

This completes the reward loop and reinforces trust.

---

# 10. Product experience principles

## 10.1 CashKaro is a utility, not an interruption

The Companion should feel closer to a system utility than an advertisement.

It has less right to screen real estate than the retailer whose app the user deliberately opened.

## 10.2 Every appearance spends trust

Do not optimize for maximum overlay impressions.

Optimize for **useful appearances**.

If there is no meaningful value to offer, stay silent.

## 10.3 Reduce behavioral distance

The product does not need literal zero-step activation.

It must materially reduce the distance between:

> “I am already shopping”

and

> “Cashback is active.”

## 10.4 Transparency beats cleverness

If cashback rates vary, say they vary.

Do not show a headline percentage that applies only to a narrow category and imply it applies universally.

## 10.5 Prove reliability after activation

The “activated” state and later “tracked” state are not cosmetic. They solve uncertainty and trust-loop erosion.

---

# 11. Copy rules — what we SHOULD say

Approved message territory:

- “Cashback available.”
- “Up to X% cashback.”
- “Rates vary by category.”
- “Activate Cashback.”
- “Cashback activated.”
- “₹X cashback tracked.”
- “CashKaro can remind you when cashback is available on supported shopping apps.”
- “CashKaro only detects when a supported retailer app is open.”
- “It does not read your products, cart or screen.”

Tone:

- calm,
- useful,
- precise,
- transparent,
- non-salesy,
- non-alarming.

---

# 12. Copy rules — what we MUST NOT say

Do not use copy that requires data V1 does not have.

Avoid:

- “Earn ₹320 on this product.”
- “Get ₹80 extra on top of your 10% card offer.”
- “Beat the best offer inside.”
- “This is the cheapest deal.”
- “You bought on Amazon without CashKaro.”
- “We saw what product you are viewing.”
- “We know you are about to purchase.”
- “CashKaro automatically activates cashback everywhere.”
- “No context switching.”
- “Indians love cashback.”
- any fake leakage %, conversion %, uplift %, or market number that we cannot defend.

The case study should be impressive because the reasoning is strong, not because the copy sounds magical.

---

# 13. Target population and launch cohort

## Problem population

> Existing Android CashKaro users who shop with supported retailers.

Do not define the problem population using heavy CashKaro click-out behavior because that can bias us toward users who already remember CashKaro.

## First beta cohort

For a controlled first experiment, a practical cohort can be:

> Existing Android CashKaro users with at least one previous successful tracked CashKaro transaction and eligible retailer coverage.

Why:

- they understand cashback,
- CashKaro has proven value to them,
- the permission request is easier to explain,
- they are less likely to confuse product education with activation friction.

Do not require multiple recent click-outs as a hard condition unless internal data later justifies it.

---

# 14. Measurement strategy

## 14.1 North star

> **Tracked orders per existing user per quarter, on a fixed cohort.**

For the experiment window:

> **Incremental tracked orders per randomized existing user.**

## 14.2 Experiment design

Randomize the **offer to enable Shopping Companion**, not only people who eventually enable it.

Control:

> Existing CashKaro experience.

Treatment:

> Offered Shopping Companion setup.

Primary analysis:

> **Intention-to-treat (ITT).**

Why:

Comparing voluntary adopters vs non-adopters would be biased because users who enable the feature are likely already more cashback-motivated.

## 14.3 Mechanism funnel

Use the funnel to diagnose the primary result:

> Eligible cohort → setup offer → permission adoption → eligible retailer context → pill exposure → activation → tracked purchase

These are **mechanism metrics**, not the north star.

## 14.4 Guardrails

Track:

- companion opt-out,
- permission revocation,
- retailer-specific disable,
- pill dismissal,
- app uninstall,
- complaints/support contacts,
- tracking failures,
- affiliate/partner complaints,
- commission economics,
- cancellation/returns where relevant.

Do not invent fixed success percentages without baselines, variance and power analysis.

---

# 15. Reach and sensitivity model

Because we do not know the leakage denominator, model the opportunity as a multiplication of gates:

> **Potential impact ≈ eligible existing users × Android/support coverage × permission adoption × eligible retailer sessions × pill exposure × activation × purchase conversion × incremental capture**

The point is not to pretend the inputs are known.

The point is to make clear where the product can fail even if users like the idea.

Example failure patterns:

- great activation but tiny permission adoption,
- great permission adoption but low supported-retailer coverage,
- high pill CTR but no incremental tracked-order lift,
- tracked-order lift but poor partner economics,
- high reach but unacceptable annoyance/uninstall.

---

# 16. Business-model constraint: CashKaro incrementality vs retailer incrementality

This distinction is essential.

## CashKaro incrementality

Question:

> Did CashKaro capture more tracked orders per existing user?

## Retailer incrementality

Question:

> Did the retailer receive meaningful incremental value, or did CashKaro simply insert itself into a purchase that would have happened anyway and claim affiliate commission?

This matters because affiliate programs are designed to reward incremental commercial value.

A successful CashKaro metric does not automatically mean the retailer/affiliate partner will accept the mechanism.

Therefore partner approval/economics are a pre-build/scale gate.

We must not pretend public Amazon/Flipkart affiliate documentation proves CashKaro’s private commercial terms.

---

# 17. Technical feasibility boundary

The case study should include enough technical detail to prove feasibility awareness without turning into Android architecture theater.

What the concept likely requires at a high level:

- detection of supported retailer foreground context through an approved Android mechanism,
- permission/value onboarding,
- overlay or equivalent lightweight surface,
- retailer mapping,
- frequency caps and suppression,
- explicit activation event,
- existing affiliate/deep-link handoff,
- experiment assignment/logging,
- activation/tracking state feedback.

Important technical truth:

> Overlay permission and knowing which app is in the foreground are separate concerns.

Do not imply overlay permission alone gives CashKaro access to the retailer app’s product/page contents.

V1 must explicitly exclude screen reading/Accessibility as a dependency.

Technical feasibility is a **hard gate**, but the assignment should remain primarily about product reasoning.

---

# 18. Risk register and kill gates

The strongest risks are not “will the button look good?”

They are:

## Gate 1 — Permission adoption

Will enough eligible users accept the setup required for the Companion?

If not, the solution may be behaviorally elegant but too low-reach.

## Gate 2 — Partner/affiliate approval

Will retailer/affiliate partners allow the intervention and attribution mechanism?

If not, the business cannot scale regardless of UX quality.

## Gate 3 — Causal incrementality

Does randomized offer exposure increase tracked orders per existing user?

If it merely shifts attribution among users already routing through CashKaro, value is limited.

## Gate 4 — Cohort-level reach/economics

Does the multiplication of platform coverage, supported retailers, permissions, exposure, activation and conversion create enough business impact to matter?

## Guardrail failure

Even with metric lift, kill or redesign if there is unacceptable:

- user annoyance,
- uninstall,
- privacy backlash,
- tracking degradation,
- support burden,
- partner conflict,
- negative unit economics.

---

# 19. What the interactive prototype must prove

The prototype is not there to show visual-design skill alone.

It must make five product decisions tangible:

1. **CashKaro earns permission after value is demonstrated.**
2. **CashKaro appears after shopping context exists instead of predicting it.**
3. **The surface is retailer-aware, not product-aware.**
4. **The user explicitly activates cashback for the session.**
5. **CashKaro closes the loop with activation/tracking reassurance.**

The prototype should have only the minimum states needed to prove those decisions.

Recommended core frames:

### Frame 1 — Value delivered / Companion invitation

- ₹X cashback tracked
- “Never miss cashback next time you shop”
- “Turn on Shopping Companion”

### Frame 2 — Retailer-context pill

- realistic retailer context
- small CashKaro pill
- “Up to X% cashback”
- Activate

### Frame 3 — Activation sheet

- retailer name
- rate/range
- critical eligibility note if needed
- Activate Cashback
- optional rate/terms link

### Frame 4 — Activated + tracked trust loop

- “✓ Cashback activated”
- later “₹X cashback tracked”

Optional future-state comparison:

- product-aware estimated cashback
- clearly labelled **Future concept / not V1**

---

# 20. What the prototype should NOT become

Do not turn it into:

- a full CashKaro redesign,
- a Myntra/Amazon clone,
- a high-fidelity e-commerce shopping project,
- a chatbot,
- a price-comparison dashboard,
- an AI assistant,
- a fake analytics dashboard,
- a complex permission simulator,
- a 15-screen onboarding flow.

The prototype is a causal demonstration of the intervention, not a portfolio flex.

---

# 21. Case-study website information architecture

The website should function as an interactive product review.

## Home / Case Study

Purpose:

> Tell the decision story quickly and clearly.

Recommended narrative:

1. Assignment objective and north star.
2. Initial obvious hypothesis: better reminders.
3. Evidence and missing-denominator problem.
4. Reframe: absence + journey friction, not memory alone.
5. Solution-space comparison.
6. Browser-extension insight and mobile constraint.
7. Core insight: observe context, do not predict timing.
8. Product thesis: Shopping Companion.
9. Two activations / product journey.
10. V1 scope and deliberate exclusions.
11. Experiment and ITT measurement.
12. Partner economics / key risks / kill gates.
13. Rollout and future state.

The homepage should not read like a 40-page consulting report. It should be highly scannable, with optional depth.

## Prototype

Purpose:

> Let the reviewer experience the idea.

The prototype should be the strongest visual proof of the decision.

## Research / Decision Log

Purpose:

> Show how the thinking evolved and what evidence supports each decision.

Clearly distinguish:

- assignment facts,
- user evidence,
- external evidence,
- inference,
- assumption,
- open question.

Include rejected directions and why they were rejected.

## AI Work Log

Purpose:

> Satisfy the assignment’s AI-transcript requirement without cluttering the product narrative.

The full relevant transcripts should remain available, grouped by model/session/phase.

Do not dump unrelated personal conversations.

---

# 22. What we should write in the case study

Emphasize:

- the north star,
- the missing denominator,
- why reminders are insufficient,
- why observed context is stronger than predicted timing,
- why retailer-level context is enough for V1 testing,
- why the product is intentionally lightweight,
- two-step consent,
- causal experiment design,
- CashKaro vs retailer incrementality,
- explicit kill gates,
- privacy boundary,
- first vs later product scope.

The recruiter should remember one sentence:

> **CashKaro does not need to become the place where shopping starts. It needs to be present when shopping already has a context.**

---

# 23. What we should NOT write

Avoid:

- generic cashback market-size slides,
- long history of affiliate marketing,
- generic “India is price sensitive” stereotypes,
- “Indians love cashback,”
- unsupported retailer leakage numbers,
- fake experiment results,
- made-up ROI,
- made-up engineering cost,
- precise frequency caps presented as proven science,
- public affiliate terms presented as CashKaro’s actual contract,
- unsupported claims that the retailer will approve,
- technical architecture beyond what helps product feasibility.

If data is unavailable, explicitly say:

> **Requires internal validation.**

That is stronger than fabrication.

---

# 24. Site design principles before UI begins

The visual system should reinforce the product thinking.

## Desired feel

- editorial product review,
- high signal density without clutter,
- restrained CashKaro-inspired accents,
- strong hierarchy,
- generous whitespace,
- confident typography,
- precise microinteractions,
- credible prototype realism.

## Avoid

- generic gradient startup landing page,
- glassmorphism everywhere,
- decorative dashboards,
- random metric cards,
- huge hero copy with no substance,
- excessive animation,
- fake device chrome,
- over-designed cards that make the case feel like a UI exercise.

The website must make the thinking look clearer, not louder.

---

# 25. Build sequencing

No further visual polish should begin until this plan is accepted.

## Phase 1 — Strategy lock

- finalize problem statement,
- finalize target population,
- finalize V1/non-V1 boundaries,
- finalize journey,
- finalize experiment,
- finalize kill gates,
- finalize core case-study story.

## Phase 2 — Content architecture

- write final slide/section headlines,
- write body copy,
- label facts vs assumptions,
- decide evidence callouts,
- decide what lives on homepage vs research page.

## Phase 3 — Prototype interaction spec

- frame-by-frame interaction,
- exact copy,
- transitions,
- failure/edge states only where meaningful,
- future-state toggle.

## Phase 4 — Visual system

- typography,
- spacing,
- color system,
- navigation,
- phone/prototype shell,
- content components,
- responsive behavior.

## Phase 5 — Implementation

- build the website,
- build the prototype interaction,
- wire research/transcript pages,
- responsive QA,
- accessibility basics,
- performance pass.

## Phase 6 — Product review

Audit every screen/section against:

- Is this claim supported?
- Does it move the argument forward?
- Is this V1 or future?
- Are we overstating feasibility?
- Are we optimizing a mechanism metric instead of the north star?
- Would an interviewer be able to attack this sentence?

## Phase 7 — Deployment

Only after content and interaction are stable:

- production deployment,
- mobile QA,
- desktop QA,
- public-link review,
- final transcript/evidence check.

---

# 26. Open questions that must remain open until validated

1. What Android permission path is acceptable and reliable for retailer foreground detection?
2. What exact attribution/deep-link behavior is supported for each launch retailer?
3. Can retailer state/cart be preserved after activation?
4. Which retailers would approve this interaction?
5. What is the actual permission adoption rate?
6. What is the eligible retailer-session denominator?
7. What is the incremental tracked-order effect under randomization?
8. What is the partner view on incrementality vs attribution recapture?
9. Which cashback/rate information can be safely and accurately shown before product/category context exists?
10. What frequency policy minimizes annoyance while preserving impact?

These are not weaknesses to hide. They define the validation roadmap.

---

# 27. Final product decision

We are **ready to proceed as a product direction**, not ready to claim production readiness.

The case study should therefore communicate:

> **Chosen direction:** Android Shopping Companion.
>
> **Why:** It attacks the journey-position problem using observed shopping context instead of uncertain prediction.
>
> **V1:** Retailer-aware, explicit activation, minimal disruption, no screen reading, no AI dependency.
>
> **Primary metric:** Incremental tracked orders per randomized existing user.
>
> **Pre-build/scale gates:** permission adoption, partner approval, causal incrementality, cohort reach/economics.

If those gates fail, we change or kill the solution.

That is the product judgment the submission should demonstrate.

---

# 28. Working rule for every future design/code decision

Before adding anything, ask:

> **Does this help prove the problem, the product decision, the causal mechanism, or the validation plan?**

If the answer is no, it probably does not belong in the submission.
