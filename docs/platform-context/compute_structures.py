"""
PI3K inhibitor structural analysis for the case study preview.
Real computation: Morgan fingerprints (r=2, 2048-bit) -> Tanimoto similarity ->
2D MDS projection -> nearest-neighbor structural analysis.
All SMILES are sourced (PubChem, cross-verified for the two recent assets).
"""
import json
import numpy as np
from rdkit import Chem
from rdkit.Chem import AllChem, DataStructs
from sklearn.manifold import MDS

# id, name, brand, sponsor, isoform, axis, status, outcome, smiles, smiles_src, iso_src
COMPOUNDS = [
    dict(id="idelalisib", name="Idelalisib", brand="Zydelig", sponsor="Gilead",
         isoform="PI3Kδ", axis="immune", status="restricted",
         outcome="Boxed warning (fatal hepatotox, colitis, pneumonitis, infection); FL/SLL indications withdrawn Dec 2021",
         smiles="CC[C@@H](C1=NC2=C(C(=CC=C2)F)C(=O)N1C3=CC=CC=C3)NC4=NC=NC5=C4NC=N5",
         smiles_src="https://pubchem.ncbi.nlm.nih.gov/compound/11625818",
         iso_src="https://pmc.ncbi.nlm.nih.gov/articles/PMC8037248/"),
    dict(id="duvelisib", name="Duvelisib", brand="Copiktra", sponsor="Secura Bio",
         isoform="PI3Kδ/γ", axis="immune", status="restricted",
         outcome="Boxed warning; FL indication withdrawn Dec 2021; increased risk of death vs comparator",
         smiles="C[C@@H](C1=CC2=C(C(=CC=C2)Cl)C(=O)N1C3=CC=CC=C3)NC4=NC=NC5=C4NC=N5",
         smiles_src="https://pubchem.ncbi.nlm.nih.gov/compound/50905713",
         iso_src="https://pmc.ncbi.nlm.nih.gov/articles/PMC8037248/"),
    dict(id="umbralisib", name="Umbralisib", brand="Ukoniq", sponsor="TG Therapeutics",
         isoform="PI3Kδ / CK1ε", axis="immune", status="withdrawn",
         outcome="Fully withdrawn Jan 2022 after a survival imbalance in the confirmatory setting",
         smiles="C[C@@H](C1=C(C(=O)C2=C(O1)C=CC(=C2)F)C3=CC(=CC=C3)F)N4C5=NC=NC(=C5C(=N4)C6=CC(=C(C=C6)OC(C)C)F)N",
         smiles_src="https://pubchem.ncbi.nlm.nih.gov/compound/72950888",
         iso_src="https://www.medkoo.com/products/5900"),
    dict(id="copanlisib", name="Copanlisib", brand="Aliqopa", sponsor="Bayer",
         isoform="pan-class I", axis="mixed", status="withdrawn",
         outcome="Withdrawn Nov 2023 after CHRONOS-4 failed to improve progression-free survival",
         smiles="COC1=C(C=CC2=C3NCCN3C(=NC(=O)C4=CN=C(N=C4)N)N=C21)OCCCN5CCOCC5",
         smiles_src="https://pubchem.ncbi.nlm.nih.gov/compound/135565596",
         iso_src="https://pmc.ncbi.nlm.nih.gov/articles/PMC8037248/"),
    dict(id="alpelisib", name="Alpelisib", brand="Piqray", sponsor="Novartis",
         isoform="PI3Kα", axis="metabolic", status="on_market",
         outcome="Approved; tolerability defined by on-target hyperglycemia (SOLAR-1: 63.7% all-grade)",
         smiles="CC1=C(SC(=N1)NC(=O)N2CCC[C@H]2C(=O)N)C3=CC(=NC=C3)C(C)(C)C(F)(F)F",
         smiles_src="https://pubchem.ncbi.nlm.nih.gov/compound/56649450",
         iso_src="https://pmc.ncbi.nlm.nih.gov/articles/PMC8037248/"),
    dict(id="inavolisib", name="Inavolisib", brand="Itovebi", sponsor="Roche",
         isoform="PI3Kα (mutant-degrading)", axis="metabolic", status="on_market",
         outcome="Approved 2024; more selective than alpelisib but α axis engaged, hyperglycemia on label",
         smiles="C[C@@H](C(=O)N)NC1=CC2=C(C=C1)C3=NC(=CN3CCO2)N4[C@@H](COC4=O)C(F)F",
         smiles_src="https://pubchem.ncbi.nlm.nih.gov/compound/124173720",
         iso_src="https://pmc.ncbi.nlm.nih.gov/articles/PMC8037248/"),
    dict(id="rly2608", name="RLY-2608", brand="zovegalisib", sponsor="Relay Therapeutics",
         isoform="mutant-selective allosteric PI3Kα", axis="metabolic_escape", status="active",
         outcome="Phase 1/2. Mutant-selective allosteric; clinical responses with minimal insulin impact, no WT-PI3Kα toxicities reported",
         smiles="C1=CC(=C(C=C1F)[C@H]2C3=C(C=C(C=C3NC(=O)C4=CC(=CC(=C4)F)C(F)(F)F)C5=C(N6C(=NC=N6)C=C5)C#N)C(=O)N2)Cl",
         smiles_src="https://pubchem.ncbi.nlm.nih.gov/compound/166822065",
         iso_src="https://pmc.ncbi.nlm.nih.gov/articles/PMC10850943/"),
    dict(id="stx478", name="STX-478", brand="STX-478", sponsor="Scorpion / Eli Lilly",
         isoform="mutant-selective allosteric PI3Kα", axis="metabolic_escape", status="active",
         outcome="Mutant-selective allosteric, WT-sparing in models; clinical metabolic sparing is the open item",
         smiles="CC1=C(OC2=C1C=C(C=C2F)F)[C@H](C(F)(F)F)NC(=O)NC3=CN=C(N=C3)N",
         smiles_src="https://pubchem.ncbi.nlm.nih.gov/compound/166532451",
         iso_src="https://aacrjournals.org/cancerdiscovery/article/13/11/2432/729855"),
]

