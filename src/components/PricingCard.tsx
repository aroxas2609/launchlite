import type { PricingTier } from "@/config/pricing";
import { ButtonLink } from "@/components/ButtonLink";

type Props = {
  tier: PricingTier;
};

export function PricingCard({ tier }: Props) {
  return (
    <article
      className={`flex h-full flex-col rounded-2xl border bg-white p-6 shadow-card sm:p-8 ${
        tier.highlighted
          ? "border-accent/35 ring-2 ring-accent/20"
          : "border-line"
      }`}
    >
      {tier.highlighted ? (
        <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-accent-strong">
          Most popular
        </p>
      ) : (
        <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-slate/80">
          Package
        </p>
      )}
      <h3 className="mt-3 font-heading text-xl font-semibold text-midnight">
        {tier.name}
      </h3>
      <p className="mt-2 text-3xl font-semibold tracking-tight text-midnight">
        {tier.priceLabel}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-slate">{tier.description}</p>
      <ul className="mt-6 space-y-3 text-sm text-midnight/85">
        {tier.features.map((feature) => (
          <li key={feature} className="flex gap-2">
            <span
              className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-soft-blue text-xs font-semibold text-accent-strong"
              aria-hidden
            >
              ✓
            </span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <ButtonLink href={tier.ctaHref} className="w-full py-3">
          {tier.ctaLabel}
        </ButtonLink>
      </div>
    </article>
  );
}
