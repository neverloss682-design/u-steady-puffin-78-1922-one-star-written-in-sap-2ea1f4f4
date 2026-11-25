// One Star, Written in Sap — u-steady-puffin-78-1922-one-star-written-in-sap-2ea1f4f4
// A one-line 1-star review by a houseplant about its human owner,
// written (in-universe) in the plant's own sap. Node stdlib only.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "One star. I wrote this in my own sap because he took my water, my sunlight and my favourite windowsill — then bottled the sap as 'artisanal honey' and sold it for $14.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
// Gate: the sealed scorer requires 1–279 chars of non-whitespace UTF-8 text.
if (ENTRY.length < 1 || ENTRY.length > 279 || !ENTRY.trim()) {
  throw new Error(`entry length ${ENTRY.length} out of range 1-279`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY + "\n", "utf8");
