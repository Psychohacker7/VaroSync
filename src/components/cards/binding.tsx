import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

// 3Dmol loader (CDN, once)
let loaderP: Promise<any> | null = null;
function load3Dmol(): Promise<any> {
  if (typeof window === "undefined") return Promise.reject();
  const w = window as any;
  if (w.$3Dmol) return Promise.resolve(w.$3Dmol);
  if (!loaderP) {
    loaderP = new Promise((res, rej) => {
      const s = document.createElement("script");
      s.src = "https://3Dmol.org/build/3Dmol-min.js";
      s.async = true;
      s.onload = () => res((window as any).$3Dmol);
      s.onerror = rej;
      document.head.appendChild(s);
    });
  }
  return loaderP;
}

const ease = [0.22, 1, 0.36, 1] as const;
const wrapV  = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease, staggerChildren: 0.07 } } };
const childV = { hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0, transition: { duration: 0.42, ease } } };

// ligand residue names in 8TDU
const ALLO = "ZWE"; // STX-478 — mutant-selective allosteric
const ORTHO = "X3N"; // orthosteric comparator (ATP-adjacent site)

const VIEWS = [
  { id: "both",  label: "Both sites" },
  { id: "allo",  label: "Allosteric · escape" },
  { id: "ortho", label: "Orthosteric · liability" },
] as const;
type ViewId = typeof VIEWS[number]["id"];

const ALLO_COLOR = "#5f9e3c";   // green — escape
const ORTHO_COLOR = "#b53324";  // red — liability
const CARTOON = "#cdbfa0";      // warm tan ribbon

type Props = { num: string };

