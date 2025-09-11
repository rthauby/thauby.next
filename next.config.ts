import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  publicRuntimeConfig: {
    NEXT_PUBLIC_WEBFORMS_API_KEY: process.env.NEXT_PUBLIC_WEBFORMS_API_KEY,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.run.app",
        port: "",
        search: "",
      },
    ],
  },
};

export default nextConfig;
