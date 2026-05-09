/**
 * Captures desktop screenshots of live portfolio sites into public/images/.
 * Run: npm run screenshots
 *
 * Requires: npm install (playwright) && npx playwright install chromium
 */

import { chromium } from "playwright";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.join(__dirname, "..", "public", "images");

/** Keep in sync with src/config/portfolio.ts (slug + liveUrl). */
const CAPTURES = [
  { slug: "prestons-run-club", url: "https://prestonsrun.club" },
  {
    slug: "johnstone-fencing",
    url: "https://johnstonecivil.vercel.app",
  },
  { slug: "apex-studios", url: "https://apexstudios-au.vercel.app" },
];

async function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true });

  const browser = await chromium.launch({
    headless: true,
  });
  const ctx = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 1,
  });
  const page = await ctx.newPage();

  for (const { slug, url } of CAPTURES) {
    const outFile = path.join(OUT_DIR, `${slug}.png`);
    process.stdout.write(`Capturing ${slug} (${url})…\n`);

    try {
      await page.goto(url, {
        waitUntil: "load",
        timeout: 90000,
      });
      // Fonts, hero images, lazy content
      await new Promise((r) => setTimeout(r, 3000));
      await page.screenshot({
        path: outFile,
        type: "png",
        fullPage: false,
      });
      process.stdout.write(`  → ${path.relative(process.cwd(), outFile)}\n`);
    } catch (err) {
      process.stderr.write(`  ✗ Failed: ${err?.message ?? err}\n`);
      process.exitCode = 1;
    }
  }

  await browser.close();
}

main().catch((e) => {
  process.stderr.write(String(e) + "\n");
  process.exit(1);
});