# build fingerprints
mols, fps = [], []
gen = AllChem.GetMorganGenerator(radius=2, fpSize=2048)
for c in COMPOUNDS:
    m = Chem.MolFromSmiles(c["smiles"])
    if m is None:
        raise ValueError(f"SMILES failed to parse: {c['id']}")
    c["heavy_atoms"] = m.GetNumHeavyAtoms()
    c["formula"] = Chem.rdMolDescriptors.CalcMolFormula(m)
    # 3D structure for the molecule viewer
    try:
        m3 = Chem.AddHs(m)
        params = AllChem.ETKDGv3()
        params.randomSeed = 42
        if AllChem.EmbedMolecule(m3, params) == 0:
            try:
                AllChem.MMFFOptimizeMolecule(m3, maxIters=400)
            except Exception:
                pass
            c["mol3d"] = Chem.MolToMolBlock(m3)
        else:
            c["mol3d"] = None
    except Exception:
        c["mol3d"] = None
    # 2D skeletal depiction (publication style, transparent bg)
    try:
        from rdkit.Chem.Draw import rdMolDraw2D
        from rdkit.Chem import rdDepictor
        m2 = Chem.Mol(m)
        rdDepictor.SetPreferCoordGen(True)
        rdDepictor.Compute2DCoords(m2)
        d2 = rdMolDraw2D.MolDraw2DSVG(320, 220)
        o = d2.drawOptions()
        o.clearBackground = False
        o.bondLineWidth = 1.5
        o.padding = 0.12
        o.minFontSize = 13
        o.maxFontSize = 15
        d2.DrawMolecule(m2)
        d2.FinishDrawing()
        svg = d2.GetDrawingText()
        # strip xml header for inline embedding
        svg = svg[svg.find("<svg"):]
        c["svg2d"] = svg
    except Exception as e:
        c["svg2d"] = None
    mols.append(m)
    fps.append(gen.GetFingerprint(m))

n = len(COMPOUNDS)
sim = np.zeros((n, n))
for i in range(n):
    for j in range(n):
        sim[i, j] = DataStructs.TanimotoSimilarity(fps[i], fps[j])

# 2D projection from distance = 1 - similarity
dist = 1.0 - sim
mds = MDS(n_components=2, dissimilarity="precomputed", random_state=42, n_init=8, max_iter=600, normalized_stress="auto")
coords = mds.fit_transform(dist)
# normalize coords to a clean range
coords = coords - coords.mean(axis=0)
span = np.abs(coords).max()
coords = coords / span  # -1..1

# nearest orthosteric/failed neighbor for each live (escape) compound
failed_orthosteric = [i for i, c in enumerate(COMPOUNDS) if c["axis"] in ("immune", "mixed", "metabolic")]
live = [i for i, c in enumerate(COMPOUNDS) if c["axis"] == "metabolic_escape"]
nn = {}
for li in live:
    best = max(failed_orthosteric, key=lambda j: sim[li, j])
    nn[COMPOUNDS[li]["id"]] = dict(neighbor=COMPOUNDS[best]["id"],
                                    neighbor_name=COMPOUNDS[best]["name"],
                                    similarity=round(float(sim[li, best]), 3))

# axis cohesion: mean intra-axis vs inter-axis similarity (excluding self)
def axis_of(i): return COMPOUNDS[i]["axis"]
intra, inter = [], []
for i in range(n):
    for j in range(i+1, n):
        (intra if axis_of(i) == axis_of(j) else inter).append(sim[i, j])
mean_intra = round(float(np.mean(intra)), 3)
mean_inter = round(float(np.mean(inter)), 3)

# attach coords
for i, c in enumerate(COMPOUNDS):
    c["x"] = round(float(coords[i, 0]), 4)
    c["y"] = round(float(coords[i, 1]), 4)

out = dict(
    compounds=COMPOUNDS,
    similarity_matrix=[[round(float(sim[i, j]), 3) for j in range(n)] for i in range(n)],
    ids=[c["id"] for c in COMPOUNDS],
    live_nearest_failed=nn,
    axis_cohesion=dict(mean_intra_axis=mean_intra, mean_inter_axis=mean_inter),
    method=dict(fingerprint="Morgan radius 2, 2048-bit", similarity="Tanimoto",
                projection="metric MDS on (1 - Tanimoto)"),
)
with open("structure_data.json", "w") as f:
    json.dump(out, f, indent=2)

# human-readable summary
print("=== PARSE: all", n, "compounds OK ===")
print("\n=== Tanimoto similarity matrix ===")
ids = [c["id"][:9] for c in COMPOUNDS]
print("           " + " ".join(f"{x:>9}" for x in ids))
for i in range(n):
    print(f"{ids[i]:>9}  " + " ".join(f"{sim[i,j]:>9.2f}" for j in range(n)))
print(f"\nMean intra-axis similarity: {mean_intra}")
print(f"Mean inter-axis similarity: {mean_inter}")
print("\n=== Each live (escape) compound's nearest orthosteric/failed neighbor ===")
for k, v in nn.items():
    print(f"  {k}: closest = {v['neighbor_name']} at Tanimoto {v['similarity']}")
print("\n=== 2D coords ===")
for c in COMPOUNDS:
    print(f"  {c['id']:>11}  ({c['x']:+.3f}, {c['y']:+.3f})  axis={c['axis']}  {c['formula']}")
print("\nWrote structure_data.json")
