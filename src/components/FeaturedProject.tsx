'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export function FeaturedProject() {
  return (
    <section className="py-12 bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-slate-100 mb-2">
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
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
                <div className="relative w-full max-w-3xl mx-auto">
                  <Image
                    src="/images/emmanuelosScreenshot1.png"
                    alt="EmmanuelOS SWART Dashboard Screenshot"
                    width={800}
                    height={450}
                    className="w-full h-auto object-contain rounded-lg shadow-xl"
                    priority
                  />
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
              <h3 className="text-xl font-bold text-slate-100 mb-2">
                EmmanuelOS SWART Dashboard
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-3">
                Personal developer command center showcasing and managing built applications with unified analytics.
              </p>
            </div>

            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded p-3">
              <h4 className="text-sm font-semibold text-slate-100 mb-2">Key Features</h4>
              <div className="grid grid-cols-2 gap-1.5">
                <div className="flex items-center text-slate-300">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                  <span className="text-xs">App showcase</span>
                </div>
                <div className="flex items-center text-slate-300">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                  <span className="text-xs">Analytics</span>
                </div>
                <div className="flex items-center text-slate-300">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                  <span className="text-xs">GitHub API</span>
                </div>
                <div className="flex items-center text-slate-300">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                  <span className="text-xs">Admin mode</span>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <Link href="https://emmanuelos.vercel.app/" target="_blank">
                <motion.button
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded text-sm font-semibold flex items-center gap-2 transition-all duration-200 min-h-[44px]"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink size={14} />
                  Live
                </motion.button>
              </Link>

              <Link href="https://github.com/e-ogugua/emmanuelos" target="_blank">
                <motion.button
                  className="border border-slate-600 hover:bg-slate-700/50 text-slate-100 px-6 py-3 rounded text-sm font-semibold flex items-center gap-2 transition-all duration-200 min-h-[44px]"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github size={14} />
                  Code
                </motion.button>
              </Link>
            </div>

            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-400/20 rounded p-2">
              <p className="text-blue-300 text-xs">
                <strong>Tech:</strong> Next.js, React, Tailwind, Supabase
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
