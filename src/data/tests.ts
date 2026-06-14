export interface PathologicalTest {
  name: string;
  price: string;
}

export const PATHOLOGICAL_TESTS: PathologicalTest[] = [
  { name: "TC, DC, HB% ESR, SGPT / Alkaline Phosphatase / Urine", price: "400" },
  { name: "Calcium Urinary (Potassium, Sodium, Chloride) / Bilirubin D/I", price: "450" },
  { name: "CEA / CA-19.9 / CA-125 / CA-15.3 / AFP / PSA / Free PSA / B-HCG", price: "1400" },
  { name: "LFT / Aldolase / FDP / MACR / Electrolytes", price: "1000" },
  { name: "BT / CT / Blood Group / HB% / ESR", price: "200" },
  { name: "Lipid Profile / Lactate / Lipase / CPK / Fluid for ADA", price: "1200" },
  { name: "Amylase / Magnesium / Ammonia / Lithium / STP AG / eGFR", price: "1200" },
  { name: "GFR / Aldolose / Osmolality / Copper / Ceruloplajmin", price: "1200" },
  { name: "Ferritin", price: "1300" },
  { name: "Anti HBs / HBeAg / HCV / HEV IgM / HAV IgM", price: "1400" },
  { name: "T3 / T4 / TSH / Bence-Jones Protein / P-Time", price: "800" },
  { name: "HbA1C / ACTH / Prolactin / Testosterone / Cortisol / Insulin", price: "1400/1200" },
  { name: "Vitamin-D / AMH / TRAb / Protein-C / Protein-S", price: "3500" },
  { name: "HB Electrophoresis / Protein Electrophoresis", price: "1600" },
  { name: "CBC / CE / Film / Creatinine / ESR", price: "400" },
  { name: "ICT for Dengue IgG & IgM / Dengue Ns1 Ag", price: "300" },
  { name: "Urine R/E / Stool OBT", price: "400" },
  { name: "Urine for Pregnancy / Platelets", price: "300" },
  { name: "FBS / ABF / RBS / PPBS / Blood Sugar", price: "200" },
  { name: "Allergy Profile / Gene Xpert (Mtb)", price: "6000" },
  { name: "COVID-19 Rapid Antigen", price: "500" },
  { name: "COVID-19 RT-PCR", price: "3500" },
  { name: "HCV RNA (Quantitative)", price: "12000" },
  { name: "FNAC", price: "1200" },
];
