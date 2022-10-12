/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

const { createProxyMiddleware } = require("http-proxy-middleware")


module.exports = {nextConfig,
  images: {
    domains: ['photos.hotelbeds.com']
  }
}

module.exports = () => {
  const rewrites = () => {
    return [
      {
        source: '/hotel-api/1.0/hotels',
        destination: 'https://api.test.hotelbeds.com/hotel-api/1.0/hotels'
      },
    ];
  };

  return {
    rewrites,
  }
}