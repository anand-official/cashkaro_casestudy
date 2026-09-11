Below is the review and construction pass you asked for. I’m treating your current thesis as the working decision, not as proven. I’m also separating evidence from inference. The PDF gives useful directional hypotheses from one respondent, not generalizable evidence.

**Verdict up front:** Your behavioural diagnosis is stronger than your product feasibility proof. The Android Shopping Companion is the right *class* of intervention, but V1 is not build-ready until three things are validated: Android foreground-detection permission path, affiliate/partner approval for overlay/contextual reminders, and retailer incrementality. If those are unresolved, submit the strategy as a hypothesis with explicit kill gates, not as a launch plan.

---

## TASK 1 — Red-team the locked problem

**Verdict: WELL FRAMED as a behavioural diagnosis, but TOO BROAD as a product problem.**

Your sentence “CashKaro is often absent when its value becomes relevant” is good. It explains why reminders alone fail. But the full problem statement still bundles mental availability, journey friction, timing, expected value, and tracking trust. That is too many causes for one V1.

**Rewrite only if it materially improves it:**

> For Android existing CashKaro users who already shop on major retailer apps, eligible purchase sessions leak because CashKaro is absent when the retailer app becomes the active shopping context. By the time CashKaro could remind them, the user has anchored on retailer-native offers, cart state, and urgency. The cost of switching context is often higher than the perceived incremental cashback, especially when trust in tracking is low.

This keeps your insight but narrows V1 to: Android, existing users, supported retailer apps, retailer-level context, no product awareness.

**Critical red-team caveat:** If V1 requires knowing which retailer app is in the foreground, overlay permission alone is not enough. On modern Android, that typically needs Usage Access (`PACKAGE_USAGE_STATS`) or Accessibility. You explicitly excluded Accessibility. So V1 may require a second sensitive permission: Usage Access. That changes onboarding, adoption risk, and Play policy risk. Validate this before calling V1 feasible.

---

## TASK 2 — Segmentation

**Choose ONE launch segment:**

> Android existing CashKaro users with at least 2 retailer click-outs in the last 90 days and at least 1 successful tracked order in the last 6 months, on one of the two launch retailers.

Why this segment:

- They already understand CashKaro’s value.
- They have demonstrated shopping frequency.
- They have a recent successful tracking event, so trust is not already destroyed.
- They are on Android, matching V1.
- They give enough expected sessions to measure tracked orders per user.
- They avoid inactive users and users with repeated failed tracking, who would confound the trust signal.

Exclude for V1:

- Users with 3+ missing cashback claims in last 90 days.
- Users with no CashKaro app session in last 30 days.
- iOS users.
- Users whose retailer affinity is outside the launch retailers.

Do not segment on attributes CashKaro may not know reliably, such as “shopping intent right now” or “product category interest.”

---

## TASK 3 — Solution space

Ranked. I am not treating all as good.

| Rank | Option | Impact | Reach | Behavioural fit | Feasibility | Risk | Why it wins/loses |
|---|---|---|---|---|---|---|---|
| 1 | Android shopping companion | High if adopted | Medium: Android existing users | High: at retailer entry | Medium: needs overlay + likely Usage Access + deep-link attribution | High: privacy, annoyance, partner approval | Wins because it observes existing context instead of predicting it. Loses if permission or partner approval fails. |
| 2 | Click-out tracking guard | Medium | High: all click-outs | Medium: post-click trust | High: uses existing pipeline | Medium | Should be embedded in companion, not standalone. Fixes trust after activation, not absence before purchase. |
| 3 | Contextual push reminders | Medium | High | Low–Medium: predicts moment from incomplete data | High | High: notification fatigue | Good reach, weak timing. Likely annoys users and gets muted. |
| 4 | Share/deep-link back | Medium | Medium | Medium: requires user recall and action | High | Medium | Useful utility, but depends on user remembering CashKaro at exactly the wrong moment. |
| 5 | Home-screen widget | Low–Medium | Medium | Low: not contextual | High | Low | Feels like a shortcut, not a solution to absence. |
| 6 | Desktop browser extension | High where used | Low for mobile-first India | High | High | Medium | Solves the right behaviour on the wrong platform. Useful web supplement, not the lead. |
| 7 | Shopping/discovery agent | High long-term | Low | Low: asks users to change behaviour | Low | High | AI theatre for V1. No product-level context, no trust, no reason to switch. |

**Explicit product choice:** Android Shopping Companion as the lead. Click-out tracking guard ships as a trust module inside it, not as a separate product.

---

## TASK 4 — User journey

Minimum coherent end-to-end journey.

