'use client'

import { motion } from 'framer-motion'
import { Mail, MessageCircle, Clock } from 'lucide-react'

export function ContactHero() {
  return (
    <section className="py-8 pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">
            Get In{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Touch
            </span>
          </h1>
          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed max-w-xl mx-auto">
            Ready to discuss your project? I&apos;ll respond within 24 hours with expert insights tailored to your needs.
          </p>
        </motion.div>

        {/* Contact Methods - Compact and Professional */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white/5 dark:bg-slate-800/30 backdrop-blur-sm border border-white/10 dark:border-slate-700/30 rounded-lg p-4 text-center hover:border-blue-400/30 transition-all duration-300 hover:bg-white/10 dark:hover:bg-slate-800/50"
          >
            <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
              <Mail className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-1 text-sm">Email</h3>
            <a
              href="mailto:e.ogugua.dev@gmail.com"
              className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-xs"
            >
              e.ogugua.dev@gmail.com
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/5 dark:bg-slate-800/30 backdrop-blur-sm border border-white/10 dark:border-slate-700/30 rounded-lg p-4 text-center hover:border-green-400/30 transition-all duration-300 hover:bg-white/10 dark:hover:bg-slate-800/50"
          >
            <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
              <MessageCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="font-semibold text-white mb-1 text-sm">Quick Response</h3>
            <p className="text-slate-600 dark:text-slate-400 text-xs">Within 24 hours</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white/5 dark:bg-slate-800/30 backdrop-blur-sm border border-white/10 dark:border-slate-700/30 rounded-lg p-4 text-center hover:border-purple-400/30 transition-all duration-300 hover:bg-white/10 dark:hover:bg-slate-800/50"
          >
            <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
              <Clock className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="font-semibold text-white mb-1 text-sm">Available</h3>
            <p className="text-slate-600 dark:text-slate-400 text-xs">Global Time Zones</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
