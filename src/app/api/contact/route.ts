import { Resend } from "resend";
import { NextResponse } from "next/server";

function escapeHtml(text: string) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  const recipient = process.env.CONTACT_FORM_RECIPIENT;
  const from =
    process.env.EMAIL_FROM ??
    "LaunchLite Studio <onboarding@resend.dev>";

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey || !recipient) {
    return NextResponse.json(
      {
        error:
          "Contact form is not configured. Add RESEND_API_KEY and CONTACT_FORM_RECIPIENT to your environment.",
      },
      { status: 503 }
    );
  }

  const resend = new Resend(apiKey);

  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return NextResponse.json({ error: "Invalid form data." }, { status: 400 });
  }

  // Honeypot — if filled, pretend success (spam)
  const trap = String(formData.get("company_website") ?? "").trim();
  if (trap.length > 0) {
    return NextResponse.json({ ok: true });
  }

  const name = String(formData.get("name") ?? "").trim();
  const business = String(formData.get("business") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const websiteType = String(formData.get("websiteType") ?? "").trim();
  const budget = String(formData.get("budget") ?? "").trim();
  const domain = String(formData.get("domain") ?? "").trim();
  const content = String(formData.get("content") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !email || !message || !websiteType) {
    return NextResponse.json(
      { error: "Please fill in name, email, website type, and message." },
      { status: 400 }
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email." }, { status: 400 });
  }

  const rows: [string, string][] = [
    ["Name", name],
    ["Business", business || "—"],
    ["Email", email],
    ["Phone", phone || "—"],
    ["Website type", websiteType],
    ["Budget", budget || "—"],
    ["Has domain?", domain || "—"],
    ["Content / photos ready?", content || "—"],
    ["Message", message],
  ];

  const html = `
    <p><strong>New quote request</strong> from launchlitestudio.com</p>
    <table style="border-collapse:collapse;max-width:560px;font-family:system-ui,sans-serif;font-size:14px;">
      ${rows
        .map(
          ([k, v]) =>
            `<tr><td style="vertical-align:top;padding:6px 12px 6px 0;border-bottom:1px solid #e2e8f0;color:#64748b;width:38%;">${escapeHtml(k)}</td><td style="vertical-align:top;padding:6px 0;border-bottom:1px solid #e2e8f0;color:#0b0f14;">${escapeHtml(v).replace(/\n/g, "<br/>")}</td></tr>`
        )
        .join("")}
    </table>
  `;

  const subject = `Quote request — ${name}${business ? ` (${business})` : ""}`;

  const { error } = await resend.emails.send({
    from,
    to: [recipient],
    replyTo: email,
    subject,
    html,
    text: rows.map(([k, v]) => `${k}: ${v}`).join("\n"),
  });

  if (error) {
    console.error("[contact]", error);
    return NextResponse.json(
      { error: "Could not send message. Please try again shortly." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
