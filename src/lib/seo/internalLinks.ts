import { industries } from "@/content/industries";
import { locations } from "@/content/locations";
import { programmaticServices } from "@/content/servicesProgrammatic";

export type RelatedLink = { href: string; label: string };

function locationHref(slug: string) {
  return `/locations/${slug}`;
}

function industryHref(slug: string) {
  return `/industries/${slug}`;
}

function serviceHref(slug: string) {
  return `/services/${slug}`;
}

function titleCaseSlug(slug: string) {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function labelLocation(slug: string) {
  return locations.find((l) => l.slug === slug)?.h1 ?? titleCaseSlug(slug);
}

function labelIndustry(slug: string) {
  return industries.find((i) => i.slug === slug)?.h1 ?? slug;
}

function labelService(slug: string) {
  return programmaticServices.find((s) => s.slug === slug)?.h1 ?? slug;
}

export function relatedLinksForLocation(slug: string): RelatedLink[] {
  const loc = locations.find((l) => l.slug === slug);
  if (!loc) return [];
  const out: RelatedLink[] = [];
  for (const s of loc.relatedLocationSlugs) {
    out.push({ href: locationHref(s), label: labelLocation(s) });
  }
  for (const s of loc.relatedIndustrySlugs) {
    out.push({ href: industryHref(s), label: labelIndustry(s) });
  }
  for (const s of loc.relatedServiceSlugs) {
    out.push({ href: serviceHref(s), label: labelService(s) });
  }
  out.push({ href: "/pricing", label: "Pricing" }, { href: "/contact", label: "Contact" });
  return dedupe(out);
}

export function relatedLinksForIndustry(slug: string): RelatedLink[] {
  const row = industries.find((i) => i.slug === slug);
  if (!row) return [];
  const out: RelatedLink[] = [];
  for (const s of row.relatedIndustrySlugs) {
    out.push({ href: industryHref(s), label: labelIndustry(s) });
  }
  for (const s of row.relatedServiceSlugs) {
    out.push({ href: serviceHref(s), label: labelService(s) });
  }
  for (const s of row.relatedLocationSlugs) {
    out.push({ href: locationHref(s), label: labelLocation(s) });
  }
  out.push({ href: "/work", label: "Portfolio" }, { href: "/contact", label: "Request a quote" });
  return dedupe(out);
}

export function relatedLinksForProgrammaticService(slug: string): RelatedLink[] {
  const row = programmaticServices.find((s) => s.slug === slug);
  if (!row) return [];
  const out: RelatedLink[] = [];
  for (const s of row.relatedServiceSlugs) {
    out.push({ href: serviceHref(s), label: labelService(s) });
  }
  for (const s of row.relatedIndustrySlugs) {
    out.push({ href: industryHref(s), label: labelIndustry(s) });
  }
  for (const s of row.relatedLocationSlugs) {
    out.push({ href: locationHref(s), label: labelLocation(s) });
  }
  out.push({ href: "/process", label: "Process" }, { href: "/pricing", label: "Pricing" });
  return dedupe(out);
}

/** Footer exploration cluster — strengthens topical internal linking without navbar churn */
export function exploreFooterLinks(): RelatedLink[] {
  return [
    { href: "/blog", label: "Insights" },
    { href: "/locations/sydney", label: "Sydney" },
    { href: "/locations/western-sydney", label: "Western Sydney" },
    { href: "/locations/liverpool", label: "Liverpool" },
    { href: "/industries/tradies", label: "Tradie websites" },
    { href: "/services/business-websites", label: "Business websites" },
    { href: "/services/landing-pages", label: "Landing pages" },
  ];
}

/** Editorial → commercial pillar links shown alongside related articles */
export function relatedLinksForBlog(): RelatedLink[] {
  return [
    { href: "/services/business-websites", label: "Business websites" },
    { href: "/services/tradie-websites", label: "Tradie websites" },
    { href: "/industries/photographers", label: "Photographer websites" },
    { href: "/locations/western-sydney", label: "Western Sydney" },
    { href: "/pricing", label: "Pricing" },
  ];
}

function dedupe(links: RelatedLink[]): RelatedLink[] {
  const seen = new Set<string>();
  const out: RelatedLink[] = [];
  for (const l of links) {
    if (seen.has(l.href)) continue;
    seen.add(l.href);
    out.push(l);
  }
  return out;
}
