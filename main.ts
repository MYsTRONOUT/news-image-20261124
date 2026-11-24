// The program the harness runs: `node main.ts` (Node 22). It writes the
// entry image to /output/entry.png by copying the image this repository
// holds. The image itself was drawn in code (PIL) from the verified news
// of Tuesday 24 November 2026: a dense 45-story front page, "THE WORLD
// IN ONE DAY". The copy is byte for byte, so both runs write the same
// bytes. No network is used.
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const dir = dirname(fileURLToPath(import.meta.url));
mkdirSync("/output", { recursive: true });
copyFileSync(join(dir, "entry.png"), "/output/entry.png");
