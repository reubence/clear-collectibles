/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
     "arweave.net",
     "pbs.twimg.com",
     "shdw-drive.genesysgo.net"
    ],
  },
}

module.exports = nextConfig
