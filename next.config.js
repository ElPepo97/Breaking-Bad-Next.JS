/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['upload.wikimedia.org',  'cdn.freebiesupply.com', 'static.wikia.nocookie.net', 'images.amcnetworks.com']
  }
}

module.exports = nextConfig
