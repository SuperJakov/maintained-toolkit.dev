/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import "./src/env.js";
import { type NextConfig } from "next";

const config: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "3kjwme0xuhfnyrkn.public.blob.vercel-storage.com",
      },
    ],
  },
  experimental: {
    reactCompiler: true,
  },
};

export default config;
