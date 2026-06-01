import { StructureCard } from "@/components/cards/structure";
import { BindingCard } from "@/components/cards/binding";
import { MechanismCard } from "@/components/cards/mechanism";
import { SignalsCard } from "@/components/cards/signals";
import { EscapeCard } from "@/components/cards/escape";
import { GapCard } from "@/components/cards/gap";
import { CatalystCard } from "@/components/cards/catalyst";

export const metadata = {
  title: "PI3K Inhibitor Class — Structural Risk Landscape",
  description: "Public case study preview. Computed from molecular structure.",
};

function Panel({ eyebrow, title, body, fomo }: { eyebrow: string; title: string; body: string; fomo: string }) {
  return (
    <div className="w-[380px] shrink-0 flex flex-col justify-center">
      <p className="text-[11.5px] uppercase tracking-[0.16em] text-oxblood font-bold mb-4">{eyebrow}</p>
      <h2 className="text-[27px] leading-[1.12] tracking-[-0.018em] font-bold text-ink">{title}</h2>
      <p className="mt-4 text-[15px] leading-[1.6] text-muted">{body}</p>
      <p className="mt-5 pt-5 border-t border-rule-soft text-[13.5px] leading-[1.55] text-muted-2">{fomo}</p>
    </div>
  );
}

function Module({ side, panel, children }: { side: "left" | "right"; panel: React.ReactNode; children: React.ReactNode }) {
  return (
    <section className="max-w-[1320px] mx-auto px-10 py-12 flex gap-12 items-center">
      {side === "left" ? <>{panel}<div className="flex-1 min-w-0">{children}</div></>
                       : <><div className="flex-1 min-w-0">{children}</div>{panel}</>}
    </section>
  );
}

