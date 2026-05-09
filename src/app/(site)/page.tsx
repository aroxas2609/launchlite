import { CTASection } from "@/components/CTASection";
import { ContactForm } from "@/components/ContactForm";
import { FAQAccordion } from "@/components/FAQAccordion";
import { HeroSection } from "@/components/HeroSection";
import { PricingCard } from "@/components/PricingCard";
import { ProcessStep } from "@/components/ProcessStep";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { TaglineRibbon } from "@/components/TaglineRibbon";
import { MAIN_TAGLINE } from "@/config/brand";
import { siteFaq } from "@/config/faq";
import { portfolioProjects } from "@/config/portfolio";
import { pricingDisclaimer, pricingTiers } from "@/config/pricing";
import { simpleProcessSteps } from "@/config/process";
import { services } from "@/config/services";

const whyPoints = [
  "Premium look without the premium invoice",
  "Built with modern, reliable tools",
  "Plain-English updates and timelines you can plan around",
  "No fluff or jargon—just what your site actually needs",
  "Mobile-first, so visitors on phones feel looked after too",
  "Straightforward pathways for updates later on",
] as const;

export default function HomePage() {
  const featuredProjects = portfolioProjects.slice(0, 3);

  return (
    <>
      <HeroSection
        title={MAIN_TAGLINE}
        subtitle="LaunchLite Studio builds clean, modern websites for tradies, local businesses, clubs and creators—straightforward scope, realistic timelines, and premium polish without the big-agency invoice."
      />

      <TaglineRibbon />

      <section
        id="services"
        className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
      >
        <SectionHeading
          eyebrow="Services"
          title="Websites for real businesses—not buzzwords."
          description="Choose the shape of site that matches how you work. If you are unsure, pick the closest fit and we will narrow scope together."
        />
        {/* TODO: Edit services anytime in src/config/services.ts */}
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </section>

      <section
        id="work"
        className="relative overflow-hidden border-y border-line/80 bg-gradient-to-b from-soft-blue/55 via-white to-cream/30 px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
      >
        <div className="pointer-events-none absolute inset-x-0 top-24 h-64 bg-dusty-blue/12 blur-[110px]" />
        <div className="relative mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Featured work"
            title="Featured projects"
            description="Three recent builds—each focused on clarity, trust, and a smooth path to enquiry."
          />
          {/* TODO: Replace thumbnails + URLs in src/config/portfolio.ts */}
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section
        id="why"
        className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
      >
        <SectionHeading
          eyebrow="Why LaunchLite"
          title="Boutique help—modern polish, approachable process."
          description="I keep the studio intentionally small so you get attentive communication and a site that earns trust straight away."
        />
        <ul className="mt-12 grid gap-4 rounded-3xl border border-line bg-white/90 p-8 shadow-card sm:p-10">
          {whyPoints.map((point) => (
            <li
              key={point}
              className="flex gap-3 text-sm leading-relaxed text-slate sm:text-[0.9375rem]"
            >
              <span
                className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-soft-blue text-xs font-semibold text-accent"
                aria-hidden
              >
                ✓
              </span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </section>

      <section
        id="process"
        className="border-y border-line/80 bg-snow px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
      >
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Simple process"
            title="Straightforward workflow from kickoff to launch."
            description="Five clear steps—with optional ongoing help if you want it."
          />
          {/* TODO: Edit steps in src/config/process.ts */}
          <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {simpleProcessSteps.map((step) => (
              <ProcessStep
                key={step.step}
                step={step.step}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section
        id="pricing"
        className="relative overflow-hidden bg-gradient-to-br from-soft-blue/55 via-white to-snow px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
      >
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Pricing"
            title="Transparent starting prices."
            description="Three packages that cover common needs. If your scope is different, we will map options before any build starts."
          />
          {/* TODO: Edit pricing in src/config/pricing.ts */}
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {pricingTiers.map((tier) => (
              <PricingCard key={tier.id} tier={tier} />
            ))}
          </div>
          <p className="mt-10 text-center text-sm text-slate">{pricingDisclaimer}</p>
        </div>
      </section>

      <section
        id="faq"
        className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
      >
        <SectionHeading
          align="center"
          eyebrow="FAQ"
          title="Common questions."
          description="Straight answers—if yours is more specific, add it to the contact form."
        />
        <div className="mt-10">
          {/* TODO: FAQ copy lives in src/config/faq.ts */}
          <FAQAccordion items={siteFaq} />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
        <CTASection
          title="Ready to get started?"
          description="Tell me what you sell, who it is for, and your ideal timeframe. I will reply with sensible next steps."
          primaryHref="/contact"
          primaryLabel="Request a Quote"
          secondaryHref="/work"
          secondaryLabel="View work"
        />
      </section>

      <section
        id="quote"
        className="relative border-t border-line/70 bg-gradient-to-b from-white to-cream/40 px-4 py-16 sm:px-6 lg:px-8 lg:pb-24"
      >
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Contact"
              title="Request a quote."
              description="Tell me what you need and I will help work out the simplest, most affordable option."
            />
            <p className="mt-6 text-sm leading-relaxed text-slate">
              Submit the form — I will reply by email. No address published here
              on purpose; your details stay between us and the inquiry.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
