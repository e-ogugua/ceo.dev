'use client'

import { motion } from 'framer-motion'
import { Code, TrendingUp, Users, Lightbulb } from 'lucide-react'

export function PortfolioHero() {
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
            Portfolio &{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Ventures
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Explore the intersection of my technical expertise and strategic vision. This page showcases key software development projects where I&apos;ve crafted innovative solutions, alongside entrepreneurial ventures where I&apos;ve driven growth and built compelling brands from the ground up.
          </p>
        </motion.div>

        {/* Feature highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center group"
          >
            <div className="bg-blue-500/10 backdrop-blur-sm border border-blue-400/20 rounded-xl p-6 hover:border-blue-400/40 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Software Engineering</h3>
              <p className="text-gray-400 text-sm">Full-stack development and technical innovation</p>
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
              <p className="text-gray-400 text-sm">Strategic planning and market development</p>
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
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Team Leadership</h3>
              <p className="text-gray-400 text-sm">Building and managing high-performing teams</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center group"
          >
            <div className="bg-orange-500/10 backdrop-blur-sm border border-orange-400/20 rounded-xl p-6 hover:border-orange-400/40 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Innovation</h3>
              <p className="text-gray-400 text-sm">Creative solutions and forward-thinking approaches</p>
            </div>
          </motion.div>
        </div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:scale-105">
              View Development Projects
            </button>
            <button className="border border-white/20 hover:bg-white/10 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:scale-105">
              Explore Business Ventures
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
