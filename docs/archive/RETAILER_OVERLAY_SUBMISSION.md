# CashKaro APM Case Study — Final Submission

## Making CashKaro part of the shopping habit

**Author:** Ujjawal Anand  
**Live case study:** https://cashkaro-apm-case-ujjawal-anands-projects.vercel.app

---

## Executive decision

CashKaro’s missed opportunity with existing users is not simply a reminder problem. Existing users naturally begin shopping inside retailer apps, while CashKaro depends on them remembering to alter that journey before purchase.

> **Do not predict when shopping might happen. Make CashKaro available when shopping context already exists.**

The chosen product hypothesis is an **Android-first CashKaro Shopping Companion** that surfaces a lightweight cashback activation pill when a supported retailer app is already open.

V1 is intentionally **retailer-aware, not product-aware**.

The strategic role is:

> **CashKaro does not need to become the place where shopping starts. It can become the savings layer around destinations users already choose.**

The direction is ready to prototype and test. It is not a production commitment until permission adoption, partner approval, attribution behavior, economics, and causal incrementality are validated.

---

# Part I — Understanding the right problem

## 1. Start from the north star

The assignment’s north star is:

> **Tracked orders per existing user per quarter, measured on a fixed cohort.**

Therefore the case is not primarily about new-user acquisition, app opens, overlay impressions, or pill CTR. Those may diagnose a mechanism, but the product only wins if more shopping journeys become tracked orders for the same user cohort.

The behavioral funnel is:

**existing user → shopping intent → retailer visit → eligible purchase → CashKaro attribution → tracked order**

The brief tells us that leakage exists. It does not tell us the true leakage rate or which behavioral cause dominates.

## 2. Why “send better reminders” is not enough

The intuitive diagnosis is forgetfulness, which suggests using CashKaro history to predict shopping timing and send contextual reminders.

The analytical problem is a **missing denominator**.

CashKaro sees the purchases routed through CashKaro. It does not see the complete set of eligible direct retailer journeys it is trying to recover.

A user who routes 10/10 eligible orders can look frequent and predictable but may have little recoverable headroom. A user who routes 3/10 can look sparse in CashKaro history while containing much more leakage.

Therefore:

> **Prediction accuracy and incremental opportunity are not the same thing.**

This does not prove reminders fail. It lowers confidence in prediction-from-history as the lead product bet.

## 3. Qualitative evidence: “forgetting” is stacked with other costs

One respondent described a retailer-first path: open Amazon/Flipkart, find the product, check native/card offers, then purchase.

The interview surfaced several plausible mechanisms:

- weak mental availability for CashKaro,
- reluctance to leave the active retailer journey,
- cashback value sometimes being too small to justify extra effort,
- trust erosion from prior tracking failures,
- native retailer/card offers being more visible at decision time.

This is directional evidence, not prevalence data. It supports a mechanism-level conclusion:

> A direct retailer purchase can be rational even when the user knows CashKaro exists, because expected value can be lower than friction and uncertainty.

## 4. Solution-space choice

The assignment’s starting directions represent different behavioral hypotheses.

- **Home-screen widget:** easier access, but still requires CashKaro to be remembered.
- **Desktop browser extension:** behaviorally strong because it appears after shopping starts, but incomplete for retailer-app journeys.
- **Contextual push:** good reach but depends on inferred timing and risks notification fatigue.
- **Share/deep-link back:** useful utility, but the user still has to remember CashKaro late in the journey.
- **Shopping agent:** high long-term ambition but requires a new discovery habit plus live product/price data.
- **Android Shopping Companion:** strongest fit with the reframed problem because it observes an existing retailer context instead of predicting one.

The browser extension provides the key behavioral analogy:

> **Intervene after the shopping context exists.**

The Companion is the mobile expression of that principle.

## 5. Final problem statement

> **Existing CashKaro users naturally begin shopping inside retailer apps. CashKaro currently depends on them remembering to leave or alter that journey to activate cashback, so eligible shopping opportunities can leak.**

Opening a retailer app is shopping context, not proof of imminent purchase. That is why the intervention must remain lightweight.

---

# Part II — Making the right product decision

## 6. Product thesis: two activations

The Companion earns two different forms of consent.

### Activation 1 — Permission to be present

> **“CashKaro may help me while I shop.”**

The best invitation moment is after CashKaro has already demonstrated value — for example, immediately after a legitimate cashback tracking event.

Principle:

> **Earn permission with delivered value, not promises.**

### Activation 2 — Permission to participate in the current shopping session

> **“Activate CashKaro for this journey.”**

The Companion does not silently auto-activate attribution. The user explicitly activates cashback for each shopping session.

Principle:

> **Earn the right to be present once. Earn the right to participate every time.**

## 7. End-to-end V1 experience

