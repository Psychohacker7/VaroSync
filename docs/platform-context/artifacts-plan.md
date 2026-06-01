# Artifact section plan

## What this document is

The four artifact cards on the intelligence surface are the substance of the offering, the part ICPs will judge us on. This document plans what each card contains, why, in what order, and for whom — so we don't reverse-engineer it from whatever feels visually nice. Read this before building cards 02–04.

## Audience constraints

The artifacts must serve all seven ICPs from the surface spec — royalty funds, healthcare hedge funds, clinical-trial insurers, pharma BD / corp dev, biotech VCs, venture lenders, family offices — without segmenting them. The artifacts and language carry the work. No "who this is for" section anywhere.

What every ICP needs from a clinical-asset analysis, in their own terms:

| Need | What it means |
|---|---|
| **Sourced** | Every claim traces to a public record (NCT, FAERS, DOI, 8-K, sponsor doc). The buyer doesn't trust Varosync; they trust their own verification. |
| **Decomposable** | Every score breaks into components they can challenge or modify in their own model. |
| **Comparable** | Asset is positioned against peers and historical precedent, not in isolation. |
| **Actionable** | Output informs a specific next step: question to ask the sponsor, term to negotiate, modification to their rNPV. |
| **Defensible** | Survives LP / partner / IC scrutiny without leaning on Varosync's brand (which doesn't exist yet). |

## Three-level depth model (applies to every card)

These buyers speak money. The science is the engine, not the product. Every card follows the same depth hierarchy:

**Level 1 — Financial headline (what everyone reads).** Plain language. What this finding means for their deal. "3 comparable programs failed for the same toxicity signal. Sponsor hasn't tested for it. This shifts PoS by +7.6pp." This is the layer that makes them act — adjust their model, ask the company, restructure terms, pass on the deal.

**Level 2 — Evidence (one click).** Specific compounds, dates, NCT numbers, similarity scores, failure causes, FAERS event counts, gap-to-risk traceability. Structured and verifiable. This is where the buyer CHECKS the claim — and where the moat becomes visible through specificity. Nobody else produces a ranked list of 19 comparable compounds with quantified similarity. Nobody else cross-references specific failure mechanisms against specific sponsor data gaps. The volume and precision of structured evidence signals infrastructure without saying the word "model."

**Level 3 — Computational provenance (footnote, always available).** Fingerprint parameters, knowledge graph pathway, extraction method, dataset scope, model version. For the buyer who wants to evaluate methodology. Present but never the headline.

The moat is NOT communicated through methodology explanations. It's communicated through OUTPUT that is too specific, too structured, and too comprehensive for a consultant or LLM to produce. The buyer doesn't need to understand HOW we computed structural similarity. They see that we HAVE 19 ranked comparables with quantified similarity, failure mechanisms, and FAERS case counts — and they know nobody else gives them that.

## Retrieval first, prediction last (the framing that kills the objection)

The card sequence is deliberately retrieval → retrieval → derivation → prediction. This is not just a trust ladder; it's the structural defense against the objection we keep fighting.

- **Retrieval is auditable on the spot.** Card 01 (precedents) and Card 02 (gaps) are records the buyer opens and verifies in seconds. You cannot ask "is this AI slop?" about a FAERS case or an NCT you just read yourself. Lead with these.
- **Prediction is unfalsifiable for years, so it draws scrutiny.** Card 04 (PoS) is the only genuinely predictive output. It comes LAST, framed as "what the swept evidence implies for your base rate," never as the headline. By the time the buyer reaches it, they've already verified everything it's built from.
- **Completeness is the lead value, not the score.** The strongest claim is "we swept the entire failure landscape touching this mechanism, here it all is, check any of it" — Stilt's "we found everything you'd have missed." The score is a derived footnote on top of that completeness.
- **Never claim a moat in the cards.** No "foundation model," no "proprietary architecture," no "structurally unfakeable." The cards SHOW completeness, calibration, and provenance; the buyer concludes nobody else has it. The moment we assert a moat, sophisticated buyers probe it. Show, don't claim.

