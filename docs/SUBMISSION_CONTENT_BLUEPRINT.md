> Current release: **CashKaro Order Check**. The material below is historical and may describe superseded concepts. Read `docs/FINAL_SUBMISSION.md` and `docs/REVIEW_RESPONSE.md` from the repository root. Raw AI exports remain incomplete.

> **Historical handoff / superseded strategy.** The final 11 Sep 2026 decision is CashKaro Shortlist, with the retailer overlay rejected as the lead. Read [FINAL_SUBMISSION.md](FINAL_SUBMISSION.md) and the current README. The original contents below are preserved as the decision history.

# CashKaro APM Case Study — Submission Content Blueprint

> **Status:** Content architecture freeze before visual design
>
> **Purpose:** Turn the product strategy into a recruiter-ready narrative. This document defines exactly what the case study should say, what each section must prove, what evidence belongs where, what should be visualized, and what must be cut.
>
> **Operating principle:** The submission should feel like a senior product review, not a feature pitch, consulting deck, or portfolio decoration.

---

## 0. Narrative thesis

The case study must make one argument, progressively:

1. CashKaro is losing eligible journeys from existing users.
2. “Forgetfulness” is only a surface symptom.
3. Predictive reminders are structurally weak because CashKaro does not observe the full shopping denominator.
4. The stronger intervention point is an already-existing shopping context.
5. Browser extensions prove the behavioral pattern, but mobile retailer apps are the more relevant surface.
6. Therefore, CashKaro should become a **savings layer around shopping destinations** rather than forcing users to remember CashKaro first.
7. V1 should be a lightweight Android Shopping Companion: retailer-aware, explicit, restrained, and measurable.
8. The idea is only worth scaling if permission adoption, partner economics, causal uplift, and reachable cohort size all survive validation.

The recruiter should leave remembering one sentence:

> **CashKaro does not need to become the place where shopping starts. It needs to be present when shopping already has a context.**

---

# 1. Submission format

The website should behave like a deck when skimmed and like a case study when explored.

Primary path:

`/` — Case study narrative

Secondary paths:

`/prototype` — Interactive product prototype

`/research` — Evidence, assumptions, decisions, and rejected directions

`/ai-transcript` — Full assignment-related AI interaction log

The main page should be scannable in 6–8 minutes. Supporting pages should reward deeper inspection without burdening the primary narrative.

---

# 2. Story architecture — 12 sections

## Section 1 — The brief

### Headline

> **Increase tracked orders from users CashKaro already has.**

### What this section must prove

We understand the assignment objective and will not drift into acquisition, engagement vanity metrics, or generic cashback growth.

### Content

- Existing users are the target.
- North star: **tracked orders per existing user per quarter, on a fixed cohort.**
- Direct-to-retailer purchases represent the opportunity.

### Visual

A single metric lockup, not a dashboard.

### Do not include

- market-size slides,
- broad cashback category growth,
- generic India e-commerce stats here,
- new-user acquisition language.

---

## Section 2 — The obvious answer

### Headline

> **The first instinct was simple: remind users more.**

### What this section must prove

We explored the obvious direction before rejecting or modifying it.

### Content

Show the initial hypothesis:

> If existing users forget CashKaro, better-timed reminders should recover orders.

Then immediately challenge it:

> But CashKaro mostly sees journeys that already came through CashKaro.

### Visual

Two-step contrast:

`Historical CK behavior → predict likely shopping moment → send reminder`

with a visible question mark over the prediction step.

### Do not include

A long notification strategy. This is a rejected/modified path, not the chosen solution.

---

## Section 3 — The missing denominator

### Headline

> **The users leaking the most may be the users CashKaro understands the least.**

### What this section must prove

This is the analytical pivot of the problem framing.

### Content

CashKaro observes routed purchases and click-outs, but generally not the complete set of direct retailer purchases.

Therefore:

- frequent CK users may be low-leakage users,
- sparse CK history may mean inactivity **or** heavy direct-retailer shopping,
- cadence models can be biased by what CashKaro happens to observe,
- leakage rate cannot be honestly invented from public data.

### Visual

A denominator diagram:

`All eligible retailer shopping`

split into:

`Observed by CashKaro` and `Unobserved direct journeys`

The unobserved branch should be visibly larger/unknown, but **not numerically sized**.

### Do not include

Any fake leakage percentage.

---

