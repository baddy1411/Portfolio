/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  exportTrailingSlash: true,
  images: {
    unoptimized: true, // Disables next/image optimization for static export
  },
  productionBrowserSourceMaps: false, // Optional: Disables source maps to reduce file count
};


export default nextConfig;
