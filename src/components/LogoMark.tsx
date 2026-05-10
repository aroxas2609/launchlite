/**
 * LaunchLite Studio — wordmark companion mark.
 * Raster PNG on light backgrounds; stroke SVG on dark (footer) for contrast.
 */

import Image from "next/image";

type Props = {
  className?: string;
  /** Raster logo sits on light UI; SVG inherits currentColor on midnight panels. */
  tone?: "onLight" | "onDark";
};

export function LogoMark({ className = "h-9 w-9", tone = "onLight" }: Props) {
  if (tone === "onDark") {
    return (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`shrink-0 ${className}`}
        aria-hidden
      >
        <path
          d="M6 40C14 26 34 18 42 12"
          stroke="currentColor"
          strokeOpacity={0.18}
          strokeWidth={2}
          strokeLinecap="round"
        />
        <path
          d="M10 40V14H24"
          stroke="currentColor"
          strokeWidth={3}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M28 40V18H40"
          stroke="currentColor"
          strokeWidth={3}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <Image
      src="/brand/launchlite-studio-logo-mark.png"
      alt=""
      width={96}
      height={96}
      className={`shrink-0 object-contain ${className}`}
      sizes="48px"
      priority
    />
  );
}
