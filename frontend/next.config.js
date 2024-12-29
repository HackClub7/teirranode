/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = nextConfig;

const webpack = require('webpack');

module.exports = {
  webpack: (config) => {
    // Add a plugin to handle "node:" scheme
    config.plugins.push(
      new webpack.NormalModuleReplacementPlugin(/^node:/, (resource) => {
        resource.request = resource.request.replace(/^node:/, ''); // Remove "node:" prefix
      })
    );

    // Add fallbacks for Node.js built-in modules if needed
    config.resolve.fallback = {
      ...config.resolve.fallback,
      url: require.resolve('url'),
      crypto: require.resolve('crypto-browserify'),
      stream: require.resolve('stream-browserify'),
      util: require.resolve('util'),
    };

    return config;
  },
};
