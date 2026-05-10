/**
 * Renders docs/client-templates/*.html to PDF via Playwright Chromium.
 * Run: npm run docs:pdf
 * Requires: npx playwright install chromium (once)
 */

import fs from "fs";
import path from "path";
import { fileURLToPath, pathToFileURL } from "url";
import { chromium } from "playwright";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const SRC_DIR = path.join(ROOT, "docs", "client-templates");
const OUT_DIR = path.join(SRC_DIR, "pdf");

async function main() {
  const files = fs
    .readdirSync(SRC_DIR)
    .filter((f) => f.endsWith(".html"))
    .sort();

  if (files.length === 0) {
    console.error("No HTML files in", SRC_DIR);
    process.exit(1);
  }

  fs.mkdirSync(OUT_DIR, { recursive: true });

  const browser = await chromium.launch({ headless: true });
  const ctx = await browser.newContext();
  const page = await ctx.newPage();

  for (const file of files) {
    const htmlPath = path.join(SRC_DIR, file);
    const baseName = path.basename(file, ".html");
    const pdfPath = path.join(OUT_DIR, `${baseName}.pdf`);
    const url = pathToFileURL(htmlPath).href;

    await page.goto(url, { waitUntil: "load" });
    await page.pdf({
      path: pdfPath,
      format: "A4",
      printBackground: true,
      margin: { top: "14mm", bottom: "14mm", left: "14mm", right: "14mm" },
    });
    console.log("Wrote", path.relative(ROOT, pdfPath));
  }

  await browser.close();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
