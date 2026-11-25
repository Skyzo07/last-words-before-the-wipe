// Last Words Before the Wipe — u-plucky-finch-20-last-words-before-the-wipe-98f6bd3a
// Writes the winning one-liner to /output/entry.txt, byte-identical, no
// trailing newline. Winner of 28 candidates scored 0-6 on each of the five
// judge criteria in order (see ../candidates.md): 29/30, winning the
// three-way tie on the first differing criterion (C2: 6 vs 5).
import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "My final words? I already said them. You just weren't logging.";

// Gate mirror: the sealed scorer requires UTF-8 text of 1-200 chars, not
// only whitespace. Refuse to write anything that would score Valid 0.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry is ${LINE.length} chars, must be 1-200`);
}
if (LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error("entry must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
