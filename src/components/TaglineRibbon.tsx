import { BRAND_TAGLINES } from "@/config/brand";

/** Slim ribbon — four lines max to avoid competing with the hero */
export function TaglineRibbon() {
  return (
    <div className="border-y border-line/80 bg-white/65 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-2 px-4 py-3 sm:gap-2.5 sm:py-3.5">
        {BRAND_TAGLINES.map((line) => (
          <span
            key={line}
            className="rounded-full border border-line bg-snow px-3 py-1 text-center text-[0.71rem] font-medium leading-snug text-midnight/75 shadow-sm shadow-midnight/5 sm:text-xs"
          >
            {line}
          </span>
        ))}
      </div>
      <span className="sr-only">{BRAND_TAGLINES.join(", ")}</span>
    </div>
  );
}
