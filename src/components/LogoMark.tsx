/**
 * LaunchLite Studio — minimal “LL” mark with subtle upward trajectory.
 * Stroke-based (SVG-friendly); uses currentColor for light/dark contexts.
 */

type Props = {
  className?: string;
};

export function LogoMark({ className = "h-9 w-9" }: Props) {
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
