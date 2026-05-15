import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { ProcessStep } from "@/components/ProcessStep";
import { SectionHeading } from "@/components/SectionHeading";
import { processPhases } from "@/config/process";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Our process — discovery to launch",
  description:
    "Plain-English web design process: discovery, structure, build, review and launch—with clear checkpoints and realistic timelines.",
  path: "/process",
  keywords: [
    "website design process",
    "small business website timeline",
    "web design workflow Australia",
  ],
});

export default function ProcessPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Process", href: "/process" },
        ]}
      />
      <div className="bg-gradient-to-b from-soft-blue/30 via-white to-white">
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <SectionHeading
          as="h1"
          eyebrow="Process"
          title="A calm workflow—with clear checkpoints."
          description="You stay informed at every stage: what I need from you, what I am building, and when you will preview it. No surprise phases, no secret technical debt."
        />
      </section>

      <section className="mx-auto max-w-3xl px-4 pb-20 sm:px-6 lg:px-8">
        {/* TODO: Update copy anytime in src/config/process.ts */}
        <ol className="relative space-y-10 border-l border-charcoal/10 pl-8">
          {processPhases.map((phase, index) => (
            <li key={phase.title} className="relative scroll-mt-28">
              <span
                className="absolute -left-[39px] top-1 flex h-8 w-8 items-center justify-center rounded-full border border-white bg-accent text-xs font-bold text-white shadow-soft"
                aria-hidden
              >
                {index + 1}
              </span>
              <ProcessStep
                step=""
                title={phase.title}
                description={phase.description}
                variant="timelineBody"
              />
            </li>
          ))}
        </ol>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6 lg:px-8">
        <CTASection
          title="Sound like what you needed?"
          description="Tell me about your timeline and content readiness—I will propose the quickest route to launch."
          primaryHref="/contact"
          primaryLabel="Book a discovery chat"
          secondaryHref="/pricing"
          secondaryLabel="Browse pricing snapshots"
        />
      </section>
    </div>
    </>
  );
}
