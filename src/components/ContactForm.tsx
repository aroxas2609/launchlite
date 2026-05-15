"use client";

import { useState, type FormEvent } from "react";
import { trackEvent } from "@/lib/analytics/events";

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
  "Under $900",
  "$900 – $2,000",
  "$2,000 – $5,000",
  "$5,000+",
  "Prefer guidance",
] as const;

const fieldClasses =
  "rounded-xl border border-line bg-white px-3 py-2.5 text-sm text-midnight shadow-inner outline-none ring-accent/0 transition focus:border-accent/40 focus:ring-4 focus:ring-accent/15 disabled:opacity-60";

export function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const body = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body,
      });
      const data = (await res.json().catch(() => ({}))) as {
        error?: string;
      };

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(
          data.error ?? "Something went wrong. Please try again."
        );
        trackEvent("quote_form_submit_error", { status: res.status });
        return;
      }

      setStatus("success");
      form.reset();
      trackEvent("quote_form_submit_success");
    } catch {
      setStatus("error");
      setErrorMessage("Could not reach the server. Check your connection.");
      trackEvent("quote_form_submit_network_error");
    }
  }

  return (
    <form
      className="grid gap-5 rounded-2xl border border-line bg-white p-6 shadow-card sm:p-8"
      onSubmit={handleSubmit}
    >
      {/* Honeypot — leave blank */}
      <div className="sr-only" aria-hidden>
        <label htmlFor="company_website">Leave blank</label>
        <input
          id="company_website"
          type="text"
          name="company_website"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {status === "success" ? (
        <p className="rounded-xl bg-soft-blue p-4 text-sm text-slate">
          Thanks — your quote request was sent. I will reply by email as soon
          as I can.
        </p>
      ) : null}

      {status === "success" ? null : (
        <>
      {status === "error" ? (
        <p className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-900">
          {errorMessage}
        </p>
      ) : null}

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-midnight">
          Name
          <input
            name="name"
            required
            disabled={status === "submitting"}
            className={fieldClasses}
            autoComplete="name"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-midnight">
          Business name
          <input
            name="business"
            disabled={status === "submitting"}
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
            disabled={status === "submitting"}
            className={fieldClasses}
            autoComplete="email"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-midnight">
          Phone
          <input
            name="phone"
            type="tel"
            disabled={status === "submitting"}
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
          disabled={status === "submitting"}
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
          Budget range (AUD)
          <select
            name="budget"
            disabled={status === "submitting"}
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
              <input
                type="radio"
                name="domain"
                value="yes"
                disabled={status === "submitting"}
              />{" "}
              Yes
            </label>
            <label className="inline-flex items-center gap-2">
              <input
                type="radio"
                name="domain"
                value="no"
                disabled={status === "submitting"}
              />{" "}
              No
            </label>
            <label className="inline-flex items-center gap-2">
              <input
                type="radio"
                name="domain"
                value="unsure"
                disabled={status === "submitting"}
              />{" "}
              Not sure
            </label>
          </div>
        </fieldset>
      </div>

      <fieldset className="grid gap-2 text-sm font-medium text-midnight">
        <legend className="mb-1">Do you already have content/photos?</legend>
        <div className="flex flex-wrap gap-3 text-sm font-normal text-slate">
          <label className="inline-flex items-center gap-2">
            <input
              type="radio"
              name="content"
              value="ready"
              disabled={status === "submitting"}
            />{" "}
            Mostly ready
          </label>
          <label className="inline-flex items-center gap-2">
            <input
              type="radio"
              name="content"
              value="partial"
              disabled={status === "submitting"}
            />{" "}
            Partially
          </label>
          <label className="inline-flex items-center gap-2">
            <input
              type="radio"
              name="content"
              value="help"
              disabled={status === "submitting"}
            />{" "}
            I need guidance
          </label>
        </div>
      </fieldset>

      <label className="grid gap-2 text-sm font-medium text-midnight">
        Message
        <textarea
          name="message"
          rows={5}
          required
          disabled={status === "submitting"}
          className={fieldClasses}
          placeholder="Tell me about your business, timeline, and anything you have in mind."
        />
      </label>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-soft ring-offset-snow transition hover:bg-accent-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "submitting" ? "Sending…" : "Send quote request"}
      </button>
        </>
      )}
    </form>
  );
}
