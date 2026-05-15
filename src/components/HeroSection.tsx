import { BrandPreview } from "@/components/BrandPreview";
import { ButtonLink } from "@/components/ButtonLink";
import { HERO_EYEBROW } from "@/config/brand";

type Props = {
  title: string;
  subtitle: string;
};

export function HeroSection({ title, subtitle }: Props) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-snow via-soft-blue/35 to-white">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden
      >
        <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-accent-muted blur-3xl" />
        <div className="absolute left-1/2 top-[20%] h-[460px] w-[460px] -translate-x-1/3 rounded-full bg-dusty-blue/25 blur-[100px]" />
        <div className="absolute -right-28 top-[10%] h-80 w-80 rounded-full bg-accent/15 blur-3xl" />
      </div>

      {/* Mobile: headline → previews → rest. Desktop: text column | preview */}
      <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-12 sm:px-6 lg:px-8 lg:pb-24 lg:pt-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:grid-rows-[auto_auto] lg:items-center lg:gap-x-10 lg:gap-y-0">
          {/* Lead line + headline */}
          <div className="order-1 lg:order-none lg:row-start-1 lg:col-start-1">
            <div className="rounded-2xl border border-line/80 bg-white/55 pl-5 pr-5 py-5 shadow-sm shadow-midnight/[0.04] backdrop-blur-sm sm:pl-6 sm:pr-7 sm:py-6 lg:border-l-[3px] lg:border-l-accent/35 lg:bg-white/65">
              <p className="max-w-xl text-sm font-medium leading-snug text-accent-strong">
                {HERO_EYEBROW}
              </p>
              <h1 className="mt-4 font-heading text-4xl font-semibold leading-[1.08] tracking-tight text-midnight sm:text-5xl lg:text-[3.05rem]">
                {title}
              </h1>
            </div>
          </div>

          {/* Floating cards — higher on mobile so proof appears above the fold */}
          <div className="order-2 lg:order-none lg:row-span-2 lg:row-start-1 lg:col-start-2 lg:self-center">
            <BrandPreview />
          </div>

          {/* Subcopy + CTAs */}
          <div className="order-3 lg:order-none lg:row-start-2 lg:col-start-1">
            <p className="max-w-xl text-lg leading-relaxed text-slate sm:text-xl">
              {subtitle}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <ButtonLink href="/work" analyticsId="hero_view_work" className="px-8 py-3.5 text-base">
                View My Work
              </ButtonLink>
              <ButtonLink
                href="/contact"
                variant="secondary"
                analyticsId="hero_get_quote"
                className="px-8 py-3.5 text-base"
              >
                Get a Quote
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
