// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: ["fakestoreapi.com"],
//   },
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { appDir: true },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fakestoreapi.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
