/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      // Redirect apex (4us.co) to www EXCEPT for /.well-known/* (required for Android/iOS app links)
      {
        source: '/((?!\\.well-known).*)',
        has: [{ type: 'host', value: '4us.co' }],
        destination: 'https://www.4us.co/$1',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/.well-known/assetlinks.json',
        headers: [
          { key: 'Content-Type', value: 'application/json' },
        ],
      },
      {
        source: '/.well-known/apple-app-site-association',
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

