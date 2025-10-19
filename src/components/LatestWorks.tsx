'use client'

import { motion } from 'framer-motion'
import { ExternalLink, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const latestWorks = [
  {
    id: 1,
    title: 'Emmdra',
    description: 'Nigerian lifestyle and e-commerce platform empowering users through authentic fashion and creative workshops.',
    image: '/images/EmmdraScreenshot1.webp',
    category: 'E-commerce & Lifestyle',
    liveUrl: 'https://emmdra-empire.vercel.app/',
    detailsUrl: '/portfolio-ventures#emmdra'
  },
  {
    id: 2,
    title: 'PoshPOULE Farms Suite',
    description: 'Comprehensive farm management and e-commerce platform for organic poultry and fresh produce.',
    image: '/images/poshpouleFarmsErpSuiteScreenshot4.webp',
    category: 'Agriculture & ERP',
    liveUrl: 'https://poshpoule-farms.vercel.app',
    detailsUrl: '/portfolio-ventures#poshpoule'
  },
  {
    id: 3,
    title: 'CEOTR Ltd ERP Suite',
    description: 'Enterprise resource planning platform for construction, IT, and business management solutions.',
    image: '/images/ceotrScreenshot1.webp',
    category: 'Business & ERP',
    liveUrl: 'https://ceotr-ltd-erp-suite.vercel.app/',
    detailsUrl: '/portfolio-ventures#ceotr'
  },
  {
    id: 4,
    title: 'Zereths',
    description: 'Modern web platform for cake ordering, recipes, and bakery services with custom design options.',
    image: '/images/ZerethScreenshot1.webp',
    category: 'Food & Bakery',
    liveUrl: 'https://zereth-cakes-hub.vercel.app/',
    detailsUrl: '/portfolio-ventures#zereth'
  }
]

export function LatestWorks() {
  return (
    <section className="py-8 lg:py-12 bg-gradient-to-br from-slate-50 via-white to-slate-100" aria-labelledby="latest-works-heading">
      <div className="container-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <h2 id="latest-works-heading" className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 text-balance">
            My Latest{' '}
            <span className="bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-600 bg-clip-text text-transparent">
              Works
            </span>
          </h2>
          <p className="text-xl text-slate-700 max-w-3xl mx-auto text-balance">
            Showcasing innovative solutions across e-commerce, agriculture, business management, and lifestyle platforms
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8" role="grid" aria-label="Latest projects grid">
          {latestWorks.map((work, index) => (
            <motion.article
              key={work.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative bg-white/80 backdrop-blur-xl rounded-2xl overflow-hidden border border-slate-200/50 hover:border-amber-300/50 transition-all duration-500 focus-within:ring-2 focus-within:ring-amber-500 focus-within:ring-offset-2 focus-within:ring-offset-slate-50 hover-lift hover-glow"
              role="gridcell"
              tabIndex={0}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={work.image}
                  alt={`${work.title} - ${work.description}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading="lazy"
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                {/* Category badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-amber-100/80 backdrop-blur-sm text-amber-800 text-sm rounded-full border border-amber-200/50 font-medium">
                    {work.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-700 transition-colors line-clamp-1">
                  {work.title}
                </h3>
                <p className="text-slate-600 text-sm mb-6 line-clamp-3 leading-relaxed">
                  {work.description}
                </p>

                {/* Action buttons */}
                <div className="flex gap-3">
                  <Link href={work.liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <motion.button
                      className="w-full bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 hover:from-slate-900 hover:via-slate-800 hover:to-slate-900 text-white px-4 py-2 rounded-xl text-sm font-medium flex items-center justify-center gap-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:ring-offset-white hover-lift"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      aria-label={`View live demo of ${work.title} (opens in new tab)`}
                    >
                      <ExternalLink size={16} aria-hidden="true" />
                      Live Demo
                    </motion.button>
                  </Link>

                  <Link href={work.detailsUrl} className="flex-1">
                    <motion.button
                      className="w-full border-2 border-slate-300 hover:border-amber-500 hover:bg-amber-50 text-slate-700 hover:text-amber-700 px-4 py-2 rounded-xl text-sm font-medium flex items-center justify-center gap-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-white"
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
              <div className="absolute inset-0 bg-gradient-to-t from-amber-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" aria-hidden="true"></div>
            </motion.article>
          ))}
        </div>

        {/* View all button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-6"
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
