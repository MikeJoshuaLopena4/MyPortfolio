// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  
  // Image optimization - IMPORTANT for your image-heavy portfolio
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Allows all HTTPS images
        pathname: '**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        pathname: '**',
      },
    ],
    // Optimize images for better performance
    formats: ['image/avif', 'image/webp'],
  },

  // For better Vercel deployment
  output: 'standalone',

  // Enable if you use SVGs
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },

  // Remove console logs in production
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

export default nextConfig;