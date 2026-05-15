import type { ReactNode } from "react";
import { CTASection } from "@/components/CTASection";
import { FAQAccordion } from "@/components/FAQAccordion";
import type { FAQItem } from "@/config/faq";

type Props = {
  breadcrumbs: ReactNode;
  intro: ReactNode;
  sections: { heading: string; body: ReactNode }[];
  faq?: FAQItem[];
  related: ReactNode;
};

export function ProgrammaticShell({
  breadcrumbs,
  intro,
  sections,
  faq,
  related,
}: Props) {
  return (
    <div className="bg-gradient-to-b from-soft-blue/35 via-white to-white">
      {breadcrumbs}
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">{intro}</div>

      <div className="mx-auto max-w-6xl space-y-14 px-4 pb-16 sm:px-6 lg:px-8">
        {sections.map((section) => (
          <section key={section.heading} className="scroll-mt-28">
            <h2 className="font-heading text-2xl font-semibold tracking-tight text-midnight sm:text-3xl">
              {section.heading}
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-slate">
              {section.body}
            </div>
          </section>
        ))}
      </div>

      {faq?.length ? (
        <section className="border-y border-line/70 bg-snow px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center font-heading text-2xl font-semibold text-midnight sm:text-3xl">
              FAQs
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-center text-sm leading-relaxed text-slate">
              Straight answers—drop specifics into the quote form if yours is not listed.
            </p>
            <div className="mt-10">
              <FAQAccordion items={faq} />
            </div>
          </div>
        </section>
      ) : null}

      <div className="mx-auto grid max-w-6xl gap-10 px-4 pb-16 sm:px-6 lg:grid-cols-[1fr_320px] lg:items-start lg:px-8">
        <CTASection
          title="Tell me what you are launching"
          description="Share your industry, suburbs and timeframe—I will recommend the simplest package or a lean custom scope."
          primaryHref="/contact"
          primaryLabel="Request a Quote"
          secondaryHref="/pricing"
          secondaryLabel="See pricing"
        />
        <div className="lg:pt-2">{related}</div>
      </div>
    </div>
  );
}
