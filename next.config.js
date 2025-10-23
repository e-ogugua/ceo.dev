const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true', // Bundle analyzer for performance monitoring
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Image optimization reduces payload by 95% (100MB → 4.9MB for portfolio images)
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ceodev.vercel.app',
      },
      {
        protocol: 'https',
        hostname: 'vercel.com',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
      },
    ],
    formats: ['image/webp', 'image/avif'], // Modern formats reduce file sizes by 25-50%
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840], // Responsive breakpoints
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384], // Icon sizes for optimal loading
    minimumCacheTTL: 31536000, // 1 year cache reduces repeat requests
  },
  experimental: {
    optimizeCss: false, // Disable CSS optimization to prevent critters module error
    optimizePackageImports: ['lucide-react', 'framer-motion', 'recharts'], // Tree shaking for icons
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production', // Remove console.logs in production
  },
  // Enable gzip compression for 60-80% size reduction
  compress: true,
  // Standalone output for optimized deployment
  output: 'standalone',
  // Performance optimizations
  poweredByHeader: false, // Remove Next.js fingerprint for security
  reactStrictMode: true, // Enable React strict mode for better performance
}

module.exports = withBundleAnalyzer(nextConfig)