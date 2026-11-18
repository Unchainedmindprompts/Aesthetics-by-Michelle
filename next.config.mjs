/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/opengraph-image.png",
        destination: "/opengraph-image.jpg",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
