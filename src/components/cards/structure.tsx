import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PI3K } from "@/lib/pi3k-data";
import { PI3K_ROSTER } from "@/lib/pi3k-roster";

// ── Full-class census: status palette + derived views (dead first) ──
const ROSTER_STATUS: Record<string, { label: string; dot: string; text: string; order: number }> = {
  withdrawn:   { label: "Withdrawn",   dot: "#b53324", text: "#7a2a20", order: 0 },
  terminated:  { label: "Terminated",  dot: "#8a8578", text: "#6a655c", order: 1 },
  preclinical: { label: "Preclinical", dot: "#c2bca8", text: "#9a9484", order: 2 },
  active:      { label: "Active",      dot: "#d4853a", text: "#a8642a", order: 3 },
  approved:    { label: "Approved",    dot: "#5f9e3c", text: "#3f7a26", order: 4 },
};
// "Withdrawn" is reserved for drugs that reached approval and were then pulled from
// the market. A program that died in trials is "Terminated", even if the raw feed
// tagged it withdrawn (e.g. an NDA pulled at Phase 3, a Phase 1 discontinuation).
function rowStatus(outcome: string, phase: string): string {
  if (outcome === "withdrawn") return /approved/i.test(phase) ? "withdrawn" : "terminated";
  return outcome;
}
// Furthest phase the program reached, normalized. Status carries the fate, so the
// phase cell never repeats it ("Approved (withdrawn)" → "Approved").
function rowPhase(outcome: string, phase: string): string {
  if (outcome === "approved" || (outcome === "withdrawn" && /approved/i.test(phase))) return "Approved";
  if (!phase || /^terminated$/i.test(phase.trim())) return "—";
  const p = phase.replace(/\([^)]*\)/g, " ").replace(/\b(active|terminated)\b/gi, " ").replace(/\s+/g, " ").trim();
  if (/approved/i.test(p)) return "Approved";
  const m = p.match(/Phase\s*\d+(?:\/\d+)?/i);
  if (m) return m[0].replace(/phase/i, "Phase");
  if (/preclinical/i.test(p)) return "Preclinical";
  return p || "—";
}

// Drop parenthetical asides ("Verastem (later Secura Bio / Sumitomo)" → "Verastem"),
// append ticker. Never truncated in the UI — wraps instead, so nothing is cut off.
function cleanSponsor(sponsor: string | null, ticker: string | null): string {
  if (!sponsor) return "—";
  const s = sponsor.replace(/\s*\([^)]*\)\s*/g, " ").replace(/\s+/g, " ").trim();
  return ticker ? `${s} (${ticker})` : s;
}
// Every program links to a checkable source: its pivotal trial when known, else a
// ClinicalTrials.gov search for the compound.
function ctLink(name: string, nct: string | null): string {
  return nct ? `https://clinicaltrials.gov/study/${nct}` : `https://clinicaltrials.gov/search?intr=${encodeURIComponent(name)}`;
}

const ROSTER_VIEW = PI3K_ROSTER.map((r) => ({ ...r, status: rowStatus(r.outcome, r.phase), phaseLabel: rowPhase(r.outcome, r.phase) }));
const ROSTER_SORTED = [...ROSTER_VIEW].sort((a, b) => {
  const oa = ROSTER_STATUS[a.status]?.order ?? 9;
  const ob = ROSTER_STATUS[b.status]?.order ?? 9;
  return oa !== ob ? oa - ob : a.name.localeCompare(b.name);
});
const ROSTER_COUNTS = ROSTER_VIEW.reduce<Record<string, number>>((m, r) => { m[r.status] = (m[r.status] || 0) + 1; return m; }, {});
const ROSTER_DEAD = (ROSTER_COUNTS.withdrawn || 0) + (ROSTER_COUNTS.terminated || 0);
const ROSTER_BAR = ["withdrawn", "terminated", "preclinical", "active", "approved"] as const;

// ─────────────────────────────────────────────────────────────────────────
// Types + data (real: RDKit Morgan/Tanimoto on sourced structures)
// ─────────────────────────────────────────────────────────────────────────

type Axis = "immune" | "metabolic" | "metabolic_escape" | "mixed";
type Compound = {
  id: string; name: string; brand: string; sponsor: string;
  isoform: string; axis: Axis; status: string; outcome: string;
  formula: string; x: number; y: number; svg2d: string;
  smiles_src: string; iso_src: string;
};

const C = PI3K.compounds as unknown as Compound[];
const SIM = PI3K.sim as number[][];

const AXIS_COLOR: Record<Axis, string> = {
  immune:           "#b53324", // slate — δ immune axis
  metabolic:        "#d4853a", // amber — α metabolic axis
  metabolic_escape: "#5f9e3c", // green — allosteric escape
  mixed:            "#c9a73e", // muted — pan-class
};
const AXIS_LABEL: Record<Axis, string> = {
  immune: "PI3Kδ · immune-toxicity axis",
  metabolic: "PI3Kα · metabolic axis",
  metabolic_escape: "mutant-selective allosteric · escape",
  mixed: "pan-class I",
};
const AXIS_SHORT: Record<Axis, string> = {
  immune: "PI3Kδ", metabolic: "PI3Kα", metabolic_escape: "escape", mixed: "pan-class",
};
const STATUS_LABEL: Record<string, string> = {
  restricted: "Indication restricted", withdrawn: "Withdrawn",
  on_market: "On market", active: "Active · clinical",
};