## Section 4 — What user evidence actually changed

### Headline

> **“Forgetting” looked less like memory failure and more like a cost-benefit decision.**

### What this section must prove

We used qualitative evidence directionally and did not over-generalize it.

### Content

Present the behavioral hypothesis tree:

- context-switch friction,
- low perceived value relative to effort,
- tracking trust erosion,
- uncertainty about eligibility,
- weak mental availability,
- retailer/card offers dominating attention.

Use one or two short quotes from the user interview if available, clearly labeled **N=1 directional evidence**.

### Visual

A compact hypothesis map rather than six equal cards.

Suggested synthesis:

`Value × Trust > Friction` determines whether the user bothers to route through CashKaro.

### Important line

> **Expected cashback is not just the reward amount; it is reward × confidence it will actually arrive.**

### Do not include

“Indians love cashback.”

---

## Section 5 — Reframing the problem

### Headline

> **The deeper problem is journey position.**

### What this section must prove

We moved from a symptom to a product problem.

### Content

Current natural journey:

`Need → retailer app → browse → native/card offers → checkout`

Traditional CashKaro journey:

`Remember CashKaro → open CashKaro → find retailer → click out → resume shopping`

Problem statement:

> **Existing CashKaro users naturally begin shopping inside retailer apps. CashKaro depends on them remembering to interrupt that journey to activate cashback, so eligible opportunities can leak.**

### Visual

Two journey rails, with the “remember CashKaro” step highlighted as the unnatural insertion.

---

## Section 6 — Why existing directions were not enough

### Headline

> **The right mechanism existed — but on the wrong surface.**

### What this section must prove

We compared solution classes and chose deliberately.

### Content

Use a concise ranked comparison:

- browser extension — excellent behavior fit, limited mobile-app reach,
- contextual push — broad reach, weak/guessed timing,
- share/deep-link back — useful but still requires recall,
- widget — shortcut, not contextual,
- shopping agent — too much behavior change and unnecessary complexity,
- mobile companion — combines observed context with mobile reach.

### Visual

2×2 or ranked strip using only two axes that matter:

**Context fidelity** and **Reach in the target journey**.

### Important line

> **Browser extensions solve the right behavioral problem on the wrong dominant surface; reminders reach the right surface but still guess the moment.**

---

## Section 7 — Core product insight

### Headline

> **Don’t predict the moment. Observe that shopping has already started.**

### What this section must prove

This is the leap from research to product thesis.

### Content

Retailer-app open is not proof of purchase intent. It is simply stronger context than a prediction based on incomplete history.

Strategic thesis:

> **CashKaro becomes the savings layer around destinations users already choose.**

### Visual

Before:

`predict → interrupt → hope`

After:

`observe context → surface value → let user activate`

This should be one of the cleanest sections in the case study.

---

## Section 8 — The product: CashKaro Shopping Companion

### Headline

> **A lightweight cashback layer that appears only when it can help.**

### What this section must prove

The chosen solution follows directly from the insight and is intentionally scoped.

### Content

V1 behavior:

1. User opts into Shopping Companion.
2. User later opens a supported retailer app.
3. If cashback is available, CashKaro surfaces a small pill.
4. User taps.
5. CashKaro shows retailer-level rate/rules.
6. User explicitly activates cashback.
7. CashKaro performs the approved attribution/deep-link flow.
8. User continues shopping.
9. CashKaro confirms activation and later tracking.

### V1 boundary

- Android-first,
- retailer-aware,
- not product-aware,
- no screen reading,
- no Accessibility-based inspection,
- no AI requirement,
- no auto-activation,
- silent when no value exists.

### Visual

A four-state product storyboard, linked to the interactive prototype.

---

## Section 9 — The two activations

### Headline

> **Earn the right to be present once. Earn the right to participate every time.**

### What this section must prove

We understand both permission psychology and transactional control.

### Content

Activation 1 — persistent consent:

> “CashKaro may help me while I shop.”

Best acquisition moment: after CashKaro has just demonstrated value through a successful cashback tracking/confirmation event.

Activation 2 — session consent:

> “Activate CashKaro for this shopping journey.”

This prevents the companion from becoming silent attribution hijacking.

### Visual

A loop:

`cashback tracked → permission earned → retailer context → session activation → tracked cashback → trust grows`

### Important principle

> **Every appearance spends trust.**

Do not optimize for maximum impressions. Optimize for useful appearances.

