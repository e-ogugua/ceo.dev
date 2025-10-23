'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export function AboutHero() {
  return (
    <section className="py-8 pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <h1 className="text-2xl md:text-3xl font-bold text-slate-100 mb-2">
              About{' '}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Emmanuel
              </span>
            </h1>

            <div className="space-y-1.5 text-sm text-slate-300 leading-relaxed">
              <p>
                I bridge complex technical solutions with strategic business growth, crafting innovative digital experiences and driving entrepreneurial ventures.
              </p>

              <p>
                Since 2005, I&apos;ve solved problems with simple, beautiful, and intuitive designs.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-3"
            >
              <Link href="/story">
                <motion.button
                  className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-4 py-2 rounded text-sm font-semibold transition-all duration-200 hover:scale-105 shadow-md hover:shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View My Full Story
                </motion.button>
              </Link>
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
            <div className="relative aspect-[3/4] w-full max-w-sm mx-auto">
              <Image
                src="/images/shortAboutSideimage1.webp"
                alt="Emmanuel Ogugua"
                fill
                sizes="(max-width: 1024px) 100vw, 400px"
                loading="eager"
                className="object-cover object-center rounded-xl shadow-lg"
                priority
              />

              {/* Subtle decorative elements */}
              <div className="absolute -top-1 -right-1 w-8 h-8 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full opacity-10"></div>
              <div className="absolute -bottom-1 -left-1 w-6 h-6 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-10"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
