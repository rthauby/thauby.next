import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