---

## Section 10 — MVP, later, never

### Headline

> **Restraint is part of the product.**

### What this section must prove

We can prioritize and avoid building impressive-looking nonsense.

### Content

Three columns:

**V1**
- retailer detection,
- small pill,
- retailer-level cashback information,
- explicit activation,
- tracking reassurance,
- conservative caps,
- controls.

**Later, if validated**
- richer category/product context through approved integrations,
- estimated cashback amounts,
- smarter relevance based on privacy-safe context.

**Not in this strategy**
- screen scraping,
- generic AI shopping agent,
- price-comparison engine,
- silent activation,
- checkout detection via invasive permissions.

### Future-state visual

One small concept only:

> `Estimated ₹320 cashback on this purchase`

Label clearly:

**Future concept — requires privacy-safe product context / partner support.**

---

## Section 11 — Proving it works

### Headline

> **Do not measure the people who chose the feature. Measure the users we offered it to.**

### What this section must prove

We know how to separate product causality from self-selection.

### Content

Randomize the **offer** to enable Shopping Companion.

Control:

> existing CashKaro experience.

Treatment:

> offered Companion setup.

Primary analysis:

> **intention-to-treat.**

Primary metric during experiment:

> **incremental tracked orders per randomized existing user.**

Mechanism funnel:

`eligible → setup offer → permission adoption → retailer context → exposure → activation → tracked order`

Guardrails:

- opt-out / permission revocation,
- retailer disable,
- dismissals,
- uninstalls,
- tracking failures,
- support volume,
- partner complaints,
- economics.

### Visual

Experiment diagram with randomization before adoption.

### Do not include

Invented activation targets or fake significance thresholds.

---

## Section 12 — What could kill it

### Headline

> **A good idea is only useful if four things survive contact with reality.**

### What this section must prove

We understand the commercial and operational risks, not just UX.

### Four kill gates

**1. Permission/setup adoption**

Enough users must accept the value exchange for the feature to have cohort-level reach.

**2. Partner / affiliate approval**

The attribution mechanism must be permitted and economically sustainable for supported retailers.

**3. True CashKaro incrementality**

The randomized cohort must produce more tracked orders, not merely higher engagement with the pill.

**4. Reach × economics**

Even if the treatment works among enabled users, the total eligible population must be large enough to move tracked orders per existing user.

### Critical business distinction

> **CashKaro incrementality is not the same as retailer incrementality.**

Ask:

> Did CashKaro create a new or more valuable transaction for the retailer, or simply insert itself into an order that would have happened anyway?

### Final decision framing

> **Ready as a product direction. Not yet ready for production commitment.**

---

# 3. Prototype content specification

The prototype should demonstrate product judgment, not visual spectacle.

## Frame 1 — Value delivered / permission earned

Context: CashKaro app after a genuine tracked cashback event.

Primary:

> **₹186 cashback tracked**

Secondary:

> **Never miss cashback next time you shop**

CTA:

> **Turn on Shopping Companion**

Privacy boundary:

> Knows when a supported shopping app is open. Does not read products, cart, messages or screen contents.

What this frame proves:

> CashKaro asks for permission after demonstrating value.

---

## Frame 2 — Retailer context

Context: simulated retailer app.

Pill:

> **CashKaro · Up to 6% cashback**
>
> **Activate**

What this frame proves:

> User did not have to remember or open CashKaro first.

Constraints:

- small,
- non-blocking,
- restrained,
- auto-hiding,
- no product-specific claims.

---

## Frame 3 — Explicit activation

Sheet:

> **Myntra**
>
> **Up to 6% cashback**
>
> Rates vary by category.
>
> **Activate Cashback**

Secondary:

> View rates & exclusions

Optional tertiary:

> Don’t remind me on Myntra

What this frame proves:

> CashKaro stays transparent and asks for per-session consent.

---

## Frame 4 — Trust closure

Immediate:

> **✓ Cashback activated**

Later:

> **₹186 cashback tracked**
>
> Pending confirmation

What this frame proves:

> Activation is not the end of the product. Reliability must be visible.

---

# 4. Research page architecture

The research page should not read like a bibliography dump.

Use five labeled evidence buckets:

**Assignment facts** — directly from CashKaro brief.

**User evidence** — clearly labeled qualitative, including sample size.

**Public evidence** — external research about India/mobile shopping/reward behavior/platform constraints.