## What actually sells (honest competitive read)

- **Single asset: sell completeness and auditability, never a guaranteed find.** On one named asset, an analyst with an LLM and an expert call ties or beats us on narrative depth. We do not promise a hidden bombshell on the buyer's pet asset — most assets don't have one, and betting an engagement on luck is the trap. What we reliably deliver on any single asset: "your expert knew 4 of these precedents; the landscape has 19; here are all of them, sourced." The DIY baseline feels inadequate because of SCOPE, not surprise.
- **Portfolio scale is where the systematic edge becomes reliable.** Across N assets, "here's your book ranked, calibrated, and here's the one nobody flagged" is probable rather than hoped-for. The sweep's edge is statistical and needs N to express itself.
- **The held-out prediction (e.g. danuglipron) is proof the method works, never the product claim.** Frame as "our sweep flagged these signals, consistent with the outcome," not "we called it."

## Temporal dimension (applies across all cards)

Every risk finding should land with a WHEN, not just a WHAT. "Hepatotox risk from structural-family signal" is useful. "Hepatotox risk — will be tested at Phase 2 readout Q3 2026" is actionable. The buyer isn't just evaluating risk in the abstract — they're timing decisions around catalysts.

**On the facade cards:** light touch. A date or quarter next to key findings where applicable. Enough to signal that the analysis is temporally aware.

**In the portal case study:** dedicated timeline element in the Summary tab. Upcoming catalysts (readout dates, FDA action dates, data presentations) mapped against which risks from the analysis get tested at each event. The buyer sees: "Q3 2026 Phase 2 readout — will test hepatotox signal (Card 01, HIGH) and PK bioavailability (Card 01, MODERATE)." This is how hedge funds think — they size positions around binary events. Showing WHICH of our findings get resolved at WHICH catalyst makes the analysis directly tradeable.

## Why this sequence, not another

The order is **Precedent → Gap → Decomposition → Sensitivity**. Trust ladders up:

1. **Card 01 (Precedent)** hooks immediately. Visceral: "your asset looks like these specific historical drugs." Most defensible (sourced precedent matching, hard for an LLM wrapper to fake). Wins the first 30 seconds.
2. **Card 02 (Gap)** delivers actionable content. By now we've earned a second of attention: "here is what the sponsor's data package doesn't address." Each row becomes a question the buyer brings to their next meeting with the company.
3. **Card 03 (Decomposition)** opens the analytical hood. Component-by-component score breakdown. The buyer is now invested enough to inspect methodology. This is where structural-defense lands: "scores aren't a black box, they're an aggregation of these checkable inputs."
4. **Card 04 (PoS Sensitivity)** delivers the headline number and immediately invites challenge. By the time the buyer reaches PoS, they've already verified comparables, gaps, and components. The number isn't asked-to-be-trusted; it's stress-tested in place.

Flipping this order — leading with the PoS number — triggers "why should I trust your number?" instantly and lands the analysis in AI-slop territory.

Each card has two tab states that follow a consistent dual frame: **structure** (the visual at-a-glance) and **substance** (the depth click).

---

## Card 01 — Failure precedent

**One-line value:** Programs structurally similar to this asset have failed. Here's which ones, why, and what it means for your risk model.

**Financial headline the buyer reads:** "N comparable programs failed in clinical development. M of them failed for the same reason. This failure pattern directly informs the asset-specific PoS in Card 04."

**Why ICPs care (in their language):**
- *Royalty funds:* "What's the historical failure rate for programs like this one?" — establishes the base rate that drives their royalty pricing.
- *Hedge funds:* "Does this asset rhyme with prior blow-ups I should know about?" — 5-second risk screen on a new position.
- *Pharma BD:* "Which analog drugs already failed and why?" — licensing negotiation leverage.
- *VCs:* "What do I put in the IC memo about comparable failures?" — the specific precedents go straight into the deal write-up.
- *Insurers / lenders:* "What's the empirical failure rate for my policy/collateral pricing?"

