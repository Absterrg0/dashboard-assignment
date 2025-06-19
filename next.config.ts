import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["i.pravatar.cc", "lh3.googleusercontent.com"],
  },
  reactStrictMode:false,
  devIndicators:false
};

export default nextConfig;
