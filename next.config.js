/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["i.ibb.co", "lh3.googleusercontent.com", "res.cloudinary.com"],
  },
  i18n: {
    locales: ["en", "vi"],
    defaultLocale: "en",
  },
  async redirects() {
    return [
      {
        source: "/vi",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
