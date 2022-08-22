/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    formats: ["image/avif", "image/webp"],
    domains: [
      "static.apkpure.com",
      "image.winudf.com",
      "via.placeholder.com",
      "loremflickr.com",
      "cdn.jsdelivr.net",
      "example.ie",
    ],
  },
};

module.exports = nextConfig;
