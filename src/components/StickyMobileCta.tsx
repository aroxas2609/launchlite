import Link from "next/link";

export function StickyMobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-[45] border-t border-line bg-snow/95 p-3 shadow-[0_-12px_34px_-22px_rgb(15_23_42_/_0.35)] backdrop-blur-md md:hidden">
      <Link
        href="/contact"
        data-analytics="sticky_mobile_cta_quote"
        className="flex h-12 items-center justify-center rounded-full bg-accent text-sm font-semibold text-white shadow-soft transition hover:bg-accent-strong"
      >
        Request a quote
      </Link>
    </div>
  );
}
