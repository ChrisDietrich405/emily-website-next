/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: { domains: ["quotefancy.com"] },
};

module.exports = nextConfig;
