import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { BUSINESS_NAME, SITE_URL } from "@/config/site";

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

/** TODO (SEO): keep in sync when you change tagline or positioning */
const pageTitle = `${BUSINESS_NAME} | Affordable Websites for Small Businesses`;
const pageDescription =
  "Australia-based boutique studio: affordable, professional websites for small businesses, tradies, local clubs, photographers and community groups. Pricing in AUD.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
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
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
  },
  icons: {
    icon: "/brand/logo-icon.svg",
    apple: "/brand/launchlite-studio-logo-mark.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${soraDisplay.variable} ${interBody.variable} h-full scroll-smooth`}
    >
      <body className="flex min-h-dvh flex-col bg-snow text-midnight antialiased">
        {children}
      </body>
    </html>
  );
}
