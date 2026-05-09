import Link from "next/link";
import { Logo } from "@/components/Logo";
import { POSITIONING_ONE_LINER } from "@/config/brand";
import {
  BUSINESS_NAME,
  CONTACT_EMAIL,
  NAV_LINKS,
  SITE_URL,
} from "@/config/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-midnight text-snow">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo variant="horizontal" tone="onDark" />
            <p className="mt-5 max-w-md text-sm leading-relaxed text-snow/72">
              {POSITIONING_ONE_LINER} Clear communication, tidy layout, and SEO
              fundamentals—without sounding like a jargon factory.
            </p>
            <p className="mt-4 text-sm text-snow/75">
              {/* TODO: Update email in src/config/site.ts */}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="font-medium text-snow underline-offset-4 hover:underline"
              >
                {CONTACT_EMAIL}
              </a>
            </p>
          </div>
          <div className="md:col-span-3">
            <p className="text-sm font-semibold text-snow">Navigate</p>
            <ul className="mt-4 space-y-2 text-sm text-snow/70">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-snow">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-4">
            <p className="text-sm font-semibold text-snow">Focus</p>
            <p className="mt-4 text-sm leading-relaxed text-snow/65">
              Boutique web studio—simple websites and MVP-style builds with
              clear scope. If you need something bigger, I will point you to
              the right specialist.
            </p>
            <p className="mt-4 text-xs text-snow/45">
              {/* TODO: Swap domain in src/config/site.ts */}
              {SITE_URL}
            </p>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-snow/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {BUSINESS_NAME}. All rights reserved.
          </p>
          <p>Boutique polish—no inflated agency theatre.</p>
        </div>
      </div>
    </footer>
  );
}