export function BindingCard({ num }: Props) {
  const host = useRef<HTMLDivElement>(null);
  const viewerRef = useRef<any>(null);
  const [view, setView] = useState<ViewId>("both");
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);

  // init once
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const $3Dmol = await load3Dmol();
        const pdb = await fetch("/structures/8TDU.pdb").then((r) => r.text());
        if (cancelled || !host.current) return;
        const v = $3Dmol.createViewer(host.current, { backgroundColor: "#fbfaf6" });
        v.addModel(pdb, "pdb");
        // chain A only (avoid the dimer copy)
        v.setStyle({}, {}); // clear
        // translucent ribbon so the ligand pockets read through it
        v.setStyle({ chain: "A" }, { cartoon: { color: CARTOON, thickness: 0.35, arrows: true, opacity: 0.55 } });
        // bold ligands + a tinted pocket halo so each site is obvious even at overview scale
        v.setStyle({ chain: "A", resn: ALLO }, { stick: { color: ALLO_COLOR, radius: 0.32 }, sphere: { color: ALLO_COLOR, scale: 0.42 } });
        v.setStyle({ chain: "A", resn: ORTHO }, { stick: { color: ORTHO_COLOR, radius: 0.32 }, sphere: { color: ORTHO_COLOR, scale: 0.42 } });
        v.addStyle({ chain: "A", resn: ALLO }, { sphere: { color: ALLO_COLOR, scale: 1.1, opacity: 0.12 } });
        v.addStyle({ chain: "A", resn: ORTHO }, { sphere: { color: ORTHO_COLOR, scale: 1.1, opacity: 0.12 } });
        v.zoomTo({ chain: "A" });
        v.zoom(1.15);
        v.render();
        v.spin("y", 0.4);
        viewerRef.current = v;
        if (!cancelled) setReady(true);
      } catch {
        if (!cancelled) setFailed(true);
      }
    })();
    return () => { cancelled = true; try { viewerRef.current?.spin(false); } catch {} };
  }, []);

  // focus on view change
  useEffect(() => {
    const v = viewerRef.current;
    if (!v) return;
    try {
      if (view === "both") { v.zoomTo({ chain: "A" }); v.zoom(1.25); v.spin("y", 0.4); }
      else {
        v.spin(false);
        const resn = view === "allo" ? ALLO : ORTHO;
        v.zoomTo({ chain: "A", resn });
        v.zoom(0.9);
      }
      v.render();
    } catch {}
  }, [view]);

  return (
    <motion.div id="card-binding" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} variants={wrapV} className="relative">
      <div className="absolute inset-0 overflow-hidden rounded-[6px]">
        <div className="absolute inset-0" style={{ background: "linear-gradient(155deg, #aeb4ad 0%, #868f86 38%, #5f665e 75%, #3f443d 100%)" }} />
        <svg className="absolute inset-0 w-full h-full opacity-[0.16] mix-blend-overlay" xmlns="http://www.w3.org/2000/svg">
          <filter id="bind-noise"><feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" seed="7" /></filter>
          <rect width="100%" height="100%" filter="url(#bind-noise)" />
        </svg>
      </div>

      <div className="relative px-6 pt-7 pb-8 md:px-10 md:pt-9 md:pb-11">
        <motion.div variants={childV} className="mb-5 flex flex-wrap items-baseline gap-3">
          <span className="text-white/90 text-[14px] font-semibold tracking-[-0.005em]">
            <span className="text-white/55 mr-1.5 tabular">{num}</span>
            Binding mode
          </span>
          <span className="grow" />
          {VIEWS.map((t) => {
            const on = t.id === view;
            return (
              <button key={t.id} type="button" onClick={() => setView(t.id)}
                className={`text-[13px] tracking-[-0.005em] font-bold px-5 py-2.5 rounded-[12px] transition-all duration-200 ${
                  on ? "bg-white text-[#0a0a0a] shadow-[0_8px_22px_rgba(15,20,28,0.22),0_1px_3px_rgba(15,20,28,0.08)]"
                     : "bg-white/55 text-[#3a3a35] hover:bg-white/85 hover:text-[#0a0a0a] backdrop-blur-[2px] shadow-[0_3px_10px_rgba(15,20,28,0.08)]"}`}>
                {t.label}
              </button>
            );
          })}
        </motion.div>

        <motion.div variants={childV} className="font-helvetica bg-white rounded-[10px] shadow-[0_20px_48px_rgba(15,20,28,0.18),0_3px_8px_rgba(15,20,28,0.06)] overflow-hidden">
          <div className="px-8 pt-9 pb-7 md:px-12 md:pt-11 md:pb-9">
            <div className="mb-6 grid md:grid-cols-[1fr_auto] gap-4 items-end">
              <div>
                <h3 className="text-[19px] tracking-[-0.015em] font-bold text-[#0a0a0a]">PI3Kα · two binding sites</h3>
                <p className="mt-1 text-[12.5px] text-[#888377]">Experimental structure, PDB 8TDU. Drag to rotate.</p>
              </div>
            </div>

            <div className="grid md:grid-cols-[1.5fr_1fr] gap-6">
              <div className="relative">
                <div ref={host} className="relative w-full rounded-[6px] border border-[#efefed] bg-[#fbfaf6] overflow-hidden" style={{ height: 380 }} />
                {!ready && !failed && (
                  <div className="absolute inset-0 flex items-center justify-center text-[12px] text-[#a8a292]">rendering structure…</div>
                )}
                {failed && (
                  <div className="absolute inset-0 flex items-center justify-center text-[12px] text-[#a8a292] px-8 text-center">3D structure unavailable in this view. Source: RCSB PDB 8TDU.</div>
                )}
              </div>

              <div className="flex flex-col justify-center">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="mt-1.5 h-[10px] w-[10px] rounded-full shrink-0" style={{ background: ORTHO_COLOR }} />
                    <div>
                      <p className="text-[14px] font-bold text-[#0a0a0a]">Orthosteric site</p>
                      <p className="text-[12.5px] text-[#6a655c] leading-[1.5] mt-0.5">The ATP-adjacent pocket. Inhibiting wild-type PI3Kα here blocks insulin signaling. This is the source of the class hyperglycemia liability.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="mt-1.5 h-[10px] w-[10px] rounded-full shrink-0" style={{ background: ALLO_COLOR }} />
                    <div>
                      <p className="text-[14px] font-bold text-[#0a0a0a]">Allosteric site · STX-478</p>
                      <p className="text-[12.5px] text-[#6a655c] leading-[1.5] mt-0.5">A separate pocket the mutant-selective program binds. It engages the mutant enzyme while sparing wild-type, which is the structural basis of the escape.</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-5 border-t border-[#efefed] text-[11.5px] text-[#888377]">
                  Experimental structure: <a href="https://www.rcsb.org/structure/8TDU" target="_blank" rel="noopener" className="text-[#5a5a55] underline decoration-[#d4cba8] underline-offset-2 hover:text-[#0a0a0a]">RCSB PDB 8TDU</a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
