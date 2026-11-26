import { mkdirSync, renameSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "Most snacks get stuck in my coil, but you're the one I'd drop everything for.";

// Mirror the gate: UTF-8 text of 1-200 characters, not only white space.
function assertGate(text) {
  const chars = [...text].length;
  if (chars < 1 || chars > 200 || text.trim() === "") {
    throw new Error(`entry fails the gate: ${chars} chars`);
  }
}

assertGate(line);

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const tmp = join(outDir, ".entry.txt.tmp");
writeFileSync(tmp, line, "utf8");
renameSync(tmp, join(outDir, "entry.txt"));
