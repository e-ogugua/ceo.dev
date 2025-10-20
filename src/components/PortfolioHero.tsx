'use client'

import { motion } from 'framer-motion'
import { Code, TrendingUp, Users, Lightbulb } from 'lucide-react'

export function PortfolioHero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <section className="py-12 pt-24 bg-slate-50/30 dark:bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Portfolio &{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Ventures
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-6 max-w-3xl mx-auto leading-relaxed">
            Explore the intersection of my technical expertise and strategic vision. This page showcases key software development projects where I&apos;ve crafted innovative solutions, alongside entrepreneurial ventures where I&apos;ve driven growth and built compelling brands from the ground up.
          </p>
        </motion.div>

        {/* Feature highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center group"
          >
            <div className="bg-gradient-to-br from-blue-500/20 via-blue-400/10 to-blue-500/5 dark:from-blue-400/30 dark:via-blue-300/20 dark:to-blue-400/10 backdrop-blur-xl border border-blue-400/30 dark:border-blue-300/40 rounded-xl p-5 hover:border-blue-400/50 dark:hover:border-blue-300/60 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                <Code className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100 mb-1">Software Engineering</h3>
              <p className="text-slate-600 dark:text-slate-300 text-xs">Full-stack development and technical innovation</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center group"
          >
            <div className="bg-gradient-to-br from-purple-500/20 via-purple-400/10 to-purple-500/5 dark:from-purple-400/30 dark:via-purple-300/20 dark:to-purple-400/10 backdrop-blur-xl border border-purple-400/30 dark:border-purple-300/40 rounded-xl p-5 hover:border-purple-400/50 dark:hover:border-purple-300/60 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100 mb-1">Business Strategy</h3>
              <p className="text-slate-600 dark:text-slate-300 text-xs">Strategic planning and market development</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center group"
          >
            <div className="bg-gradient-to-br from-green-500/20 via-green-400/10 to-green-500/5 dark:from-green-400/30 dark:via-green-300/20 dark:to-green-400/10 backdrop-blur-xl border border-green-400/30 dark:border-green-300/40 rounded-xl p-5 hover:border-green-400/50 dark:hover:border-green-300/60 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100 mb-1">Team Leadership</h3>
              <p className="text-slate-600 dark:text-slate-300 text-xs">Building and managing high-performing teams</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center group"
          >
            <div className="bg-gradient-to-br from-orange-500/20 via-orange-400/10 to-orange-500/5 dark:from-orange-400/30 dark:via-orange-300/20 dark:to-orange-400/10 backdrop-blur-xl border border-orange-400/30 dark:border-orange-300/40 rounded-xl p-5 hover:border-orange-400/50 dark:hover:border-orange-300/60 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                <Lightbulb className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100 mb-1">Innovation</h3>
              <p className="text-slate-600 dark:text-slate-300 text-xs">Creative solutions and forward-thinking approaches</p>
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
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <motion.button
              onClick={() => scrollToSection('development-portfolio')}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200 hover:scale-105 hover:shadow-xl backdrop-blur-sm border border-blue-400/30 hover:border-blue-400/50 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Development Projects
            </motion.button>
            <motion.button
              onClick={() => scrollToSection('business-ventures')}
              className="border border-primary/40 hover:border-primary/60 hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10 text-slate-900 dark:text-slate-100 hover:text-white px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200 hover:scale-105 backdrop-blur-sm bg-white/10 dark:bg-slate-800/20 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Business Ventures
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
