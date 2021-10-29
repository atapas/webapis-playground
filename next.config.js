const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

module.exports = withPWA({
  reactStrictMode: true,
  pageExtensions: ['page.ts', 'page.tsx', 'page.js', 'page.jsx'],
  images: {
    domains: ['unavatar.io', 'res.cloudinary.com'],
  },
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
    runtimeCaching,
  },
  eslint: {
    dirs: ['pages', 'components', 'web-apis', 'utils', 'hooks'],
  },
});
