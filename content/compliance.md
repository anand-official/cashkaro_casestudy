<section class="case-section" id="audit"><p class="section-label">Original PDF / pages 1–3</p>

## The brief, requirement by requirement.

I read the [original PDF](source-material/cashkaro_assignment.pdf) again before this revision rather than working from my own summary of it. The problem it sets and the metric it names are both unchanged here. What I narrowed is the intervention: the moment a shopper has decided and would have to start again to come through us. The [transcription](source-material/ORIGINAL_ASSIGNMENT_TRANSCRIPT.md) is only there for searching.

The brief allows a proposal to need capabilities that do not exist yet, as long as the path to them is explained. It does not ask anyone to arrive with signed contracts.

| Requirement | Location / evidence | Assessment |
| --- | --- | --- |
| Existing users and fixed cohort (p.1) | [Metric](index.html#metric), [segment](index.html#segment) | Addressed; no new-user acquisition substitution |
| Tracked orders/user/quarter (p.1) | [ITT protocol](experiment.html#protocol) | Addressed; all channels, zeros, deduplication and maturity |
| Feature metric ladders to required outcome (p.1) | [Reach and power](experiment.html#reach-model) | Addressed; no installs/CTR/GMV substitution |
| Underlying problem and user understanding (p.1) | [Diagnosis](index.html#problem), [journey](index.html#journey) | Re-entry hypothesis explicit; prevalence unvalidated |
| Evidence (pp.1–2) | [Primary-source ledger](research.html) | Documentary evidence supplied; no new interviews or authenticated baseline |
| Segment and business understanding (p.2) | [Target](index.html#segment), [economics](index.html#economics) | Addressed; segment size and private terms unknown |
| Assumptions explicit (p.2) | [Unknowns and owners](research.html#assumptions) | Addressed |
| Explore alternatives (pp.1–2) | [Brief direction-by-direction assessment](index.html#alternatives), [broader alternatives](research.html#alternatives) | Addressed without fabricated scores |
| Prioritize impact, feasibility, effort, risk (pp.1–2) | [Decision](index.html#decision), [spike](experiment.html#architecture) | Strategic choice and near-term disadvantage stated |
| Explain why this problem over others (p.2) | [Alternatives](index.html#alternatives), [what changes the decision](index.html#defense) | Selected cause, competing explanations and investment rationale stated |
| What not to build (p.2) | [MVP](index.html#scope) | Recommender, checkout, scraping and cart out of scope |
| Key flows and UX (p.2) | [Interactive prototype](prototype.html) | Interactive shopping canvas with optional guided playback, plus advanced priorities, budget, comparison, connection, consent, handoff and failure states |
| First versus later (p.2) | [Roadmap](index.html#defense), [rollout](experiment.html#rollout) | One host and reviewed paths before expansion |
| Technical feasibility (pp.2–3) | [Proposed interfaces](experiment.html#architecture) | Missing services and host dependencies named; no invented existing APIs |
| GTM discovery and activation (p.2) | [Launch](index.html#launch) | Owned invitation to pre-defined existing segment; host discovery not assumed |
| Scale, change, kill (p.2) | [Gates](index.html#gates), [owners](experiment.html#rollout) | Explicit, with calibration rather than fabricated thresholds |
| Roughly equal problem/solution depth (pp.1–2) | Seven problem sections, one shared decision section, seven solution sections; [word-count manifest](build-manifest.json) | [15-page PDF](output/pdf/CashKaro_Visual_Brief.pdf) and equivalent visual web brief; decision section allocated equally for the balance diagnostic |
| Widget direction (p.2) | Alternatives: less entry effort, residual recall, orders-based validation | Assessed as a rejected lead, not a widget mock |
| Extension direction (p.3) | [Desktop proxy and registry](research.html#alternatives) | Inherited dated web proxy, explicit assumptions; not measured order share |
| Reminder direction (p.3) | Alternatives and missing-denominator analysis | Rejected as lead; no chosen reminder component requiring a reminder prototype |
| Share/deep-link direction (p.3) | Alternative prototype surface, [context/attribution contract](experiment.html#architecture) | Preserved product/variant conditional on approved routes; no cart-state promise |
| Discovery-agent direction (p.3) | Alternatives, [no-LLM scope](index.html#scope) | Rejected: no CashKaro inference/RAG requirement; data and host costs acknowledged |
| Own direction: higher bar than a renamed feature (p.3) | One capability, adapters, platform risk and full experiment | Addressed; distribution advantage remains a hypothesis |
| Propose missing capabilities realistically (p.3) | Operations registry, auth, signed routes, staged integration spike | Addressed as proposal, not a production claim |
| Complete AI interactions (p.1) | [AI work record](ai-transcript.html), [session manifest](transcripts/README.md) | Addressed: summarised trail at the panel's request, with provenance declared per session |
| No mandatory template (p.3) | 15-section visual website with separate supporting pages | Format choice is permissible; PDF remains authoritative |

The brief offers five suggested directions and an own-direction option. The proposal builds on Share/deep-link routing and contextual assistance, rejects owning discovery, and explains the remaining departures. Each direction receives a reasoned assessment; the chosen product receives full UX, feasibility and measurement treatment.
</section>
<section class="case-section" id="manual"><p class="section-label">Scope of this proposal</p>

## What this proposal does not include.

Every submission has a list like this. Most of them leave it out.

1. **New primary research.** The evidence base is one inherited user conversation and the brief itself. The [evidence ledger](research.html) says so on every line that depends on it.
2. **Internal telemetry or an authenticated baseline.** Reach, category mix and current tracked-order rates would all come from data I do not have, so every number here that touches them is labelled illustrative.
3. **Partner approval.** No affiliate programme, merchant or assistant platform has agreed to any of this. Commercial acceptance is a gate in the rollout, not an assumption behind it.
4. **A live integration.** The prototype runs fictional fixtures. Where a real API would be required, the [engineering contract](experiment.html#architecture) proposes one rather than implying it already exists.

These are things a team would go and get. They are not gaps to paper over with a confident sentence, so they stay visible and priced into the plan. [Self-review and verdict](docs/SKEPTICAL_REVIEW.md).

</section>
