import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { SectionHeading } from "@/components/SectionHeading";
import {
  GOOGLE_BUSINESS_PROFILE_URL,
  INSTAGRAM_URL,
  PUBLIC_CONTACT_EMAIL,
  SITE_URL,
} from "@/config/site";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Contact — request a website quote",
  description:
    "Request a quote for an affordable Australian small-business website. Share goals, service area, budget range and timeline—get a clear next step.",
  path: "/contact",
  keywords: [
    "website quote Australia",
    "affordable web design quote",
    "small business website enquiry",
  ],
});

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Contact", href: "/contact" },
        ]}
      />
      <div className="bg-gradient-to-b from-soft-blue/40 via-white to-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading
            as="h1"
            eyebrow="Contact"
            title="Request a thoughtful quote—not a generic ticket."
            description="Tell me what you need and I’ll help work out the simplest, most affordable option."
          />
          <ul className="mt-10 space-y-4 text-sm text-slate">
            <li>
              <span className="font-semibold text-midnight">Website</span>
              <br />
              <a
                href={SITE_URL}
                className="text-accent-strong underline-offset-4 hover:underline"
              >
                {SITE_URL.replace(/^https?:\/\//, "")}
              </a>
            </li>
            <li>
              <span className="font-semibold text-midnight">Email</span>
              <br />
              <a
                href={`mailto:${PUBLIC_CONTACT_EMAIL}`}
                className="text-accent-strong underline-offset-4 hover:underline"
              >
                {PUBLIC_CONTACT_EMAIL}
              </a>
            </li>
            {GOOGLE_BUSINESS_PROFILE_URL ? (
              <li>
                <span className="font-semibold text-midnight">
                  Google Business
                </span>
                <br />
                <a
                  href={GOOGLE_BUSINESS_PROFILE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-strong underline-offset-4 hover:underline"
                >
                  Reviews & listing
                </a>
              </li>
            ) : null}
            <li>
              <span className="font-semibold text-midnight">Instagram</span>
              <br />
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-strong underline-offset-4 hover:underline"
              >
                @launchlitestudio
              </a>
            </li>
          </ul>
          <p className="mt-10 rounded-2xl border border-line bg-white p-5 text-sm leading-relaxed text-slate shadow-card">
            I usually reply within two business days. If timing matters—say you
            need something urgently—mention it in your message so I can be
            upfront about availability.
          </p>
        </div>

        <div>
          <ContactForm />
        </div>
      </div>
      </div>
    </>
  );
}
