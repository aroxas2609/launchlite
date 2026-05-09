/** Shown during client navigations within the marketing shell (Next.js App Router). */
export default function SiteLoading() {
  return (
    <div
      className="flex min-h-[40vh] flex-col items-center justify-center gap-6 px-6 py-20"
      aria-busy
      aria-live="polite"
    >
      <div className="flex flex-col items-center gap-3">
        <span className="sr-only">Loading page</span>
        <div className="h-9 w-9 animate-pulse rounded-full bg-soft-blue/80" aria-hidden />
        <div className="h-2.5 w-36 animate-pulse rounded-full bg-line" aria-hidden />
        <div className="h-2.5 w-28 animate-pulse rounded-full bg-line/80" aria-hidden />
      </div>
    </div>
  );
}