const GHOST_NODES: { name: string; axis: Axis; x: number; y: number; dead: boolean }[] = [
  { name: "Seletalisib", axis: "immune", x: -1.25, y: -0.55, dead: true },
  { name: "Acalisib", axis: "immune", x: -1.0, y: 0.08, dead: true },
  { name: "AMG-319", axis: "immune", x: -0.5, y: 0.12, dead: true },
  { name: "Parsaclisib", axis: "immune", x: -0.38, y: -0.52, dead: true },
  { name: "Zandelisib", axis: "immune", x: -1.15, y: 0.72, dead: true },
  { name: "Tenalisib", axis: "immune", x: -1.3, y: -0.78, dead: false },
  { name: "Linperlisib", axis: "immune", x: -0.9, y: 0.88, dead: false },
  { name: "Dezapelisib", axis: "immune", x: -0.62, y: -0.88, dead: true },
  { name: "Buparlisib", axis: "mixed", x: -0.22, y: 0.92, dead: true },
  { name: "Pictilisib", axis: "mixed", x: 0.38, y: 1.35, dead: true },
  { name: "Gedatolisib", axis: "mixed", x: -0.18, y: 1.3, dead: false },
  { name: "Taselisib", axis: "mixed", x: 0.3, y: 0.7, dead: true },
  { name: "Paxalisib", axis: "mixed", x: -0.4, y: 1.25, dead: true },
  { name: "Leniolisib", axis: "mixed", x: 0.52, y: 0.88, dead: false },
  { name: "Samotolisib", axis: "mixed", x: -0.55, y: 1.35, dead: true },
  { name: "Serabelisib", axis: "metabolic", x: 1.2, y: -0.25, dead: true },
  { name: "Risovalisib", axis: "metabolic", x: 1.05, y: 0.6, dead: false },
  { name: "HS-10352", axis: "metabolic", x: 1.3, y: 0.15, dead: false },
  { name: "Izorlisib", axis: "metabolic_escape", x: 0.52, y: -1.3, dead: false },
  { name: "LOXO-783", axis: "metabolic_escape", x: -0.08, y: -0.88, dead: true },
  { name: "OKI-219", axis: "metabolic_escape", x: 0.5, y: -0.72, dead: false },
  { name: "CGT6297", axis: "metabolic_escape", x: 0.65, y: -1.25, dead: false },
  { name: "ETX-636", axis: "metabolic_escape", x: 0.88, y: -1.12, dead: false },
  { name: "Eganelisib", axis: "immune", x: -1.45, y: -0.35, dead: true },
  { name: "AZD8154", axis: "immune", x: -1.4, y: 0.42, dead: true },
  { name: "Bosmolisib", axis: "immune", x: -0.78, y: -1.15, dead: false },
  { name: "AZD8835", axis: "immune", x: -1.1, y: -1.0, dead: true },
  { name: "Apitolisib", axis: "mixed", x: 0.62, y: 1.5, dead: true },
  { name: "PF-04691502", axis: "mixed", x: -0.58, y: 1.55, dead: true },
  { name: "Omipalisib", axis: "mixed", x: 0.15, y: 1.55, dead: true },
  { name: "Fimepinostat", axis: "mixed", x: -0.3, y: 1.5, dead: true },
  { name: "TOS-358", axis: "metabolic", x: 1.45, y: -0.5, dead: false },
  { name: "PWT-33597", axis: "metabolic", x: 1.38, y: 0.72, dead: true },
  { name: "BAY-1082439", axis: "metabolic", x: 1.25, y: -0.65, dead: true },
  { name: "Dactolisib", axis: "metabolic_escape", x: 0.35, y: -1.45, dead: true },
  { name: "VS-5584", axis: "metabolic_escape", x: 1.05, y: -1.35, dead: true },
];
const GHOST_EDGES = GHOST_NODES.map((g) => {
  const same = C.filter(c => c.axis === g.axis);
  if (!same.length) return null;
  let near = same[0], best = Infinity;
  for (const c of same) { const d = Math.hypot(g.x - c.x, g.y - c.y); if (d < best) { best = d; near = c; } }
  return { gx: g.x, gy: g.y, tx: near.x, ty: near.y, axis: g.axis };
}).filter(Boolean) as { gx: number; gy: number; tx: number; ty: number; axis: Axis }[];

const ease = [0.22, 1, 0.36, 1] as const;
const wrapV  = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease, staggerChildren: 0.07 } } };
const childV = { hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0, transition: { duration: 0.42, ease } } };
const TABS = [
  { id: "map", label: "Structural map" },
  { id: "census", label: "Full class" },
  { id: "references", label: "References" },
] as const;
type TabId = typeof TABS[number]["id"];

// ── References: real sources, document-style ──
type SourceType = "fda" | "ct" | "lit" | "pubchem";
const SRC_COLOR: Record<SourceType, string> = { fda: "#b8514a", ct: "#4a73a3", lit: "#7a5c9e", pubchem: "#5a8a52" };
type RefLine = { width: string; text?: string };
type Doc = { label: string; file: string; type: SourceType; page: number; pageMax: number; url: string; lines: RefLine[] };