**Tab A — "Comparable failures" (matrix):**
- Rows: 4–6 risk dimensions specific to the asset's class (Hepatotoxicity, Cardiac, PK / Bioavailability, Off-target, Mechanism-class, etc.)
- Columns: 4 historical comparable compounds (anonymized in placeholder data — real NCT numbers in shipped version)
- Cells: stacked colored pills indicating signal strength per (risk × comparator). Green strong / yellow partial / gray none. Pill count carries the weight (more events = more pills).
- Header counters: `N risk dimensions · M comparators · analyzed from [total] compounds in structural family`
  - The denominator ("analyzed from [total] compounds") is key — it signals the indexed database without explaining it. Nobody else can say "we screened 47 compounds in this structural family." That sentence implies infrastructure.
- Legend at bottom.
- Each cell on hover/click: reveals the specific failure event (compound name, sponsor, year, phase, failure cause, NCT number, similarity score). This is Level 2 — the evidence behind the pill.

**Tab B — "References" (source documents):**
- Document selector strip (numbered chips for switching).
- Filename chip in mono showing source document name (NCT protocol, sponsor 8-K, FDA RTF letter, FAERS extract, etc.)
- Page indicator `Page X of Y`.
- Skeleton text rendering of the page with **highlighted excerpts** (yellow pill bars) marking the cited passages.
- Prev/next nav.
- Source type indicators: which sources are from ClinicalTrials.gov (public trial data), FAERS (post-market safety), SEC filings (sponsor disclosures), literature (published studies). The VARIETY of source types signals the breadth of what's indexed.

**Where the moat shows (without explaining it):**
- The sheer NUMBER of comparables screened (denominator in header) — implies a comprehensive indexed database
- Similarity SCORES on each comparable — implies molecular computation, not manual literature review
- FAERS case counts and failure causes structured per compound — implies systematic extraction, not ad-hoc googling
- Multiple source types cross-referenced per finding — implies a pipeline that ingests and links diverse data sources

**Built status:** ✅ Fully built. Review against this updated spec — may need the denominator counter and hover/click evidence layer added.

---

## Card 02 — Gap audit

**One-line value:** Information asymmetry mapping. Here's exactly where the sponsor's data is silent on the dominant failure mechanisms for this structural class — and what it would take to close each gap.

**Financial headline the buyer reads:** "M material gaps in sponsor data package. N of the risks identified in Card 01 are unaddressed by existing studies. These gaps represent unpriced risk in the current valuation."

**Why ICPs care (in their language):**
- *Pharma BD / corp dev:* "Which gaps become licensing conditions?" — each gap row is a term sheet bullet point. "We'll license, but you must close gap X before Phase 3."
- *VCs:* "What questions do I bring to my next meeting with the company?" — each gap is a specific ask with a specific experiment that would resolve it.
- *PE / IB:* "Which gaps affect deal structure?" — unaddressed risks inform earnout conditions, milestone triggers, reps and warranties language.
- *Royalty funds:* "How do these gaps affect my royalty pricing?" — unaddressed risks widen the PoS confidence interval, which directly impacts deal economics.
- *Family offices:* "What would a full diligence team have caught that the sponsor's deck doesn't show?"

