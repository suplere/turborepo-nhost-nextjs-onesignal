const path = require("path");

const nextConfig = {
  reactStrictMode: false,
  experimental: {
    // appDir: true,
    // transpilePackages: ['ui'],
  },
  images: {
    domains: ["localhost", "s.gravatar.com"],
  },
};
const withPWA = require("next-pwa")({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
  skipWaiting: true,
});

module.exports = withPWA(nextConfig);
