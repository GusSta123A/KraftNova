import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Use a nosync folder to prevent iCloud from hanging the Next.js compilation
  distDir: '.next.nosync',

  // Standalone output bundles only what's needed — perfect for Azure App Service
  output: "standalone",

  // Disable the X-Powered-By: Next.js response header
  poweredByHeader: false,

  // Allow images from anywhere (for partner logos etc.)
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**" },
    ],
  },
};

export default nextConfig;
