'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const developmentProjects = [
  {
    id: 1,
    title: 'EmmanuelOS SWART Dashboard',
    description: 'My personal developer command center that showcases, monitors, and manages some of the apps I\'ve built — a unified system-wide analytics and portfolio dashboard.',
    image: '/images/eogugua_emmanuelOSLogo.png',
    category: 'Developer Productivity / Portfolio Management',
    status: 'In Production (v3.0)',
    techStack: ['Next.js 15', 'React 18', 'Tailwind CSS', 'Supabase', 'Framer Motion'],
    features: [
      'System-wide app showcase grid',
      'Real-time traffic insights',
      'GitHub API integration',
      'Admin management mode',
      'Mobile-first responsive UI'
    ],
    liveUrl: 'https://emmanuelos.vercel.app/',
    githubUrl: 'https://github.com/e-ogugua/emmanuelos',
    year: '2024'
  },
  {
    id: 2,
    title: 'FarmTrack',
    description: 'A comprehensive farm management and record-keeping platform designed for modern agricultural operations and rural farming communities.',
    image: '/images/farmtrackLogo1.png',
    category: 'Agriculture & Farm Management',
    status: 'Production Ready (v2.0)',
    techStack: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Local Storage'],
    features: [
      'Farm activity tracking',
      'Labor and expense management',
      'Sales and inventory tracking',
      'Offline-first architecture',
      'Professional reporting tools'
    ],
    liveUrl: 'https://farm-track-gamma.vercel.app/dashboard/',
    githubUrl: 'https://github.com/e-ogugua/farmtrack',
    year: '2024'
  },
  {
    id: 3,
    title: 'Bible Game Hub',
    description: 'An immersive faith-based gaming platform for interactive Bible learning, scripture memorization, and spiritual growth through engaging gameplay.',
    image: '/images/BibleGameHubLogo.png',
    category: 'Faith & Education',
    status: 'Production Ready (v2.0)',
    techStack: ['Next.js 15', 'React 18', 'Three.js', 'Framer Motion'],
    features: [
      'Interactive Bible Quiz Challenge',
      'Scripture Memory Game',
      '3D biblical character stories',
      'Daily challenges system',
      'Community leaderboards'
    ],
    liveUrl: 'https://bible-game-hub.vercel.app/',
    githubUrl: 'https://github.com/e-ogugua/bible-game-hub',
    year: '2024'
  },
  {
    id: 4,
    title: 'FinanceFlow Pro',
    description: 'A professional financial planning and wealth management platform for modern investors and financial advisors.',
    image: '/images/finaceflowScreenshot4.png',
    category: 'Finance & Investment',
    status: 'Production Ready (v2.0)',
    techStack: ['React 18', 'TypeScript', 'Tailwind CSS', 'Recharts'],
    features: [
      'Real-time market data visualization',
      'Portfolio performance tracking',
      'Financial goal setting',
      'Risk assessment tools',
      'Professional reporting'
    ],
    liveUrl: 'https://financeflow-pro.vercel.app/',
    githubUrl: 'https://github.com/e-ogugua/financeflow-pro',
    year: '2024'
  },
  {
    id: 5,
    title: 'CodeMentor Academy',
    description: 'An AI-powered coding education platform offering personalized learning paths, interactive lessons, and progress tracking for aspiring developers.',
    image: '/images/codementorScreenshot1.png',
    category: 'Education & Technology',
    status: 'Production Ready (v1.0.0)',
    techStack: ['React 18', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    features: [
      '20+ interactive coding lessons',
      'AI-powered learning dashboard',
      'Progress tracking with XP system',
      'Community forums and leaderboards',
      'Search and filter functionality'
    ],
    liveUrl: 'https://codementor-academy-hwmazanzv-emmanuel-c-oguguas-projects.vercel.app/',
    githubUrl: 'https://github.com/e-ogugua/codementor-academy',
    year: '2024'
  },
  {
    id: 6,
    title: 'Jepligom Ministry Portal',
    description: 'A modern ministry website and community platform for spiritual growth and connection.',
    image: '/images/JepligomMinistryPortalLogo.png',
    category: 'Religious & Community',
    status: 'Production Ready (v1.0.0)',
    techStack: ['React 18', 'TypeScript', 'Tailwind CSS', 'Express.js'],
    features: [
      'Dynamic hero slides',
      'Sermon management system',
      'Event calendar with registration',
      'Online giving platform',
      'Admin dashboard for content management'
    ],
    liveUrl: 'https://jepligom-ministry-portal.vercel.app/',
    githubUrl: 'https://github.com/e-ogugua/JepligomMinistryPortal',
    year: '2024'
  }
]

