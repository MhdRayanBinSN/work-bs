import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com"
      }
    ]
  },
  async redirects() {
    return [
      { source: "/contact-2", destination: "/contact", permanent: true },
      { source: "/blog-small", destination: "/blog", permanent: true },
      { source: "/portfolio/:path*", destination: "/gallery", permanent: true },
      { source: "/expertise/wedding-events", destination: "/expertise/dance", permanent: true }
    ];
  }
};

export default nextConfig;
