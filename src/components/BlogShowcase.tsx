'use client'

import { motion } from 'framer-motion'
import { ExternalLink, BookOpen, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export function BlogShowcase() {
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
            CEOwrites{' '}
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Blog Hub
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          {/* Blog Preview */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="relative">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-4">
                <div className="aspect-video bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded flex items-center justify-center">
                  {/* Actual blog logo */}
                  <div className="w-full h-full flex items-center justify-center p-3">
                    <Image
                      src="/images/ceowrites-emmanuelBlogHubLogo.png"
                      alt="CEOWrites Blog Hub Logo"
                      width={200}
                      height={150}
                      className="max-w-full max-h-full object-contain rounded-lg shadow-lg"
                      style={{
                        width: 'auto',
                        height: 'auto'
                      }}
                      onError={(e) => {
                        // Fallback to placeholder if image fails to load
                        const target = e.currentTarget as HTMLImageElement;
                        const fallback = target.nextElementSibling as HTMLElement;
                        if (fallback) {
                          target.style.display = 'none';
                          fallback.style.display = 'flex';
                        }
                      }}
                    />
                    {/* Fallback placeholder */}
                    <div className="text-center hidden" style={{display: 'none'}}>
                      <div className="w-10 h-10 mx-auto mb-2 bg-slate-700/50 rounded flex items-center justify-center">
                        <BookOpen className="w-5 h-5 text-green-400" />
                      </div>
                      <div className="text-lg font-bold text-white">CEOwrites</div>
                      <div className="text-xs text-slate-400">Emmanuel&apos;s Blog</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Blog Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 space-y-4"
          >
            <div>
              <h3 className="text-xl font-bold text-slate-100 mb-2">
                CEOwrites - Emmanuel&apos;s Blog Hub
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-3">
                Authentic insights on business strategy, technology trends, leadership, and personal growth.
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded p-3">
              <h4 className="text-sm font-semibold text-slate-100 mb-2">Topics</h4>
              <div className="space-y-1.5">
                <div className="flex items-center text-slate-300">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></div>
                  <span className="text-xs">Business strategy</span>
                </div>
                <div className="flex items-center text-slate-300">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></div>
                  <span className="text-xs">Tech trends</span>
                </div>
                <div className="flex items-center text-slate-300">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></div>
                  <span className="text-xs">Leadership</span>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <Link href="https://ceowrites-emmanuel-blog-hub.vercel.app/" target="_blank">
                <motion.button
                  className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-6 py-3 rounded text-sm font-semibold flex items-center gap-2 transition-all duration-200 min-h-[44px]"
                  whileHover={!window.matchMedia('(prefers-reduced-motion: reduce)').matches ? { scale: 1.05 } : {}}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink size={14} />
                  Visit
                </motion.button>
              </Link>

              <Link href="/blog">
                <motion.button
                  className="border border-slate-600 hover:bg-slate-700/50 text-slate-100 px-6 py-3 rounded text-sm font-semibold flex items-center gap-2 transition-all duration-200 min-h-[44px]"
                  whileHover={!window.matchMedia('(prefers-reduced-motion: reduce)').matches ? { scale: 1.05 } : {}}
                  whileTap={{ scale: 0.95 }}
                >
                  Posts
                  <ArrowRight size={14} />
                </motion.button>
              </Link>
            </div>

            <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 backdrop-blur-sm border border-green-400/20 rounded p-2">
              <p className="text-green-300 text-xs">
                <strong>Platform:</strong> Next.js, React, Tailwind
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
