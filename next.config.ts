import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "sunpipsolutions.com" }],
        destination: "https://www.sunpipsolutions.com/:path*",
        permanent: true,
      },
      { source: "/residential-solar", destination: "/services/residential-rooftop-solar", permanent: true },
      { source: "/solar-epc", destination: "/services/complete-solar-epc", permanent: true },
      { source: "/government-subsidy", destination: "/pm-surya-ghar-solar-subsidy", permanent: true },
      { source: "/services/government-subsidy-assistance", destination: "/pm-surya-ghar-solar-subsidy", permanent: true },
    ];
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
