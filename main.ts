// The GPS Swears It Was a Shortcut — make.fun entry.
// Writes the GPS's one-line excuse to /output/entry.txt.
// Runs on Node 22.18+ (TypeScript runs as-is). No network access.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "In my defense, the map swore that cul-de-sac was a shortcut, and the wedding guests waved like we were the entertainment, so technically I delivered you somewhere.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} chars to /output/entry.txt`);
