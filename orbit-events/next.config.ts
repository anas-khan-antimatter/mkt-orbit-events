import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: {
    // Force Vercel to see a change
    cacheControl: "public, max-age=0, must-revalidate",
  },
};

export default nextConfig;