**A. Discovery/setup**
Existing Android user sees an in-app card after a tracked order: “You shopped on Amazon. CashKaro wasn’t active. Turn on Shopping Companion so you don’t miss cashback next time.” CTA: “Set up.”

**B. Permission/value exchange**
Before asking, explain exactly what CashKaro will and will not do:
- Will: know when a supported retailer app is open, show a small cashback reminder.
- Will not: read your screen, cart, products, messages, or personal data.
- Controls: disable per retailer, global off, frequency caps.
Then request overlay permission and, if required, Usage Access.

**C. Retailer entry**
When a supported retailer app is foreground for >8 seconds, and caps allow, show a small non-blocking pill: “Cashback available — up to X% on Amazon.”

**D. Activation**
Tap pill → compact bottom sheet:
- Retailer name.
- Base cashback rate.
- Key exclusions: coupons, gift cards, existing cart, category-specific rates.
- Honest line: “Rates vary by category. This is the base rate.”
- CTA: “Activate Cashback.”

**E. Redirect/context preservation**
Tap Activate → CashKaro fires its existing affiliate click-out/deep link. If Android can preserve the retailer app state, do it silently. If not, show one clear screen: “Returning you to Amazon. Your cart should stay.” This is a critical internal validation. Do not pretend it is solved.

**F. Activated state**
Pill changes to “Cashback activated” for the session. In CashKaro app, a session card shows “Activated at Amazon — tracking pending.”

**G. Tracked state**
When retailer sends tracking, push/in-app: “Tracked: ₹X pending at Amazon.” If tracking does not arrive after expected window: “We didn’t see this order. Check missing cashback.” One-tap claim.

**H. Failure states**
- Cashback unavailable: pill says “No CashKaro cashback at this retailer today.” No activation.
- Category-specific rates: show base rate + “category rates vary.”
- Existing carts may invalidate: static warning before activation.
- Tracking does not arrive: missing cashback flow.
- User dismisses repeatedly: suppress per retailer, then globally.
- User disables a retailer: never show for that retailer.

---

## TASK 5 — Notification/surfacing logic

Principle: default off until explicit opt-in. Never interrupt checkout. Caps protect the user, not the metric. No fake ML.

MVP rules:

| State | Rule |
|---|---|
| First exposure | After setup, first supported retailer app open, wait 8 seconds, show once. |
| Dismissal | 1st dismiss same retailer: suppress 7 days. 2nd: 30 days. 3rd: global off. |
| Recent activation | If activated same retailer in last 24h, do not show pill. Show activated state only. |
| Repeated retailer opens | Max 1 pill per retailer app session. Max 2/day global. Max 5/week global. Max 3/week per retailer. |
| Global cap | 2 per day, 5 per week. |
| Per-retailer cap | 3 per week. |
| Disable controls | In activation sheet: “Don’t show for Amazon.” In CashKaro settings: per-retailer toggles. |

Do not add screen-reading triggers. Do not try to detect checkout.

---

## TASK 6 — MVP

**WHAT SHIPS**
- Android only.
- Existing-user cohort only.
- Overlay permission + Usage Access if required.
- Foreground detection for 1–2 supported retailer apps.
- Non-blocking pill with frequency caps.
- Retailer-level activation sheet.
- Existing CashKaro affiliate click-out/deep-link attribution.
- Session activated state.
- Basic tracked confirmation using existing pipeline.
- Per-retailer and global disable.
- Experiment assignment and funnel logging.

**WHAT DOES NOT SHIP**
- iOS.
- Accessibility service.
- Screen reading, cart reading, product detection.
- Price comparison.
- LLMs or shopping agents.
- Auto-activation.
- Widget, desktop extension, push reminders.
- ML suppression.
- Category-level rate personalization.

**WHAT IS MANUAL IF NECESSARY**
- Retailer rate mapping.
- Affiliate compliance review.
- Support macros for missing cashback.
- Partner communication.
- Manual reconciliation for tracking failures.

**WHAT DATA/CAPABILITIES CASHKARO MUST ALREADY HAVE**
- User IDs and cohorts.
- Tracked order history.
- Click-out and attribution pipeline.
- Retailer affiliate links.
- Android app and push.
- Customer support workflow.

**WHAT NEW CAPABILITIES MUST BE BUILT**
- Foreground app detection via Usage Access or equivalent.
- Overlay service.
- Frequency capping and suppression.
- App deep-link/affiliate activation on Android.
- Experiment assignment and ITT logging.

---

## TASK 7 — Experiment

**Primary:** Tracked orders per randomized existing user during experiment.

**Control:** Existing CashKaro experience. No companion offer.

