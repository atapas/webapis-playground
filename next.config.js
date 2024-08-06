const runtimeCaching = require('next-pwa/cache');
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  runtimeCaching,
});

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['page.ts', 'page.tsx', 'page.js', 'page.jsx'],
  images: {
    domains: ['unavatar.io', 'res.cloudinary.com'],
  },
  eslint: {
    dirs: ['pages', 'components', 'web-apis', 'utils', 'hooks'],
  },
};

module.exports = withPWA(nextConfig);
