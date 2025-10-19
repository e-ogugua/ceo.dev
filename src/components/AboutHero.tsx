'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export function AboutHero() {
  return (
    <section className="py-20 pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Emmanuel
              </span>
            </h1>

            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                I am a versatile Software Engineer and Strategic Business Strategist based in Enugu state, Nigeria. My expertise lies in bridging the gap between complex technical solutions and impactful business growth.
              </p>

              <p>
                With a passion for crafting innovative digital experiences and driving entrepreneurial ventures, I&apos;m dedicated to building the future—one line of code and one strategic vision at a time.
              </p>

              <p>
                Since 2005, I&apos;ve thrived on solving complex problems with simple, beautiful, and intuitive designs. When I&apos;m not immersed in code or strategy, you&apos;ll find me exploring hobbies like cooking, gardening, cycling, and sharpening my mind with puzzles and chess games.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105">
                View My Full Story
              </button>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="relative">
              <Image
                src="/images/shortAboutSideimage1.webp"
                alt="Emmanuel Ogugua"
                width={400}
                height={400}
                className="w-full h-96 object-cover rounded-2xl backdrop-blur-sm border border-white/10"
              />

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-600 rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
