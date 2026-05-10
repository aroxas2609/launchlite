import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /** PNG data in .ico name — set type so clients don’t mis-detect. */
  async headers() {
    return [
      {
        source: "/favicon.ico",
        headers: [
          { key: "Content-Type", value: "image/png" },
          { key: "Cache-Control", value: "public, max-age=86400, must-revalidate" },
        ],
      },
    ];
  },
};

export default nextConfig;
