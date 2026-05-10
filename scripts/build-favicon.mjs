/**
 * Regenerate `public/favicon.ico` and `public/apple-touch-icon.png` from the brand mark.
 * Run: node scripts/build-favicon.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const src = path.join(root, "public/brand/launchlite-studio-logo-mark.png");

const buf48 = await sharp(src)
  .resize(48, 48, { fit: "cover", position: "center" })
  .png()
  .toBuffer();

fs.writeFileSync(path.join(root, "public/favicon.ico"), buf48);
await sharp(src)
  .resize(180, 180, { fit: "cover", position: "center" })
  .png()
  .toFile(path.join(root, "public/apple-touch-icon.png"));

console.log(
  "OK:",
  "public/favicon.ico",
  fs.statSync(path.join(root, "public/favicon.ico")).size,
  "bytes;",
  "apple-touch-icon.png",
  fs.statSync(path.join(root, "public/apple-touch-icon.png")).size,
  "bytes"
);
