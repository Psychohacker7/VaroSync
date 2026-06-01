# Case Study & Interactive Report Specification

## What this document is

The definitive spec for the case study artifact — the single most important deliverable in the entire project. This template is built once and reused for every future client deliverable. It serves as the public case study on the intelligence surface, the report format in the authenticated client section, and the artifact shown in live sales meetings.

## The governing bar: "oh shit" not "ok cool, and?"

Every design and content decision in this document is judged against one test. When a buyer who prices clinical-asset risk for a living looks at this, do they think:

- **"oh shit — I need these people to run this on the asset I'm looking at right now"** (success), or
- **"ok, cool... and?"** (failure)

The second reaction is the enemy, and it is the DEFAULT reaction to anything that merely looks thorough. Thoroughness alone gets a polite nod. These buyers see polished decks every day. A complete, well-designed, sourced report that tells them things they already knew, or things that don't bear on a live decision, earns "cool, and?" — and "cool, and?" is death, because it means no engagement, no payment.

**What produces "oh shit" (the only three things that do):**

1. **Something they did not know and could not easily get** — the obscure precedent, the structural-feature-to-toxicity mapping across an entire class, the calibrated signal on a compound nobody is an expert on. Depth they cannot reproduce themselves or get from their analyst + an LLM + a KOL call.
2. **It bears on a decision they are making now** — it touches a live asset in their pipeline, their book, their deal. Abstract risk is "cool, and?"; risk on the thing they're evaluating this week is "oh shit."
3. **They can verify it themselves in seconds** — so the "oh shit" survives skepticism. A claim they can't check collapses back to "AI slop." A sourced record they just opened does not.

**The complacency traps to avoid at all costs:**

- **The autopsy that stays an autopsy.** A beautiful, complete analysis of a settled/dead asset proves the method is real — but a dead asset is a museum piece. It impresses; it does not convert. Conversion requires bridging from the autopsy to the live thing the buyer cares about (see "the conversion architecture" below).
- **Re-telling the famous headline.** If the asset's risk story is already well-known at the headline level (e.g., "PI3K inhibitors are a toxic class — everyone knows that"), restating it earns "cool, and?". The "oh shit" is in the depth *below* the headline that no one has in their head.
- **Generic risk.** "Clinical trials are risky," "oncology has high failure rates." Anything true of every asset is noise.
- **Numbers without checkable evidence.** A PoS or risk score with no one-click path to the records behind it reads as a guess.
- **Passive completeness.** Showing everything without making the buyer feel the one thing that matters for their decision. Comprehensiveness must be aimed, not just displayed.

Read every section below as: does this clear the "oh shit" bar, or is it passively thorough? If it's passively thorough, it's not done.

## The conversion architecture: autopsy → live adjacency → your-asset offer

The flagship case study is built on a settled asset (see flagship selection below), which means the analysis itself is, by construction, a retrospective demonstration. A retrospective demonstration alone produces "cool, and?" no matter how deep. Conversion comes from three stacked moves, and only the first lives in the autopsy:

1. **Autopsy (proof the method is real and deep).** The complete, calibrated, sourced map of the settled asset and its class. This proves the engine works and that the depth is genuine. Necessary, not sufficient.
2. **Live adjacency (proof it bears on decisions happening now).** The same structural and mechanistic space contains live programs the buyer may be evaluating right now. Showing where those live assets sit in the mapped landscape is what turns a museum piece into a mirror. This is load-bearing for conversion — not a footnote (see refactored "Comparable Active Programs").
3. **Your-asset offer (the ask).** The buyer doesn't need the public case study to analyze their asset — that creates legal exposure and isn't the point. They need it to prove the method is deep enough that they want it run privately on theirs. The CTA leans entirely on "this, on your asset."

The logic the buyer walks through: "the method is *this* deep (autopsy) → and it applies to the live thing I'm evaluating (adjacency) → and I can have it on my asset (offer)." Drop the middle move and the deepest autopsy in the world still reads "cool, and?".

**Where this changes the layer roles on the flagship specifically:**
- Failure Landscape, Risk Decomposition, Methodology = the autopsy. Where depth and "you couldn't produce this" lives.
- Comparable Active Programs = the live adjacency. Elevated from "layer 6 of 7" to the conversion hinge.
- Gap Audit and PoS Sensitivity on the flagship are *retrospective method demonstrations* (the asset is settled — see flagship notes). They show how the method works. On a PAID engagement against a client's live asset, these same two layers become live decision inputs. Be explicit about this difference; don't dress a retrospective PoS as a live call.

## Current contacts to impress and convert

| Contact | Their role | What they need from this artifact |
|---|---|---|
| Private equity | Evaluating biotech acquisitions, portfolio pipeline risk | Downside quantification, risk-adjusted value, scenario modeling inputs |
| M&A advisory / consulting | Supporting transaction recommendations to clients | Defensible risk factors, gap identification, citable analysis for fairness opinions |
| Investment bankers | Pricing deals, building pitch materials for biotech clients | Risk factors for deal terms, supporting analysis for pitch books |
| VCs | Deciding whether to invest | PoS for rNPV, IC memo ammunition, hidden risks to challenge the company on |
| Pharma BD (MSK, Dana-Farber) | Evaluating their own assets or licensing partners | Scientific risk profile, data gaps to address before licensing conversations |
| Royalty Pharma | Pricing royalty acquisitions on clinical-stage drugs | Per-asset PoS estimate (most scrutinized input in their model), decomposable scoring |
| Family offices | Biotech allocation decisions without in-house expertise | Clear risk assessment, institutional-grade diligence for small teams |

## Common ground across all contacts

Every one of them, regardless of role, needs four questions answered about a clinical-stage asset:

1. **What are the specific risks?** Which risks apply to THIS compound based on its structural family, target, and mechanism. Not generic "clinical trials are risky."
2. **What's missing from the existing data?** Gaps the sponsor's package doesn't address that historical failure patterns say matter.
3. **Can I source and verify every claim myself?** Provenance on everything so they can independently check findings without trusting Varosync.
4. **How does this change my model?** Summary metrics (PoS, risk scores) they can plug into their own frameworks — but derived from the findings above, not the other way around.

## Defensibility framework (critical)

