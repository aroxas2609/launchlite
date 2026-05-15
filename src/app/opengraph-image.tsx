import { ImageResponse } from "next/og";
import { BUSINESS_NAME } from "@/config/site";

export const alt = `${BUSINESS_NAME} — affordable websites for Australian small businesses`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 72,
          background: "linear-gradient(135deg, #0b0f14 0%, #1e293b 45%, #2563eb 100%)",
          color: "#f8fafc",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 28,
            fontWeight: 600,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#93c5fd",
            marginBottom: 16,
          }}
        >
          Web studio · Australia
        </div>
        <div
          style={{
            fontSize: 68,
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
          }}
        >
          {BUSINESS_NAME}
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 30,
            lineHeight: 1.35,
            maxWidth: 900,
            color: "#e2e8f0",
          }}
        >
          Affordable, modern websites for tradies, clubs, gyms & local businesses.
        </div>
        <div
          style={{
            marginTop: "auto",
            fontSize: 22,
            color: "#cbd5e1",
          }}
        >
          launchlitestudio.com
        </div>
      </div>
    ),
    { ...size },
  );
}