**Inference** — our synthesis from the evidence.

**Open question** — requires CashKaro internal data/partner input.

Every meaningful claim on the main case study should trace back to one of these buckets.

---

# 5. AI transcript page architecture

The assignment requires the AI interaction record. The transcript page should demonstrate rigor, not performative “AI usage.”

Organize by phase:

1. Initial framing
2. Reminder hypothesis
3. Missing-denominator challenge
4. User evidence / reframing
5. Shopping Companion direction
6. Qwen adversarial review
7. DeepSeek principal-PM review
8. Final decisions

For each conversation, display:

- model,
- date,
- phase,
- full raw transcript,
- a short metadata field outside the transcript: **Decision impact**.

Example:

> **Decision impact:** Rejected product-aware V1 because retailer-level context is sufficient to test the causal hypothesis and product context is not safely/reliably available.

Do not rewrite the raw transcript itself.

---

# 6. Visual language rules

The design must signal product judgment, not “student deck.”

### Desired

- editorial typography,
- confident whitespace,
- strong hierarchy,
- restrained CashKaro-inspired accents,
- diagrams that explain causal logic,
- real interaction states,
- small number of high-information visuals,
- clear labels for assumptions and unknowns.

### Avoid

- generic SaaS gradients,
- glassmorphism everywhere,
- fake KPI cards,
- decorative charts,
- stock imagery,
- excessive phone mockups,
- huge paragraphs on the main page,
- 3D blobs,
- animation for its own sake,
- fabricated analytics.

The visual standard should feel closer to a product strategy review at a strong consumer-tech company than a portfolio template.

---

# 7. Claim-control checklist

Before any claim appears in the final case study, ask:

1. Is this directly supported by the assignment?
2. Is this supported by our user evidence? If yes, have we labeled the sample size?
3. Is this external/public evidence? If yes, is there a source?
4. Is this an inference? If yes, is it written as an inference rather than a fact?
5. Is this an internal-data requirement? If yes, have we left it as an open question?

Do not allow the design to visually upgrade an assumption into a fact.

---

# 8. Information-density rules

Main case-study page:

- one idea per section,
- headline should carry the conclusion,
- body copy should mostly explain why,
- no more than 2–4 supporting bullets per section,
- every visual must answer a question,
- detailed caveats move to Research, but critical uncertainty stays visible in the main narrative.

Prototype:

- show behavior, not feature inventory,
- demonstrate restraint,
- no impossible capabilities.

Research:

- depth is welcome,
- provenance must be explicit.

AI log:

- complete, searchable, secondary to the case study.

---

# 9. Build sequence from here

## Phase 1 — Content freeze

- Review this blueprint and the strategy document.
- Resolve contradictions.
- Lock exact problem statement, thesis, V1 boundary, metrics, kill gates.
- Mark all evidence still required.

## Phase 2 — Evidence pass

- Gather only evidence that materially supports or challenges the narrative.
- Replace weak secondary sources where stronger primary sources exist.
- Add citations and source notes.
- Keep unsupported internal CashKaro facts as unknowns.

## Phase 3 — Wireframe

- Convert the 12-section narrative into low-fidelity page structure.
- Establish scroll rhythm, information density, and prototype placement.
- Do not polish visuals yet.

## Phase 4 — Prototype fidelity

- Build the four product states.
- Validate every piece of copy against the V1 data boundary.
- Test the interaction sequence end-to-end.

## Phase 5 — Visual system

- Typography,
- spacing,
- color,
- diagram language,
- motion,
- responsive behavior.

## Phase 6 — Red-team review

Attack the final site with these questions:

- Does the problem still look like “users forget”?
- Are we hiding the missing denominator?
- Are we implying product awareness in V1?
- Is the solution more complicated than the evidence justifies?
- Are we measuring self-selected adopters?
- Are partner economics treated as a real kill gate?
- Is any number invented?
- Can a reviewer understand the core insight in 60 seconds?
- Can a reviewer understand the full product decision in 8 minutes?

Only after this review should the site be treated as submission-ready.

---

# 10. Final quality bar

The case study should make the reviewer think:

> “This candidate did not merely design a feature. They found a data blind spot, challenged the obvious solution, reframed the behavior, chose a narrower intervention, designed for consent and trust, and defined how they would falsify their own idea.”

If the final website does not communicate that, visual polish is irrelevant.
