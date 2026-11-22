
import type { NextConfig } from "next";
import { config } from "dotenv";

config({ path: "../.env" });

const nextConfig: NextConfig = {
  output: "standalone",

  // Backend v TypeScriptu
  transpilePackages: ["backend"],

  // Keep database dependencies external to Turbopack
  serverExternalPackages: [
    "@prisma/client",
    "@prisma/adapter-pg",
    "pg",
    "better-auth",
  ],

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