const DOCS: Doc[] = [
  {
    label: "FDA · ODAC briefing", file: "ODAC_PI3K_briefing_2022-04-21.pdf", type: "fda", page: 31, pageMax: 88,
    url: "https://www.onclive.com/view/odac-unanimously-votes-to-recommend-randomized-data-for-approval-of-pi3k-inhibitors-in-hematologic-cancers",
    lines: [
      { width: "92%" }, { width: "84%" },
      { width: "97%", text: "The committee voted 16 to 0 that future approvals be supported by randomized data." },
      { width: "88%", text: "Randomized trials revealed a higher rate of fatal adverse events than single-arm data." },
      { width: "76%" }, { width: "90%" }, { width: "70%" },
    ],
  },
  {
    label: "Cancer Discovery · RLY-2608", file: "Varkaris_RLY-2608_CancerDiscov_2024.pdf", type: "lit", page: 7, pageMax: 14,
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10850943/",
    lines: [
      { width: "86%" }, { width: "94%" },
      { width: "95%", text: "RLY-2608 inhibited mutant tumors with minimal impact on insulin." },
      { width: "82%", text: "Clinical responses observed with no wild-type PI3Kα toxicities." },
      { width: "78%" }, { width: "90%" },
    ],
  },
  {
    label: "Cancer Discovery · STX-478", file: "STX-478_mutant_selective_2023.pdf", type: "lit", page: 4, pageMax: 19,
    url: "https://aacrjournals.org/cancerdiscovery/article/13/11/2432/729855/STX-478-a-Mutant-Selective-Allosteric-PI3K",
    lines: [
      { width: "90%" },
      { width: "96%", text: "Mutant-selective allosteric inhibitor that spares metabolic dysfunction." },
      { width: "80%" }, { width: "88%" }, { width: "72%" },
    ],
  },
  {
    label: "Withdrawal record", file: "PI3K_class_withdrawals_2021-2023.pdf", type: "ct", page: 2, pageMax: 5,
    url: "https://www.ajmc.com/view/pi3k-inhibitors-face-challenges-in-hematologic-malignancies",
    lines: [
      { width: "84%", text: "Duvelisib Dec 2021 · umbralisib Jan 2022 · copanlisib Nov 2023." },
      { width: "92%" }, { width: "76%" }, { width: "88%" },
      { width: "70%", text: "Boxed warnings for idelalisib and duvelisib; FL/SLL indications withdrawn." },
    ],
  },
];

// ─────────────────────────────────────────────────────────────────────────

type Props = { num: string };

