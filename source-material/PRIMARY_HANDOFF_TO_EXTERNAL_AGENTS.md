# Primary Handoff to External AI Agents

> This is the detailed handoff that was used to transfer the CashKaro investigation into external AI review. It captures the state of the work before the final Qwen/DeepSeek/Astra phase.

You are taking over an ongoing CashKaro APM product assignment.

This is NOT a fresh-from-zero exercise.

A substantial amount of product reasoning, research, user evidence, hypothesis testing, adversarial critique, and solution exploration has already happened in a previous thread. I want you to inherit those learnings so we do not waste that work.

However:

**INHERIT THE EVIDENCE AND LEARNINGS. DO NOT INHERIT THE CONCLUSION.**

You are explicitly allowed to disagree with everything we currently believe and take the product in a different direction if the evidence supports it.

The original CashKaro assignment is the authoritative source for what must ultimately be solved.

## THE OBJECTIVE

CashKaro wants to become part of the shopping habit of existing users who currently make some eligible purchases directly at retailers instead of routing through CashKaro.

North-star metric:

> **TRACKED ORDERS PER EXISTING USER PER QUARTER, measured on a fixed cohort.**

The assignment is approximately 50% understanding the right problem and 50% making the right product decision.

Do not optimize for producing a clever feature. Optimize for finding the strongest defensible product decision capable of materially moving that metric.

## HOW OUR THINKING EVOLVED

### PHASE 1 — INITIAL PROBLEM

The obvious framing was: “Existing users forget CashKaro when they shop.”

This naturally led toward contextual reminders / push notifications.

We initially explored predicting when a user might shop again based on historical CashKaro orders, retailer affinity, repeat cadence, confirmed cashback, previous click-outs, value bands, retailer/category recurrence and notification timing.

The idea became an “earned-moment activation reminder”:

> predict an upcoming shopping moment → send a highly targeted push → user activates CashKaro → retailer opens.

### PHASE 2 — WE ATTACKED THE REMINDER IDEA

The reminder concept developed a fundamental problem.

CashKaro observes **ROUTED purchases**. It does not observe most purchases made directly at retailers.

Example:

User A: 10 actual eligible purchases, 10 routed through CashKaro.

User B: 10 actual eligible purchases, 3 routed through CashKaro.

CashKaro may see A as highly regular and predictable. B may look irregular and low-frequency. But B potentially contains far more leakage headroom.

Therefore:

> **THE USERS CASHKARO CAN PREDICT BEST MAY BE THE USERS WHO NEED THE INTERVENTION LEAST.**

Historical routed-order data is a thinned representation of actual shopping behavior. This became our “missing denominator” problem.

We consequently rejected simple rules like “≥2 orders + approaching historical interval = shopping intent.” Two orders provide only one interval. Marketplace purchases combine unrelated needs. Sales distort cadence. Heavy leakers may have sparse CashKaro histories.

> **Prediction accuracy and incremental value are not the same thing.**

We designed a stronger reminder experiment with ghost/control, random-timing reminder and earned-moment reminder cohorts. This could determine whether timing itself created incremental tracked orders. But even if statistically successful, the eligible population might be too narrow to materially move the cohort-level north star.

This substantially weakened the reminder direction.

## IMPORTANT USER RESEARCH LEARNING

We conducted qualitative research with at least one existing/previous CashKaro user.

Important observations included:
- retailer apps such as Amazon/Flipkart are natural shopping entry points
- urgency causes the user to remain inside the retailer rather than context-switch
- CashKaro can feel like additional effort
- forgetting CashKaro occurs
- previous tracking/capture failures weakened trust
- small cashback amounts such as roughly ₹50–₹60 may not feel worth the effort
- CashKaro had weak mental availability for this respondent
- the respondent indicated they might not particularly notice if CashKaro disappeared

IMPORTANT: This is qualitative N=1 evidence. Do NOT generalize it to the entire CashKaro cohort.

A major insight from it was that “forgetting” may sometimes actually be conscious or subconscious deprioritization caused by low perceived value, friction, trust erosion or weak mental availability. Therefore a reminder cannot automatically solve the underlying behavior.

