'use client'

import { motion } from 'framer-motion'
import { ExternalLink, BookOpen, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export function BlogShowcase() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            CEOwrites{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Blog Hub
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Authentic insights on business strategy, technology trends, leadership, and personal growth
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Blog Preview/Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="relative">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-xl p-8">
                <div className="aspect-video bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-white/10 rounded-lg flex items-center justify-center">
                      <BookOpen className="w-8 h-8 text-green-400" />
                    </div>
                    <div className="text-2xl font-bold text-white mb-2">CEOwrites</div>
                    <div className="text-sm text-gray-400">Emmanuel&apos;s Blog Hub</div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-green-400 to-blue-600 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>
          </motion.div>

          {/* Blog Description */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 space-y-6"
          >
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">
                CEOwrites - Emmanuel&apos;s Blog Hub
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                A comprehensive blog platform showcasing authentic insights on business strategy, technology trends, leadership, and personal growth from tech entrepreneur Emmanuel Ogugua.
              </p>
            </div>

            <div className="bg-slate-800/30 backdrop-blur-sm border border-white/10 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-white mb-4">What You&apos;ll Find</h4>
              <div className="space-y-3">
                <div className="flex items-start text-gray-300">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2"></div>
                  <span className="text-sm">Business strategy and entrepreneurial insights</span>
                </div>
                <div className="flex items-start text-gray-300">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2"></div>
                  <span className="text-sm">Technology trends and development tips</span>
                </div>
                <div className="flex items-start text-gray-300">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2"></div>
                  <span className="text-sm">Leadership principles and personal growth</span>
                </div>
                <div className="flex items-start text-gray-300">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2"></div>
                  <span className="text-sm">Real-world case studies and experiences</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="https://ceowrites-emmanuel-blog-hub.vercel.app/" target="_blank">
                <motion.button
                  className="w-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink size={20} />
                  Visit Blog Hub
                </motion.button>
              </Link>

              <Link href="/blog">
                <motion.button
                  className="w-full border border-white/20 hover:bg-white/10 text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Blog Posts
                  <ArrowRight size={20} />
                </motion.button>
              </Link>
            </div>

            <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 backdrop-blur-sm border border-green-400/20 rounded-lg p-4">
              <p className="text-green-300 text-sm">
                <strong>Platform:</strong> Next.js 15, React 18, Tailwind CSS, Modern responsive design with email integration
              </p>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center space-x-4 bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-xl p-6">
            <div className="text-4xl">📝</div>
            <div className="text-left">
              <div className="text-lg font-semibold text-white">Ready to dive deeper?</div>
              <div className="text-gray-400 text-sm">Explore detailed articles and insights</div>
            </div>
            <Link href="/blog">
              <motion.button
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-2 rounded-lg font-semibold flex items-center gap-2 transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Blog
                <ArrowRight size={16} />
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