export function StructureCard({ num }: Props) {
  const [tab, setTab] = useState<TabId>("map");
  const [active, setActive] = useState<number | null>(4);
  const [docIdx, setDocIdx] = useState(0);
  const doc = DOCS[docIdx];

  // ── Zoom / pan on the map SVG ──
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapWrapRef = useRef<HTMLDivElement>(null);
  const vRef = useRef({ z: 1, x: 0, y: 0 });
  const gestRef = useRef({ dragging: false, moved: false, lx: 0, ly: 0, pinchD: 0, pinchZ: 1, pmx: 0, pmy: 0 });

  const clampPan = useCallback((v: { z: number; x: number; y: number }) => {
    if (!mapContainerRef.current) return;
    const rect = mapContainerRef.current.getBoundingClientRect();
    const maxX = rect.width * (v.z - 1);
    const maxY = rect.height * (v.z - 1);
    v.x = Math.min(0, Math.max(-maxX, v.x));
    v.y = Math.min(0, Math.max(-maxY, v.y));
  }, []);

  const apply = useCallback((smooth?: boolean) => {
    if (!mapWrapRef.current) return;
    const { z, x, y } = vRef.current;
    mapWrapRef.current.style.transition = smooth ? "transform 0.25s cubic-bezier(.22,1,.36,1)" : "none";
    mapWrapRef.current.style.transform = `translate(${x}px,${y}px) scale(${z})`;
  }, []);

  useEffect(() => {
    const el = mapContainerRef.current;
    if (!el) return;
    const v = vRef.current;
    const g = gestRef.current;

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const rect = el.getBoundingClientRect();
      const mx = e.clientX - rect.left, my = e.clientY - rect.top;
      const raw = -e.deltaY * 0.002;
      const delta = Math.max(-0.15, Math.min(0.15, raw));
      const nz = Math.min(4, Math.max(1, v.z * (1 + delta)));
      const r = nz / v.z;
      v.x = mx - r * (mx - v.x);
      v.y = my - r * (my - v.y);
      v.z = nz;
      clampPan(v);
      apply();
    };

    const onMouseDown = (e: MouseEvent) => {
      if (e.button !== 0 || v.z <= 1) return;
      g.dragging = true; g.moved = false;
      g.lx = e.clientX; g.ly = e.clientY;
    };
    const onMouseMove = (e: MouseEvent) => {
      if (!g.dragging) return;
      const dx = e.clientX - g.lx, dy = e.clientY - g.ly;
      if (Math.abs(dx) > 3 || Math.abs(dy) > 3) g.moved = true;
      v.x += dx; v.y += dy;
      g.lx = e.clientX; g.ly = e.clientY;
      clampPan(v);
      apply();
    };
    const onMouseUp = () => { g.dragging = false; };

    const onClick = (e: MouseEvent) => { if (g.moved) { e.stopPropagation(); g.moved = false; } };

    const tDist = (t: TouchList) => Math.hypot(t[0].clientX - t[1].clientX, t[0].clientY - t[1].clientY);
    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 2) {
        e.preventDefault();
        g.pinchD = tDist(e.touches); g.pinchZ = v.z;
        const rect = el.getBoundingClientRect();
        g.pmx = (e.touches[0].clientX + e.touches[1].clientX) / 2 - rect.left;
        g.pmy = (e.touches[0].clientY + e.touches[1].clientY) / 2 - rect.top;
      } else if (e.touches.length === 1 && v.z > 1) {
        g.dragging = true; g.moved = false;
        g.lx = e.touches[0].clientX; g.ly = e.touches[0].clientY;
      }
    };
    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 2 && g.pinchD > 0) {
        e.preventDefault();
        const nz = Math.min(4, Math.max(1, g.pinchZ * (tDist(e.touches) / g.pinchD)));
        const r = nz / v.z;
        v.x = g.pmx - r * (g.pmx - v.x);
        v.y = g.pmy - r * (g.pmy - v.y);
        v.z = nz;
        clampPan(v);
        apply();
      } else if (e.touches.length === 1 && g.dragging) {
        e.preventDefault();
        const dx = e.touches[0].clientX - g.lx, dy = e.touches[0].clientY - g.ly;
        if (Math.abs(dx) > 3 || Math.abs(dy) > 3) g.moved = true;
        v.x += dx; v.y += dy;
        g.lx = e.touches[0].clientX; g.ly = e.touches[0].clientY;
        clampPan(v);
        apply();
      }
    };
    const onTouchEnd = (e: TouchEvent) => {
      g.dragging = false;
      if (e.touches.length < 2) g.pinchD = 0;
      if (v.z < 1.05) { v.z = 1; v.x = 0; v.y = 0; apply(true); }
    };

    const onDblClick = (e: MouseEvent) => {
      if (v.z > 1.05) {
        v.z = 1; v.x = 0; v.y = 0; apply(true);
      } else {
        const rect = el.getBoundingClientRect();
        const mx = e.clientX - rect.left, my = e.clientY - rect.top;
        const nz = 2.5;
        v.x = mx - nz * (mx - v.x) / v.z;
        v.y = my - nz * (my - v.y) / v.z;
        v.z = nz;
        clampPan(v);
        apply(true);
      }
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    el.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    el.addEventListener("click", onClick, true);
    el.addEventListener("touchstart", onTouchStart, { passive: false });
    el.addEventListener("touchmove", onTouchMove, { passive: false });
    el.addEventListener("touchend", onTouchEnd);
    el.addEventListener("dblclick", onDblClick);

    return () => {
      el.removeEventListener("wheel", onWheel);
      el.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      el.removeEventListener("click", onClick, true);
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchmove", onTouchMove);
      el.removeEventListener("touchend", onTouchEnd);
      el.removeEventListener("dblclick", onDblClick);
    };
  }, [apply, clampPan]);

  const W = 600, H = 470, pad = 40;
  const px = (x: number) => pad + ((x + 1) / 2) * (W - 2 * pad);
  const py = (y: number) => pad + ((y + 1) / 2) * (H - 2 * pad);

  const mst: { i: number; j: number; s: number }[] = [];
  {
    const n = C.length, inT = new Array(n).fill(false); inT[0] = true;
    for (let e = 0; e < n - 1; e++) {
      let bi = -1, bj = -1, bw = -1;
      for (let i = 0; i < n; i++) if (inT[i]) for (let j = 0; j < n; j++) if (!inT[j] && SIM[i][j] > bw) { bw = SIM[i][j]; bi = i; bj = j; }
      inT[bj] = true; mst.push({ i: bi, j: bj, s: bw });
    }
  }
  const groups: Record<string, number[]> = {};
  C.forEach((c, i) => { (groups[c.axis] ||= []).push(i); });

  const ac = active != null ? C[active] : null;
  let nnIdx = -1, nnVal = -1;
  if (active != null) for (let j = 0; j < C.length; j++) if (j !== active && SIM[active][j] > nnVal) { nnVal = SIM[active][j]; nnIdx = j; }

  const renderGraph = () => (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto select-none">
      <defs>
        <pattern id="str-dots" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
          <circle cx="8" cy="8" r="0.6" fill="#cac4b6" />
        </pattern>
        {Object.entries(groups).filter(([, idx]) => idx.length > 1).map(([axis, idx]) => {
          const xs = idx.map((i) => px(C[i].x)), ys = idx.map((i) => py(C[i].y));
          const cxV = xs.reduce((a, b) => a + b, 0) / idx.length;
          const cyV = ys.reduce((a, b) => a + b, 0) / idx.length;
          const rV = Math.max(...idx.map((i) => Math.hypot(px(C[i].x) - cxV, py(C[i].y) - cyV))) + 90;
          return (
            <radialGradient key={`rg-${axis}`} id={`str-neb-${axis}`} cx={cxV} cy={cyV} r={rV} gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor={AXIS_COLOR[axis as Axis]} stopOpacity={0.11} />
              <stop offset="55%" stopColor={AXIS_COLOR[axis as Axis]} stopOpacity={0.05} />
              <stop offset="100%" stopColor={AXIS_COLOR[axis as Axis]} stopOpacity={0} />
            </radialGradient>
          );
        })}
        <linearGradient id="str-fL"><stop offset="0%" stopColor="white" stopOpacity="1" /><stop offset="100%" stopColor="white" stopOpacity="0" /></linearGradient>
        <linearGradient id="str-fR"><stop offset="0%" stopColor="white" stopOpacity="0" /><stop offset="100%" stopColor="white" stopOpacity="1" /></linearGradient>
        <linearGradient id="str-fT" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="white" stopOpacity="1" /><stop offset="100%" stopColor="white" stopOpacity="0" /></linearGradient>
        <linearGradient id="str-fB" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="white" stopOpacity="0" /><stop offset="100%" stopColor="white" stopOpacity="1" /></linearGradient>
      </defs>

      <rect width={W} height={H} fill="url(#str-dots)" opacity={0.45} />

      {Object.entries(groups).filter(([, idx]) => idx.length > 1).map(([axis, idx]) => {
        const xs = idx.map((i) => px(C[i].x)), ys = idx.map((i) => py(C[i].y));
        const cxV = xs.reduce((a, b) => a + b, 0) / idx.length;
        const cyV = ys.reduce((a, b) => a + b, 0) / idx.length;
        const rV = Math.max(...idx.map((i) => Math.hypot(px(C[i].x) - cxV, py(C[i].y) - cyV))) + 90;
        return (
          <g key={axis}>
            <circle cx={cxV} cy={cyV} r={rV} fill={`url(#str-neb-${axis})`} />
            <text x={cxV} y={cyV - rV + 14} textAnchor="middle" className="text-[9px] uppercase font-bold" letterSpacing="1.4" fill={AXIS_COLOR[axis as Axis]} opacity={0.55} style={{ paintOrder: 'stroke', stroke: '#ffffff', strokeWidth: 4, strokeLinejoin: 'round' } as React.CSSProperties}>{AXIS_SHORT[axis as Axis]}</text>
          </g>
        );
      })}

      {GHOST_EDGES.map((e, k) => (
        <line key={`ge${k}`} x1={px(e.gx)} y1={py(e.gy)} x2={px(e.tx)} y2={py(e.ty)}
          stroke={AXIS_COLOR[e.axis]} strokeWidth={0.8} strokeOpacity={active != null ? 0.1 : 0.25}
          strokeDasharray="3 5" />
      ))}

      {GHOST_NODES.map((g, k) => {
        const gx = px(g.x), gy = py(g.y);
        const edge = Math.max(Math.abs(gx - W / 2) / (W / 2), Math.abs(gy - H / 2) / (H / 2));
        if (edge < 0.5) return null;
        const dx = gx - W / 2, dy = gy - H / 2, len = Math.hypot(dx, dy) || 1;
        const ex = gx + (dx / len) * 80, ey = gy + (dy / len) * 80;
        return (
          <line key={`trail${k}`} x1={gx} y1={gy} x2={ex} y2={ey}
            stroke={AXIS_COLOR[g.axis]} strokeWidth={0.7} strokeOpacity={active != null ? 0.08 : 0.18}
            strokeDasharray="2 4" />
        );
      })}

      {mst.map((e, k) => {
        const hi = active != null && (e.i === active || e.j === active);
        return (
          <line key={k} x1={px(C[e.i].x)} y1={py(C[e.i].y)} x2={px(C[e.j].x)} y2={py(C[e.j].y)}
            stroke={hi ? "#6a655c" : "#bcae8e"} strokeWidth={1.2 + e.s * 2.8}
            strokeOpacity={active != null ? (hi ? 0.7 : 0.18) : 0.4} strokeLinecap="round" />
        );
      })}

      {GHOST_NODES.map((g, k) => {
        const gx = px(g.x), gy = py(g.y);
        const dx = Math.abs(gx - W / 2) / (W / 2), dy = Math.abs(gy - H / 2) / (H / 2);
        const edge = Math.max(dx, dy);
        const op = (active != null ? 0.3 : 1) * Math.max(0.2, 0.75 - edge * 0.4);
        const col = g.dead ? "#a8a08c" : AXIS_COLOR[g.axis];
        return (
          <g key={`g${k}`} opacity={op}>
            <circle cx={gx} cy={gy} r={5.5} fill="#fff" stroke={col} strokeWidth={0.6} strokeOpacity={0.4} />
            <circle cx={gx} cy={gy} r={3.5} fill={col} />
          </g>
        );
      })}

      {C.map((c, i) => {
        const on = active === i, col = AXIS_COLOR[c.axis];
        const isNN = active != null && i === nnIdx;
        const dim = active != null && !on && !isNN;
        return (
          <g key={c.id} transform={`translate(${px(c.x)},${py(c.y)})`} onClick={() => setActive(on ? null : i)}
            className="cursor-pointer" opacity={dim ? 0.3 : 1}>
            <circle r={on ? 17 : 12} fill="#0a0a0a" opacity={0.05} transform="translate(0,1.5)" />
            <circle r={on ? 17 : 12} fill="#fff" stroke={on ? col : "#ddd8cc"} strokeWidth={on ? 2 : 1.2} />
            <circle r={on ? 11 : 7.5} fill={col} />
            {on && <circle r={11} fill="none" stroke="#fff" strokeWidth={1} strokeOpacity={0.4} />}
            <text x={0} y={on ? 33 : 27} textAnchor="middle"
              className={on ? "text-[12.5px] font-bold" : "text-[10.5px] font-semibold"}
              fill={on ? "#0a0a0a" : "#6a655c"}
              style={{ paintOrder: 'stroke', stroke: '#ffffff', strokeWidth: 4, strokeLinejoin: 'round' } as React.CSSProperties}>{c.name}</text>
          </g>
        );
      })}

      <rect x={0} y={0} width={36} height={H} fill="url(#str-fL)" />
      <rect x={W - 36} y={0} width={36} height={H} fill="url(#str-fR)" />
      <rect x={0} y={0} width={W} height={30} fill="url(#str-fT)" />
      <rect x={0} y={H - 30} width={W} height={30} fill="url(#str-fB)" />
    </svg>
  );

  const renderDetail = () => (
    <AnimatePresence mode="wait" initial={false}>
      {ac ? (
        <motion.div key={ac.id} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0, transition: { duration: 0.28, ease } }} exit={{ opacity: 0, y: -6, transition: { duration: 0.12 } }}>
          <div className="flex items-baseline gap-2 flex-wrap">
            <span className="text-[17px] font-bold text-[#0a0a0a] tracking-[-0.01em]">{ac.name}</span>
            <span className="text-[11.5px] text-[#888377]">{ac.brand !== ac.name ? `${ac.brand} · ` : ""}{ac.sponsor}</span>
          </div>
          <div className="mt-1.5 inline-flex items-center gap-2">
            <span className="h-[7px] w-[7px] rounded-full" style={{ background: AXIS_COLOR[ac.axis] }} />
            <span className="text-[10.5px] uppercase tracking-[0.08em] text-[#5a5a55] font-semibold">{ac.isoform}</span>
          </div>
          <div className="mt-2.5 mol2d bg-[#fbfaf6] border border-[#efefed] rounded-[6px] p-1.5 mx-auto w-[170px]" dangerouslySetInnerHTML={{ __html: ac.svg2d }} />
          <div className="mt-2.5">
            <Row k="Status" v={STATUS_LABEL[ac.status] || ac.status} bold />
            <Row k="Closest" v={`${C[nnIdx].name} · ${nnVal.toFixed(2)}`} bold />
          </div>
          <p className="mt-2.5 text-[12px] leading-[1.5] text-[#6a655c]">{ac.outcome}</p>
          <p className="mt-2 text-[10.5px] text-[#a8a292]">
            Sources:{" "}
            <a href={ac.smiles_src} target="_blank" rel="noopener" className="hover:text-[#0a0a0a] underline decoration-[#d4cba8] underline-offset-2">PubChem</a>
            {" · "}
            <a href={ac.iso_src} target="_blank" rel="noopener" className="hover:text-[#0a0a0a] underline decoration-[#d4cba8] underline-offset-2">selectivity</a>
          </p>
        </motion.div>
      ) : (
        <motion.div key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-full flex items-center">
          <p className="text-[13px] text-[#a8a292] leading-[1.55]">Select a compound to see its computed structure, its nearest structural neighbor in the class, and the outcome that defines it.</p>
        </motion.div>
      )}
    </AnimatePresence>
  );

  const renderLegend = () => (
    <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5">
      {(Object.keys(AXIS_LABEL) as Axis[]).map((a) => (
        <span key={a} className="inline-flex items-center gap-1.5">
          <span className="h-[7px] w-[7px] rounded-full block" style={{ background: AXIS_COLOR[a] }} />
          <span className="text-[11px] text-[#5a5a55]">{AXIS_LABEL[a]}</span>
        </span>
      ))}
    </div>
  );

  return (
    <motion.div id="card-structure" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} variants={wrapV} className="relative">
      {/* Backdrop */}
      <div className="absolute inset-0 overflow-hidden rounded-[6px]">
        <div className="absolute inset-0" style={{ background: "linear-gradient(155deg, #c2c0b4 0%, #9c9889 38%, #726d5e 75%, #4d4a40 100%)" }} />
        <svg className="absolute inset-0 w-full h-full opacity-[0.16] mix-blend-overlay" xmlns="http://www.w3.org/2000/svg">
          <filter id="str-noise"><feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" seed="5" /></filter>
          <rect width="100%" height="100%" filter="url(#str-noise)" />
        </svg>
      </div>

      <div className="relative px-6 pt-7 pb-8 md:px-10 md:pt-9 md:pb-11">
        {/* Header */}
        <motion.div variants={childV} className="mb-5 flex flex-wrap items-baseline gap-3">
          <span className="text-white/90 text-[14px] font-semibold tracking-[-0.005em]">
            <span className="text-white/55 mr-1.5 tabular">{num}</span>
            Structural landscape
          </span>
          <span className="grow" />
          {TABS.map((t) => {
            const on = t.id === tab;
            return (
              <button key={t.id} type="button" onClick={() => { setTab(t.id); setActive(null); }}
                className={`text-[13px] tracking-[-0.005em] font-bold px-5 py-2.5 rounded-[12px] transition-all duration-200 ${
                  on ? "bg-white text-[#0a0a0a] shadow-[0_8px_22px_rgba(15,20,28,0.22),0_1px_3px_rgba(15,20,28,0.08)]"
                     : "bg-white/55 text-[#3a3a35] hover:bg-white/85 hover:text-[#0a0a0a] backdrop-blur-[2px] shadow-[0_3px_10px_rgba(15,20,28,0.08)]"}`}>
                {t.label}
              </button>
            );
          })}
        </motion.div>

        {/* Card */}
        <motion.div variants={childV} className="font-helvetica bg-white rounded-[10px] shadow-[0_20px_48px_rgba(15,20,28,0.18),0_3px_8px_rgba(15,20,28,0.06)] overflow-hidden">
          <AnimatePresence mode="wait" initial={false}>
            {tab === "map" ? (
              <motion.div key="map" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0, transition: { duration: 0.25, ease } }} exit={{ opacity: 0, y: -4, transition: { duration: 0.14, ease } }}
                className="px-5 pt-7 pb-6 md:px-10 md:pt-8 md:pb-7">
                <div className="mb-5">
                  <h3 className="text-[18px] tracking-[-0.015em] font-bold text-[#0a0a0a]">The structural map</h3>
                  <p className="mt-1 text-[12px] text-[#888377]">Computed structural similarity. Tanimoto on Morgan fingerprints, radius 2, 2048-bit.</p>
                </div>

                <div className="grid md:grid-cols-[1.7fr_1fr] gap-3">
                  <div ref={mapContainerRef} className="relative overflow-hidden rounded-[4px]" style={{ touchAction: "none" }}>
                    <div ref={mapWrapRef} style={{ transformOrigin: "0 0" }}>
                      {renderGraph()}
                    </div>
                  </div>
                  <div className="mt-4 pt-5 border-t border-[#efefed] md:mt-0 md:pt-2 md:border-t-0 md:border-l md:border-[#efefed] md:pl-7">
                    {renderDetail()}
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-[#efefed]">
                  {renderLegend()}
                </div>
              </motion.div>
            ) : tab === "census" ? (
              <motion.div key="census" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0, transition: { duration: 0.25, ease } }} exit={{ opacity: 0, y: -4, transition: { duration: 0.14, ease } }}
                className="px-5 pt-7 pb-6 md:px-10 md:pt-8 md:pb-7">
                <div className="mb-4 flex flex-wrap items-baseline justify-between gap-3">
                  <div>
                    <h3 className="text-[18px] tracking-[-0.015em] font-bold text-[#0a0a0a]">The full class</h3>
                    <p className="mt-1 text-[12px] text-[#888377]">Every program in the class, approved and dead alike. Each opens to its trial record.</p>
                  </div>
                  <span className="text-[13px] text-[#888377] tabular"><span className="font-semibold text-[#b53324]">{ROSTER_DEAD}</span> of {PI3K_ROSTER.length} dead</span>
                </div>

                {/* proportion bar — the graveyard at a glance */}
                <div className="flex h-[10px] w-full overflow-hidden rounded-full">
                  {ROSTER_BAR.map((k) => {
                    const n = ROSTER_COUNTS[k] || 0;
                    if (!n) return null;
                    return <span key={k} style={{ width: `${(n / PI3K_ROSTER.length) * 100}%`, background: ROSTER_STATUS[k].dot }} />;
                  })}
                </div>
                <div className="mt-3 mb-5 flex flex-wrap items-center gap-x-5 gap-y-1.5">
                  {ROSTER_BAR.filter((k) => ROSTER_COUNTS[k]).map((k) => (
                    <span key={k} className="inline-flex items-center gap-1.5">
                      <span className="h-[7px] w-[7px] rounded-full block" style={{ background: ROSTER_STATUS[k].dot }} />
                      <span className="text-[11px] text-[#5a5a55]">{ROSTER_STATUS[k].label}</span>
                      <span className="text-[11px] text-[#a8a292] tabular">{ROSTER_COUNTS[k]}</span>
                    </span>
                  ))}
                </div>

                {/* dense, scrollable table — data, not decoration */}
                <div className="max-h-[360px] overflow-y-auto rounded-[6px] border border-[#efefed]">
                  {/* mobile: table collapses to a clean 2-line list per program */}
                  <ul className="md:hidden divide-y divide-[#f3f1ea]">
                    {ROSTER_SORTED.map((r, i) => {
                      const s = ROSTER_STATUS[r.status] ?? ROSTER_STATUS.terminated;
                      return (
                        <li key={r.name + i} className="px-4 py-2.5">
                          <div className="flex items-center justify-between gap-3">
                            <a href={ctLink(r.name, r.nct)} target="_blank" rel="noopener" className="text-[13px] font-semibold text-[#0a0a0a] truncate">{r.name}</a>
                            <span className="inline-flex items-center gap-1.5 text-[11px] whitespace-nowrap shrink-0" style={{ color: s.text }}>
                              <span className="h-[6px] w-[6px] rounded-full shrink-0" style={{ background: s.dot }} />
                              {s.label}
                            </span>
                          </div>
                          <div className="mt-1 flex items-center gap-1.5 text-[11.5px] text-[#888377] min-w-0">
                            <span className="text-[#6a655c] whitespace-nowrap">{r.phaseLabel}</span>
                            <span className="text-[#cfc7b5]">·</span>
                            <span className="truncate">{cleanSponsor(r.sponsor, r.ticker)}</span>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                  <table className="hidden md:table w-full table-fixed text-left border-collapse">
                    <colgroup>
                      <col className="w-[28%]" />
                      <col className="w-[22%]" />
                      <col className="w-[22%]" />
                      <col className="w-[28%]" />
                    </colgroup>
                    <thead className="sticky top-0 bg-white z-10">
                      <tr className="text-[10px] uppercase tracking-[0.1em] text-[#a8a292] border-b border-[#efefed]">
                        <th className="py-2.5 pl-5 pr-4 font-bold">Program</th>
                        <th className="py-2.5 pr-4 font-bold">Status</th>
                        <th className="py-2.5 pr-4 font-bold">Phase</th>
                        <th className="py-2.5 pr-5 font-bold">Sponsor</th>
                      </tr>
                    </thead>
                    <tbody>
                      {ROSTER_SORTED.map((r, i) => {
                        const s = ROSTER_STATUS[r.status] ?? ROSTER_STATUS.terminated;
                        return (
                          <tr key={r.name + i} className="group border-b border-[#f3f1ea] last:border-0 hover:bg-[#fbfaf6] transition-colors">
                            <td className="py-2.5 pl-5 pr-4 align-top">
                              <a href={ctLink(r.name, r.nct)} target="_blank" rel="noopener" className="inline-flex items-baseline gap-1.5 text-[12.5px] font-semibold text-[#0a0a0a] hover:text-[#6b2a1f] transition-colors">
                                {r.name}
                                <svg width="9" height="9" viewBox="0 0 20 20" fill="none" className="self-center shrink-0 opacity-0 group-hover:opacity-50 transition-opacity"><path d="M6 14L14 6M14 6H7M14 6V13" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
                              </a>
                            </td>
                            <td className="py-2.5 pr-4 align-top">
                              <span className="inline-flex items-center gap-1.5 text-[12px] whitespace-nowrap" style={{ color: s.text }}>
                                <span className="h-[6px] w-[6px] rounded-full shrink-0" style={{ background: s.dot }} />
                                {s.label}
                              </span>
                            </td>
                            <td className="py-2.5 pr-4 text-[12px] text-[#6a655c] align-top whitespace-nowrap">{r.phaseLabel}</td>
                            <td className="py-2.5 pr-5 text-[12px] text-[#888377] align-top">{cleanSponsor(r.sponsor, r.ticker)}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            ) : (
              <motion.div key="references" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0, transition: { duration: 0.25, ease } }} exit={{ opacity: 0, y: -4, transition: { duration: 0.14, ease } }}
                className="px-5 pt-8 pb-7 md:px-12 md:pt-11 md:pb-9">
                <div className="mb-7 flex flex-wrap items-center gap-x-5 gap-y-2">
                  {DOCS.map((d, i) => {
                    const on = i === docIdx;
                    return (
                      <button key={d.file} type="button" onClick={() => setDocIdx(i)} className="group inline-flex items-baseline gap-2">
                        <span className="block h-[8px] w-[8px] rounded-full transition-transform" style={{ background: SRC_COLOR[d.type], transform: on ? "scale(1.15)" : "scale(1)" }} />
                        <span className={`text-[13px] transition-colors ${on ? "text-[#0a0a0a] font-semibold" : "text-[#a8a292] group-hover:text-[#0a0a0a]"}`}>{d.label}</span>
                      </button>
                    );
                  })}
                </div>

                <div className="flex items-baseline justify-between gap-4 flex-wrap mb-5">
                  <a href={doc.url} target="_blank" rel="noopener" className="text-[15px] text-[#0a0a0a] font-semibold underline decoration-[#d4cba8] underline-offset-2 hover:decoration-[#0a0a0a]">{doc.file}</a>
                  <p className="text-[13px] text-[#888377]">page <span className="font-semibold text-[#0a0a0a] tabular">{doc.page}</span> of <span className="tabular">{doc.pageMax}</span></p>
                </div>
                <div className="border-t border-[#efefed]" />

                <div className="pt-6 space-y-3.5">
                  {doc.lines.map((ln, i) => (
                    ln.text ? (
                      <span key={i} className="block rounded-[3px] px-3 py-1.5 text-[13px] text-[#0a0a0a] leading-[1.4]" style={{ background: "#fbe48a", width: ln.width }}>{ln.text}</span>
                    ) : (
                      <span key={i} className="block h-[10px] rounded-full" style={{ width: ln.width, background: "#d5d3cd" }} />
                    )
                  ))}
                </div>

                <div className="mt-7 pt-5 border-t border-[#efefed] flex items-center justify-between flex-wrap gap-3">
                  <span className="inline-flex items-center gap-2">
                    <span className="h-[7px] w-[24px] rounded-full block" style={{ background: "#fbe48a" }} />
                    <span className="text-[12px] text-[#5a5a55]">Cited excerpt</span>
                  </span>
                  <div className="flex items-center gap-3 text-[12px] text-[#888377]">
                    <span>document <span className="font-semibold text-[#0a0a0a] tabular">{docIdx + 1}</span> of <span className="tabular">{DOCS.length}</span></span>
                    <button type="button" onClick={() => setDocIdx((i) => Math.max(0, i - 1))} disabled={docIdx === 0} className="ml-3 text-[#888377] hover:text-[#0a0a0a] disabled:opacity-40 transition-colors">← prev</button>
                    <button type="button" onClick={() => setDocIdx((i) => Math.min(DOCS.length - 1, i + 1))} disabled={docIdx === DOCS.length - 1} className="text-[#888377] hover:text-[#0a0a0a] disabled:opacity-40 transition-colors">next →</button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

    </motion.div>
  );
}

function Row({ k, v, bold }: { k: string; v: string; bold?: boolean }) {
  return (
    <div className="grid grid-cols-[80px_1fr] gap-3 py-[7px] border-t border-[#efefed] items-baseline">
      <span className="text-[9.5px] uppercase tracking-[0.1em] text-[#a8a292] font-bold">{k}</span>
      <span className={`text-[12.5px] ${bold ? "text-[#0a0a0a] font-semibold" : "text-[#6a655c]"}`}>{v}</span>
    </div>
  );
}
