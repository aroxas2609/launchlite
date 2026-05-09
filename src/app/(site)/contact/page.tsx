import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { SectionHeading } from "@/components/SectionHeading";
import { PUBLIC_CONTACT_EMAIL, SITE_URL } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request a quote for an affordable website. Share your goals, budget range, and I'll recommend the simplest next step.",
};

export default function ContactPage() {
  return (
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
  );
}
