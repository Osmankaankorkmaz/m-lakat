import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'placehold.co',
    },
  ],
};

export default nextConfig;
