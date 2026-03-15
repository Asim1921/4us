/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/.well-known/apple-app-site-association',
        headers: [
          { key: 'Content-Type', value: 'application/json' },
        ],
      },
    ];
  },
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

