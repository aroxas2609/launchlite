import { pricingPromotion } from "@/config/pricing";

type Props = {
  className?: string;
};

export function PricingPromoBanner({ className = "" }: Props) {
  if (!pricingPromotion.active) return null;

  return (
    <div className={`flex justify-center ${className}`}>
      <p className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-soft-blue/60 px-4 py-2 text-sm font-semibold tracking-tight text-accent-strong shadow-sm">
        <span
          aria-hidden
          className="inline-flex h-1.5 w-1.5 shrink-0 rounded-full bg-accent-strong"
        />
        {pricingPromotion.banner}
      </p>
    </div>
  );
}
