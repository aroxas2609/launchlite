type Props = {
  step: string;
  title: string;
  description: string;
  variant?: "compact" | "detailed" | "timelineBody";
};

export function ProcessStep({
  step,
  title,
  description,
  variant = "compact",
}: Props) {
  if (variant === "timelineBody") {
    return (
      <div className="pb-2">
        <h3 className="font-heading text-lg font-semibold text-midnight">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-slate">{description}</p>
      </div>
    );
  }

  if (variant === "detailed") {
    return (
      <div className="relative flex gap-4">
        <div
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-white shadow-soft"
          aria-hidden
        >
          {step}
        </div>
        <div className="pb-2">
          <h3 className="font-heading text-lg font-semibold text-midnight">
            {title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-slate">{description}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-line bg-white p-5 shadow-card">
      <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-accent-strong">
        Step {step}
      </p>
      <h3 className="mt-3 font-heading text-lg font-semibold text-midnight">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-slate">{description}</p>
    </div>
  );
}