**Treatment:** Offered companion setup. Randomized at user level.

**Randomized offer:** Randomize the offer to set up the companion, not whether they voluntarily enable it. Analyze intention-to-treat.

**Mechanism funnel:** Sessions → Coverage → Adoption → Exposure → Activation → Purchase Conversion.

**Guardrails:**
- Uninstall rate.
- Companion opt-out.
- Retailer-specific disable.
- Notification/overlay complaints.
- Tracking failure rate.
- Support contacts.
- Commission per order.
- Partner complaints.

**Decision:**
- **SCALE:** Primary metric positive, guardrails stable, partner economics positive, tracking failure not worse.
- **ITERATE:** Primary flat but activation/purchase signal exists, or adoption/exposure bottleneck is fixable, and guardrails okay.
- **KILL:** No uplift, high complaint/uninstall, tracking failure worsens, partner objects, or unit economics negative.

Do not invent significance thresholds. Use your actual baseline variance and power.

---

## TASK 8 — Business/unit economics

**CashKaro incrementality:** Does CashKaro get more tracked orders per cohort user? Revenue = incremental tracked orders × commission margin − cashback paid − servicing cost.

**Retailer incrementality:** Does the retailer receive additional economic value? If the user would have bought anyway, CashKaro’s commission may not be incremental to the retailer. That creates channel-conflict risk.

**Why the distinction matters:** Affiliate programs exist to drive incremental sales. If this is attribution recapture, not incrementality, partners may restrict it. The business case cannot rely only on CashKaro’s commission.

**Required validation before rollout:**
- Written affiliate/partner approval for overlay/contextual reminders.
- App attribution rules and cookie/click windows.
- Commission rates by category.
- Cancellation and return impact.
- New vs existing customer impact.
- Support cost per incremental order.
- Partner incrementality test or attestation.

Do not fabricate these. Get them from business/legal/partner teams.

---

## TASK 9 — GTM

**Who first:** 5% of eligible Android existing users in the target segment.

**Which retailers:** 1–2 retailers where CashKaro has written affiliate approval, app deep-link attribution, and a partner willing to test.

**Why:** Limit blast radius. Protect partner relationships. Make measurement clean.

**How explained:** In-app after a tracked order. Not broad marketing. “You already shop here. CashKaro can be present next time.”

**How permission is earned:** Transparency. Show what it cannot see. Give per-retailer control. Default off.

**How scale:** Only after causal uplift, guardrail stability, partner sign-off, and positive unit economics.

---

## TASK 10 — Prototype spec

Recommend 4 states.

**State 1 — Discovery card**
- Purpose: Earn interest.
- User sees: “You shopped on Amazon. CashKaro wasn’t active.”
- Hierarchy: Problem → value → CTA.
- CTA: “Turn on Shopping Companion.”
- Decision demonstrated: Does user understand the absence problem?

**State 2 — Permission/value exchange**
- Purpose: Earn permission.
- User sees: What it does, what it cannot see, controls.
- Hierarchy: Value → privacy boundary → permission CTA.
- CTA: “Allow overlay and usage access.”
- Decision demonstrated: Is the value exchange credible?

**State 3 — Retailer pill + activation sheet**
- Purpose: Convert context into activation.
- User sees: Pill “Cashback available — up to X%.” Tap → sheet with retailer, base rate, exclusions, warning, CTA.
- Hierarchy: Retailer → rate → rules → Activate.
- CTA: “Activate Cashback.”
- Decision demonstrated: Can user activate with minimal context switch?

**State 4 — Activated + tracked**
- Purpose: Close trust loop.
- User sees: “Cashback activated.” Later: “Tracked: ₹X pending.”
- Hierarchy: Status → amount → next step.
- CTA: “View tracking” / “Check missing cashback.”
- Decision demonstrated: Does CashKaro feel reliable after purchase?

**Optional cut screen — product-aware cashback**
- “Earn ₹300 on this item.”
- Why cut: V1 is retailer-aware, not product-aware. We cannot safely/reliably obtain product-level context without Accessibility, screen reading, scraping, or a retailer/affiliate API. That violates the stated V1 boundary and raises privacy/partner risk.

---

## TASK 11 — Presentation/narrative

Aim for 12 sections.

1. **Title: The leak is not memory. It is absence at the moment of purchase.**
   - Takeaway: CashKaro is missing when its value becomes relevant.
   - Content: Problem framing.
   - Do not put: Generic cashback market size.
2. **North star: tracked orders per existing user per quarter.**
   - Takeaway: We are not optimizing taps or app opens.
   - Content: Assignment metric, cohort definition.
   - Do not put: Vanity metrics.
