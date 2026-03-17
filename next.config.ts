import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/auraha-safi-explorers",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