**Tab A — "Risks vs. coverage":**
- Rows: risks from Card 01.
- Columns: Risk · Severity · Sponsor data available · Coverage status pill (Addressed / Weak / Gap).
- Coverage status uses the same color register as Card 01 pills (green Addressed, yellow Weak, red Gap) so the visual language is consistent.
- Counter: `N risks · M gaps identified`.
- **Key addition — "Why this matters" column:** One sentence per row translating the gap into deal language. Not "BSEP assay missing" but "Dominant failure mechanism in this structural family is bile acid transport disruption. Sponsor's 28-day study is too short to capture it — historical onset is >90 days." The buyer immediately understands what they're carrying.
  - This column is where the moat shows through: the gap isn't a generic checklist item. It's informed by the specific failure pattern from Card 01 (the historical onset timing, the dominant mechanism, the structural family failure rate). That level of specificity in gap identification signals systematic analysis, not a consultant cross-referencing two documents.

**Tab B — "Recommended assays":**
- Rows: open gaps only (filtered subset).
- Columns: Gap · Recommended experiment · Why this experiment (traced to specific failure signal) · Estimated cost range · Turnaround · Confidence the experiment would resolve the concern.
- **"Why this experiment" column:** Links the recommendation to the specific failure evidence. "3/5 structurally similar programs showed this toxicity signal. This assay directly tests whether the subject compound shares the mechanism." The recommendation is driven by the data, not by generic best practices.
- Cost and turnaround are CRO/lab costs, not Varosync pricing. Educational — helps the buyer estimate what de-risking costs.
- This tab is where wet-lab capability shows naturally. The specificity of the recommendations (named assay types, specific concentrations, specific cell lines) signals that someone who runs experiments designed these, not someone who googled "hepatotoxicity assays." The buyer sees executable recommendations, not generic advice.

