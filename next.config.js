const withPlugins = require('next-compose-plugins');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const withPWA = require('next-pwa');

module.exports = withPlugins([
  [withBundleAnalyzer({})],
  [withPWA, {
    pwa: {
      dest: 'public'
    }
  }]
])
