import { pricingPromotion, type PricingTier } from "@/config/pricing";
import { ButtonLink } from "@/components/ButtonLink";

type Props = {
  tier: PricingTier;
};

export function PricingCard({ tier }: Props) {
  const showPromoPrice =
    pricingPromotion.active && tier.priceWasLabel !== undefined;

  return (
    <article
      className={`flex h-full flex-col rounded-2xl border bg-white p-6 shadow-card sm:p-8 ${
        tier.highlighted
          ? "border-accent/35 ring-2 ring-accent/20"
          : "border-line"
      }`}
    >
      <div className="flex items-center justify-between gap-3">
        {tier.highlighted ? (
          <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-accent-strong">
            Most popular
          </p>
        ) : (
          <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-slate/80">
            Package
          </p>
        )}
        {showPromoPrice ? (
          <span className="inline-flex items-center rounded-full bg-accent/10 px-2.5 py-1 text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-accent-strong">
            {pricingPromotion.chip}
          </span>
        ) : null}
      </div>
      <h3 className="mt-3 font-heading text-xl font-semibold text-midnight">
        {tier.name}
      </h3>
      {showPromoPrice ? (
        <p className="sr-only">
          {pricingPromotion.chip}. Starting price was {tier.priceWasLabel}; promotional
          starting price {tier.priceLabel} Australian dollars.
        </p>
      ) : null}
      <div className="mt-2" {...(showPromoPrice ? { "aria-hidden": true } : {})}>
        {showPromoPrice ? (
          <p className="text-sm font-medium text-slate">
            <span>Was </span>
            <span className="line-through decoration-slate/45">{tier.priceWasLabel}</span>
          </p>
        ) : null}
        <p className="flex flex-wrap items-baseline gap-x-2 text-3xl font-semibold tracking-tight text-midnight">
          <span>{tier.priceLabel}</span>
          <span className="text-xl font-semibold tracking-normal text-slate">AUD</span>
        </p>
      </div>
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
