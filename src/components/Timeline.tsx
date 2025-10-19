'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const timelineImages = [
  { id: 1, title: 'Curious Kid', image: '/images/curiousKidAboutImage1.png', year: 'Early Years' },
  { id: 2, title: 'Early 2000s', image: '/images/aboutImage2Early2000s.png', year: '2000s' },
  { id: 3, title: 'Hacking Years', image: '/images/aboutImage3EarlyHackingYrs.png', year: '2010s' },
  { id: 4, title: 'Group Project', image: '/images/aboutImage4GroupProject.png', year: 'University' },
  { id: 5, title: 'Road Biking', image: '/images/AboutImage5Roadbiking.png', year: 'Active Life' },
  { id: 6, title: 'Strategic Leader', image: '/images/aboutImage6StrategistLeader.png', year: 'Leadership' },
  { id: 7, title: 'In Office', image: '/images/aboutImage7InOffice.png', year: 'Present' }
]

export function Timeline() {
  return (
    <section className="py-20 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My Journey Through{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Time
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A visual timeline of my evolution from curious kid to software engineer and business strategist
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4 md:gap-6">
          {timelineImages.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-xl bg-slate-800/50 backdrop-blur-sm border border-white/10 aspect-square">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Title overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-semibold text-sm mb-1">{item.title}</h3>
                  <p className="text-gray-300 text-xs">{item.year}</p>
                </div>
              </div>

              {/* Connecting line (except for last item) */}
              {index < timelineImages.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transform -translate-y-1/2"></div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Timeline connector for mobile */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
          className="lg:hidden mt-8 relative"
        >
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 rounded-full"></div>
        </motion.div>
      </div>
    </section>
  )
}
