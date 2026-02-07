/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tools.applemediaservices.com',
      },
      {
        protocol: 'https',
        hostname: 'play.google.com',
      },
    ],
  },
};

module.exports = nextConfig;

