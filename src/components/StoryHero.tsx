'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export function StoryHero() {
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
              My Full{' '}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Story
              </span>
            </h1>

            <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
              <p>
                Journey through my evolution from a curious kid with a passion for problem-solving to becoming a software engineer and business strategist. Each chapter represents a pivotal moment in my development.
              </p>

              <p>
                From my early fascination with technology and hacking in the 2000s, to leading group projects at university, to becoming a road biking enthusiast and strategic leader in business - every experience has shaped who I am today.
              </p>

              <p>
                Click through the interactive timeline below to explore my journey in detail, see the key moments that defined my path, and understand how I&apos;ve grown both personally and professionally.
              </p>
            </div>
          </motion.div>

          {/* Featured Story Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="relative">
              <Image
                src="/images/aboutMyFullStoryImage.webp"
                alt="Emmanuel's Full Story Journey"
                width={600}
                height={400}
                loading="lazy"
                className="w-full h-auto rounded-2xl backdrop-blur-sm border border-slate-700/50"
              />

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-secondary to-primary rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