**Why two states for this card:** Tab A diagnoses (what's missing and what it means for the deal). Tab B prescribes (how to close each gap and what it costs). Diagnoses without prescriptions are press releases; the pair is consultative.

**Where the moat shows (without explaining it):**
- Gap identification traced to specific failure patterns (not a generic risk checklist — the gaps are DERIVED from Card 01's comparables)
- Onset timing and mechanism specificity in the "why this matters" column (signals systematic extraction from historical failure data)
- Experiment recommendations tied to specific failure signals (signals lab expertise and cause-effect reasoning)
- Named assay types with specific parameters (signals real experimental design capability)

**Built status:** ⏳ Placeholder shell only. Build properly per this spec.

---

## Card 03 — Risk decomposition

**One-line value:** The overall risk score broken into components the buyer can independently evaluate, challenge, and plug into their own model with different weights if they disagree.

**Financial headline the buyer reads:** "Risk score: 0.74. Largest contributor: structural-family signal (0.31), driven by the hepatotox failures in Card 01. Second: off-target binding (0.18). Each component traces to specific evidence you can check."

**Why ICPs care (in their language):**
- *Royalty funds:* "I don't trust composite scores. Show me what's in it." — they will interrogate every component before putting a PoS number in their model. This card answers each interrogation.
- *Insurers:* "Is this defensible in underwriting?" — the score isn't a black box, it's a documented derivation from verifiable inputs.
- *Sophisticated VCs:* "How does this map to our own risk framework?" — component weights can be compared to their internal rNPV assumptions.
- *PE / M&A:* "What if we disagree with one signal?" — scenario modeling: "what if the structural-family signal is overstated? The composite drops to 0.43."

**Tab A — "Components":**
- Five horizontal bar rows: Structural-family · Off-target · PK / ADME · Mechanism class · Regulatory.
- Each bar shows weight (0–1 scale, tabular figures).
- **Key addition — denominators and dominant failure mode per component:**
  - Not just "Structural-family: 0.31" but "Structural-family: 0.31 — 19 comparable compounds evaluated, 12 with clinical failure events, dominant failure mode: hepatotoxicity (8/12)"
  - The denominator ("19 compounds evaluated") signals the indexed database. The failure rate (12/19) gives the buyer an empirical basis. The dominant mode (hepatotox, 8/12) tells them WHAT to worry about.
  - Every buyer can read "8 out of 12 similar compounds failed for liver toxicity" regardless of scientific background. That's a financial fact: the base rate is 67% for this failure mode in this structural class.
- Visual divider, then composite score at the bottom as the **derived sum** (not the headline) — for example `Composite 0.74`.
- Hover state: row highlights to indicate it's interactive.

**Tab B — "Drill-down":**
- One component selected at a time (chip selector).
- Below: the specific precedent events feeding that component. Each row shows:
  - Compound name, sponsor, year, phase, failure cause — the verifiable facts
  - Similarity score — the quantified relationship to the subject asset
  - Contribution to component score — how much this event moves the number
  - Link to source document (references back to Card 01's Tab B)
- Each event row clickable for full provenance.
- **Summary line at top of drill-down:** "This component is driven by [N] historical events. Remove any event you disagree with → component recalculates." Gives the buyer the power to challenge. If the score holds up after they remove the events they're skeptical about, they trust it.

**Why two states for this card:** Tab A shows what the risk is made of (in plain terms: "8/12 similar compounds failed for liver toxicity"). Tab B shows the specific evidence behind each component. The buyer can challenge any input and see how the score responds.

**Where the moat shows (without explaining it):**
- Denominators (19 compounds evaluated, 12 failures) — implies a comprehensive indexed database that nobody else has as a structured, queryable resource
- Failure rates per structural class — implies systematic analysis across the full failure landscape, not cherry-picked examples
- Contribution-to-score traceability — implies a real model producing decomposable outputs, not manual weighting
- "Remove any event → score recalculates" — implies a real computational model, not a static number someone made up

**Built status:** ⏳ Placeholder shell only. Build properly per this spec.

---

## Card 04 — PoS sensitivity

**One-line value:** Asset-specific PoS derived from everything in Cards 01-03, presented as a range with uncertainty bounds — not a single magic number. Base case plus branched failure scenarios the buyer can stress-test and plug directly into their rNPV.

**Financial headline the buyer reads:** "Asset-specific PoS: 14.2% base case (range: 11.6%–21.8%) vs. indication average 5.3%. The range is driven by how you weight the hepatotox signal (+7.6pp) and off-target signal (+1.8pp). Challenge any assumption below."

**Why ICPs care (in their language):**
- *Royalty funds:* "This is the single most important input in our royalty pricing model. Show us the sensitivity." — PoS sensitivity IS their job. If they can stress-test the number and it holds, they'll use it.
- *Hedge funds:* "How much does this PoS diverge from consensus?" — the delta between asset-specific PoS and BIO/Informa average is the variant perception that drives their trade thesis. If consensus is using 5.3% and the real number is 14.2%, that's either a long or a short.
- *Insurers:* "Is this PoS defensible enough to price a policy on?" — sensitivity analysis proves it's not a single-point guess.
- *VCs / PE / IB:* "Give me the number and the range for my rNPV." — base case plus scenarios, ready to drop into Excel.
- *Family offices:* "What's the probability this program succeeds, and how confident should I be in that number?"

**Tab A — "Scenario response":**
- Big PoS display anchored top-left: `14.2%` base case with range bar showing `11.6%–21.8%`. The range communicates honest uncertainty — this isn't a magic number, it's a bounded estimate. Royalty Pharma gets their point estimate AND the range for bear/base/bull scenarios.
- Below: branched failure scenarios, not flat sensitivity. Each row represents a real mechanistic scenario, not just a parameter tweak:
  - **Base case (all findings included)** — 14.2%
  - **"Hepatotox mechanism triggers at readout"** → asset moves to high-risk stratum, PoS collapses to 6.1%. Comparable to [3 historical programs that failed this way]. This is the bear case — what the asset looks like if the dominant structural-family signal materializes.
  - **"Sponsor's new formulation mitigates clearance issues"** → PK risk stratum improves, PoS moves to 17.1% (+2.9pp). Based on how comparable formulation changes affected PK in similar programs.
  - **"Off-target risk is worse than current data suggests"** → weight off-target at 2×, PoS drops to 11.6% (−2.6pp).
  - **"Only the most recent comparable failures are relevant"** → exclude pre-2015 precedents, PoS moves to 16.4% (+2.2pp).
  - **"Industry default (no asset-specific analysis)"** — 5.3% (BIO/Informa indication average).
- Each row shows new PoS value + delta (color-coded ↑ green / ↓ red).
- Each row traces back to a specific card: "this scenario modifies the structural-family component from Card 03, which is driven by the hepatotox precedents in Card 01." The buyer can follow the chain across all four cards.
- **Branched scenarios vs flat sensitivity:** The branched approach is more powerful because each scenario represents a real biological event that could happen, not an abstract parameter change. "Hepatotox mechanism triggers at readout" is something a hedge fund can trade around. "Exclude structural-family signal" is an academic exercise. The scenarios should match how the buyer actually thinks about risk — in terms of events and outcomes, not model parameters.
- **The last row is the killer:** it shows what their rNPV would use WITHOUT this analysis. 5.3% is the BIO/Informa indication average. The gap between 5.3% and 14.2% is the value of the analysis, expressed as a number they use every day.

**Tab B — "vs. industry benchmark":**
- Asset PoS vs BIO/Informa indication-average PoS, side-by-side visual comparison.
- Below: the bridge — what specific findings move the PoS from benchmark to asset-specific:
  - "+7.6pp from structural-family hepatotox signal (8/12 comparable failures, Card 01)"
  - "+1.8pp from off-target binding signal resolved through sponsor data (Card 02, Addressed)"
  - "−2.6pp from underpowered hERG test (Card 02, Weak coverage)"
  - etc.
- Each bridge component links back to the card and finding that drives it.
- **Financial translation at the bottom:** "On a standard rNPV model with [peak sales estimate], the difference between 5.3% PoS and 14.2% PoS changes the risk-adjusted asset value by approximately $[X]M." This is the punchline. The buyer sees the dollar impact of using a refined PoS vs. the generic benchmark. That's the value proposition expressed in their exact language.

**Why two states for this card:** Tab A lets them stress-test (internal challenge — "what if I disagree?"). Tab B calibrates (external benchmark — "how far is this from what I'd use otherwise, and what does that mean in dollars?"). Together they deliver a PoS number the buyer can defend to their IC, partners, or LPs — because they've tested it themselves.

**Where the moat shows (without explaining it):**
- Asset-SPECIFIC PoS (not indication average) — implies a model that differentiates individual compounds, not a lookup table
- Scenarios that trace across all four cards — implies an integrated analytical system, not four independent analyses
- The bridge from benchmark to asset-specific — shows exactly WHICH findings drive the deviation, each traceable to specific evidence in Cards 01-03
- The rNPV dollar impact translation — shows that the output is designed for financial use, by people who understand financial workflows

**Built status:** ⏳ Placeholder shell only. Build properly per this spec.

---

## ICP coverage matrix

Each card touches multiple ICPs. This matrix records *primary* fit (★) and *also valuable* (·).

| | Card 01 Precedent | Card 02 Gap | Card 03 Decomp | Card 04 PoS |
|---|---|---|---|---|
| Royalty funds | · | · | ★ | ★ |
| Hedge funds | ★ | · | · | ★ |
| Pharma BD / corp dev | · | ★ | · | · |
| VCs | ★ | ★ | · | ★ |
| Insurers | · | · | ★ | ★ |
| Venture lenders | ★ | · | · | ★ |
| Family offices | · | · | ★ | ★ |

No ICP is poorly served by the four-card sequence. The artifacts cover the analytical surface every clinical-asset risk buyer needs, regardless of how they use the output downstream.

## Non-negotiables across all four cards

- **Financial language first.** Every finding, every row, every data point lands with a financial implication — what this means for the deal, the model, the negotiation, the pricing. The science supports the financial conclusion, not the other way around.
- **Three-level depth everywhere.** Level 1 (financial headline) is readable by anyone. Level 2 (evidence) is one click away for verification. Level 3 (computational provenance) is available as footnotes for anyone who wants it. Never force the buyer through science to reach the financial takeaway.
- **Cross-card traceability.** Every finding in Card 02 traces to a precedent in Card 01. Every component in Card 03 traces to evidence in Cards 01-02. Every scenario in Card 04 traces to a specific finding across Cards 01-03. The four cards are one integrated analysis, not four independent displays.
- **Same shell**: dark backdrop placeholder (photo slot), section chip on the left, tab pills on the right, white card with heavy drop shadow, no fig captions, no hairline inner borders, generous padding, big bold header inside card.
- **Same animation choreography**: scroll-in cascade (header → columns → rows, ~50ms stagger), tab-switch crossfade (~250ms), no marquee, no flash.
- **Consistent color palette**: green = strong / addressed, yellow = partial / weak, red = gap / high-risk, warm gray = none / addressed-without-concern. Same palette in every card so the visual language is coherent across the page.
- **Source provenance on everything**: every visible data point has a corresponding NCT / FAERS / DOI / 8-K reference accessible via a click — or is clearly placeholder marked with `α / β / γ / δ` so it's never mistaken for fabricated real data.
- **No marketing prose anywhere inside the cards.** Card headers are descriptive nouns (`Comparable failures`, `Sponsor data audit`, `Risk components`, `Probability of success`). No sales lines.
- **Denominators visible.** Wherever a score or finding appears, show the scope of analysis behind it ("19 compounds evaluated," "47 FAERS events," "12 clinical failure events"). The denominators demonstrate the depth of the indexed data without requiring the buyer to understand how the indexing works.
- **Signals are calibrated, and it shows.** Wherever a FAERS signal or risk component appears, it's an empirically calibrated signal (negative-control corrected), not a raw disproportionality count. Mark it as such (a small "calibrated" label or footnote). This is the single most credible element for a skeptical buyer and the clearest line between "a number an LLM hallucinated" and "a signal a regulator trusts." It costs one word in the UI and buys disproportionate credibility.
- **Completeness stated where it's true.** The lead claim is coverage of the whole landscape, but only assert it where the underlying mapping is actually complete for that mechanism. Don't imply "we found everything" if coverage is partial for the structural class in question. Honest completeness or none.

## Build order

1. Card 01 — built. Lock the pattern.
2. Card 02 — build next, both tabs.
3. Card 03 — build after 02 (drill-down interaction is the new pattern here).
4. Card 04 — build last (most interactive scenario response; do it once the other three are solid).

If any pattern breaks while building 02–04, fix it back in Card 01 too — they must remain visually identical in chrome.

## Facade vs. portal data expectations

The facade artifact cards and the case study portal have different data requirements:

**Facade cards:** Professional-looking, realistic placeholder data. Doesn't need to be real. The structure, layout, and depth of the cards sell the capability. Placeholder marked with `α / β / γ / δ` so nothing is mistaken for fabricated real data. Denominators, scores, and gap statuses should be plausible but don't need to come from actual analysis.

**Case study portal:** Real data from a real case study on a real compound. Every NCT number, every FAERS count, every similarity score, every gap — all from actual analytical work. This is where the depth and specificity actually land. The portal is the proof. The facade is the teaser.

## Open questions

- Photo backgrounds: still need to land. Once photos are dropped in, drop the placeholder gradient + noise overlay from the wrapper.
- Card 04 Tab B rNPV dollar impact: for facade, use a reasonable consensus peak sales estimate. For the portal, open question whether to let the buyer input their own peak sales assumption and see dollar impact recalculate. Pro: more powerful, the buyer sees the value in THEIR numbers. Con: could backfire if they input assumptions that make the delta look small, or disagree with how it recalculates. Note this and decide when building the portal.
