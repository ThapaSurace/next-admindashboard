/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "freebiehive.com",
          },
          {
            protocol: "https",
            hostname: "wallpapers-clan.com",
          },
          {
            protocol: "https",
            hostname: "images.pexels.com",
          },
        ],
      },
}

module.exports = nextConfig