## PHASE 3 — WE REFRAMED THE BEHAVIORAL PROBLEM

We started questioning whether CashKaro has a reminder problem at all.

Consider normal consumer habits:

Movie → Netflix  
Food → favourite restaurant  
Search → Google

CashKaro wants something closer to Shopping → CashKaro. But CashKaro is not inherently the destination. The retailer/product is the destination.

A normal journey may look like:

Need → Amazon / Flipkart / Myntra / Google / Instagram → discovery → comparison → retailer → checkout

CashKaro's traditional flow effectively asks:

Remember CashKaro first → open CashKaro → find retailer → click out → shop normally

That requires users to reorganize an existing habit around an affiliate/cashback layer.

This led to a stronger hypothesis:

> **CASHKARO MAY HAVE AN ENTRY-POINT / JOURNEY-POSITION PROBLEM, NOT MERELY A MEMORY PROBLEM.**

Rather than forcing users to remember CashKaro before shopping, perhaps CashKaro should become available inside the shopping behavior they already perform.

## PHASE 4 — MOBILE EXTENSION INSIGHT

The assignment suggests a browser extension. We liked the behavioral mechanism:

shopping context appears → extension detects it → cashback becomes available at the moment of shopping.

But India is heavily mobile/app-driven. So we asked:

> **WHY CAN'T THE BEHAVIORAL MECHANISM OF A BROWSER EXTENSION EXIST ON MOBILE?**

This produced our strongest current candidate.

Working concept:

> **ANDROID CASHKARO SHOPPING COMPANION / MOBILE EXTENSION-LIKE LAYER**

Core mechanism:

User opens a supported retailer app directly → CashKaro detects that a supported shopping app has opened → a small unobtrusive CashKaro activation bubble/pill appears → user taps → CashKaro performs the normal attribution/click-out flow → retailer reopens → user continues shopping.

Conceptually:

Retailer session → CashKaro becomes available → cashback activation → retailer → tracked order

This differs fundamentally from the reminder:

OLD: predict intent → interrupt → hope user shops

NEW: observe shopping context → intervene → activate

The strongest conceptual insight was:

> **OBSERVED SHOPPING CONTEXT IS A STRONGER SIGNAL THAN PREDICTED SHOPPING INTENT.**

Important correction: opening Flipkart/Amazon/etc. does NOT prove purchase intent. Users may track orders, process returns, browse, respond to retailer notifications, compare something or simply explore.

Therefore:

> **APP OPEN = HIGH-CONFIDENCE SHOPPING CONTEXT, NOT HIGH-CONFIDENCE PURCHASE INTENT.**

Purchase-per-session remains an important unknown.

## TECHNICAL DIRECTION DISCOVERED SO FAR

Android appears to permit an implementation using mechanisms such as usage/app foreground awareness, display-over-other-apps/overlay and foreground service. Exact feasibility and policy compliance must be verified.

We explicitly rejected using Android Accessibility Services as the foundation because of excessive permissions, potential screen-reading/control capabilities, trust concerns, policy risk and unnecessary invasiveness.

Core privacy principle:

> **CASHKARO SHOULD KNOW WHERE YOU SHOP, NOT WHAT YOU DO INSIDE THE STORE.**

Therefore MVP should NOT read product screens, inspect cart contents, inspect search queries, read prices from another app, control retailer UI or use Accessibility for screen understanding.

The smallest concept should know only enough to determine: “A supported retailer app is currently open.” Then provide a CashKaro activation surface.

## MVP CURRENTLY ENVISIONED

ANDROID FIRST. A small number of partner-approved retailers.

NO AI. NO LLM. NO shopping agent. NO screen reading. NO product recognition. NO competitor comparison. NO giant universal shopping assistant. NO automatic cashback activation.

Basic flow:

SUPPORTED RETAILER OPENS → SMALL CASHKARO BUBBLE → USER TAPS → CASHBACK ACTIVATION / STANDARD CLICK-OUT → RETAILER REOPENS → SHOPPING CONTINUES

