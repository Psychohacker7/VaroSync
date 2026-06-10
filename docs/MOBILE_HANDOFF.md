# Mobile build handoff — Capital Markets (/finance)

Pick up here for the **mobile/responsive pass** on the Capital Markets page. Desktop is done and signed off. Do not redesign desktop.

## Project basics
- Stack: Vite + React + TS + Tailwind v4 + Framer Motion (`motion/react`). Paper/sepia theme.
- Dev server runs at **http://localhost:3000** (already running, or `npm run dev`).
- Typecheck: `npx tsc --noEmit` (strict; `noUnusedLocals` on — no dead vars). Build: `npm run build`.
- **Do NOT commit** unless explicitly asked. User pushes themselves.
- Verify changes live in the browser (claude-in-chrome) at localhost:3000, don't just trust the diff.
- Real data only — numbers come from `src/lib/*` (sourced from the shipped PI3K case study). Never invent figures.

## Copy rules (hard)
- No em dashes in any visible copy (use periods/commas/colons). No "independent", "clinical-stage", "decomposable" as crutches. No defensive "not a X" framing. No pricing. Lead financial-first, retrieval-first (completeness/checkable), never claim a moat explicitly ("foundation model"/"proprietary architecture") — imply it.

## THE TASK
Right now the case study is **gated off on mobile**. In `src/pages/Finance.tsx`:
- There's a `lg:hidden` block that shows a "Best viewed on desktop" monitor SVG.
- The 7 cards + closing are inside `<div className="hidden lg:block">` — hidden on phones.

**Goal:** make the whole case study render correctly on mobile (adaptive), and delete the "view on desktop" gate. Same content, processed correctly for small screens.

## What's on the page (desktop, top → bottom)
1. Hero — cubes (news3.png) left, text right. Already responsive (stacks, `order-1/2`, `lg:` variants). Leave as-is unless polish needed.
2. Case-study sub-hero — "Example case study: PI3K inhibitor class" + headline + 2 paras. Responsive px already.
3. **7 cards** via `Module` + `Panel` (the part that needs work):
   - Structure (`cards/structure.tsx`) — tabs: Structural map (scatter SVG + detail) · Full class (grouped census **table**) · References (doc viewer). Map uses `grid md:grid-cols-[1.3fr_1fr]`. Census uses `table-fixed` with `<colgroup>`.
   - Signals (`cards/signals.tsx`) — FAERS bars, compound selector, "verify on openFDA" link. Bars use a fixed grid `grid-cols-[196px_1fr_58px]` → **will break on mobile**.
   - Escape (`cards/escape.tsx`) — spectrum/verdicts.
   - Gap (`cards/gap.tsx`) — OPEN/PARTIAL rows.
   - Catalysts (`cards/catalyst.tsx`) — gradient bar + scenarios.
   - Mechanism (`cards/mechanism.tsx`) — SVG flow diagram (viewBox, scales; check label legibility at small width).
   - Binding (`cards/binding.tsx`) — 3Dmol.js protein viewer (CDN). Needs a sane mobile height.
4. Closing — "Spot-check it" credibility beat + "You have seen the surface…" iceberg CTA (CalButton → Cal.com). One merged section.

## Known responsive hotspots
- **`Module`** in `Finance.tsx`: `flex gap-12 items-center` with a `w-[380px]` panel + `flex-1` card. Always row → squishes on mobile. Make it `flex-col lg:flex-row`, panel `w-full lg:w-[380px]`, and decide panel-above-card order per card.
- **`Panel`**: `w-[380px] shrink-0` → `w-full lg:w-[380px]`.
- Card interiors use generous `px-12`/`pt-11` — reduce on mobile (`px-5`/`px-6`).
- Signals bar grid `grid-cols-[196px_1fr_58px]` — shrink the label/count columns on mobile.
- Structure map `md:grid-cols-[1.3fr_1fr]` — already stacks below md; check the scatter SVG + detail panel on phone.
- Census table — `table-fixed`; check it doesn't overflow; sponsor cell already truncates.
- Mechanism flow SVG — labels may get tiny; consider a min-width + horizontal scroll wrapper on phone, or simplify.
- Binding 3D — give it a fixed mobile height; confirm 3Dmol canvas resizes.
- The right-edge decorative cubes (news2.png) are `hidden lg:block` already.

## Suggested order of work
1. In `Finance.tsx`: remove the `lg:hidden` "view on desktop" block; unwrap the `hidden lg:block` so cards show on mobile.
2. Make `Module` + `Panel` stack responsively.
3. Go card by card, fixing internal fixed-width grids and padding; verify each live on a narrow viewport (resize browser to ~390px).
4. Recheck the closing CTA + footer on mobile.

## Reference docs (in repo)
- `docs/platform-context/` — case study spec, artifacts plan, the original Platform layout reference.
- Memory/feedback files live under the Platform project's `.claude` memory (financial-language-first, retrieval-not-prediction, finance-surface-direction=Stilta, writing-crutches, no-yapping, no-pricing, positive-framing). Honor them.