Not all outputs are equally defensible. The artifact must be structured so the MOST defensible elements carry the weight, and the less defensible elements (model scores, PoS estimates) are clearly presented as derived summaries of verifiable findings.

**Defensibility spectrum:**

| Output type | Defensibility | Example | Why it holds up |
|---|---|---|---|
| Raw sourced data | Bulletproof | "5 programs in this target class failed Phase 2 for hepatotox" | Public record. NCT numbers. Anyone can check. |
| Standard computation on data | Very strong | "82% structural similarity to Drug A (Tanimoto on Morgan fingerprints)" | Standard metric. Reproducible. It's math. |
| Factual comparison | Very strong | "Sponsor has no chronic tox study despite structural-family signals" | Both sides verifiable. The gap is a fact. |
| Component risk scores | Medium | "Structural-family liability: 0.31" | Aggregation of defensible inputs, but weighting is a model choice |
| Composite scores | Weaker | "Composite risk score: 0.74" | Model aggregation. Why 0.74 and not 0.68? |
| PoS estimate | Weakest alone | "Asset-specific PoS: 14.2%" | Probability claim. Not directly verifiable. |

**The principle:** Lead with findings and gaps (bulletproof). Present scores and PoS as derived summaries that the buyer can challenge, modify, and stress-test. The value is "we showed you five things about this asset you didn't know, and every one is checkable." Not "trust our number."

**Evidence registry (the data model that makes this real):** Every claim resolves to a piece of evidence, and every piece of evidence to a source record. Evidence is a first-class object, not a per-row afterthought — a registry of evidence items (FDA withdrawal notice, ODAC briefing, boxed warning, FAERS case, NCT record, publication, patent, structure record), each with type, publisher, URL/record ID, date, accessed-date, the claim it supports, an excerpt, and a confidence. Every finding, precedent, gap row, score component, and comparable references evidence IDs. This is the anti-slop mechanism: claim → evidence → source, one click, every time. It is also what powers the under-two-second verification the whole credibility rests on.

**The registry must be fully pre-compiled (verification is static, not live).** The backend resolves every source when it builds the registry and stores the canonical URL, the excerpt, and the anchor at that moment. The frontend renders static, aggressively-cached JSON — it never makes live on-click calls to FAERS or ClinicalTrials.gov. This is not extra engineering; it's the registry doing its job, and it's the only way to hit the under-two-second bar: those APIs are slow, rate-limited, often CORS-blocked, and crucially there is no API that returns "the highlighted excerpt." Design: the in-portal evidence panel renders the pre-compiled excerpt with the highlight instantly (the buyer never leaves), and each item also carries the canonical URL as an "open original" link for the skeptic who wants to confirm on the source itself. Fast static verification plus a path to the live record.

**Curate vs. compute (the discipline that keeps depth from becoming overclaim or scope creep):** Some of the analysis is computed and scales (structural similarity, calibrated FAERS signals, KG traversal). Some must be curated and does not scale (mechanistic inheritance context, regulatory documents like the ODAC verdict and withdrawal notices, isoform-selectivity judgments). For a single flagship class with a handful of live comparables, the curated pieces are public and finite — assemble them by hand into the evidence registry. Do NOT build prediction models or document-ingestion pipelines for them at MVP. Both computed and curated claims flow into the same evidence registry and resolve to checkable sources, so the buyer cannot — and need not — tell which was which. The rule: compute what scales, curate what doesn't, evidence-back both.

**Why this matters:** In the current climate, any unknown firm producing model-generated numbers faces immediate skepticism ("AI slop," "hallucinated numbers," "LLM-generated analysis"). The defense is NOT claiming the model is trustworthy. The defense is that every finding traces all the way down to verifiable public records through transparent, reproducible methodology. The buyer doesn't trust Varosync. They trust their own verification.

