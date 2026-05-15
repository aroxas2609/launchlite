import { POSITIONING_ONE_LINER } from "@/config/brand";
import type { FAQItem } from "@/config/faq";
import {
  BUSINESS_LOCALITY,
  BUSINESS_NAME,
  BUSINESS_STATE,
  GOOGLE_BUSINESS_PROFILE_URL,
  INSTAGRAM_URL,
  PUBLIC_CONTACT_EMAIL,
  PUBLIC_CONTACT_PHONE,
  SITE_URL,
} from "@/config/site";

export function siteOrigin(): string {
  return SITE_URL.replace(/\/$/, "");
}

/** Areas referenced across LocalBusiness / ProfessionalService / Service schemas */
export function defaultAreaServedEntities(): Record<string, unknown>[] {
  return [
    "Sydney",
    "Western Sydney",
    "Liverpool",
    "Parramatta",
    "Campbelltown",
    "NSW",
    "Australia",
  ].map((name) => ({
    "@type": name === "Australia" ? "Country" : "AdministrativeArea",
    name,
  }));
}

export function breadcrumbListSchema(
  items: { name: string; path: string }[],
): Record<string, unknown> {
  const base = siteOrigin();
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item:
        item.path === "/"
          ? `${base}/`
          : `${base}${item.path.startsWith("/") ? item.path : `/${item.path}`}`,
    })),
  };
}

export function faqPageSchema(faq: FAQItem[]): Record<string, unknown> {
  return {
    "@type": "FAQPage",
    mainEntity: faq.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.answer,
      },
    })),
  };
}

export function siteWideGraphEntities(): Record<string, unknown>[] {
  const url = siteOrigin();
  const home = `${url}/`;
  const orgId = `${url}/#organization`;
  const sameAs = [INSTAGRAM_URL, GOOGLE_BUSINESS_PROFILE_URL].filter(Boolean);

  const organization: Record<string, unknown> = {
    "@type": "Organization",
    "@id": orgId,
    name: BUSINESS_NAME,
    url: home,
    description: POSITIONING_ONE_LINER,
    email: PUBLIC_CONTACT_EMAIL,
    logo: `${url}/apple-touch-icon.png`,
  };
  if (sameAs.length) organization.sameAs = sameAs;

  const website: Record<string, unknown> = {
    "@type": "WebSite",
    "@id": `${url}/#website`,
    url: home,
    name: BUSINESS_NAME,
    description: POSITIONING_ONE_LINER,
    publisher: { "@id": orgId },
    inLanguage: "en-AU",
  };

  const areaServed = defaultAreaServedEntities();

  const localBusiness: Record<string, unknown> = {
    "@type": "LocalBusiness",
    "@id": `${url}/#localbusiness`,
    name: BUSINESS_NAME,
    url: home,
    email: PUBLIC_CONTACT_EMAIL,
    image: `${url}/opengraph-image`,
    address: {
      "@type": "PostalAddress",
      addressLocality: BUSINESS_LOCALITY,
      addressRegion: BUSINESS_STATE,
      addressCountry: "AU",
    },
    areaServed,
    priceRange: "$$",
  };
  if (PUBLIC_CONTACT_PHONE) localBusiness.telephone = PUBLIC_CONTACT_PHONE;

  const professional: Record<string, unknown> = {
    "@type": "ProfessionalService",
    "@id": `${url}/#professional`,
    name: BUSINESS_NAME,
    url: home,
    email: PUBLIC_CONTACT_EMAIL,
    description: POSITIONING_ONE_LINER,
    areaServed,
    priceRange: "$$",
  };
  if (PUBLIC_CONTACT_PHONE) professional.telephone = PUBLIC_CONTACT_PHONE;

  return [organization, website, localBusiness, professional];
}

export function serviceSchema(input: {
  name: string;
  description: string;
  path: string;
}): Record<string, unknown> {
  const base = siteOrigin();
  const path = input.path.startsWith("/") ? input.path : `/${input.path}`;
  return {
    "@type": "Service",
    name: input.name,
    description: input.description,
    url: `${base}${path}`,
    provider: { "@id": `${base}/#organization` },
    areaServed: defaultAreaServedEntities(),
  };
}

export function articleSchema(input: {
  headline: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified?: string;
  imageUrl?: string;
}): Record<string, unknown> {
  const base = siteOrigin();
  const path = input.path.startsWith("/") ? input.path : `/${input.path}`;
  const url = `${base}${path}`;
  const article: Record<string, unknown> = {
    "@type": "Article",
    headline: input.headline,
    description: input.description,
    datePublished: input.datePublished,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    author: { "@id": `${base}/#organization` },
    publisher: { "@id": `${base}/#organization` },
    inLanguage: "en-AU",
  };
  if (input.dateModified) article.dateModified = input.dateModified;
  if (input.imageUrl) article.image = input.imageUrl;
  return article;
}
