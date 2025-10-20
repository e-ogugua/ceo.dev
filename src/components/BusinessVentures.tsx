'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Building, Calendar, MapPin } from 'lucide-react'
import Link from 'next/link'

const businessVentures = [
  {
    id: 1,
    title: 'Emmdra Empire & Lifestyle',
    role: 'Co-founder',
    description: 'Nigeria\'s premier lifestyle destination, featuring a complete e-commerce platform with shopping cart functionality, admin dashboard, email notifications, and mobile-responsive design.',
    image: '/images/EmmdraLogo.png',
    category: 'E-commerce & Lifestyle',
    duration: '2023 – Present',
    location: 'Nigeria',
    impact: 'Led business development and strategic planning for authentic Nigerian fashion and lifestyle brand',
    keyLearnings: ['Brand Strategy', 'E-commerce Development', 'Market Analysis'],
    website: 'https://emmdra-empire.vercel.app/',
    year: '2023'
  },
  {
    id: 2,
    title: 'PoshPOULE Farms Ltd',
    role: 'Executive Director',
    description: 'Comprehensive e-commerce and ERP platform for PoshPOULE Farms Ltd, specializing in organic poultry, fresh eggs, vegetables, and farm-fresh produce with multi-currency support.',
    image: '/images/poshpoule-logo1.png',
    category: 'Agriculture & E-commerce',
    duration: 'Sept 2014 – Present',
    location: 'Enugu, Nigeria',
    impact: 'Streamlined operations to increase productivity by 20%, managed 10+ person team, achieved 30% revenue increase',
    keyLearnings: ['Operations Management', 'Team Leadership', 'Process Optimization'],
    website: 'https://poshpoule-farms.vercel.app',
    year: '2014'
  },
  {
    id: 3,
    title: 'CEOTR Ltd',
    role: 'Co-Founder & Executive Director',
    description: 'Enterprise resource planning platform for business management, portfolio showcase, and client engagement tailored for construction, IT, consulting, and software development companies.',
    image: '/images/ceotr-logo-white.png',
    category: 'Business & ERP',
    duration: 'Apr 2016 – Present',
    location: 'Enugu, Nigeria',
    impact: 'Delivered construction and IT development projects worth ₦180M+, improved project delivery by 25%',
    keyLearnings: ['Strategic Planning', 'Business Development', 'Corporate Innovation'],
    website: 'https://ceotr-ltd-erp-suite.vercel.app/',
    year: '2016'
  },
  {
    id: 4,
    title: 'Zereth Foods',
    role: 'IT Integration Lead',
    description: 'Modern web platform for cake ordering, recipes, and bakery services with custom design options and online ordering system.',
    image: '/images/Zereth-logo1.jpeg',
    category: 'Food & Bakery',
    duration: '2023 – Present',
    location: 'Enugu, Nigeria',
    impact: 'Led IT integration and digital transformation for bakery business operations',
    keyLearnings: ['Digital Transformation', 'Process Automation', 'Customer Experience'],
    website: 'https://zereth-cakes-hub.vercel.app/',
    year: '2023'
  },
  {
    id: 5,
    title: 'Roka Table Water',
    role: 'Co-founder & Business Development',
    description: 'Strategic revitalization and rebranding of Roka Table Water business with operational improvements and market expansion initiatives.',
    image: '/images/Rokatablewater.jpeg',
    category: 'Manufacturing & Distribution',
    duration: 'Nov 2023 – Present',
    location: 'Nigeria',
    impact: 'Led operational improvements, installation of production systems, and market expansion strategies',
    keyLearnings: ['Business Transformation', 'Supply Chain Management', 'Strategic Planning'],
    website: '#',
    year: '2023'
  },
  {
    id: 6,
    title: 'CEOWrites',
    role: 'Founder & Owner',
    description: 'Comprehensive blog platform showcasing authentic insights on business strategy, technology trends, leadership, and personal growth.',
    image: '/images/ceowrites-emmanuelBlogHubLogo.png',
    category: 'Blog & Personal Branding',
    duration: '2024 – Present',
    location: 'Nigeria',
    impact: 'Built personal brand platform highlighting expertise in African tech innovation and business growth',
    keyLearnings: ['Content Strategy', 'Personal Branding', 'Digital Marketing'],
    website: 'https://ceowrites-emmanuel-blog-hub.vercel.app/',
    year: '2024'
  }
]

