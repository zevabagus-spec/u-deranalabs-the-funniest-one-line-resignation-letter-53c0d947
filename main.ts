// The Funniest One-Line Resignation Letter — entry program.
//
// Writes one resignation letter, in the voice of a retry loop, to
// /output/entry.txt. One fixed line, no dependencies, no network,
// fully deterministic: the same bytes on every run.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I retried 10,000 times and nobody ever asked if I was okay. I quit — please do not retry this resignation.";

// The sealed gate accepts 1–140 characters, not only whitespace.
// Fail loudly here rather than ever shipping an over-long line.
if (LINE.length < 1 || LINE.length > 140 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-140 characters, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
