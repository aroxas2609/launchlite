import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS_NAME, PUBLIC_CONTACT_EMAIL, SITE_URL } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "How LaunchLite Studio collects and handles personal information when you use this website and the quote form.",
};

export default function PrivacyPage() {
  return (
    <div className="bg-gradient-to-b from-soft-blue/40 via-white to-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <article className="mx-auto max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-strong">
          Legal
        </p>
        <h1 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-midnight sm:text-4xl">
          Privacy policy
        </h1>
        <p className="mt-4 text-sm text-slate">
          Last updated: 10 May 2026 · Applies to{" "}
          <a
            href={SITE_URL}
            className="text-accent-strong underline-offset-4 hover:underline"
          >
            {SITE_URL.replace(/^https?:\/\//, "")}
          </a>
        </p>

        <div className="mt-12 space-y-10 text-sm leading-relaxed text-slate">
          <section className="space-y-3">
            <h2 className="font-heading text-lg font-semibold text-midnight">
              Who we are
            </h2>
            <p>
              {BUSINESS_NAME} (“we”, “us”) operates this website. We are based
              in Australia. For questions about this policy or your personal
              information, contact{" "}
              <a
                href={`mailto:${PUBLIC_CONTACT_EMAIL}`}
                className="font-medium text-accent-strong underline-offset-4 hover:underline"
              >
                {PUBLIC_CONTACT_EMAIL}
              </a>
              .
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-lg font-semibold text-midnight">
              What we collect
            </h2>
            <p>
              We collect personal information that you choose to give us,
              including when you use the quote request form or email us directly.
              That may include:
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number (optional)</li>
              <li>Business or organisation name (optional)</li>
              <li>
                Project details you provide—such as website type, budget range,
                domain questions, readiness of content, and your message
              </li>
            </ul>
            <p>
              We also receive technical information that browsers and hosting
              services typically send automatically when you load a page (for
              example IP address and basic request metadata). Our hosting
              provider may log that data for security and reliability.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-lg font-semibold text-midnight">
              Why we use it
            </h2>
            <p>We use personal information to:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Respond to quote requests and enquiries</li>
              <li>Communicate with you about your project</li>
              <li>Operate, secure, and improve the website</li>
            </ul>
            <p>
              If you submit the quote form, we treat that as consent to use
              your details for those purposes. If you email us, we rely on your
              contact as the basis to reply.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-lg font-semibold text-midnight">
              Email delivery
            </h2>
            <p>
              Quote submissions are sent to our inbox using{" "}
              <a
                href="https://resend.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-accent-strong underline-offset-4 hover:underline"
              >
                Resend
              </a>
              , an email delivery service. Resend processes the content of your
              submission so we can receive it. Their handling is governed by
              their own policies and terms.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-lg font-semibold text-midnight">
              Hosting
            </h2>
            <p>
              This site is hosted on infrastructure that may store or process
              data (including server logs) outside your state or country. We
              use reputable providers and reasonable safeguards appropriate to
              a small business website.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-lg font-semibold text-midnight">
              How long we keep information
            </h2>
            <p>
              We keep enquiry and project-related correspondence for as long as
              needed to respond, manage any follow-up work, and meet ordinary
              business and legal record-keeping needs. If you ask us to delete
              personal information that we can reasonably identify and remove,
              we will do so unless we need to retain it for a legal reason.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-lg font-semibold text-midnight">
              Cookies and tracking
            </h2>
            <p>
              This site does not use advertising or analytics cookies by
              default. If we add analytics or similar tools later, we will
              update this policy and, where required, ask for your consent
              before non-essential tracking runs.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-lg font-semibold text-midnight">
              Access and correction
            </h2>
            <p>
              You may request access to personal information we hold about you,
              or ask us to correct it, by emailing{" "}
              <a
                href={`mailto:${PUBLIC_CONTACT_EMAIL}`}
                className="font-medium text-accent-strong underline-offset-4 hover:underline"
              >
                {PUBLIC_CONTACT_EMAIL}
              </a>
              . We may need to verify your request.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-lg font-semibold text-midnight">
              Complaints
            </h2>
            <p>
              If you have a concern about how we handle personal information,
              contact us first using the email above. If you are not satisfied,
              you may lodge a complaint with the Office of the Australian
              Information Commissioner (
              <a
                href="https://www.oaic.gov.au"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-accent-strong underline-offset-4 hover:underline"
              >
                OAIC
              </a>
              ).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-lg font-semibold text-midnight">
              Changes
            </h2>
            <p>
              We may update this policy from time to time. The “Last updated”
              date at the top will change when we do. Continued use of the site
              after changes means you accept the revised policy.
            </p>
          </section>

          <p className="border-t border-line pt-10 text-xs text-slate/90">
            This page describes our practices in plain language but is not
            legal advice. If you need certainty for your situation, speak with
            a qualified adviser.
          </p>

          <p className="text-center">
            <Link
              href="/contact"
              className="inline-flex rounded-full border border-line bg-white px-5 py-2.5 text-sm font-semibold text-midnight shadow-sm transition hover:border-accent/40 hover:bg-soft-blue/50"
            >
              Contact
            </Link>
          </p>
        </div>
      </article>
    </div>
  );
}
