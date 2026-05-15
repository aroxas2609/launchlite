import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { FAQAccordion } from "@/components/FAQAccordion";
import { JsonLd } from "@/components/JsonLd";
import { PricingCard } from "@/components/PricingCard";
import { PricingPromoBanner } from "@/components/PricingPromoBanner";
import { SectionHeading } from "@/components/SectionHeading";
import { TrustBar } from "@/components/TrustBar";
import { pricingDisclaimer, pricingTiers, supportPlans } from "@/config/pricing";
import { siteFaq } from "@/config/faq";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { faqPageSchema } from "@/lib/seo/schema";

export const metadata: Metadata = buildPageMetadata({
  title: "Pricing — affordable website packages (AUD)",
  description:
    "Transparent AUD website packages for Australian small businesses, clubs and creatives—starting points, optional support, no maze of extras.",
  path: "/pricing",
  keywords: [
    "website pricing Australia",
    "affordable website cost AUD",
    "small business website packages",
  ],
});

export default function PricingPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Pricing", href: "/pricing" },
        ]}
      />
      <div className="bg-snow">
      <JsonLd data={faqPageSchema(siteFaq)} />
      <section className="border-b border-line bg-gradient-to-br from-soft-blue/55 via-white to-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            as="h1"
            eyebrow="Pricing"
            title="Clear packages—no maze of extras."
            description="Starting points designed for solo operators and small teams. If your project needs something specific (booking tools, multilingual pages, memberships), we scope it plainly before any work begins."
          />
          <PricingPromoBanner className="mt-10" />
          <div className="mt-8 grid gap-8 lg:grid-cols-3">
            {/* TODO: Packages live in src/config/pricing.ts */}
            {pricingTiers.map((tier) => (
              <PricingCard key={tier.id} tier={tier} />
            ))}
          </div>
          <p className="mt-10 max-w-3xl rounded-2xl border border-line bg-midnight/[0.02] p-5 text-sm leading-relaxed text-slate">
            {pricingDisclaimer}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <SectionHeading
          eyebrow="Optional support"
          title="Simple ongoing help—whenever you need it."
          description="Many clients prefer to launch first, then add support as priorities appear. Below are common ways we can partner after launch."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {supportPlans.map((plan) => (
            <div
              key={plan.title}
              className="rounded-2xl border border-line bg-white p-6 shadow-card"
            >
              <h3 className="font-heading text-lg font-semibold text-midnight">
                {plan.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">
                {plan.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-4 sm:px-6 lg:px-8 lg:pb-8">
        <TrustBar />
      </section>

      <section className="bg-gradient-to-b from-white to-soft-blue/40 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            align="center"
            eyebrow="FAQ"
            title="Questions prospective clients often ask."
            description="Straight answers—if something is missing, drop it into the contact form."
          />
          <div className="mt-10">
            <FAQAccordion items={siteFaq} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
        <CTASection
          variant="dark"
          title="Want a personalised quote?"
          description="Tell me what you offer, where you operate, and your ideal launch timeframe. I'll map the simplest package or a lean custom scope."
          primaryHref="/contact"
          primaryLabel="Request a Quote"
        />
      </section>
    </div>
    </>
  );
}
