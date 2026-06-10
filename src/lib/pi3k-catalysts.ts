// Real PI3K class catalysts. Source: copanlisib_flagship.shipped.json `scenarios` + `evidence` registry.
// Each event is a registered, dated trial milestone; each precedent is a sourced prior outcome. Do not invent.
export type Catalyst = {
  date: string;
  kind: string;
  asset: string;
  trial: string;
  sponsor: string;
  ticker: string;
  nct: string;
  tests: string;
  precedent: string;
  source: { label: string; url: string };
};

// Ordered by date.
export const PI3K_CATALYSTS: Catalyst[] = [
  {
    date: "Q3 2026", kind: "FDA decision",
    asset: "Gedatolisib", trial: "VIKTORIA-1", sponsor: "Celcuity", ticker: "CELC", nct: "NCT05501886",
    tests: "Whether the FDA narrows the label or asks for confirmatory survival data before approving.",
    precedent: "Copanlisib, an earlier PI3K inhibitor, won accelerated approval. Its confirmatory trial then failed to verify benefit and Bayer withdrew it in 2024.",
    source: { label: "FDA withdrawal notice", url: "https://www.federalregister.gov/documents/2024/03/18/2024-05619/bayer-healthcare-pharmaceuticals-inc-withdrawal-of-approval-of-new-drug-application-for-aliqopa" },
  },
  {
    date: "Nov 2026", kind: "Phase 3 readout",
    asset: "Inavolisib", trial: "INAVO121", sponsor: "Roche", ticker: "RHHBY", nct: "NCT05646862",
    tests: "Whether inavolisib separates from alpelisib head-to-head, on efficacy and on tolerability.",
    precedent: "Alpelisib's on-target hyperglycemia: Grade 3/4 in 36.6% of patients in SOLAR-1. It is also the comparator arm here.",
    source: { label: "SOLAR-1, NEJM", url: "https://pubmed.ncbi.nlm.nih.gov/31091374/" },
  },
  {
    date: "Dec 2026", kind: "Phase 3 readout",
    asset: "Inavolisib", trial: "INAVO122", sponsor: "Roche", ticker: "RHHBY", nct: "NCT05894239",
    tests: "Whether the class's toxicity holds up when stacked on indefinite HER2 maintenance.",
    precedent: "Idelalisib's boxed warning for fatal toxicities: hepatotoxicity in 16%, colitis in 20%. The class's chronic-dosing arc.",
    source: { label: "FDA boxed warning", url: "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=efbdafa9-d18c-4e85-b4a2-1e620fc74e50" },
  },
  {
    date: "Apr 2028", kind: "Phase 3 readout",
    asset: "RLY-2608", trial: "ReDiscover-2", sponsor: "Relay", ticker: "RLAY", nct: "NCT06982521",
    tests: "Whether mutant-selective sparing holds at an efficacious dose, or the hyperglycemia returns.",
    precedent: "The bar it must clear is alpelisib's 36.6% Grade 3/4 hyperglycemia. RLY-2608's roughly 12x selectivity is a narrow window.",
    source: { label: "RLY-2608 proof-of-concept", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10850943/" },
  },
];