export default function PreviewPage() {
  return (
    <>
      {/* desktop-only gate */}
      <div className="lg:hidden fixed inset-0 z-50 bg-paper flex items-center justify-center px-10 text-center">
        <div className="max-w-[320px]">
          <p className="text-[18px] font-bold tracking-[-0.01em] text-ink mb-4">Varosync<span className="text-oxblood">.</span></p>
          <p className="text-[15px] leading-[1.6] text-muted">This analysis is built for a larger screen. Please open it on desktop.</p>
        </div>
      </div>

      <main className="hidden lg:block layer">
        {/* top bar */}
        <div className="border-b border-rule-soft sticky top-0 z-20 backdrop-blur-[6px]" style={{ background: "rgba(241,233,214,0.86)" }}>
          <div className="max-w-[1320px] mx-auto px-10 h-[60px] flex items-center justify-between">
            <span className="text-[18px] font-bold tracking-[-0.01em] text-ink">Varosync<span className="text-oxblood">.</span></span>
            <span className="text-[11px] uppercase tracking-[0.14em] text-muted-2 font-medium">Public case study · Preview</span>
          </div>
        </div>

        {/* hero */}
        <section className="max-w-[1320px] mx-auto px-10 pt-24 pb-12">
          <div className="max-w-[860px]">
            <p className="text-[12px] uppercase tracking-[0.16em] text-oxblood font-bold mb-6">PI3K inhibitor class</p>
            <h1 className="text-[54px] leading-[1.04] tracking-[-0.024em] font-bold text-ink">
              On-target toxicity ended a drug class. The market is betting it can engineer its way back in.
            </h1>
            <p className="mt-8 text-[19px] leading-[1.55] text-muted max-w-[640px]">
              Five programs withdrawn or restricted in two years. A 16-to-0 FDA vote against the class. The failures were on-target and isoform-specific, which means they are written into the chemistry. Taken apart below, computed from public records.
            </p>
          </div>
        </section>

        {/* HOOK — proprietary structural read */}
        <Module side="right" panel={
          <Panel
            eyebrow="01 · Structural landscape"
            title="Failure has a shape."
            body="Eight programs, placed by computed molecular similarity. The ones that died the same way sit together. This is the structural signature of a class effect, not a list of unrelated setbacks."
            fomo="The full analysis ranks every structurally related program in the public record, not eight named compounds."
          />}>
          <StructureCard num="01" />
        </Module>

        {/* PROOF — prediction confirmed by real data */}
        <Module side="left" panel={
          <Panel
            eyebrow="02 · Post-market record"
            title="Predicted from chemistry. Confirmed in the field."
            body="The structure says the δ programs hit immunity and the α programs hit metabolism. The FDA's real-world adverse-event record agrees, across sixteen thousand reports, once the generic noise is filtered out."
            fomo="Calibrated safety signals across the full class: the difference between a number a regulator trusts and a raw count an LLM would guess."
          />}>
          <SignalsCard num="02" />
        </Module>

        {/* LOGIC — the class-effect traced */}
        <Module side="right" panel={
          <Panel
            eyebrow="03 · Mechanism"
            title="Same mechanism, same fate."
            body="Target to outcome, every program follows one path. The isoform sets the signaling, the signaling sets the toxicity axis, the axis sets the fate. Trace any node."
            fomo="In the full analysis, every signal carries its mechanistic chain and the metabolite evidence behind it."
          />}>
          <MechanismCard num="03" />
        </Module>

        {/* PIVOT — the protein, and where the escape was built */}
        <Module side="left" panel={
          <Panel
            eyebrow="04 · Binding mode"
            title="The liability lives at the protein."
            body="PI3Kα from the experimental structure. The orthosteric pocket carries the wild-type metabolic liability. The allosteric pocket is where the new wave was built to bind instead. Same protein, two sites."
            fomo="Per-target structural reads on the specific assets under your evaluation."
          />}>
          <BindingCard num="04" />
        </Module>

        {/* VERDICT — the live wave */}
        <Module side="right" panel={
          <Panel
            eyebrow="05 · The live wave"
            title="Inherit, or escape?"
            body="The active programs, scored on whether they carry the class liability or break from it. The verdict separates a program that solved the problem from one that only moved it."
            fomo="A per-asset inheritance read on the name you are evaluating, in the full case study."
          />}>
          <EscapeCard num="05" />
        </Module>

        {/* OPEN — the gap audit */}
        <Module side="left" panel={
          <Panel
            eyebrow="06 · Gap audit"
            title="What still has to be proven."
            body="The verdict is favorable, but the public record leaves the decisive question open: whether the metabolic sparing holds at an efficacious dose. These are the gaps that become milestones, diligence questions, and deal terms."
            fomo="On your asset, the gap audit maps every unaddressed risk against your data room, not the public record alone."
          />}>
          <GapCard num="06" />
        </Module>

        {/* ACTION — when it resolves, and how risk branches */}
        <Module side="right" panel={
          <Panel
            eyebrow="07 · Catalysts and scenarios"
            title="What you are watching, and when."
            body="The class collapsed on a chain of readouts. The escape thesis hinges on the next one: the first randomized test of the sparing at an efficacious dose. Here is how the risk branches on the result."
            fomo="On your asset, every open question is mapped to the readout that resolves it and the position it implies."
          />}>
          <CatalystCard num="07" />
        </Module>

        {/* closing */}
        <section className="max-w-[1320px] mx-auto px-10 pt-10 pb-24">
          <div className="border-t border-rule pt-12 flex items-end justify-between gap-10 flex-wrap">
            <div className="max-w-[560px]">
              <h2 className="text-[30px] leading-[1.15] tracking-[-0.018em] font-bold text-ink">This is the preview. The full case study runs on the whole landscape.</h2>
              <p className="mt-4 text-[15.5px] leading-[1.6] text-muted">The complete screened universe, calibrated safety signals, and a per-asset read on your compound. Built privately, available on request.</p>
            </div>
            <a href="#" className="shrink-0 text-[14px] font-semibold tracking-[-0.005em] text-paper bg-ink px-7 py-3.5 rounded-[2px] hover:bg-oxblood transition-colors">Request the full case study</a>
          </div>
        </section>

        <footer className="border-t border-rule-soft">
          <div className="max-w-[1320px] mx-auto px-10 py-7 flex justify-between flex-wrap gap-2 text-[13px] text-muted-2">
            <span>Varosync · Independent clinical-asset risk analysis</span>
            <span>Computed from public structures · sources throughout</span>
          </div>
        </footer>
      </main>
    </>
  );
}
