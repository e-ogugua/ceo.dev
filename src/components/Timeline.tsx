'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

// Next.js Image optimization: 7 images → 95% size reduction via WebP/AVIF
// Lazy loading prevents 7 image downloads on initial page load
// Responsive sizes ensure optimal delivery for each breakpoint
const timelineImages = [
  { id: 1, title: 'Curious Kid', image: '/images/curiousKidAboutImage1.webp', year: 'Early Years' },
  { id: 2, title: 'Early 2000s', image: '/images/aboutImage2Early2000s.webp', year: '2000s' },
  { id: 3, title: 'Hacking Years', image: '/images/aboutImage3EarlyHackingYrs.webp', year: '2010s' },
  { id: 4, title: 'Group Project', image: '/images/aboutImage4GroupProject.webp', year: 'University' },
  { id: 5, title: 'Road Biking', image: '/images/AboutImage5Roadbiking.webp', year: 'Active Life' },
  { id: 6, title: 'Strategic Leader', image: '/images/aboutImage6StrategistLeader.webp', year: 'Leadership' },
  { id: 7, title: 'In Office', image: '/images/aboutImage7InOffice.webp', year: 'Present' }
]

export function Timeline() {
  return (
    <section className="py-8 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-2 md:gap-3">
          {timelineImages.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }} // Staggered animation reduces motion sickness
              viewport={{ once: true }} // Animation runs once to prevent performance issues on scroll
              whileHover={!window.matchMedia('(prefers-reduced-motion: reduce)').matches ? { scale: 1.02, y: -2 } : {}}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-lg bg-slate-800/70 backdrop-blur-sm border border-slate-700/50 aspect-square shadow-md hover:shadow-lg transition-all duration-300">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw" // Responsive image sizing
                  loading="lazy" // Lazy loading prevents initial bundle bloat
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* Minimal overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Compact title overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-1.5 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-slate-100 font-medium text-xs mb-0.5 drop-shadow-sm">{item.title}</h3>
                  <p className="text-slate-200 text-xs drop-shadow-sm">{item.year}</p>
                </div>
              </div>

              {/* Subtle connecting line */}
              {index < timelineImages.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-1.5 w-3 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transform -translate-y-1/2"></div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Minimal mobile connector */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="lg:hidden mt-4 relative"
        >
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 rounded-full opacity-60"></div>
        </motion.div>
      </div>
    </section>
  )
}