1. **Value delivered** — CashKaro shows a real tracked cashback event.
2. **Companion invitation** — “Never miss cashback next time you shop.”
3. **Privacy/value exchange** — explain that V1 detects supported retailer context but does not read products, cart, searches, messages, or screen contents.
4. **Normal shopping** — user opens a supported retailer app as usual.
5. **Ambient pill** — if cashback is available and suppression rules allow, show something like “CashKaro · Up to 6% cashback · Activate.”
6. **Explicit activation** — compact sheet shows retailer-level cashback and critical eligibility information.
7. **Affiliate handoff** — use the approved attribution/deep-link path with the shortest practical disruption.
8. **Immediate reassurance** — “✓ Cashback activated.”
9. **Trust closure** — when retailer tracking arrives, show the actual tracked amount/status; expose missing-cashback recovery when needed.

The loop is:

**value delivered → permission earned → context observed → explicit activation → tracking proof → trust reinforced → repeat**

## 8. What ships first vs later

### V1 ships

- Android-first,
- existing users,
- 1–2 partner-approved retailers for the first test,
- retailer-level context only,
- non-blocking activation pill,
- explicit session activation,
- retailer cashback rate/range and important terms,
- existing affiliate/deep-link attribution path,
- activated + later tracked states,
- conservative suppression and disable controls,
- experiment instrumentation.

### V1 deliberately does not ship

- Accessibility-based screen reading,
- product/cart/search inspection,
- exact per-product cashback,
- price comparison,
- checkout detection,
- AI shopping agent,
- auto-activation,
- predictive shopping models as a dependency,
- iOS parity before Android proves the job.

A richer future state — e.g. **“Estimated ₹320 cashback on this purchase”** — is only legitimate if CashKaro later obtains privacy-safe, partner-supported product/category/price context.

## 9. High-level technical feasibility

The product requires separate Android capabilities for foreground-app context and overlay rendering.

- Supported retailer package IDs must map to CashKaro store eligibility/rates.
- Foreground app context can be explored through Android usage-stat capabilities, which generally require explicit user-granted Usage Access.
- The floating pill requires explicit draw-over-other-apps capability.
- V1 does not require Accessibility Service or screen reading.
- Activation uses CashKaro’s approved affiliate/deep-link attribution path.

The important product conclusion is not “engineering solved.” It is:

> **Feasible in principle; permission adoption and platform/partner policy are first-order product risks.**

## 10. Experiment design

Randomize the **offer to enable Shopping Companion**, not only users who eventually enable it.

**Control:** existing CashKaro experience.  
**Treatment:** offered Companion setup.

Primary analysis is **intention-to-treat** because voluntary adopters are likely more cashback-motivated.

### Primary experiment metric

> **Incremental tracked orders per randomized existing user.**

### Mechanism funnel

**eligible cohort → setup offer → permission adoption → supported retailer context → pill exposure → activation → tracked order**

These metrics explain why the product succeeds or fails. They do not replace the north star.

### Guardrails

- permission revocation / Companion disable,
- retailer-specific disable,
- uninstall,
- complaints/support contacts,
- missing/tracking failure rate,
- cancellations/returns where relevant,
- commission economics,
- partner complaints/restrictions.

Do not invent a fixed uplift threshold without CashKaro baseline variance, sample size, and power analysis.

## 11. CashKaro incrementality vs retailer incrementality

The Companion can increase CashKaro tracked orders even when the retailer would have received the order anyway.

That creates two questions:

**CashKaro incrementality:** did tracked orders per existing user increase?  
**Retailer incrementality:** did the retailer gain incremental economic value — or only additional affiliate cost?

This distinction is a major commercial kill gate.

> **Did we create a new transaction — or only change who gets credit?**

CashKaro’s actual retailer/affiliate agreements must govern rollout. Public affiliate terms should not be presented as CashKaro’s negotiated contracts.

## 12. GTM and decision gates

### First cohort

Existing Android CashKaro users after a successful tracked cashback event, on 1–2 partner-approved retailers where attribution and edge cases are understood.

Size the randomized beta using experiment power and operational risk, not an arbitrary rollout percentage.

### Four kill gates

1. **Permission adoption** — enough users complete setup for cohort-level impact.
2. **Partner economics / approval** — retailers allow and sustain the mechanism.
3. **Causal uplift** — randomized ITT shows more tracked orders per user.
4. **Reach** — after every multiplier, total quarterly impact is material.

### Scale / iterate / kill

**Scale** when causal lift, guardrails, economics and partner acceptance are all healthy.  
**Iterate** when the primary metric is flat but a clearly fixable bottleneck exists without negative guardrails.  
**Kill or radically change** when permission uptake is too low, partner rules reject the mechanism, tracking worsens, economics are negative, or cohort-level lift is absent despite sufficient exposure.

---

# Final position

**Build the experiment, not the fantasy.**

The case does not claim the Companion is production-proven. It argues that the product direction is strong enough to test because it targets a defensible journey-position problem and combines the best behavioral insight from the browser-extension model with mobile retailer context.

The product principle is:

> **Every appearance spends trust.**

CashKaro should appear only when it has real value to offer, ask clearly for permission, never imply product-level knowledge V1 does not have, and prove reliability after activation.

The long-term habit is not necessarily “open CashKaro first.” It is:

> **Wherever I shop, CashKaro has my back.**
