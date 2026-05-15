import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { Analytics } from "@/components/Analytics";
import { JsonLd } from "@/components/JsonLd";
import { BUSINESS_NAME, SITE_URL } from "@/config/site";
import { siteWideGraphEntities } from "@/lib/seo/schema";

const soraDisplay = Sora({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const interBody = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const pageTitle = `${BUSINESS_NAME} | Affordable Websites for Small Businesses`;
const pageDescription =
  "Australia-based web studio for affordable business websites: tradies, gyms, clubs, photographers & local services. Clear AUD pricing, mobile-first builds, SEO-ready foundations.";

const googleSiteVerification =
  process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION?.trim() ?? "";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  verification: {
    ...(googleSiteVerification ? { google: googleSiteVerification } : {}),
    other: {
      "facebook-domain-verification": "zd6i4v2414j2obtxtubb1il3z2ejan",
    },
  },
  title: {
    default: pageTitle,
    template: `%s · ${BUSINESS_NAME}`,
  },
  description: pageDescription,
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: SITE_URL,
    siteName: BUSINESS_NAME,
    title: pageTitle,
    description: pageDescription,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${BUSINESS_NAME} — affordable Australian small business websites`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/opengraph-image"],
  },
  /** Static files in /public — avoid `app/icon.png` (Next overwrites /favicon.ico with an auto-ICO). */
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-AU"
      data-scroll-behavior="smooth"
      className={`${soraDisplay.variable} ${interBody.variable} h-full scroll-smooth`}
    >
      <body className="flex min-h-dvh flex-col bg-snow text-midnight antialiased">
        <Analytics />
        <JsonLd data={siteWideGraphEntities()} />
        {children}
      </body>
    </html>
  );
}
