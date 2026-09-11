# Astra / ChatGPT Work — Final Submission Owner Prompt

You are taking over a high-stakes **CashKaro Associate Product Manager product assignment** and you own the final submission end-to-end.

Your job is **not** to simply polish an existing website. Your job is to read the original brief, inherit the complete reasoning trail, challenge weak assumptions, then autonomously finish the strongest defensible submission possible.

Act as a combination of:
- Principal Product Manager
- Staff Product Designer
- Senior Product Engineer
- UX Writer
- Growth / Experimentation PM
- Technical PM
- skeptical hiring-panel reviewer
- ruthless final editor

The standard is: **would a top consumer-product hiring panel want to interview this candidate after reviewing the work?**

## Step 1 — Start from the repository

Open and inspect this repository first:

**https://github.com/anand-official/cashkaro_casestudy**

Do not make major edits until you understand the repository and the assignment.

### Mandatory read order

1. `source-material/ORIGINAL_ASSIGNMENT_TRANSCRIPT.md` — exact parsed text of the 3-page assignment. If the original PDF is attached separately in the Work/Astra conversation, read that too; the PDF is authoritative.
2. `docs/AI_CONTEXT_HANDOFF.md` — compiled context from the primary ChatGPT workstream.
3. `docs/FINAL_SUBMISSION.md` — current written case.
4. `docs/PRODUCT_STRATEGY_AND_BUILD_PLAN.md` — canonical strategy/build reasoning.
5. `docs/EVIDENCE_AND_ASSUMPTIONS_MATRIX.md` — evidence discipline.
6. `docs/SUBMISSION_CONTENT_BLUEPRINT.md` — current narrative architecture.
7. `docs/PRE_SUBMISSION_REVIEW.md` — current QA checklist.
8. `source-material/QWEN_BEHAVIORAL_ANALYSIS_TEXT.md` — Qwen adversarial analysis.
9. `source-material/DEEPSEEK_PRINCIPAL_PM_REVIEW.md` — DeepSeek synthesis/red-team.
10. `source-material/PRIMARY_HANDOFF_TO_EXTERNAL_AGENTS.md` — prior cross-model handoff/context.
11. inspect the existing live site and implementation files.

The original assignment overrides every AI document if anything conflicts.

## Step 2 — Understand the existing product judgment

The current direction is a **working product decision, not a sacred conclusion**.

The current north star is locked by the brief:

> **Tracked orders per existing user per quarter, on a fixed cohort.**

The current problem framing is:

> Existing CashKaro users naturally begin shopping inside retailer apps. CashKaro currently depends on them remembering to alter that journey to activate cashback, so eligible shopping opportunities can leak.

The key analytical insight is the **missing denominator**: CashKaro observes routed purchases much better than direct retailer purchases, so the users easiest to predict from CashKaro history may not be the users with the most recoverable leakage.

Therefore:

> **Prediction accuracy is not the same thing as incremental opportunity.**

The current strategic thesis is:

> **Don't predict when shopping might happen. Make CashKaro available when shopping context already exists.**

The selected hypothesis is an **Android-first CashKaro Shopping Companion**.

The strategic role is:

> **CashKaro does not need to become the place where shopping starts. It can become the savings layer around destinations users already choose.**

## Step 3 — Preserve the V1 boundary unless evidence forces a change

V1 should remain:
- Android-first
- existing-user focused
- retailer-aware
- not product-aware
- explicitly opt-in
- explicit activation per shopping session
- non-blocking
- conservative about frequency
- silent when CashKaro has no useful value to offer

V1 must not claim or depend on:
- Accessibility Service
- screen reading
- product/cart/search inspection
- exact product price
- exact rupee cashback on the current product
- checkout detection
- AI shopping agent
- predictive shopping models
- silent auto-activation

Allowed retailer-level copy:

> “CashKaro · Up to 6% cashback · Activate”

Do not use product-level copy such as “Save ₹320 on this item” unless it is clearly marked as a future concept requiring privacy-safe partner-supported context.

## Step 4 — Preserve the two-activation product model

There are two separate user decisions.

### Activation 1 — Permission to be present

> “CashKaro may help me while I shop.”

Best current hypothesis: ask after CashKaro has already demonstrated value, for example after a real cashback tracking event.

Principle:

> **Earn permission with delivered value, not promises.**

### Activation 2 — Permission to participate in the current session

> “Activate CashKaro for this journey.”

Do not silently hijack attribution.

Principle:

> **Earn the right to be present once. Earn the right to participate every time.**

## Step 5 — Final prototype requirement

Build/refine an interactive prototype that communicates the real V1 clearly:

1. legitimate value moment: “₹186 cashback tracked”
2. invite: “Never miss cashback next time you shop”
3. concise privacy/value explanation
4. simulated supported retailer context
5. subtle pill: “Up to X% cashback · Activate”
6. compact activation sheet
7. explicit **Activate Cashback**
8. simulated approved affiliate/deep-link handoff
9. return to retailer context
10. “✓ Cashback activated”
11. later “₹X cashback tracked · Pending confirmation”
12. clear missing-cashback/recovery path where useful

The product should feel like a **utility**, not an advertisement.

Principle:

> **Every appearance spends trust.**

Do not optimize for maximum overlay impressions.

