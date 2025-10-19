'use client'

import { motion } from 'framer-motion'
import { ExternalLink, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const latestWorks = [
  {
    id: 1,
    title: 'Emmdra',
    description: 'Nigerian lifestyle and e-commerce platform empowering users through authentic fashion and creative workshops.',
    image: '/images/EmmdraScreenshot1.png',
    category: 'E-commerce & Lifestyle',
    liveUrl: 'https://emmdra-empire.vercel.app/',
    detailsUrl: '/portfolio-ventures#emmdra'
  },
  {
    id: 2,
    title: 'PoshPOULE Farms Suite',
    description: 'Comprehensive farm management and e-commerce platform for organic poultry and fresh produce.',
    image: '/images/poshpouleFarmsErpSuiteScreenshot4.png',
    category: 'Agriculture & ERP',
    liveUrl: 'https://poshpoule-farms.vercel.app',
    detailsUrl: '/portfolio-ventures#poshpoule'
  },
  {
    id: 3,
    title: 'CEOTR Ltd ERP Suite',
    description: 'Enterprise resource planning platform for construction, IT, and business management solutions.',
    image: '/images/ceotrScreenshot1.png',
    category: 'Business & ERP',
    liveUrl: 'https://ceotr-ltd-erp-suite.vercel.app/',
    detailsUrl: '/portfolio-ventures#ceotr'
  },
  {
    id: 4,
    title: 'Zereths',
    description: 'Modern web platform for cake ordering, recipes, and bakery services with custom design options.',
    image: '/images/ZerethScreenshot1.png',
    category: 'Food & Bakery',
    liveUrl: 'https://zereth-cakes-hub.vercel.app/',
    detailsUrl: '/portfolio-ventures#zereth'
  }
]

export function LatestWorks() {
  return (
    <section className="section-padding bg-slate-900/50" aria-labelledby="latest-works-heading">
      <div className="container-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 id="latest-works-heading" className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">
            My Latest{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Works
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto text-balance">
            Showcasing innovative solutions across e-commerce, agriculture, business management, and lifestyle platforms
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {latestWorks.map((work, index) => (
            <motion.article
              key={work.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 focus-within:ring-2 focus-within:ring-blue-400 focus-within:ring-offset-2 focus-within:ring-offset-slate-900"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                  <div className="text-6xl font-bold text-white/20 transition-transform group-hover:scale-110">
                    {work.title.charAt(0)}
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                {/* Category badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm rounded-full border border-white/20">
                    {work.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors line-clamp-1">
                  {work.title}
                </h3>
                <p className="text-gray-400 text-sm mb-6 line-clamp-3 leading-relaxed">
                  {work.description}
                </p>

                {/* Action buttons */}
                <div className="flex gap-3">
                  <Link href={work.liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <motion.button
                      className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-800"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      aria-label={`View live demo of ${work.title}`}
                    >
                      <ExternalLink size={16} aria-hidden="true" />
                      Live Demo
                    </motion.button>
                  </Link>

                  <Link href={work.detailsUrl} className="flex-1">
                    <motion.button
                      className="w-full border border-white/20 hover:bg-white/10 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-slate-800"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      aria-label={`View details of ${work.title}`}
                    >
                      Details
                      <ArrowRight size={16} aria-hidden="true" />
                    </motion.button>
                  </Link>
                </div>
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" aria-hidden="true"></div>
            </motion.article>
          ))}
        </div>

        {/* View all button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/portfolio-ventures">
            <motion.button
              className="btn-primary flex items-center gap-3 mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="View all projects and ventures"
            >
              View All Projects & Ventures
              <ArrowRight size={20} aria-hidden="true" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