Potential bubble information:
- retailer
- cashback availability
- accurate “up to X%” wording where category rates vary
- store-specific important cashback rule
- activate CTA

The surface must be small, never block shopping, auto-hide, have strict frequency controls, support per-retailer disable, support global disable and never activate cashback without explicit user action.

## WHY THIS MAY BE BETTER THAN PUSH REMINDERS

It piggybacks on behavior users already perform.

Users don't need to learn “I should open CashKaro before Amazon.” They continue “I want something → open Amazon.” CashKaro attaches itself to that behavior.

This potentially creates the loop:

SHOPPING → CASHKARO APPEARS → USER SAVES MONEY → REWARD → REPEAT

Eventually the desired mental association could become SHOPPING → CHECK CASHKARO.

But do not romanticize this as “love.” CashKaro is an economic layer, not Netflix or someone's favourite restaurant.

User gives: permission + tiny interruption.  
CashKaro gives: economic value + very low effort + reliable attribution.

## IMPORTANT LIMITATIONS ALREADY IDENTIFIED

### 1. PERMISSION

The Android implementation may require special user permissions/setup. Only a minority may grant it. Opt-in may skew toward existing CashKaro enthusiasts. Therefore the product could work extremely well among adopters while barely moving the overall cohort metric.

### 2. PARTNER / AFFILIATE ECONOMICS

This may be the biggest risk.

Suppose the user independently opens a retailer, CashKaro appears, user activates cashback. Retailer could reasonably argue: “That customer was already going to purchase from us. Why should we now pay affiliate commission?”

The product could become an **attribution recapture** mechanism rather than an incremental-commerce mechanism.

Some affiliate agreements may restrict client-side/mobile interception or redirection. Do NOT assume retailers allow this. Partner approval must be treated as a gate.

### 3. TWO TYPES OF INCREMENTALITY

**CashKaro incrementality:** Did tracked orders per existing CashKaro cohort user increase? This directly aligns with the assignment north star.

**Retailer incrementality:** Did the retailer gain additional orders, GMV, frequency, basket size or retention?

These are not the same. The companion could increase CashKaro tracked orders while merely relabelling transactions the retailer would have received anyway. That could cause retailers to reject the mechanism, change affiliate terms, reduce commission or exclude this traffic.

Therefore commission per tracked order / partner economics are important guardrails.

### 4. REACH

The addressable population becomes:

existing users × supported platform × supported retailer × permission/setup completion × retailer sessions × activation rate × purchase rate × incremental tracked-order effect

Even a strong intervention can fail if these multipliers make total reach too small.

### 5. ANNOYANCE / RETENTION

Users may open retailer apps frequently without buying. A bubble on every open could become irritating. The product needs frequency caps, suppression, auto-hide, dismissal learning, retailer-level off switch and global off switch.

### 6. TRUST

Cashback is not always immediate. Tracking may appear Pending and confirmation can take much longer. Therefore the product cannot create false certainty. Accuracy is part of the trust proposition.

### 7. EXISTING CARTS

Users may already have products in carts from previous sessions. Cashback eligibility/tracking may have retailer-specific rules around carts, wishlists, coupons and click-out behavior. These must be handled honestly.

## EXPERIMENTAL PRINCIPLE

Do NOT evaluate only people who enable the feature. That creates severe selection bias.

The experiment should randomize the OFFER of the feature.

CONTROL: normal CashKaro experience.

TREATMENT: offered Shopping Companion setup.

Primary metric:

> **TRACKED ORDERS PER RANDOMIZED EXISTING USER**

not tracked orders per user who enabled the companion.

This gives an intention-to-treat view of actual product impact including permission friction, setup abandonment, non-use and active use.

Among users who enable it, mechanism analysis can examine retailer sessions → bubble exposure → activation → click-out → tracked order. But do not confuse mechanism metrics with the north star.

## CURRENT FOUR KILL GATES

### GATE 1 — PERMISSION
Will enough users actually enable the required Android capabilities for the product to matter?

### GATE 2 — PARTNER ECONOMICS
Will enough high-frequency affiliate partners permit this behavior under their commercial/technical agreements?

