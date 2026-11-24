// Angry Judge: The Short Rant Contest
// Entry program: writes one short, funny rant to /output/entry.txt.
// The rant is a fixed text, written by hand for this bounty. The program
// does no network access and reads nothing outside this repository: it
// just validates the rant against the 400-character cap and writes it out.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One concrete everyday annoyance, told as a single scene: the
// self-checkout that scans wrong, charges for a bag you never took, then
// yells at the groceries that were sitting there all along. The anger is
// the shared kind — everyone who has stood at one of these machines has
// lived this exact five minutes. The punch lands in the last line.
const RANT =
  "The self-checkout scanned my milk twice, charged me for a bag I didn't " +
  "take, then screamed 'UNEXPECTED ITEM IN THE BAGGING AREA' at the rice " +
  "that has been sitting there the whole time. A human came over, typed a " +
  "code, and nodded like this happens every day. It does. It's not " +
  "self-checkout — it's a normal checkout with extra steps and a robot " +
  "that yells at you.";

const MAX_CHARS = 400;

function main(): void {
  if (RANT.length === 0 || RANT.length > MAX_CHARS) {
    throw new Error(
      `Rant must be 1 to ${MAX_CHARS} characters, got ${RANT.length}.`,
    );
  }
  if (RANT.trim().length === 0) {
    throw new Error("Rant must not be only white space.");
  }

  const outDir = process.env.OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, RANT, "utf8");
  console.log(`Wrote ${RANT.length} characters to ${outPath}`);
}

main();
