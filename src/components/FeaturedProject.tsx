'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Monitor } from 'lucide-react'
import Link from 'next/link'

export function FeaturedProject() {
  return (
    <section className="py-12 bg-slate-50/40 dark:bg-slate-900/90">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white dark:text-slate-100 mb-2">
            Featured{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Project
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          {/* Project Preview */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="relative">
              <div className="bg-slate-800/50 dark:bg-slate-800/70 backdrop-blur-sm border border-white/10 dark:border-slate-700/50 rounded-lg p-4">
                <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded flex items-center justify-center">
                  <div className="text-center">
                    <Monitor className="w-10 h-10 text-blue-400 mx-auto mb-2" />
                    <div className="text-lg font-bold text-white">EmmanuelOS</div>
                    <div className="text-xs text-gray-400 dark:text-slate-400">SWART Dashboard</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Project Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 space-y-4"
          >
            <div>
              <h3 className="text-xl font-bold text-white dark:text-slate-100 mb-2">
                EmmanuelOS SWART Dashboard
              </h3>
              <p className="text-gray-300 dark:text-slate-300 text-sm leading-relaxed mb-3">
                Personal developer command center showcasing and managing built applications with unified analytics.
              </p>
            </div>

            <div className="bg-slate-800/30 dark:bg-slate-800/50 backdrop-blur-sm border border-white/10 dark:border-slate-700/50 rounded p-3">
              <h4 className="text-sm font-semibold text-white dark:text-slate-100 mb-2">Key Features</h4>
              <div className="grid grid-cols-2 gap-1.5">
                <div className="flex items-center text-gray-300 dark:text-slate-300">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                  <span className="text-xs">App showcase</span>
                </div>
                <div className="flex items-center text-gray-300 dark:text-slate-300">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                  <span className="text-xs">Analytics</span>
                </div>
                <div className="flex items-center text-gray-300 dark:text-slate-300">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                  <span className="text-xs">GitHub API</span>
                </div>
                <div className="flex items-center text-gray-300 dark:text-slate-300">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                  <span className="text-xs">Admin mode</span>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <Link href="https://emmanuelos.vercel.app/" target="_blank">
                <motion.button
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-4 py-2 rounded text-sm font-semibold flex items-center gap-2 transition-all duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink size={14} />
                  Live
                </motion.button>
              </Link>

              <Link href="https://github.com/e-ogugua/emmanuelos" target="_blank">
                <motion.button
                  className="border border-white/20 dark:border-slate-600 hover:bg-white/10 dark:hover:bg-slate-700/50 text-white dark:text-slate-100 px-4 py-2 rounded text-sm font-semibold flex items-center gap-2 transition-all duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github size={14} />
                  Code
                </motion.button>
              </Link>
            </div>

            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-400/10 dark:to-purple-400/10 backdrop-blur-sm border border-blue-400/20 dark:border-blue-300/20 rounded p-2">
              <p className="text-blue-300 dark:text-blue-200 text-xs">
                <strong>Tech:</strong> Next.js, React, Tailwind, Supabase
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
