/**
 * Single source of truth for crawlable paths (keep in sync with `src/app/(site)` routes).
 */

export type StaticRouteEntry = {
  path: string;
  /** Sitemap priority hint */
  priority: number;
  changeFrequency: "weekly" | "monthly" | "yearly";
};

/** Core marketing pages (programmatic paths merged in `sitemap.ts`). */
export const CORE_ROUTES: StaticRouteEntry[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/work", priority: 0.85, changeFrequency: "monthly" },
  { path: "/pricing", priority: 0.85, changeFrequency: "monthly" },
  { path: "/process", priority: 0.8, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.75, changeFrequency: "monthly" },
  { path: "/privacy", priority: 0.35, changeFrequency: "yearly" },
  { path: "/blog", priority: 0.75, changeFrequency: "weekly" },
];
