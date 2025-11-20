import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  images: {
    unoptimized: true,
  },

  // images: {
  //   qualities: [75, 100],
  //   remotePatterns: [
  //     {
  //       protocol: "https",
  //       hostname: "encrypted-tbn0.gstatic.com",
  //     },
  //   ],
  // },
};

export default nextConfig;
