'use client'

import { motion } from 'framer-motion'
import { ExternalLink, ArrowRight, Eye } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const latestWorks = [
  {
    id: 1,
    title: 'Emmdra',
    description: 'Nigerian lifestyle and e-commerce platform empowering users through authentic fashion and creative workshops.',
    image: '/images/optimized/EmmdraScreenshot1.webp',
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
    image: '/images/optimized/poshpouleFarmsErpSuiteScreenshot4.webp',
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
    image: '/images/optimized/ceotrScreenshot1.webp',
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
    image: '/images/optimized/ZerethScreenshot1.webp',
    category: 'Food & Bakery',
    liveUrl: 'https://zereth-cakes-hub.vercel.app/',
    detailsUrl: '/portfolio-ventures#zereth',
    gradient: 'from-orange-500 to-red-500',
    tech: ['Next.js', 'Framer Motion', 'Tailwind']
  }
]

export function LatestWorks() {
  return (
    <section className="py-8 lg:py-12 bg-slate-50/40 dark:bg-slate-900/90 transition-all duration-500" aria-labelledby="latest-works-heading">
      <div className="container-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.h2
            id="latest-works-heading"
            className="text-2xl md:text-3xl lg:text-4xl font-semibold text-slate-900 dark:text-slate-100 mb-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Some of My Latest{' '}
            <span className="text-primary font-bold">
              Work
            </span>
          </motion.h2>
          <motion.div
            className="w-16 h-0.5 bg-primary mx-auto"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          ></motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" role="grid" aria-label="Latest projects grid">
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
              className="group relative bg-white/95 backdrop-blur-sm border border-slate-200/60 rounded-2xl overflow-hidden focus-within:ring-2 focus-within:ring-primary/50 focus-within:ring-offset-2 shadow-xl hover:shadow-2xl transition-all duration-500 dark:bg-slate-800/95 dark:border-slate-700/60 hover:-translate-y-2"
              role="gridcell"
              tabIndex={0}
            >
              {/* Enhanced Image Section */}
              <div className="relative h-44 overflow-hidden">
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
                <div className="absolute top-3 right-3">
                  <motion.span
                    className="px-3 py-1.5 bg-white/95 backdrop-blur-md text-slate-800 text-xs font-bold rounded-full border border-slate-200/60 shadow-lg dark:bg-slate-800/95 dark:text-slate-200 dark:border-slate-600/60"
                    whileHover={{ scale: 1.05 }}
                  >
                    {work.category}
                  </motion.span>
                </div>

                {/* Tech stack indicators */}
                <div className="absolute bottom-3 left-3 flex gap-1.5">
                  {work.tech.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 bg-white/85 backdrop-blur-sm text-slate-700 text-xs font-semibold rounded-full border border-slate-200/50 shadow-sm dark:bg-slate-800/85 dark:text-slate-300 dark:border-slate-600/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Enhanced Content Section */}
              <div className="p-5">
                <motion.h3
                  className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-1 text-slate-900 dark:text-slate-100 leading-tight"
                  whileHover={{ x: 4 }}
                >
                  {work.title}
                </motion.h3>
                <p className="text-sm mb-5 line-clamp-2 leading-relaxed text-slate-600 dark:text-slate-300 font-medium">
                  {work.description}
                </p>

                {/* Enhanced Action buttons */}
                <div className="flex gap-3">
                  <Link href={work.liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <motion.button
                      className="w-full bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 hover:from-primary hover:via-primary/90 hover:to-primary text-white px-4 py-3 rounded-lg text-sm font-bold flex items-center justify-center gap-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 group/btn shadow-lg hover:shadow-xl"
                      whileHover={{
                        scale: 1.02,
                        boxShadow: "0 15px 30px rgba(0, 163, 255, 0.3)"
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
                      className="w-full border-2 border-slate-300 hover:border-primary hover:bg-primary/5 text-slate-800 hover:text-primary px-4 py-3 rounded-lg text-sm font-bold flex items-center justify-center gap-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 group/btn dark:border-slate-600 dark:text-slate-200 dark:hover:bg-primary/10 dark:hover:text-primary shadow-md hover:shadow-lg"
                      whileHover={{
                        scale: 1.02,
                        borderColor: "rgb(0, 163, 255)"
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
          className="text-center mt-6"
        >
          <Link href="/portfolio-ventures">
            <motion.button
              className="btn-primary flex items-center gap-2 mx-auto px-6 py-3 text-base font-semibold relative overflow-hidden group"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0, 163, 255, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              aria-label="View all projects and ventures"
            >
              <span className="relative z-10 flex items-center gap-2">
                View All Projects & Ventures
                <ArrowRight size={20} aria-hidden="true" className="group-hover:translate-x-1 transition-transform duration-200" />
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
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
