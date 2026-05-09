type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  as?: "h1" | "h2";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  as = "h2",
}: Props) {
  const alignClass = align === "center" ? "text-center mx-auto" : "";
  const TitleTag = as;

  return (
    <div className={`max-w-2xl ${alignClass}`}>
      {eyebrow ? (
        <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-accent-strong">
          {eyebrow}
        </p>
      ) : null}
      <TitleTag className="mt-2 font-heading text-3xl font-semibold tracking-tight text-midnight sm:text-4xl">
        {title}
      </TitleTag>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-slate">
          {description}
        </p>
      ) : null}
    </div>
  );
}