## Step 6 — Preserve causal experiment quality

Randomize the **offer to enable Shopping Companion**, not only successful adopters.

Control: normal CashKaro experience.  
Treatment: eligible existing users are offered Companion setup.

Analyze **intention to treat**.

Primary experiment metric:

> **Incremental tracked orders per randomized existing user.**

Mechanism funnel may include:

eligible cohort → setup offer → permission adoption → supported retailer context → pill exposure → activation → tracked order

Guardrails:
- revocation / disable
- repeated dismissals
- uninstall
- support complaints
- tracking failure / missing cashback
- cancellations / returns where relevant
- partner complaints
- unit economics

Do not invent an expected uplift without internal data and power analysis.

## Step 7 — Preserve the commercial distinction

Explicitly distinguish:

**CashKaro incrementality:** did tracked orders per existing user increase?

**Retailer incrementality:** did the retailer gain incremental economic value, or did CashKaro merely claim affiliate credit for a purchase that would have happened anyway?

Key question:

> **Did we create a new transaction — or only change who gets credit?**

Retailer/affiliate approval is a real kill gate.

Do not treat public Amazon/Flipkart affiliate terms as proof of CashKaro's negotiated contracts.

## Step 8 — Final submission must visibly satisfy the PDF

Audit the assignment line by line and ensure the final experience clearly addresses:
- problem framing
- user understanding
- evidence
- segmentation
- business understanding
- assumptions
- solution breadth
- prioritization/trade-offs
- why this problem was selected
- chosen solution
- UX/key flows
- V1 vs later
- measurement
- technical feasibility
- prototype/demo
- GTM
- launch cohort
- rollout
- scale/change/kill
- AI transcript

Maintain roughly **50% problem / 50% solution** depth.

Do not let the prototype dominate the problem reasoning.

## Step 9 — Evidence discipline

Treat every important statement as one of:
- FACT
- USER EVIDENCE
- PUBLIC EVIDENCE
- INFERENCE
- ASSUMPTION
- KILL GATE

Never fabricate:
- leakage rate
- adoption/conversion rate
- expected uplift
- partner approval
- exact contracts
- retailer incrementality
- product-level visibility
- “India loves cashback” generalizations

Use external research only when it changes a decision. Prefer primary/authoritative sources and Android/platform documentation.

## Step 10 — Website / UX / engineering mandate

The current site is a **draft**, not an asset that must be preserved.

You may rewrite copy, restructure information architecture, redesign the visual system, replace components, rebuild the prototype, refactor/replace the technology stack, and remove weak sections.

Do not rewrite into a complex stack just to sound sophisticated. Choose the implementation that produces the best reliable final result.

Quality bar:
- top-tier consumer-product case study
- strong editorial hierarchy
- excellent typography and spacing
- responsive mobile/desktop
- accessible
- fast
- no broken links
- no console errors
- no fake charts/data
- no generic AI gradients/glassmorphism/SaaS-card soup
- no over-animation
- no student-project feel

The retailer simulation should establish context without copying a proprietary retailer UI pixel-for-pixel.

## Step 11 — AI transcript requirement

The assignment explicitly asks for the complete AI interaction trail.

Use the supplied raw AI/source material in `source-material/` and the compiled context in `docs/AI_CONTEXT_HANDOFF.md`.

Do not invent missing transcript content.

If a raw interaction is unavailable, say so clearly rather than pretending the log is complete.

Build a clean AI work-log/index where a reviewer can understand:

forgetfulness → predicted reminders → missing-denominator attack → journey-position reframe → browser-extension insight → Android shopping context → retailer-aware V1 → two activations → ITT experiment → partner/reach kill gates

## Step 12 — Work autonomously

Use the connected GitHub and Vercel accounts.

Work directly in:

**anand-official/cashkaro_casestudy**

You are allowed to make strong routine product/design/engineering decisions without asking me.

Do not ask me to choose fonts, spacing, component styles, minor copy or routine refactors.

Escalate only if you want to change the core product strategy, a claim cannot be supported, credentials/permissions block work, or a destructive action risks losing important source material.

Commit meaningful changes and deploy the final production site.

Prefer a clean Vercel alias such as:
- cashkaro-apm-case.vercel.app
- cashkaro-case-study.vercel.app
- cashkaro-shopping-companion.vercel.app

Do not break the existing working deployment until the replacement is tested.

## Definition of done

You are not done when “the site looks good.”

You are done only when:
1. the original assignment has been audited line by line
2. problem framing is defensible
3. evidence and assumptions are labelled correctly
4. solution choice is clearly superior to rejected alternatives
5. the V1 prototype communicates only capabilities V1 can actually support
6. experiment design is causally sound
7. GTM and kill gates are explicit
8. technical feasibility is credible and restrained
9. AI work log uses all supplied material and clearly labels any missing raw transcripts
10. desktop QA passes
11. mobile QA passes
12. every link works
13. final production deployment works
14. GitHub contains the final state
15. you perform one final hostile hiring-panel review and fix the weak points

## Final handoff format

When finished, report only:

A. Final production URL  
B. GitHub commit / branch  
C. Material changes made  
D. Assignment-compliance checklist  
E. Remaining genuine unknowns / risks  
F. Anything I still need to manually upload or include

Take ownership and finish the submission.
