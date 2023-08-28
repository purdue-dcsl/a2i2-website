/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: { ignoreBuildErrors: true, },
  webpack: (config) => {
    config.externals = {
      canvas: "canvas",
    };
    return config;
  },
  typescript: { ignoreBuildErrors: true, },
};

module.exports = nextConfig