export function BusinessVentures() {
  return (
    <section className="py-20 bg-slate-50/50 dark:bg-slate-900/85">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-6">
            Ventures & Business{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Leadership
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Entrepreneurial drive and strategic impact across multiple industries and ventures
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {businessVentures.map((venture, index) => (
            <motion.div
              key={venture.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group relative bg-gradient-to-br from-slate-800/60 via-slate-800/50 to-slate-900/60 dark:from-slate-800/80 dark:via-slate-800/70 dark:to-slate-900/80 backdrop-blur-xl rounded-xl overflow-hidden border border-slate-700/50 dark:border-slate-600/60 hover:border-slate-600/70 dark:hover:border-slate-500/80 transition-all duration-300"
            >
              {/* Venture Logo/Image */}
              <div className="relative h-48 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                  <div className="text-center">
                    <Building className="w-16 h-16 text-purple-400 mb-4" />
                    <div className="text-2xl font-bold text-white mb-2">
                      {venture.title.split(' ')[0]}
                    </div>
                    <div className="text-sm text-gray-400">
                      {venture.category}
                    </div>
                  </div>
                </div>

                {/* Year badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-purple-500/20 backdrop-blur-sm text-purple-400 text-xs rounded-full border border-purple-400/30">
                    Est. {venture.year}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2 group-hover:text-purple-400 dark:group-hover:text-purple-300 transition-colors">
                    {venture.title}
                  </h3>
                  <div className="flex items-center text-purple-400 dark:text-purple-300 text-sm font-medium mb-2">
                    <span>{venture.role}</span>
                  </div>
                  <div className="flex items-center text-slate-600 dark:text-slate-400 text-sm mb-3">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{venture.duration}</span>
                  </div>
                  <div className="flex items-center text-slate-600 dark:text-slate-400 text-sm">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>{venture.location}</span>
                  </div>
                </div>

                <p className="text-slate-600 dark:text-slate-300 text-sm mb-4 line-clamp-3">
                  {venture.description}
                </p>

                {/* Impact */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-2">Key Impact</h4>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">{venture.impact}</p>
                </div>

                {/* Key Learnings */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-2">Key Learnings</h4>
                  <div className="flex flex-wrap gap-2">
                    {venture.keyLearnings.map((learning) => (
                      <span key={learning} className="px-2 py-1 bg-purple-500/10 dark:bg-purple-400/20 text-purple-400 dark:text-purple-300 text-xs rounded border border-purple-400/20 dark:border-purple-300/30">
                        {learning}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex gap-3">
                  {venture.website !== '#' ? (
                    <Link href={venture.website} target="_blank" className="flex-1">
                      <motion.button
                        className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-2 transition-all duration-200 hover:shadow-xl backdrop-blur-sm border border-purple-400/30 hover:border-purple-400/50"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <ExternalLink size={16} />
                        Visit Website
                      </motion.button>
                    </Link>
                  ) : (
                    <div className="w-full px-4 py-2 text-center text-slate-500 dark:text-slate-400 text-sm">
                      Website Coming Soon
                    </div>
                  )}
                </div>
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center space-x-8 bg-gradient-to-r from-slate-800/60 via-slate-800/50 to-slate-900/60 dark:from-slate-800/80 dark:via-slate-800/70 dark:to-slate-900/80 backdrop-blur-xl border border-slate-700/50 dark:border-slate-600/60 rounded-xl p-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">{businessVentures.length}</div>
              <div className="text-sm text-slate-400 dark:text-slate-300">Active Ventures</div>
            </div>

            <div className="w-px h-12 bg-slate-600/50 dark:bg-slate-500/50"></div>

            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">10+</div>
              <div className="text-sm text-slate-400 dark:text-slate-300">Years Experience</div>
            </div>

            <div className="w-px h-12 bg-slate-600/50 dark:bg-slate-500/50"></div>

            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">₦180M+</div>
              <div className="text-sm text-slate-400 dark:text-slate-300">Projects Delivered</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
