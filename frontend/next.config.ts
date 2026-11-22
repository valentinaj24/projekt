
import type { NextConfig } from "next";
import { config } from "dotenv";

config({ path: "../.env" });

const nextConfig: NextConfig = {
  output: "standalone",

  // Backend v TypeScriptu
  transpilePackages: ["backend"],

  agentRules: false,

  // Tailwind
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