### GATE 3 — TRUE INCREMENTALITY
Does the product create incremental tracked orders for CashKaro rather than merely looking good among opt-in users? Can the economics survive if retailers view the traffic as non-incremental?

### GATE 4 — COHORT-LEVEL REACH
After platform share × retailer support × permission rate × session frequency × activation × conversion × incrementality, is the resulting impact large enough to materially increase tracked orders per existing user per quarter?

If any critical gate fails, the concept should be killed or radically modified.

## OTHER DIRECTIONS AND CURRENT STATUS

### HOME-SCREEN WIDGET
Weak. It helps users who already remember CashKaro and requires scarce home-screen space. Not impossible, but low priority.

### DESKTOP BROWSER EXTENSION
Behaviorally strong but reach-limited in a mobile/app-heavy market. Its underlying mechanism strongly influenced the mobile companion concept.

### CONTEXTUAL PUSH REMINDERS
Deprioritized/effectively rejected as lead concept. Requires predicting shopping intent from incomplete CashKaro history, may target people who already route, and could still exist later as supporting mechanism.

### SHARE / DEEP-LINK BACK
Useful but requires the user to remember CashKaro and take an explicit action. May become too late depending on cart/wishlist/retailer tracking rules. Not lead concept.

### SHOPPING AGENT / DISCOVERY ASSISTANT
Potentially valuable future product, but not lead solution. Requires current product data, price data, retailer integrations, useful discovery behavior, sufficient shopping frequency and a reason users would start shopping inside CashKaro. Do not add AI merely because the assignment mentions it.

### CLICK-OUT TRACKING GUARD
Strong fallback/component. When someone already enters a retailer through CashKaro, help prevent known tracking failures. Advantages: certain CashKaro intent, strong measurement, potentially improves trust, directly reduces preventable tracking failures. Weakness: mainly helps users who already remembered CashKaro. If partner approval kills the companion, this may become a fallback direction.

## IMPORTANT PRODUCT PHILOSOPHY

We do NOT want “another push notification.”

We do NOT want “an AI chatbot because AI sounds modern.”

We do NOT want “a feature that looks clever in an assignment.”

We want to understand:

> **WHAT WOULD MAKE CASHKARO BECOME NATURALLY ASSOCIATED WITH SHOPPING?**

CashKaro is a savings layer rather than the destination itself, so this association may need to be **created through repeated value** rather than assumed.

Potential behavioral trajectory:

PHASE 1: CashKaro surfaces itself during shopping.  
PHASE 2: CashKaro consistently saves the user money with little effort.  
PHASE 3: The user starts expecting CashKaro during shopping.  
PHASE 4: CashKaro potentially becomes part of the user's shopping reflex.

This is a hypothesis, not an established fact.

## ROLE OF THE NEXT AI REVIEWER

Read the original assignment and supporting evidence yourself. Examine this handoff critically. Separate FACT, USER EVIDENCE, INFERENCE, ASSUMPTION and OPEN QUESTION.

Do not let the amount of work already invested create sunk-cost bias.

The mobile companion is our strongest CURRENT hypothesis. It is NOT automatically the answer.

You are allowed to KEEP IT, MODIFY IT, COMBINE IT or REJECT IT COMPLETELY if you find something better.

The questions posed to the next reviewer were:

1. What important truths have already been established?
2. Which conclusions above are supported, and which are still assumptions disguised as conclusions?
3. Is the current framing of the behavioral problem correct?
4. Is “shopping context → CashKaro activation” genuinely a better causal intervention than “predict → remind”?
5. What is the strongest argument AGAINST the mobile companion?
6. What is the strongest alternative product direction that may have been prematurely dismissed?
7. Is there a deeper product insight that neither the reminder concept nor the mobile companion captures?
8. What would you investigate next if you had only ONE day before committing to the product direction?
9. Based on everything available, give a provisional decision: KEEP / MODIFY / REJECT.
10. Tell me why.

Product judgment matters more than output length. Do not agree with the previous work merely because it is detailed.