export function DevelopmentPortfolio() {
  return (
    <section className="py-12 bg-slate-50/40 dark:bg-slate-900/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Software Engineering{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Portfolio
            </span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Innovative web applications and digital solutions crafted with modern technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {developmentProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group relative bg-gradient-to-br from-slate-800/60 via-slate-800/50 to-slate-900/60 dark:from-slate-800/80 dark:via-slate-800/70 dark:to-slate-900/80 backdrop-blur-xl rounded-xl overflow-hidden border border-slate-700/50 dark:border-slate-600/60 hover:border-slate-600/70 dark:hover:border-slate-500/80 transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-40 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                  {/* Actual project image */}
                  <div className="w-full h-full flex items-center justify-center p-3">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={200}
                      height={150}
                      className="max-w-full max-h-full object-contain rounded-lg shadow-lg"
                      onError={(e) => {
                        // Fallback to placeholder if image fails to load
                        const target = e.currentTarget as HTMLImageElement;
                        const fallback = target.nextElementSibling as HTMLElement;
                        if (fallback) {
                          target.style.display = 'none';
                          fallback.style.display = 'flex';
                        }
                      }}
                    />
                    {/* Fallback placeholder */}
                    <div className="text-center hidden" style={{display: 'none'}}>
                      <div className="text-5xl font-bold text-white/20 mb-2">
                        {project.title.split(' ')[0].charAt(0)}
                      </div>
                      <div className="text-sm text-gray-400">
                        {project.category}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Status badge */}
                <div className="absolute top-3 right-3">
                  <span className="px-2 py-1 bg-green-500/20 backdrop-blur-sm text-green-400 text-xs rounded-full border border-green-400/30">
                    {project.status}
                  </span>
                </div>

                {/* Year badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-2 py-1 bg-blue-500/20 backdrop-blur-sm text-blue-400 text-xs rounded-full border border-blue-400/30">
                    {project.year}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2 group-hover:text-blue-400 dark:group-hover:text-blue-300 transition-colors">
                  {project.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-300 text-sm mb-3 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-3">
                  <div className="flex flex-wrap gap-1">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-blue-500/10 dark:bg-blue-400/20 text-blue-400 dark:text-blue-300 text-xs rounded border border-blue-400/20 dark:border-blue-300/30">
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="px-2 py-1 bg-slate-500/10 dark:bg-slate-400/20 text-slate-400 dark:text-slate-300 text-xs rounded border border-slate-400/20 dark:border-slate-300/30">
                        +{project.techStack.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Key Features */}
                <div className="mb-4">
                  <div className="space-y-1">
                    {project.features.slice(0, 2).map((feature, i) => (
                      <div key={i} className="flex items-center text-slate-600 dark:text-slate-300 text-sm">
                        <div className="w-1.5 h-1.5 bg-blue-400 dark:bg-blue-300 rounded-full mr-2"></div>
                        <span className="truncate">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex gap-2">
                  <Link href={project.liveUrl} target="_blank" className="flex-1">
                    <motion.button
                      className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-3 py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-2 transition-all duration-200 hover:shadow-xl backdrop-blur-sm border border-blue-400/30 hover:border-blue-400/50"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <ExternalLink size={14} />
                      Live Demo
                    </motion.button>
                  </Link>

                  <Link href={project.githubUrl} target="_blank" className="flex-1">
                    <motion.button
                      className="w-full border border-slate-600/50 dark:border-slate-500/60 hover:border-slate-500/70 dark:hover:border-slate-400/80 hover:bg-gradient-to-r hover:from-slate-700/20 hover:to-slate-600/20 text-slate-300 dark:text-slate-200 hover:text-white px-3 py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-2 transition-all duration-200 backdrop-blur-sm bg-slate-800/20 dark:bg-slate-700/30"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Github size={14} />
                      Code
                    </motion.button>
                  </Link>
                </div>
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <div className="inline-flex items-center space-x-6 bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-xl p-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400 mb-1">{developmentProjects.length}</div>
              <div className="text-xs text-gray-400">Projects Completed</div>
            </div>

            <div className="w-px h-8 bg-white/20"></div>

            <div className="text-center">
              <div className="text-sm font-semibold text-white mb-1">Always Learning</div>
              <div className="text-xs text-gray-400">New technologies & frameworks</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
