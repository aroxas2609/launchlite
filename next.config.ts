import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /** Many clients request /favicon.ico by default; map to the app icon. */
  async rewrites() {
    return [{ source: "/favicon.ico", destination: "/icon.png" }];
  },
};

export default nextConfig;
