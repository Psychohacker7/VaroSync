"""Pull real FAERS post-market adverse-event signals (openFDA) for the marketed
PI3K class compounds, classify each reaction by toxicity axis vs generic background."""
import json, urllib.request, urllib.parse, time

MARKETED = [
    ("idelalisib", "Idelalisib", "immune"),
    ("duvelisib",  "Duvelisib",  "immune"),
    ("umbralisib", "Umbralisib", "immune"),
    ("copanlisib", "Copanlisib", "immune"),
    ("alpelisib",  "Alpelisib",  "metabolic"),
    ("inavolisib", "Inavolisib", "metabolic"),
]

def classify(term):
    t = term.upper()
    if any(k in t for k in ["GLUCOSE", "GLYCAEM", "GLYCEM", "DIABET", "KETOACID", "HYPERGLYC", "HYPOGLYC"]):
        return "metabolic"
    if any(k in t for k in ["COLITIS", "DIARRH", "PNEUMON", "ENTEROCOL", "HEPAT", "TRANSAMINAS",
                            "ALT", "AST INCREAS", "LIVER", "INFECT", "SEPSIS", "PYREXIA", "RASH",
                            "DERMAT", "STOMATITIS", "MUCOSAL", "MUCOSITIS", "NEUTROPEN", "FEBRILE",
                            "CUTANEOUS", "PRURITUS"]):
        return "immune"
    return "background"

def fetch(generic):
    base = "https://api.fda.gov/drug/event.json"
    q = f'patient.drug.openfda.generic_name:"{generic}"'
    # top reactions
    url = f"{base}?search={urllib.parse.quote(q)}&count=patient.reaction.reactionmeddrapt.exact"
    try:
        with urllib.request.urlopen(url, timeout=25) as r:
            data = json.load(r)
        reactions = data.get("results", [])
    except Exception as e:
        reactions = []
    # total report count
    total = 0
    try:
        url2 = f"{base}?search={urllib.parse.quote(q)}&limit=1"
        with urllib.request.urlopen(url2, timeout=25) as r:
            total = json.load(r).get("meta", {}).get("results", {}).get("total", 0)
    except Exception:
        pass
    return reactions, total

out = []
for gen, name, axis in MARKETED:
    reactions, total = fetch(gen)
    rows = [{"term": r["term"].title(), "count": r["count"], "axis": classify(r["term"])} for r in reactions[:18]]
    out.append({"id": gen, "name": name, "predicted_axis": axis, "total_reports": total, "reactions": rows})
    print(f"{name:12} total={total:>7}  top: " + ", ".join(f"{r['term']}({r['count']},{r['axis'][:3]})" for r in rows[:4]))
    time.sleep(0.4)

json.dump(out, open("faers_data.json", "w"), indent=2)
print("\nwrote faers_data.json")
