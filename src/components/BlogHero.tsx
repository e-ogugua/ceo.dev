'use client'

import { motion } from 'framer-motion'
import { BookOpen, TrendingUp, Heart } from 'lucide-react'

export function BlogHero() {
  return (
    <section className="py-20 pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            CEOwrites{' '}
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Blog
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Authentic insights on business strategy, technology trends, leadership, and personal growth. Join me on a journey of continuous learning and shared wisdom as I explore the intersection of code, commerce, and human connection.
          </p>
        </motion.div>

        {/* Blog Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center group"
          >
            <div className="bg-blue-500/10 backdrop-blur-sm border border-blue-400/20 rounded-xl p-6 hover:border-blue-400/40 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Technology & Code</h3>
              <p className="text-gray-400 text-sm">Software engineering insights, tutorials, and best practices</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center group"
          >
            <div className="bg-purple-500/10 backdrop-blur-sm border border-purple-400/20 rounded-xl p-6 hover:border-purple-400/40 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Business Strategy</h3>
              <p className="text-gray-400 text-sm">Entrepreneurial insights, market analysis, and growth strategies</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center group"
          >
            <div className="bg-green-500/10 backdrop-blur-sm border border-green-400/20 rounded-xl p-6 hover:border-green-400/40 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Personal Growth</h3>
              <p className="text-gray-400 text-sm">Leadership principles, life lessons, and personal development</p>
            </div>
          </motion.div>
        </div>

        {/* Featured Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">6</div>
            <div className="text-gray-400 text-sm">Featured Articles</div>
          </div>

          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">3</div>
            <div className="text-gray-400 text-sm">Categories</div>
          </div>

          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">1000+</div>
            <div className="text-gray-400 text-sm">Words of Wisdom</div>
          </div>

          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">Weekly</div>
            <div className="text-gray-400 text-sm">New Insights</div>
          </div>
        </motion.div>

        {/* Newsletter CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center space-x-6 bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-xl p-8">
            <div className="text-5xl">☕</div>
            <div className="text-left">
              <div className="text-xl font-semibold text-white mb-2">Coffee & Conversation</div>
              <div className="text-gray-400">Get my latest thoughts delivered to your inbox</div>
            </div>
            <button className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
