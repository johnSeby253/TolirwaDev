/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // recommended
  experimental: {
    appDir: true, // ✅ ensures Next.js uses the App Router system
  },
};

export default nextConfig;
