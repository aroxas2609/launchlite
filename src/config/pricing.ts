/**
 * ---------------------------------------------------------------------------
 * PRICING — edit tiers, prices & bullet lists here (single source of truth)
 * ---------------------------------------------------------------------------
 * Amounts are Australian dollars (AUD). TODO: adjust tiers as packages change.
 */

/** Toggle off to remove promo UI & disclaimer line; restore each tier's priceLabel and omit priceWasLabel */
export const pricingPromotion = {
  active: true,
  discountAud: 300,
  badge: "$300 off each package",
} as const;

export type PricingTier = {
  id: string;
  name: string;
  priceLabel: string;
  /** When set while `pricingPromotion.active`, shown struck-through above `priceLabel` */
  priceWasLabel?: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  ctaLabel: string;
  ctaHref: string;
};

const pricingDisclaimerBase =
  "All amounts are in Australian dollars (AUD). Prices are starting points and may vary depending on features, content and integrations.";

export const pricingDisclaimer = pricingPromotion.active
  ? `Limited-time offer: $${pricingPromotion.discountAud} off each package. ${pricingDisclaimerBase}`
  : pricingDisclaimerBase;

export const pricingTiers: PricingTier[] = [
  {
    id: "starter",
    name: "Starter Website",
    priceWasLabel: "From $599",
    priceLabel: "From $299",
    description: "Best for one-page websites.",
    features: [
      "1 page website",
      "Mobile responsive design",
      "Basic SEO setup",
      "Contact section",
      "Social links",
      "Deployment support",
    ],
    ctaLabel: "Request a Quote",
    ctaHref: "/contact",
  },
  {
    id: "business",
    name: "Business Website",
    priceWasLabel: "From $999",
    priceLabel: "From $699",
    description: "Best for small businesses that need multiple pages.",
    features: [
      "Up to 5 pages",
      "Mobile responsive design",
      "Basic SEO setup",
      "Contact form",
      "Services section",
      "Portfolio/gallery section",
      "Google Business profile link",
      "Deployment support",
    ],
    highlighted: true,
    ctaLabel: "Request a Quote",
    ctaHref: "/contact",
  },
  {
    id: "premium",
    name: "Premium Website",
    priceWasLabel: "From $1,699",
    priceLabel: "From $1,399",
    description:
      "Best for polished custom websites with more sections and stronger branding.",
    features: [
      "Up to 8 pages",
      "Premium custom design",
      "Advanced sections",
      "Gallery/portfolio",
      "Blog or updates section",
      "Booking/enquiry form",
      "SEO foundation",
      "Deployment support",
    ],
    ctaLabel: "Request a Quote",
    ctaHref: "/contact",
  },
];

export type SupportPlan = {
  title: string;
  description: string;
};

/** Optional ongoing help — keep this simple; expand later if you productise it */
export const supportPlans: SupportPlan[] = [
  {
    title: "Website updates",
    description: "Small improvements, section tweaks, and keeping the site feeling current.",
  },
  {
    title: "Content changes",
    description: "Text refreshes, new images, and seasonal updates without rebuilding everything.",
  },
  {
    title: "New pages",
    description: "Add a services page, a landing page, or an extra section as you grow.",
  },
  {
    title: "Basic maintenance",
    description: "Light checks and fixes so you are not stuck troubleshooting alone.",
  },
];