3. **Obvious hypothesis: remind users more.**
   - Takeaway: The first answer was notifications.
   - Content: Why reminders seemed logical.
   - Do not put: Fake data.
4. **Evidence challenged it.**
   - Takeaway: One qualitative respondent showed value threshold, trust erosion, context-switch aversion.
   - Content: Label as directional, not generalizable.
   - Do not put: “Indians love cashback.”
5. **Missing denominator.**
   - Takeaway: We cannot claim leakage rate without eligible session data.
   - Content: Need internal baseline.
   - Do not put: Invented leakage percentages.
6. **Extension insight.**
   - Takeaway: Browser extension solves behaviour but reach is wrong for mobile-first India.
   - Content: Reach constraint.
7. **Mobile reality.**
   - Takeaway: Shopping starts in retailer apps.
   - Content: User journey.
8. **Core insight.**
   - Takeaway: Don’t predict the moment. Observe existing context.
   - Content: Retailer-aware, not product-aware.
9. **Product thesis.**
   - Takeaway: CashKaro becomes the savings layer around shopping destinations.
   - Content: Causal chain.
10. **V1: Android Shopping Companion.**
    - Takeaway: Small pill, explicit activation, minimal context switch.
    - Content: MVP scope and non-scope.
11. **Measurement.**
    - Takeaway: Randomized offer, ITT, tracked orders per user.
    - Content: Funnel, guardrails, kill gates.
12. **Risks and validation gates.**
    - Takeaway: Permission, partner approval, and incrementality are the real gates.
    - Content: What must be true before build.

---

## TASK 12 — Interview grill

1. **Why not just push notifications?** Strong: Push reaches but cannot reliably know retailer context. It becomes noise.
2. **Why overlay? Isn’t it intrusive?** Strong: It is non-blocking, capped, opt-in, and appears in existing context.
3. **How do you know the retailer app is foreground without Accessibility?** Strong: Likely requires Usage Access; validate Play policy.
4. **What if Amazon/Flipkart prohibit this?** Strong: We start only with written approval.
5. **How is this incremental for the retailer?** Strong: We measure incremental GMV and partner attestation, not just CashKaro commission.
6. **Why will users grant permission?** Strong: Clear controls, per-retailer disable, explicit privacy boundary.
7. **What about existing cart invalidation?** Strong: Static warning before activation; no cart reading in V1.
8. **How do you handle tracking failures?** Strong: Missing cashback flow and tracking guard.
9. **Why Android only?** Strong: Overlay + foreground detection feasible; iOS has different constraints.
10. **Why not product-aware?** Strong: Needs product context we cannot safely get in V1.
11. **How do you measure incrementality?** Strong: Randomized offer, ITT, tracked orders per user.
12. **What if activation rate is 2%?** Strong: Iterate on messaging or kill if unit economics fail.
13. **What if users disable after first use?** Strong: Treat as kill/iterate signal, not ignore.
14. **What is the smallest test?** Strong: One retailer, Android cohort, randomized offer, tracked orders.
15. **What would make you kill it?** Strong: No tracked-order uplift, partner objection, high uninstall, negative unit economics.

---

## TASK 13 — Final audit

**A. Three strongest parts**
1. The behavioural diagnosis: absence at the moment of value, not just forgetting.
2. The decision to observe existing context rather than predict shopping moments.
3. The commitment to tracked orders per randomized user as the north star.

**B. Three weakest/unproven parts**
1. Permission adoption and Android feasibility, especially Usage Access.
2. Affiliate/partner approval for overlay/contextual reminders.
3. Retailer incrementality. Without it, this is attribution recapture.

**C. Remove because it sounds impressive but does not survive scrutiny**
- AI shopping agent.
- Product-aware cashback in V1.
- Price comparison.
- ML suppression.
- “Indians love cashback” as an argument.
- Any leakage percentage you cannot source internally.

**D. Single insight the recruiter should remember**
CashKaro does not need to become the place where shopping starts. It needs to be present when shopping already has a context.

**E. Final verdict: NOT READY to build.**

**Evidence actually required before proceeding:**
1. Android permission path: Usage Access vs Accessibility vs another mechanism, and Play policy feasibility.
2. Written affiliate/partner approval for overlay/contextual reminders and app attribution for launch retailers.
3. Internal baseline: eligible sessions, click-outs, tracked orders, failed tracking for the target segment.
4. Unit economics per incremental tracked order: commission, cashback, support, partner risk.
5. Partner incrementality position: does the retailer see additional value, or only commission leakage?

If those cannot be obtained, submit this as a strategy with explicit validation gates. Do not present it as launch-ready.
