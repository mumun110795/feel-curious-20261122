import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "In the secondhand shop, Mara found a cookbook from 1962 with her own handwriting in the margins. Not like hers. Hers. The notes argued with the recipes, in ink dry for sixty years. The last one, under a dish she has never cooked, says only: 'Not yet. You'll know when.'";

const outDir = process.env.OUT ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
