import { ButtonLink } from "@/components/ButtonLink";

type Props = {
  title: string;
  description?: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  variant?: "light" | "dark";
};

export function CTASection({
  title,
  description,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  variant = "light",
}: Props) {
  const surface =
    variant === "dark"
      ? "bg-midnight text-snow shadow-card-deep"
      : "border border-line bg-gradient-to-br from-white via-soft-blue/50 to-white shadow-card";

  return (
    <section
      className={`rounded-3xl px-6 py-12 sm:px-10 sm:py-14 ${surface}`}
    >
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
          {title}
        </h2>
        {description ? (
          <p
            className={`mt-4 text-base leading-relaxed sm:text-lg ${
              variant === "dark" ? "text-snow/80" : "text-slate"
            }`}
          >
            {description}
          </p>
        ) : null}
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <ButtonLink
            href={primaryHref}
            variant={variant === "dark" ? "secondary" : "primary"}
            className="px-8 py-3 text-base"
          >
            {primaryLabel}
          </ButtonLink>
          {secondaryHref && secondaryLabel ? (
            <ButtonLink
              href={secondaryHref}
              variant="ghost"
              className={`px-4 py-3 text-base ${
                variant === "dark"
                  ? "text-snow hover:text-white"
                  : "text-midnight"
              }`}
            >
              {secondaryLabel}
            </ButtonLink>
          ) : null}
        </div>
      </div>
    </section>
  );
}