**What an LLM cannot produce (the structural defense, using only what's built today):**
- Tanimoto similarity on molecular fingerprints (requires computation on molecular structures)
- Empirically calibrated FAERS signals — negative-control corrected, not raw disproportionality (requires the calibration machinery; raw PRR is full of false positives and an LLM can only guess)
- Specific FAERS case IDs linked to structural features through a knowledge graph (requires structured extraction + graph linkage)
- Gap audit cross-referencing specific sponsor studies against specific failure signals (requires structured data on both sides)
- Denominators across the full structural family ("19 evaluated, 12 failures") — requires a comprehensive indexed corpus, not a literature search

An LLM can write "hepatotox risk is elevated." It CANNOT compute "82% Tanimoto similarity on Morgan fingerprints, radius 2, to NCT04XXXXX which terminated Phase 2 for hepatotoxicity in 2018, with a calibrated FAERS hepatic signal across 19 structurally-related compounds." The computational specificity plus the calibration is the categorical defense. Note: this defense rests on capabilities that exist now (structural similarity, calibrated signals, KG linkage, indexed corpus), not on the deferred foundation model. Do not build the case study's credibility on the JEPA model — it isn't built, and claiming it is a moat claim that invites probing.

## What makes this premium (not a PDF with graphs)

The artifact is an interactive analytical report with layers of depth. The top layer is scannable in 2 minutes. Each layer below adds depth for the buyer who wants to dig. Think: a research publication with interactive footnotes that expand into full analyses.

What separates this from everything they currently use:

| What they get now | What this is |
|---|---|
| Sell-side report: 20 pages of prose, price target, structurally biased | Structured, interactive, decomposable, independent, sourced |
| KOL call: one expert's verbal opinion, $1500/hour, no methodology | Systematic analysis + named expert review with methodology trace |
| Consulting report: thorough but 50+ pages, $100K+, 6-8 weeks | Same depth, interactive format, days not months |
| Cortellis: database lookup, structured but no analysis | Analysis on top of structured data, with scoring and gap audit |
| Their own internal work: rNPV with BIO average PoS | Per-asset PoS with decomposable scoring and sensitivity analysis |

The blow-away factor is the COMBINATION: structured data + interactive decomposition + sourced provenance + independent gap audit + methodology trace + PoS sensitivity + editorial design quality. No single existing product delivers all of these together.

## Design principles

- **Findings first, scores derived.** The visual and reading hierarchy puts verifiable findings at the top. Scores and PoS are always presented as aggregations of those findings, never as standalone headline claims. The buyer reads what was found, then sees what it adds up to. This is the structural defense against "why should I trust your numbers" — by the time they reach the numbers, they've already verified the inputs.
- Editorial register throughout. Serif typography, restrained color, hairline rules, generous whitespace within density. Looks like a Financial Times special report, not a SaaS dashboard.
- Information architecture with layers. Executive summary on top, each subsequent layer adds depth. The busy PE partner reads Layer 1. The Royalty Pharma analyst drills to Layer 7.
- Interactivity serves investigation, not decoration. Every click answers a question. Click a finding → see its scored component → click the component → see failure precedents → click a precedent → see source record. The drill path follows: claim → quantification → evidence → source.
- Provenance visible everywhere. No claim without a source. NCT numbers, FAERS records, DOIs, dates, sponsors. The buyer trusts their own verification, not Varosync.
- Structured data over prose. Tables, decomposition trees, structured comparisons. Visibly machine-produced from real data, not paragraphs that could be LLM-generated.
- Science-as-moat visible but not explained. The decomposition components (structural-family similarity, off-target binding profiles, PK absorption patterns) are molecular/scientific terms. They signal "a computational research lab produced this, not a financial research firm." The buyer doesn't need to understand the science. They need to see it's real.

## Report structure: seven layers as tabbed views

The seven layers are NOT a long-scroll document. They are tabs/views in a portal that the buyer navigates between directly. Like Stilta's patent product (Claim Charts, Evidence, Product Details, Patent Findings as switchable views).

**Tab mapping:**
- **Summary** — Layer 0 (Header) + Layer 1 (Executive Risk Summary)
- **Failure Landscape** — Layer 3 (the sweep: full screened universe, then the relevant precedents within it). This is the retrieval lead; consider placing it immediately after Summary so completeness is the first thing the buyer explores.
- **Risk Decomposition** — Layer 2 (interactive click-to-drill)
- **Gap Audit** — Layer 4 (risk vs sponsor data)
- **Methodology** — Layer 5 (full trace on highest-severity findings)
- **Comparables** — Layer 6 (active programs sharing risk signals)
- **PoS Sensitivity** — Layer 7 (sensitivity table with finding-level traceability)

Tab order note: the layer NUMBERS are historical; the tab ORDER should follow the retrieval-first ladder — Summary → Failure Landscape (completeness, checkable) → Decomposition → Gap Audit → Comparables → Methodology → PoS Sensitivity (derived, last). Lead with what's verifiable, end with what's derived.

The buyer self-directs. Royalty Pharma goes straight to PoS Sensitivity. VCs go to Gap Audit. M&A goes to Failure Precedents. Nobody scrolls through layers they don't care about.

### Layer 0: Header

**Content:**
- Asset identity block: compound name, target, mechanism of action, indication, current phase, sponsor
- Primary NCT number (linked to ClinicalTrials.gov)
- Date of analysis
- Methodology version identifier
- One line: "Independent clinical-asset risk analysis. [Sub-brand name]."

**Purpose:** Immediate orientation. The buyer knows what they're looking at in 3 seconds.

**Design:** Clean, structured, editorial. Think of a research paper header or an FT article byline block. No decorative elements.

---

### Layer 1: Executive Risk Summary

**Content (in this order — findings first, scores derived):**

1. **Top-line findings** (3-5 items, each one sentence, each tagged with severity). These are the visual anchors of the page:
   - [HIGH] Hepatotoxicity risk: 82% structural similarity to three Phase 2 failures (2016-2019)
   - [HIGH] Bile acid transport liability: not tested by sponsor
   - [MODERATE] Off-target hERG signal: tested but underpowered (1x Cmax only)
   - [LOW] PK pattern within acceptable range

2. **Gap audit headline** (one line):
   "2 material gaps identified in sponsor data package. See Layer 4."

3. **Summary metrics** (derived from the findings above, presented as secondary):
   - Composite risk score: 0.74 — derived from scored components below (see Layer 2)
   - Asset-specific PoS: 14.2% base case (range: 11.6%–21.8%) | BIO/Informa indication average: 5.3%
   - These are OUTPUTS of the analysis, not the headline. The buyer reads findings first, then sees what they aggregate to. The range communicates honest uncertainty — this is a bounded estimate, not a magic number.

4. **Catalyst timeline** (upcoming events mapped to findings):
   - "Phase 2 readout (Q3 2026) — will test: hepatotox signal [HIGH], PK bioavailability [MODERATE]"
   - "FDA Type B meeting (Q1 2027) — regulatory/endpoint risk [LOW] addressed"
   - Each catalyst linked to which findings from this analysis get resolved at that event. The buyer sees WHEN each risk materializes, not just WHAT the risk is. Hedge funds time positions around this. VCs plan follow-on rounds around this. PE structures milestones around this.

5. **One-line characterization** (not a recommendation):
   "Material unaddressed risks identified in hepatotoxicity pathway. PoS estimate reflects elevated structural-family risk not captured by indication-average benchmarks."

**Purpose:** The page that gets screenshotted, pasted into IC memos, sent to partners. Must stand alone as a complete summary. The buyer's first impression is verifiable findings, not model-generated numbers. By the time they reach the scores, they've already seen what drives them.

**Who uses this most:** Everyone. The entry point for every contact type. VCs copy findings into IC memos. PE uses risk characterization for scenario modeling. M&A advisory uses findings as risk factors. Royalty Pharma scrutinizes the PoS comparison. Family offices get a clear signal. IB uses risk factors for deal docs.

**Design:** Single page. Clean hierarchy. The findings block is the dominant visual element — occupies the top half, largest type weight. Gap audit headline sits between findings and scores. Summary metrics (composite score, PoS) are visually secondary — smaller type, positioned below findings. The hierarchy communicates: "these are the findings → this is what the sponsor missed → here's what it aggregates to." Severity tags are typographically distinct (editorial markers, not traffic-light colors).

---

### Layer 2: Risk Decomposition (Interactive)

**Content:**
Each finding from Layer 1 traces down to scored risk components. The decomposition shows WHERE each finding comes from and HOW it was quantified:

```
Risk Decomposition
├── Structural-family liability:   0.31  [HIGH]  ← drives hepatotox finding
├── Off-target risk:               0.18  [MODERATE]  ← drives hERG finding
├── PK/ADME pattern:               0.14  [MODERATE]
├── Mechanism-class signal:        0.08  [LOW]
└── Regulatory/endpoint risk:      0.03  [LOW]
                                   ────
    Composite Risk Score:          0.74  (weighted aggregation)
```

Each component is CLICKABLE. Clicking expands to show:
- The specific failure precedents driving this component (NCT numbers, sponsors, dates, failure causes, similarity scores, calibrated signal strength)
- The denominator behind the component ("19 structurally-related compounds evaluated, 12 with clinical failures, dominant mode: hepatotoxicity 8/12") — the empirical basis any buyer can read regardless of science background
- Which structural features triggered the flag (specific moieties, scaffolds, binding profiles)
- One-sentence computation note ("Tanimoto coefficient on Morgan fingerprints, radius 2, 2048-bit"; signals calibrated against negative-control set)

The composite score is derived at the bottom — it's the SUM of components, not the starting point. The buyer reads the components first, understands what each one captures, and sees the composite as a natural aggregation.

**Purpose:** The "structurally unfakeable" moment. An LLM produces prose. A model produces decomposable vectors. The moment a buyer clicks a component and sees it resolve into specific failure precedents with NCT numbers, they know this is real analytical infrastructure.

This layer bridges findings (Layer 1) to evidence (Layer 3). The buyer drills from a finding → its scored component → the specific historical failures behind it. Every click answers "why do you claim this?"

Science-as-moat lands here visually. Component names (structural-family liability, off-target binding, PK/ADME pattern) are molecular/scientific. A financial research firm cannot produce this.

**Who uses this most:** Royalty Pharma (will interrogate every component), PE (scenario modeling — "what if structural-family concern is overstated?"), sophisticated VCs, M&A advisory.

**Design:** Decomposition tree or horizontal bar breakdown. Not a pie chart. Not a dashboard widget. An editorial data visualization. Composite score is visually secondary — sits below the components as a derived total, not above them as a headline. Expansion on click should feel like opening a footnote in a research paper, not opening a modal in a SaaS app.

**Interaction pattern:** Click component → inline expansion below the component showing supporting failure precedents → click any failure precedent → jump to Layer 3 table filtered to that precedent. The interactivity is navigation through data layers, not product UI.

---

### Layer 3: Failure Landscape (the sweep) + Precedent Table

This tab is the retrieval lead made visible. It opens on the FULL swept landscape (completeness), then resolves into the relevant failures within it. The buyer sees the breadth first ("we looked at everything"), then the hits.

**3a — The landscape view (completeness, shown first):**

The full universe screened for this asset, not just the failures. A visual that conveys breadth at a glance:
- "X compounds in this structural class screened. Y structurally related (similarity > threshold). Z entered clinical development. W failed. Here is all of it."
- A scatter or matrix: every screened compound positioned by structural similarity (x) against outcome/phase reached (y), the subject asset marked, failures highlighted. The buyer instantly sees the asset sitting inside a cloud of structurally-related programs and where the failures cluster.
- This is the "you knew 4 of these; here are all Z" moment. The breadth is the value — it makes the buyer's analyst+LLM+expert baseline visibly a subset. Completeness is the lever, shown not claimed.
- Coverage honesty: only assert the universe is complete where the underlying mapping actually covers this structural class. State the screened count truthfully.

**3b — The precedent table (the relevant failures within the sweep):**

| Compound | Sponsor | Phase | Year | Failure cause | Structural similarity | FAERS signal (calibrated) | NCT | Source |
|---|---|---|---|---|---|---|---|---|
| [Drug A] | [Sponsor] | Phase 2 | 2018 | Hepatotoxicity | 0.82 | Elevated (calibrated) | NCT0XXXXX | [open] |
| [Drug B] | [Sponsor] | Phase 2 | 2016 | Hepatotoxicity | 0.73 | Elevated (calibrated) | NCT0XXXXX | [open] |
| [Drug C] | [Sponsor] | Phase 3 | 2019 | PK: low bioavailability | 0.71 | — | NCT0XXXXX | [open] |
| [Drug D] | [Sponsor] | Phase 1 | 2021 | Off-target cardiac | 0.68 | Moderate (calibrated) | NCT0XXXXX | [open] |
| [Drug E] | [Sponsor] | Phase 2 | 2020 | Hepatotoxicity | 0.66 | Elevated (calibrated) | NCT0XXXXX | [open] |

- The FAERS signal column shows the calibrated signal (empirical-null corrected), explicitly labeled "calibrated" — not a raw count. This is the cheapest, highest-credibility marker on the page. A calibrated signal is something a pharmacoepidemiologist trusts and an LLM cannot fake.
- Sortable by similarity, failure cause, phase, year, signal strength. Filterable by failure cause.
- Footnotes for the metrics, technically precise ("Tanimoto on Morgan fingerprints, radius 2, 2048-bit"; "disproportionality calibrated against negative-control set per Schuemie/OHDSI").

**Verification is first-class, not a detail (load-bearing requirement):**

The entire credibility of an unknown brand rests on auditable-on-the-spot. The "open" action on every row must resolve to the actual source record (ClinicalTrials.gov page, FAERS case, label) in under two seconds, with the cited passage highlighted. If verification is slow or clunky, the retrieval advantage evaporates and the buyer falls back to skepticism. This is the one place build polish directly carries the value proposition. Every claim → its source, one click, instant.

**Purpose:** The proprietary data layer, led by completeness. Cortellis tells them Drug A was terminated. It cannot show them the full structural-family universe with the subject asset positioned inside it, failures highlighted, each with a calibrated signal and a one-click source. The breadth says "we found everything"; the calibration says "and these signals are real"; the one-click source says "check it yourself." Together they convert skepticism into verification.

**Who uses this most:** Everyone, but the landscape view especially lands with hedge funds (portfolio-pattern thinking) and royalty funds (base-rate underwriting). The precedent detail lands with pharma BD and scientific VCs.

**Who uses this most:** Everyone, but especially Royalty Pharma, pharma BD (MSK/Dana-Farber — they're scientists, they understand structural similarity), and sophisticated VCs.

**Design:** Clean structured table. Editorial typesetting. Sortable columns with subtle sort indicators (not clunky SaaS table UI). External links are underlined text, not buttons. Footnote for the similarity metric is actual footnote styling (small type, bottom of section, numbered reference).

---

### Layer 4: Gap Audit

**Content:**
Two-column structured comparison: identified risks vs. sponsor data coverage.

| Identified Risk | Severity | Sponsor Data Available | Gap Status |
|---|---|---|---|
| Hepatotoxicity (structural family) | HIGH | 28-day rat tox study, clean ALT/AST | **GAP: no chronic tox study** |
| Bile acid transport inhibition | HIGH | Not tested | **GAP: no BSEP assay** |
| Off-target hERG binding | MODERATE | Standard hERG IC50 at 1x Cmax | **WEAK: underpowered test** |
| Low bioavailability pattern | MODERATE | Phase 1 PK shows adequate AUC | Addressed |
| Mechanism-class efficacy concern | LOW | Phase 1 dose-response data available | Addressed |

Gap status categories:
- **GAP: Not addressed** — risk identified, no sponsor data covers it
- **WEAK: Addressed insufficiently** — sponsor data exists but doesn't adequately resolve the concern (wrong assay, underpowered, wrong timeframe)
- **Addressed** — sponsor data convincingly covers this risk

Each gap is a specific, actionable finding. The buyer now knows:
- What to ask the sponsor about
- What additional data to request
- What experiment would close the gap
- What risk they're carrying if they invest without closing the gap

**Purpose:** Information asymmetry mapping. The sponsor knows what they tested. The buyer can now see exactly where the sponsor's data is silent on the dominant failure mechanisms for this structural class. In every other asset class, mapping information asymmetry between seller and buyer is standard practice. In clinical-stage biotech, it barely exists. The gap audit is the moment where the buyer thinks "nobody has ever done this for me on a biotech deal."

Directly connects to THEIR WORKFLOW: gaps become action items in their diligence checklist, questions for their next company meeting, conditions for deal terms. For M&A lawyers: gaps become a liability checklist to shift risk back to the seller or renegotiate terms.

**Who uses this most:**
- M&A advisory: identifying gaps IS their job in transactions
- VCs: gaps become questions for their next meeting with the company
- PE: downside protection — "what could go wrong that we haven't tested for?"
- IB: gaps may affect deal terms, earnout conditions, reps and warranties
- Pharma BD (MSK/Dana-Farber): if it's their own asset, they now know what data to generate before licensing
- Royalty Pharma: gaps directly affect royalty pricing and deal structuring

**Design:** Structured table with clear visual hierarchy. Gap status uses typographic emphasis (bold, weight) not color-coding or icons. The "GAP" and "WEAK" labels should feel like audit findings, not dashboard alerts. Clean, authoritative, institutional.

---

### Layer 5: Methodology Trace

**Content:**
For 2-3 of the highest-severity findings, full trace of how each analytical layer contributed:

> **Finding: Hepatotoxicity risk (HIGH)**
>
> **Layer 1 — Failure-landscape analysis**
> Structural similarity computation (Tanimoto on Morgan fingerprints, radius 2, 2048-bit) identified 82%, 73%, and 71% similarity to three Phase 2 failures terminated for hepatotoxicity (NCT0XXXXX, 2018, [Sponsor A]; NCT0XXXXX, 2016, [Sponsor B]; NCT0XXXXX, 2019, [Sponsor C]). Common structural feature: [specific moiety/scaffold]. FAERS hepatic signal across the structural family: [N] events, empirically calibrated against negative-control set (not raw disproportionality). Knowledge-graph traversal links the shared scaffold to bile-acid-transport pathway. Structural-family risk component: 0.31. Target-pathway component: 0.18.
>
> **Layer 2 — Gap audit**
> Sponsor data package contains 28-day rat toxicology study with clean ALT/AST at therapeutic dose. No chronic (90-day) toxicity study. No species-specific hepatocyte viability assay. No in vitro bile salt export pump (BSEP) inhibition assay. Gap classification: material, unaddressed.
>
> **Layer 3 — Experimental validation**
> [If included in scope: "HepG2 cytotoxicity panel commissioned via [CRO]. Elevated LDH release at 10x Cmax (p<0.05). Mitochondrial membrane potential disruption observed at 5x Cmax."]
> [If not included: "Experimental validation not included in computational-only scope. Recommended assays: HepG2/HepaRG cytotoxicity panel, BSEP inhibition assay."]
>
> **Layer 4 — Expert review**
> [If included: "Reviewed by Dr. [Full Name], [credentials — e.g., board-certified hepatologist, 15 years pharma R&D, former [institution]]. Assessment: concurred with structural-family hepatotoxicity concern. Added independent observation: bile acid transport liability based on structural analog [compound], recommend BSEP assay prior to chronic dosing studies."]
> [If not included: "Expert scientific review not included in computational-only scope."]

**Purpose:** Visceral proof that the analysis comes from a STACK of real capabilities, not from a single model or a single person's opinion. Each layer adds something the previous one could not produce. Together they form an analysis impossible to replicate with any single existing tool.

When Layers 3 and 4 are not included (Tier 1 scope), the trace shows the buyer explicitly what those layers WOULD add. This is structural upselling without being a sales pitch — the buyer sees the gaps in their own analysis coverage and decides if they want to fill them. "Recommended assays" and "expert review not included" are factual statements that naturally prompt the question "what would it cost to add those?"

**Who uses this most:**
- Royalty Pharma (scrutinize methodology before trusting the PoS number)
- M&A advisory and PE (need to defend their use of this analysis)
- Pharma BD at MSK/Dana-Farber (scientists who evaluate methodology rigor)
- VCs presenting to partners ("here's exactly how they arrived at this finding")

**Design:** Long-form structured text, not a table. Reads like an annotated research finding. Each layer is a clearly labeled section. Citations are inline (NCT numbers, dates, sponsors). The visual feel should be a research paper's methods section — dense, precise, institutional.

---

### Layer 6: Comparable Active Programs — THE CONVERSION HINGE

This is not a supporting layer. On a settled-asset flagship, this is the single layer that turns the autopsy into a reason to pay. Everything before it proves the method is deep and real on a dead asset; this is where the buyer sees a LIVE asset — possibly one they are evaluating right now — sitting inside the exact landscape just mapped. The "cool, and?" reaction dies here, or it doesn't die at all.

**Content:**
Where live, active programs sit relative to the settled flagship asset in the same structural and mechanistic space:

| Live Program | Sponsor | Phase | Structural similarity to class | Inherits class liability? | Shared risk axis | NCT |
|---|---|---|---|---|---|---|
| [Live Drug Y] | [Sponsor] | Phase 3 | 0.71 | Likely — shares the scaffold feature | δ-axis / immune tox | NCT0XXXXX |
| [Live Drug Z] | [Sponsor] | Phase 2 | 0.66 | Partial — mutant-selective, may escape α-axis | hyperglycemia (reduced) | NCT0XXXXX |
| [Live Drug W] | [Sponsor] | Phase 1 | 0.52 | Unlikely — distinct chemotype | none above threshold | NCT0XXXXX |

The key column is "inherits class liability?" — does this live program carry the same liability that drove the settled class's failures, or does it genuinely escape it? That is the exact question a buyer holding or evaluating one of these live assets needs answered, and it is not in anyone's head.

**Critical: the inheritance verdict is NOT computed from structural similarity alone.** Tanimoto similarity is the retrieval lead — it finds the candidates. The inheritance read requires mechanistic context: structure + isoform/target selectivity + binding mode + indication/context + the observed/known AE pattern. A scientist will swat down "high Tanimoto therefore inherits liability" in one sentence. For PI3K this is acute and concrete: the class liability is isoform-specific (δ-axis drives immune/Treg toxicity — colitis, pneumonitis, hepatotox; α-axis drives insulin-feedback hyperglycemia), and the entire design thesis of the live mutant-selective programs (RLY-2608, STX-478) is that mutant-selectivity spares wild-type PI3Kα and therefore *escapes* the hyperglycemia liability. Similarity to a pan-PI3K or non-selective-α compound cannot answer whether that escape holds. So the inheritance verdict is similarity (computed) PLUS curated mechanistic context (isoform selectivity, binding mode, observed AE pattern), with both resolving to evidence. The "oh shit" is precisely: "does this live asset's selectivity genuinely escape the class liability, and here's the structured evidence either way."

This is NOT competitive market analysis (sell-side territory). It is a RISK-inheritance map: which live programs carry the class liability and which escape it, traceable to structural features, isoform/mechanism context, and calibrated signals.

**Purpose — conversion, explicitly:**
The buyer arrived to evaluate the method. Here they see their live asset (or one they're tracking) positioned in the landscape, with a sourced read on whether it inherits the liability. The thought becomes: "if they can place [live asset] in this map from public data, I need this run properly on my actual position." This is the layer that generates the inbound. The mirror, not the museum.

The "your-asset offer" (the CTA) sits adjacent to this layer, not at the end of the report: "see where your asset sits — request an analysis."

**Who converts here:**
- Hedge funds: "a live asset I'm positioned in sits in the high-liability neighborhood — that changes my sizing into the readout."
- Royalty Pharma: "the class inheritance directly reprices the royalty I'm underwriting on a live PI3K-adjacent asset."
- Pharma BD: "this tells me whether an in-licensing candidate inherits the class liability before I pay for it."
- VCs: "if this class risk is real, what about the comparable deal in my pipeline?"

**Design:** Same table language as the Failure Landscape (Layer 3), but visually flagged as the live/current layer (the rest is historical; this is now). Live program names must be recognizable. The "inherits liability" column carries the punch — typographic emphasis, every cell sourced. Place the request-access CTA in-context here.

**Legal note:** on the public flagship, frame this as landscape/context ("here is where these programs sit structurally"), not as a risk verdict on a named live company's drug. The risk verdict on a specific live asset is what the buyer pays for, delivered privately under engagement. Public = the map and the adjacency; private = the verdict on their asset.

---

### Layer 7: PoS Sensitivity Analysis

**Content:**
The PoS estimate from Layer 1 is a DERIVED number, presented as a range with uncertainty bounds — not a single magic number. Base case 14.2%, range 11.6%–21.8%. The range reflects how the estimate moves depending on which findings the buyer weights differently.

Below the range: branched failure scenarios tied to real biological events, not abstract parameter tweaks:

| Scenario | PoS | Change | Which finding | Financial implication |
|---|---|---|---|---|
| **Base case (all findings)** | **14.2%** | — | — | — |
| Hepatotox mechanism triggers at readout | 6.1% | −8.1 pp | Finding 1 (hepatotox) | Bear case — comparable to programs that failed this way |
| Sponsor formulation mitigates clearance | 17.1% | +2.9 pp | Finding 4 (PK) | Bull case on PK dimension |
| Off-target risk worse than current data | 11.6% | −2.6 pp | Finding 3 (hERG) | Downside if underpowered hERG test masks real signal |
| Only post-2015 precedents relevant | 16.4% | +2.2 pp | Precedent scope | More optimistic if older failures are less comparable |
| Industry default (no asset-specific analysis) | 5.3% | −8.9 pp | None | What their rNPV uses without this analysis |

Each scenario represents a real event or judgment call, not a model parameter. "Hepatotox mechanism triggers at readout" is something a hedge fund sizes a position around. "Exclude structural-family signal" is an academic exercise. The scenarios match how buyers think about risk — in terms of events and outcomes.

Key comparison always present: asset-specific PoS range vs. industry average and WHY they differ. The "why" traces back to specific findings in Layer 1 and components in Layer 2. The buyer can follow the chain across all layers.

Alternative display: tornado chart showing which scenarios move the PoS estimate most.

**Purpose:** This goes directly into their Excel — base case for the primary rNPV, range endpoints for bear/bull scenarios. Royalty funds get the point estimate they need AND the bounds for safety margin pricing. Hedge funds get the branched scenarios they trade around. The buyer isn't trusting a magic number — they're evaluating a bounded range tied to specific events they can independently assess.

The opposite of a black box. Each scenario traces to a specific finding, each finding traces to specific evidence, each piece of evidence is independently verifiable. When the range holds up under their scrutiny, they use it — because they tested it themselves.

**Who uses this most:**
- Royalty Pharma: PoS sensitivity is core to their royalty pricing model
- PE: scenario modeling for acquisition valuations
- M&A advisory: sensitivity analysis for fairness opinions
- VCs: confidence interval on the PoS they're using in their rNPV
- IB: inputs for deal pricing models

**Design:** Clean table or tornado chart. Editorial styling. The base case row is visually emphasized (bold or heavier weight). The "Which finding affected" column links back to Layer 1 findings — each row traces to a specific analytical decision the buyer can challenge. The BIO/Informa comparison row is always last — it anchors the reader on how far the asset-specific estimate diverges from the generic benchmark they'd use without this analysis.

---

## Export options (post-v1, build when a client asks)

The interactive report is the primary experience. Exports are NOT part of the v1 build.

**When someone needs to extract something:**
- Browser print (Cmd+P) with a clean `@media print` stylesheet covers 80% of use cases. Add this as a ~2 hour task when there's a real need.
- Structured data download (.xlsx of PoS + decomposition scores) is trivial (SheetJS, 30 min). Build it when a paying client needs numbers for their rNPV model.
- Custom PDF template: only if a paying client specifically requires a branded PDF for IC memos. Build for THAT client as part of THAT engagement.

Do not build export infrastructure speculatively.

---

## Flagship asset: Copanlisib / the PI3K inhibitor class

Selected after a four-class deep probe (deruxtecan ADCs, TIGIT, PI3K, anti-CD47) on 2026-05-29. Copanlisib (Aliqopa, Bayer) anchored in the PI3K inhibitor class is the flagship. The reasoning is the bet itself, so it's recorded here.

**Why this asset wins the "oh shit" bar and the legal/strategic constraints:**

- **Densest, most defensible class graveyard in oncology.** Five PI3K-inhibitor indication withdrawals in 30 months (idelalisib FL/SLL, duvelisib FL, copanlisib full withdrawal, umbralisib full withdrawal, parsaclisib NDA pulled). The completeness lever ("here is the whole class, traceable years before the withdrawals") is strongest here.
- **The ODAC 16–0 class verdict is an unbeatable credibility anchor.** In April 2022 the FDA's oncology advisory committee voted 16–0 that PI3K inhibitors share a class-effect toxicity profile, ending the accelerated-approval pathway for the class. "You don't have to trust our class-effect claim — the FDA advisory committee already voted 16–0." Nothing else in the field has a regulator-formalized verdict like this.
- **Small molecule → fully showcases the core structural-similarity engine.** The PI3K class is a set of comparable small-molecule scaffolds, so the Tanimoto/Morgan precedent-matching engine (the differentiated, hard-to-fake capability) fires properly. Antibody candidates (TIGIT, CD47) don't exercise that engine at all; an ADC's structural story is buried in the payload. PI3K is the cleanest structural showcase.
- **Settled (Bayer fully withdrawn) → cleanest anti-prediction posture AND excellent legal safety.** The outcome already played out, so there is no future to be right or wrong about — the hero is purely completeness and depth, never a prediction. And there's no living marketed product or active sponsor to threaten you over a public risk analysis. (Contrast: a live, marketed big-pharma asset like an approved ADC carries product-disparagement exposure that is disqualifying for a no-revenue startup's public flagship.)
- **Documented mechanistic signatures** give the methodology and gap-audit tabs real teeth: δ-axis Treg-driven late immune toxicity (colitis, pneumonitis, hepatotox), and α-axis insulin-feedback hyperglycemia (NEJM-grade literature). The structural-feature-to-toxicity-axis mapping across the class is exactly the depth no specialist carries in their head.
- **Cleaner, faster engineering scope** (matters under the one-week pressure): a well-bounded small-molecule class with documented signatures is a tighter pipeline target than ADC payload-class identification. Picking PI3K makes the urgent build: PI3K target/pathway in the KG, hyperglycemia/colitis/pneumonitis/hepatotox MedDRA coverage, and small-molecule SMILES structural similarity.

**The one real weakness, and the required mitigation:**

PI3K's headline ("the class is toxic") is well-known, and the class is largely settled rather than "what my contacts are trading this week." Left as a pure autopsy, it risks "cool, a thorough postmortem of a dead class, and?". Two mitigations, both mandatory:

1. **Depth below the headline.** The "oh shit" is NOT "PI3K is toxic" (known). It's the structural-feature-to-tox-axis mapping across 30+ ranked compounds, calibrated signals, one-click sources — the thing a specialist knows the headline of but has never seen laid out and could not produce. Clear the specialist objection by going deeper than the headline, not by restating it.
2. **The live adjacency (the conversion hinge — see Layer 6).** Overlay the live mutant-selective programs the class is producing now — RLY-2608 (Relay, ReDiscover-2 Phase 3), STX-478 (Lilly's $2.5B Scorpion acquisition, mutant-selective α), the inavolisib wave — framed as "here is what the copanlisib graveyard should be teaching today's α-selective programs, and here is which of them inherit the class liability vs. genuinely escape it." This is what turns the museum piece into a mirror for a live decision. On the public flagship it stays landscape/context; the risk verdict on a specific live asset is what the buyer pays for.

**Flagship-specific note on the retrospective layers:** because copanlisib is settled, the Gap Audit (e.g., "the 2017 single-arm accelerated-approval package against the concurrent idelalisib boxed warning — here's the gap that was visible at the time") and the PoS Sensitivity are *method demonstrations*, not live decision inputs. They prove the method. Live decision value comes through the Layer 6 adjacency and, on paid engagements, through running these same layers against a client's live asset. Never dress the retrospective copanlisib PoS as a live call.

**Backups (not discarded — distinct best-use cases):**
- **Magrolimab (anti-CD47):** the dramatic in-person BD demo for MSK/Dana-Farber/Royalty (the $4.9B Gilead/Forty Seven blow-up). Legally safe (sponsor dissolved). But it's an antibody — doesn't showcase the structural engine — and needs careful "completeness map, not a prediction" framing. Keep private, not the published flagship. (Note: don't lean on the "canonical AI-pharma cautionary tale" framing — magrolimab failed on safety/futility, not AI hype.)
- **Belrestotug (TIGIT):** alternative flagship if PI3K's settled-ness becomes a concern; sharpest single gap-audit signal (the Sept 2024 19% combo-discontinuation disclosure echoing KeyVibe-010) and cleanest legal posture (sponsor absorbed by Concentra). Antibody, so weaker structural showcase.
- **Datopotamab deruxtecan (ADC):** do NOT publish. Approved, marketed AZ/Daiichi asset → product-disparagement exposure on a "buried risk" thesis is disqualifying for a public flagship, and a "buried risk on a live drug" thesis doesn't actually escape the prediction trap. Internal/illustrative reference at most.

If a second public case study is produced: a different oncology structural class with comparable graveyard density, or a non-oncology area (CNS, cardiometabolic) to demonstrate breadth — same settled-asset + live-adjacency architecture.

---

## Delivery model: bespoke interactive deliverables

Each paid engagement produces a dedicated interactive portal scoped to the client's compound. Private URL, seven layers of structured, sourced, interactive intelligence built specifically for their deal.

- Every analysis is tailored to the compound's structural family, target, mechanism, and indication. The risk dimensions, failure precedents, gap audit, and sensitivity analysis are specific to that deal.
- The interactive format lets the client explore, drill into components, challenge assumptions, and share with partners — capabilities a static report can't offer.
- Each deliverable reflects real analytical work: pipeline run, precedent curation, gap audit assembly, methodology trace, expert review sourcing. The pricing reflects that depth.
- The format scales naturally into repeat engagements. A client who runs one compound through the process and sees the depth comes back with the next deal in their pipeline.

**Reusability (internal, not client-facing):**

The template is built ONCE and reused for every engagement. Same seven-layer structure, same tab navigation, same interaction patterns, same design system. What changes per engagement: the compound, the data, the findings, the gap audit, the sensitivity analysis. The client sees a premium bespoke deliverable. Internally, the template makes production efficient.

**How the template gets used:**

1. **Public case study on the intelligence surface.** The sample deliverable that converts visitors to inquiries. Shows what a paid engagement produces.
2. **Paid client deliverables.** Each engagement produces a private portal using this template, populated with the client's asset data. Private URL, client access only.
3. **Sales meeting artifact.** Walk through the public case study live. The deliverable sells itself by being the demo.
4. **Email follow-up artifact.** After meeting a contact, send a link to the public case study. It does the convincing better than any follow-up email.
5. **Newsletter proof point.** When the newsletter covers a target class, link to the relevant section of the public case study as the depth behind the surface-level intelligence.

Every future engagement follows this structure. The first public case study sets the standard. Build it well.

---

## Build notes

**Stack:** Next.js + Tailwind + Radix primitives + MDX. Custom, no template marketplace. No Base44.

**For the one-week frontend sprint:**

Build 1 — Facade ( /intelligence ):
- Data feed component (structured items, manually curated data)
- Artifact card sections (Stilta pattern: headline + copy left, card right)
- Three artifact cards: risk decomposition teaser, gap audit teaser, failure precedents teaser
- Each card links into the portal
- Request access form
- Stilta-style register: Newsreader + Public Sans, restrained color

Build 2 — Case study portal ( /intelligence/case-study/[asset] ):
- Tabbed navigation component (retrieval-first order: Summary → Failure Landscape → Decomposition → Gap Audit → Comparables → Methodology → PoS Sensitivity)
- Summary tab: Layer 0 header + Layer 1 findings-first executive summary (findings, gap headline, PoS range, catalyst timeline)
- Failure Landscape tab: the sweep view (scatter/matrix of full screened universe with asset positioned, failures highlighted) + the precedent table beneath it. Completeness made visible.
- Risk Decomposition tab: interactive click-to-drill tree (the key interaction to get right), with denominators and calibrated-signal labels
- Gap Audit tab: reuses table component with GAP/WEAK/Addressed status + "why this matters" column
- Methodology tab: structured text renderer with inline citations
- Comparables tab (the conversion hinge): live programs table. Similarity (quiet tabular figure, the computed retrieval lead-in) and the inheritance verdict (Likely / Partial / Unlikely / Escapes — the typographic punch, hairline-ruled, editorial markers, NO traffic-light colors) are visually SEPARATE so no one reads the verdict as computed from the number. Verdict expands on click to its curated mechanistic basis (isoform selectivity, binding mode, AE pattern) with evidence links.
- PoS Sensitivity tab: range display + branched-scenario table with finding-level traceability + benchmark bridge
- **Verification (load-bearing):** every sourced item resolves to its real record in under two seconds with the cited passage highlighted — served from the PRE-COMPILED evidence registry (static, cached JSON), never a live API call. Each item also carries an "open original" link to the canonical source. It is the credibility mechanism, not a nicety.
- Editorial register: dense, structured, sourced, interactive-publication feel
- ~~PDF export pipeline~~ (post-v1, add print stylesheet when needed)
- ~~Structured data download~~ (post-v1, trivial to add later)

**Reusable components across both builds:**
- Structured data table (sortable, filterable, sourced — used in Layers 3, 4, 6)
- Artifact card (used on facade, potentially in other contexts)
- Tab navigation (used in portal)
- Severity tags (typographic markers, not traffic-light colors)

**Analytical content (separate track):**
- Asset selection (locked: Copanlisib / PI3K)
- Running the real pipeline (structural similarity, calibrated FAERS signals, AACT + regulatory evidence, KG enrichment)
- Curating failure precedents and the regulatory evidence (ODAC, withdrawal notices, labels)
- Assembling gap audit against public sponsor data
- Writing methodology traces
- Curating the live comparables' mechanistic inheritance context
- PoS estimation and sensitivity (deferred for the flagship — retrospective)

**Two strictly separate data lanes — do not blur them:**

1. **Dev scaffold (build-time only, never shipped, never shown to a contact).** To build the React components before the pipeline run finishes, generate schema-compliant SAMPLE JSON (define the evidence-registry schema first, then AI-generate a compliant PI3K-shaped array). Build the UI against it. Mark it unmistakably fake (the `α / β / γ / δ` convention) so it can never be mistaken for real or leak into the shipped artifact.

2. **Shipped artifact (what any contact sees): 100% real, verified, evidence-backed. Zero placeholder.** Every claim resolves through the evidence registry to a checkable source. A placeholder reaching a contact's eyes is a credibility landmine and is forbidden. The scaffold is replaced byte-for-byte with real evidence-registry data before anything is shown.

The earlier framing that "the template will be shown to contacts before the real case study is complete" was wrong and is retracted. The UI scaffold is for development; contacts only ever see the real, fully-sourced artifact.
