'use client'

import { motion } from 'framer-motion'
import { ExternalLink, ArrowRight, Eye, Github } from 'lucide-react'
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
    detailsUrl: '/portfolio-ventures#emmdra',
    gradient: 'from-purple-500 to-pink-500',
    tech: ['Next.js', 'Supabase', 'Tailwind']
  },
  {
    id: 2,
    title: 'PoshPOULE Farms Suite',
    description: 'Comprehensive farm management and e-commerce platform for organic poultry and fresh produce.',
    image: '/images/poshpouleFarmsErpSuiteScreenshot4.webp',
    category: 'Agriculture & ERP',
    liveUrl: 'https://poshpoule-farms.vercel.app',
    detailsUrl: '/portfolio-ventures#poshpoule',
    gradient: 'from-green-500 to-emerald-500',
    tech: ['Next.js', 'Prisma', 'PostgreSQL']
  },
  {
    id: 3,
    title: 'CEOTR Ltd ERP Suite',
    description: 'Enterprise resource planning platform for construction, IT, and business management solutions.',
    image: '/images/ceotrScreenshot1.webp',
    category: 'Business & ERP',
    liveUrl: 'https://ceotr-ltd-erp-suite.vercel.app/',
    detailsUrl: '/portfolio-ventures#ceotr',
    gradient: 'from-blue-500 to-indigo-500',
    tech: ['Next.js', 'TypeScript', 'Tailwind']
  },
  {
    id: 4,
    title: 'Zereths',
    description: 'Modern web platform for cake ordering, recipes, and bakery services with custom design options.',
    image: '/images/ZerethScreenshot1.webp',
    category: 'Food & Bakery',
    liveUrl: 'https://zereth-cakes-hub.vercel.app/',
    detailsUrl: '/portfolio-ventures#zereth',
    gradient: 'from-orange-500 to-red-500',
    tech: ['Next.js', 'Framer Motion', 'Tailwind']
  }
]

export function LatestWorks() {
  return (
    <section className="section-padding gradient-primary" aria-labelledby="latest-works-heading">
      <div className="container-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            id="latest-works-heading"
            className="heading-xl mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            My Latest{' '}
            <span className="gradient-text-accent">
              Works
            </span>
          </motion.h2>
          <motion.p
            className="text-large text-slate-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Showcasing innovative solutions across e-commerce, agriculture, business management, and lifestyle platforms
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" role="grid" aria-label="Latest projects grid">
          {latestWorks.map((work, index) => (
            <motion.article
              key={work.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.4, 0, 0.2, 1]
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -12,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="group relative glass-card card-hover overflow-hidden focus-within:ring-2 focus-within:ring-ceo-500 focus-within:ring-offset-2"
              role="gridcell"
              tabIndex={0}
            >
              {/* Enhanced Image Section */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={work.image}
                  alt={`${work.title} - ${work.description}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading="lazy"
                  className="object-cover transition-all duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${work.gradient} opacity-20 group-hover:opacity-10 transition-opacity duration-300`}></div>

                {/* Enhanced Category badge */}
                <div className="absolute top-4 right-4">
                  <motion.span
                    className="px-3 py-1.5 bg-white/90 backdrop-blur-sm text-slate-800 text-xs font-semibold rounded-full border border-slate-200/50 shadow-lg"
                    whileHover={{ scale: 1.05 }}
                  >
                    {work.category}
                  </motion.span>
                </div>

                {/* Tech stack indicators */}
                <div className="absolute bottom-4 left-4 flex gap-1">
                  {work.tech.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 bg-white/80 backdrop-blur-sm text-slate-700 text-xs rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Enhanced Content Section */}
              <div className="p-6">
                <motion.h3
                  className="heading-sm mb-3 group-hover:text-ceo-700 transition-colors duration-300 line-clamp-1"
                  whileHover={{ x: 4 }}
                >
                  {work.title}
                </motion.h3>
                <p className="text-small mb-6 line-clamp-3 leading-relaxed">
                  {work.description}
                </p>

                {/* Enhanced Action buttons */}
                <div className="flex gap-3">
                  <Link href={work.liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <motion.button
                      className="w-full bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 hover:from-slate-800 hover:via-slate-700 hover:to-slate-800 text-white px-4 py-2.5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 group/btn"
                      whileHover={{
                        scale: 1.02,
                        boxShadow: "0 10px 25px rgba(15, 23, 42, 0.2)"
                      }}
                      whileTap={{ scale: 0.98 }}
                      aria-label={`View live demo of ${work.title} (opens in new tab)`}
                    >
                      <ExternalLink size={16} aria-hidden="true" className="group-hover/btn:translate-x-0.5 transition-transform duration-200" />
                      Live Demo
                    </motion.button>
                  </Link>

                  <Link href={work.detailsUrl} className="flex-1">
                    <motion.button
                      className="w-full border-2 border-slate-300 hover:border-ceo-500 hover:bg-ceo-50 text-slate-700 hover:text-ceo-700 px-4 py-2.5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-ceo-500 focus:ring-offset-2 group/btn"
                      whileHover={{
                        scale: 1.02,
                        borderColor: "rgb(234 179 8)"
                      }}
                      whileTap={{ scale: 0.98 }}
                      aria-label={`View details of ${work.title}`}
                    >
                      <Eye size={16} aria-hidden="true" className="group-hover/btn:scale-110 transition-transform duration-200" />
                      Details
                    </motion.button>
                  </Link>
                </div>
              </div>

              {/* Enhanced Hover effect overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t ${work.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}></div>

              {/* Decorative corner elements */}
              <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.article>
          ))}
        </div>

        {/* Enhanced View all button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/portfolio-ventures">
            <motion.button
              className="btn-primary flex items-center gap-3 mx-auto px-8 py-4 text-lg font-semibold relative overflow-hidden group"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(234, 179, 8, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              aria-label="View all projects and ventures"
            >
              <span className="relative z-10 flex items-center gap-3">
                View All Projects & Ventures
                <ArrowRight size={20} aria-hidden="true" className="group-hover:translate-x-1 transition-transform duration-200" />
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-ceo-600 to-ceo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
                animate={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
