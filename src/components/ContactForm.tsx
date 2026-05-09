"use client";

import { useState } from "react";

const websiteTypes = [
  "Small business website",
  "Tradie website",
  "Club/community website",
  "Photography/portfolio website",
  "Landing page",
  "Website refresh",
  "Not sure yet",
] as const;

const budgetRanges = [
  "Under $750",
  "$750 – $1,500",
  "$1,500 – $3,000",
  "$3,000+",
  "Prefer guidance",
] as const;

const fieldClasses =
  "rounded-xl border border-line bg-white px-3 py-2.5 text-sm text-midnight shadow-inner outline-none ring-accent/0 transition focus:border-accent/40 focus:ring-4 focus:ring-accent/15";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      className="grid gap-5 rounded-2xl border border-line bg-white p-6 shadow-card sm:p-8"
      onSubmit={(e) => {
        e.preventDefault();
        // TODO: Connect form to email or provider (see src/config/site.ts CONTACT_EMAIL too)
        setSubmitted(true);
      }}
    >
      {submitted ? (
        <p className="rounded-xl bg-soft-blue p-4 text-sm text-slate">
          Thanks — your details are captured locally for now. Next step: hook
          this form to mail or Formspree (see TODO inside this file).
        </p>
      ) : null}

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-midnight">
          Name
          <input
            name="name"
            required
            className={fieldClasses}
            autoComplete="name"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-midnight">
          Business name
          <input
            name="business"
            className={fieldClasses}
            autoComplete="organization"
          />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-midnight">
          Email
          <input
            name="email"
            type="email"
            required
            className={fieldClasses}
            autoComplete="email"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-midnight">
          Phone
          <input
            name="phone"
            type="tel"
            className={fieldClasses}
            autoComplete="tel"
          />
        </label>
      </div>

      <label className="grid gap-2 text-sm font-medium text-midnight">
        Type of website needed
        <select
          name="websiteType"
          required
          className={fieldClasses}
          defaultValue=""
        >
          <option value="" disabled>
            Select an option
          </option>
          {websiteTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </label>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-midnight">
          Budget range
          <select
            name="budget"
            className={fieldClasses}
            defaultValue=""
          >
            <option value="" disabled>
              Select a range
            </option>
            {budgetRanges.map((range) => (
              <option key={range} value={range}>
                {range}
              </option>
            ))}
          </select>
        </label>
        <fieldset className="grid gap-2 text-sm font-medium text-midnight">
          <legend className="mb-1">Do you already have a domain?</legend>
          <div className="flex flex-wrap gap-3 text-sm font-normal text-slate">
            <label className="inline-flex items-center gap-2">
              <input type="radio" name="domain" value="yes" /> Yes
            </label>
            <label className="inline-flex items-center gap-2">
              <input type="radio" name="domain" value="no" /> No
            </label>
            <label className="inline-flex items-center gap-2">
              <input type="radio" name="domain" value="unsure" /> Not sure
            </label>
          </div>
        </fieldset>
      </div>

      <fieldset className="grid gap-2 text-sm font-medium text-midnight">
        <legend className="mb-1">Do you already have content/photos?</legend>
        <div className="flex flex-wrap gap-3 text-sm font-normal text-slate">
          <label className="inline-flex items-center gap-2">
            <input type="radio" name="content" value="ready" /> Mostly ready
          </label>
          <label className="inline-flex items-center gap-2">
            <input type="radio" name="content" value="partial" /> Partially
          </label>
          <label className="inline-flex items-center gap-2">
            <input type="radio" name="content" value="help" /> I need guidance
          </label>
        </div>
      </fieldset>

      <label className="grid gap-2 text-sm font-medium text-midnight">
        Message
        <textarea
          name="message"
          rows={5}
          required
          className={fieldClasses}
          placeholder="Tell me about your business, timeline, and anything you have in mind."
        />
      </label>

      <button
        type="submit"
        className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-soft ring-offset-snow transition hover:bg-accent-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
      >
        Send quote request
      </button>
    </form>
  );
}
