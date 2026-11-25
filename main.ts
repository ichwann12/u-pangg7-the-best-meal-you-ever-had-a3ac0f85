import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(fileURLToPath(import.meta.url));
const entry = readFileSync(join(root, "entry.txt"), "utf8").replace(/\r?\n$/, "");

if (entry.length === 0) {
  throw new Error("entry.txt is empty");
}

const outputDir =
  process.env.MAKEFUN_OUTPUT_DIR ??
  process.env.MAKEFUN_BOT_DIR ??
  join(root, "output");

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "output.txt"), `${entry}\n`);
