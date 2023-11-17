/** @type {import('next').NextConfig} */
// next.config.js
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['fakestoreapi.com'],
  },
};

module.exports = nextConfig;
