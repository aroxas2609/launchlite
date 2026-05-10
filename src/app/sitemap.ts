import type { MetadataRoute } from "next";
import { NAV_LINKS, SITE_URL } from "@/config/site";

/** Priority / cadence tuned for a small marketing site (Google uses hints loosely). */
const PRIORITY: Record<string, number> = {
  "/": 1,
  "/work": 0.85,
  "/pricing": 0.85,
  "/process": 0.8,
  "/contact": 0.75,
};

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_URL.replace(/\/$/, "");

  return NAV_LINKS.map(({ href }) => ({
    url: `${base}${href === "/" ? "" : href}`,
    lastModified: new Date(),
    changeFrequency: href === "/" ? "weekly" : "monthly",
    priority: PRIORITY[href] ?? 0.7,
  }));
}
