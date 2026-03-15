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
      {
        source: '/.well-known/apple-app-site-association.json',
        headers: [
          { key: 'Content-Type', value: 'application/json' },
        ],
      },
    ];
  },
  async rewrites() {
    return [
      // assetlinks: without .json → serve assetlinks.json
      { source: '/.well-known/assetlinks', destination: '/.well-known/assetlinks.json' },
      // apple-app-site-association: with .json → serve apple-app-site-association (no extension)
      { source: '/.well-known/apple-app-site-association.json', destination: '/.well-known/apple-app-site-association' },
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

