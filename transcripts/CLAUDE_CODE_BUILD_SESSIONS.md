# Build execution sessions: authored record

**Tier C. This is an authored record, not a verbatim export.** It is reconstructed from the mandates I issued, the changes that resulted, and the commit history in this repository. Where it describes an instruction, that instruction is paraphrased. Nothing here should be read as a quoted AI response. The raw exports remain outstanding and are listed in the [manifest](README.md).

Every claim below is verifiable against `git log`, which is why commit hashes are given rather than recollections.

---

## 11 September 2026 · Session group A: foundation and the first product

Scope: stand up the submission site, the design system and a first interactive prototype.

Commits `4e6ceb7` through `d910dbb`.

**What I asked for.** A static, dependency-light site that could carry a long-form product case, an interactive prototype, and a viewer for the AI work log. Deliberately no framework: the assignment is graded on product judgement, and a build pipeline I cannot explain in an interview is a liability.

**What I pushed back on.** The first prototype was proposed as a general "Shopping Companion" with open-ended chat. I removed the chat surface. The brief explicitly says it is not looking for an AI chat box, and a free-text box in a prototype is a way of avoiding the hard question of what the product actually does.

---

## 11 September 2026 · Session group B: evidence, research and external critique

Commits `39497e9`, `0e6ccd6`, `0bf937b`, `11d1045`, `739bcfe`, `0bfd349`, `54dc985`.

**What I asked for.** An evidence matrix that separates what is established from what is assumed, and adversarial review from models that had not seen the earlier reasoning.

**What changed my mind.** Two things.

First, the behavioural analysis separated bypass into four causes with different remedies: perceived value, trust in payout, uncertainty about eligibility, and recall or re-entry friction. That reframing is the reason the case now argues a single selected cause instead of a general engagement feature.

Second, the DeepSeek principal-PM review attacked the rigour of the artifact but never asked whether the orders would be incremental to the merchant. I noted its silence on incrementality as a gap in the review, not an endorsement. That gap is why commercial acceptance later became an explicit kill gate rather than an assumption.

**What I rejected.** Every market-size figure produced in this group. None of them resolved to a retrievable source. The research pages now carry the reasoning and omit the numbers.

---

## 11 September 2026 · Session group C: Shortlist, and the reversal

Commits `230a3b9`, `f482fb6`.

**What was built.** "CashKaro Shortlist": CashKaro owning product discovery in a single category, headphones, with a research-first comparison experience.

**What killed it.** An independent Claude review of commit `f482fb6`, supplied as `CLAUDE_COWORK_REVIEW.md`. Its four findings were diagnosis, frequency, distribution and continuity. Stated plainly: the problem had not been diagnosed well enough to justify the build, the category is purchased too rarely to form a habit, there was no answer for how anyone would arrive at the feature, and nothing carried a user from one purchase to the next.

**What I did with it.** Accepted all four and discarded the product. This was the most expensive decision in the project and, in retrospect, the one that made the submission defensible. The build survives only in `docs/archive/SHORTLIST_SUBMISSION.md` and in history. It was not quietly deleted.

---

## 11 September 2026 · Session group D: Order Check

Commits `28a2a26`, `f9c0d64`.

**What was built.** A post-purchase check: confirm whether an order was tracked, and recover it if not.

**Why it was superseded.** CashKaro already has current-earnings visibility and a missing-cashback claim path. The feature reorganised existing capability. Its route to more tracked orders ran through improved trust, which is real but slow, indirect and hard to attribute inside a single quarter. Against a north star of tracked orders per existing user per quarter, an indirect mechanism is a weak bet.

---

## 13 September 2026 · Session group E: the universal proposal

Commits `256140a`, `7c163d2`, `c24f76c`.

**The mandate.** Move the intervention to the point where the purchase decision is actually made, which is increasingly inside an assistant, and do not tie the product to a single host.

**What I refused to concede.** Four things, each of which had a more impressive version available:

1. Guaranteed contextual invocation. It is host-dependent. The prototype demonstrates the desired behaviour and shows explicit invocation separately, because explicit invocation is the case we control.
2. Commission-ranked recommendations. Removed. Product and merchant are chosen before CashKaro is invoked. A recommender funded by the commission it earns is not a product I would defend in a review.
3. A single blended "effective price". Split into what is paid today and what may be received later. Merging them is the standard dark pattern in this category.
4. Cart recapture. A carted item fails closed. Reattributing an order a retailer already owns is a commercial risk, not a feature.

**What survived intact from the brief.** The original problem, unchanged. The north star, unchanged. Assessment of all five suggested directions, retained rather than skipped.

---

## 13 September 2026 · Session group F: presentation and prototype

Commits `0ba1ed5`, `bd0d636`, `ace7c37`.

**The mandates.** Three, in order: write it as a product manager would write it rather than as an engineer; hold the core case to roughly fifteen slide-equivalent sections; make the prototype genuinely interactive rather than a scripted demo, with the animated walkthrough on Google's Universal Cart developer page as the quality reference.

**What resulted.** The case was condensed from twenty long-form sections to fifteen visual ones without dropping the direction assessments, the evidence limitations or the kill gates. An original six-chapter walkthrough was built; the Google animation was used as a standard to meet, not as an asset to copy. The prototype became a shopping canvas that responds to budget and priority, which matters because it lets a reviewer try to buy the recommendation with a bigger benefit and watch it refuse.

**What I declined to change.** The strategy, the north star and the experiment design. A presentation mandate is not a reason to reopen a settled product decision.

---

## What this record does not contain

The intervening reasoning conversations that connected these sessions, and the later Claude critique in full. Both are named in the [manifest](README.md) as outstanding. This document is an accurate account of decisions and their causes. It is not, and does not claim to be, the raw material.
