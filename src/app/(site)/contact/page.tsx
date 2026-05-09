import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { SectionHeading } from "@/components/SectionHeading";
import { CONTACT_EMAIL, SITE_URL } from "@/config/site";

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
          {/* TODO: Update email + domain in src/config/site.ts */}
          <ul className="mt-10 space-y-4 text-sm text-charcoal/70">
            <li>
              <span className="font-semibold text-charcoal">Email</span>
              <br />
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-accent underline-offset-4 hover:underline"
              >
                {CONTACT_EMAIL}
              </a>
            </li>
            <li>
              <span className="font-semibold text-charcoal">Website</span>
              <br />
              <span className="break-all">{SITE_URL}</span>
            </li>
          </ul>
          <p className="mt-10 rounded-2xl border border-charcoal/8 bg-white p-5 text-sm leading-relaxed text-charcoal/65 shadow-card">
            I usually reply within two business days. If your request is urgent,
            mention timing in your message—I will be honest about availability.
          </p>
        </div>

        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
