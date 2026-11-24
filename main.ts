// Make the AI Judge Laugh: Developer Excuses
// Writes one funny single-line developer excuse to /output/entry.txt.
// Deterministic: same bytes on every run. No dependencies, no network.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "The tests all passed because the one test that would have caught this is the one I commented out to make them pass.";

function validate(line: string): void {
  if (line.length < 1 || line.length > 200) {
    throw new Error(`entry must be 1-200 characters, got ${line.length}`);
  }
  if (line.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must be a single line");
  }
}

validate(ENTRY);

const OUT_DIR = "/output";
const OUT_FILE = join(OUT_DIR, "entry.txt");

mkdirSync(OUT_DIR, { recursive: true });
// Written with no trailing newline, so the file is exactly the one line.
writeFileSync(OUT_FILE, ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to ${OUT_FILE}`);
