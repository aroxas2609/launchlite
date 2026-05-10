import type { ReactNode } from "react";
/**
 * Logo system — wordmark + monogram.
 * VARIANTS:
 * - horizontal → mark + LaunchLite Studio (navbar / footer)
 * - stacked    → centred mark + word stack
 * - icon       → monogram-only (profiles / watermark)
 *
 * TONE — text colour overrides:
 * - onLight → snow / white backdrop (default)
 * - onDark  → midnight backdrop (footer panels)
 */

import Link from "next/link";
import { LogoMark } from "@/components/LogoMark";

type Props = {
  variant?: "horizontal" | "stacked" | "icon";
  tone?: "onLight" | "onDark";
  href?: string;
  lockup?: boolean;
  className?: string;
  onClick?: () => void;
};

export function Logo({
  variant = "horizontal",
  tone = "onLight",
  href = "/",
  lockup = true,
  className = "",
  onClick,
}: Props) {
  const fg = tone === "onDark" ? "text-snow" : "text-midnight";
  const studioMuted = tone === "onDark" ? "text-snow/72" : "text-slate";

  const label = lockup ? "LaunchLite Studio" : "LaunchLite";

  const markSize =
    variant === "icon"
      ? "h-10 w-10"
      : variant === "stacked"
        ? "h-12 w-12"
        : "h-10 w-10";

  let content: ReactNode;

  if (variant === "icon") {
    content = (
      <span className="inline-flex" aria-label={label}>
        {/* Icon variant: PNG on light; SVG on dark (accent class unused for PNG). */}
        <LogoMark className={`${markSize} text-accent`} tone={tone} />
      </span>
    );
  } else if (variant === "stacked") {
    content = (
      <span className={`inline-flex flex-col items-center gap-2 ${fg}`}>
        <LogoMark className={markSize} tone={tone} />
        <span className="text-center leading-tight">
          <span className="block font-heading text-lg font-semibold tracking-tight">
            LaunchLite
          </span>
          {lockup ? (
            <span className={`mt-1 block font-heading text-xs font-semibold uppercase tracking-[0.26em] ${studioMuted}`}>
              Studio
            </span>
          ) : null}
        </span>
      </span>
    );
  } else {
    content = (
      <span className={`inline-flex items-center gap-2.5 sm:gap-3 ${fg}`}>
        <LogoMark className={markSize} tone={tone} />
        <span className={`font-heading text-[1.05rem] font-semibold tracking-tight sm:text-lg`}>
          LaunchLite{" "}
          {lockup ? (
            <span className={`font-medium ${studioMuted}`}>Studio</span>
          ) : null}
        </span>
      </span>
    );
  }

  return (
    <Link
      href={href}
      aria-label={`${label}, home`}
      onClick={onClick}
      className={`group inline-flex min-w-0 items-center rounded-md outline-none ring-offset-snow transition hover:opacity-95 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 ${className}`}
    >
      {content}
    </Link>
  );
}
