/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'ceodev.vercel.app', 'vercel.com'],
    formats: ['image/webp', 'image/avif'],
  },
}

module.exports = nextConfig