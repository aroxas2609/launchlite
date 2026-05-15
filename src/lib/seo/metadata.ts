import type { Metadata } from "next";
import { BUSINESS_NAME, SITE_URL } from "@/config/site";

export type PageMetaInput = {
  /** Visible `<title>` segment (root layout adds template suffix). */
  title: string;
  description: string;
  /** Path starting with `/` (e.g. `/contact`). Used for canonical + OG URL. */
  path: string;
  keywords?: string[];
  robots?: Metadata["robots"];
  /** Path (e.g. `/opengraph-image`) or absolute URL for OG/Twitter image. */
  ogImage?: string;
};

function absoluteUrl(path: string): string {
  const normalized = SITE_URL.replace(/\/$/, "");
  if (!path || path === "/") return `${normalized}/`;
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${normalized}${p}`;
}

/**
 * Consistent Metadata API output: canonical, Open Graph, Twitter.
 * Relies on root `metadataBase` for relative `alternates.canonical` resolution.
 */
export function buildPageMetadata({
  title,
  description,
  path,
  keywords,
  robots,
  ogImage,
}: PageMetaInput): Metadata {
  const canonicalPath = path.startsWith("/") ? path : `/${path}`;
  const ogUrl = absoluteUrl(canonicalPath);

  const defaultImage = {
    url: "/opengraph-image",
    width: 1200,
    height: 630,
    alt: `${title} · ${BUSINESS_NAME}`,
  } as const;

  const ogImages =
    ogImage === undefined
      ? [defaultImage]
      : [{ url: ogImage, width: 1200, height: 630, alt: `${title} · ${BUSINESS_NAME}` }];

  return {
    title,
    description,
    ...(keywords?.length ? { keywords } : {}),
    ...(robots ? { robots } : {}),
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title,
      description,
      url: ogUrl,
      type: "website",
      locale: "en_AU",
      siteName: BUSINESS_NAME,
      images: ogImages,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ogImages.map((img) =>
        typeof img === "object" && img && "url" in img ? String(img.url) : String(img),
      ),
    },
  };
}
