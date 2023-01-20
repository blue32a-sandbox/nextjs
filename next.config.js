/** @type {import('next').NextConfig} */
const nextConfig = {
  // except for webpack, other parts are left as generated
  webpack: (config) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300
    }
    return config
  }
}

module.exports = nextConfig
