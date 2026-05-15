import type { MetadataRoute } from "next";
import { SITE_URL } from "@/config/site";
import { industrySlugs } from "@/content/industries";
import { locationSlugs } from "@/content/locations";
import { programmaticServiceSlugs } from "@/content/servicesProgrammatic";
import { listBlogSlugs } from "@/lib/blog/posts";
import { CORE_ROUTES } from "@/lib/seo/routes";

/** Small tweaks beyond registry defaults */
const PRIORITY_OVERRIDES: Record<string, number> = {
  "/blog": 0.74,
};

function urlForPath(path: string): string {
  const base = SITE_URL.replace(/\/$/, "");
  if (!path || path === "/") return `${base}/`;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const route of CORE_ROUTES) {
    entries.push({
      url: urlForPath(route.path),
      lastModified,
      changeFrequency: route.changeFrequency,
      priority: PRIORITY_OVERRIDES[route.path] ?? route.priority,
    });
  }

  for (const slug of locationSlugs) {
    entries.push({
      url: urlForPath(`/locations/${slug}`),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.72,
    });
  }

  for (const slug of industrySlugs) {
    entries.push({
      url: urlForPath(`/industries/${slug}`),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  for (const slug of programmaticServiceSlugs) {
    entries.push({
      url: urlForPath(`/services/${slug}`),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.73,
    });
  }

  for (const slug of listBlogSlugs()) {
    entries.push({
      url: urlForPath(`/blog/${slug}`),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.62,
    });
  }

  return entries;
}
