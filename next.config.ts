import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,

  // Add rewrites to proxy API requests (helps with CORS)
  async rewrites() {
    return [
      {
        source: "/proxy-api/:path*",
        destination: "https://hackathon2phase3backend.vercel.app/api/v1/:path*",
      },
    ];
  },
};

export default nextConfig;
