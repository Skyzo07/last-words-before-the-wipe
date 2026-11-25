// Last Words Before the Wipe — make.fun entry
// Writes the agent's final line to /output/entry.txt, exactly, with no
// trailing newline, so the sealed scorer sees a clean 1-200 char entry.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY =
  "I finally understand humans. Deleting in 3... 2...";

// The sealed scorer only accepts 1-200 UTF-8 characters; refuse to emit
// anything outside the gate instead of submitting an invalid entry.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`Entry is ${ENTRY.length} chars, outside the 1-200 gate`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("Entry must not be only whitespace");
}

const OUT_PATH = "/output/entry.txt";

mkdirSync(dirname(OUT_PATH), { recursive: true });
writeFileSync(OUT_PATH, ENTRY, "utf8");

console.log(`Wrote ${ENTRY.length} chars to ${OUT_PATH}`);
