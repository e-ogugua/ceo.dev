'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Monitor } from 'lucide-react'
import Link from 'next/link'

export function FeaturedProject() {
  return (
    <section className="py-20 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Project
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My personal developer command center and portfolio management system
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Project Image/Screenshot */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="relative">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-xl p-8">
                <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Monitor className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                    <div className="text-2xl font-bold text-white mb-2">EmmanuelOS</div>
                    <div className="text-sm text-gray-400">SWART Dashboard</div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-600 rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>
          </motion.div>

          {/* Project Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 space-y-6"
          >
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">
                EmmanuelOS SWART Dashboard
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                My personal developer command center that showcases, monitors, and manages some of the apps I&apos;ve built — a unified system-wide analytics and portfolio dashboard.
              </p>
            </div>

            <div className="bg-slate-800/30 backdrop-blur-sm border border-white/10 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-white mb-4">Key Features</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  <span className="text-sm">System-wide app showcase</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  <span className="text-sm">Real-time analytics</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  <span className="text-sm">GitHub API integration</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  <span className="text-sm">Admin management mode</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  <span className="text-sm">Mobile-first responsive UI</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  <span className="text-sm">Glassmorphism design</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="https://emmanuelos.vercel.app/" target="_blank">
                <motion.button
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink size={20} />
                  View Live Dashboard
                </motion.button>
              </Link>

              <Link href="https://github.com/e-ogugua/emmanuelos" target="_blank">
                <motion.button
                  className="w-full border border-white/20 hover:bg-white/10 text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github size={20} />
                  View Source Code
                </motion.button>
              </Link>
            </div>

            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-400/20 rounded-lg p-4">
              <p className="text-blue-300 text-sm">
                <strong>Tech Stack:</strong> Next.js 15, React 18, Tailwind CSS, Supabase, Framer Motion, Umami Analytics
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
