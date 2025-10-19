'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Calendar, Star } from 'lucide-react'
import Link from 'next/link'

const developmentProjects = [
  {
    id: 1,
    title: 'EmmanuelOS SWART Dashboard',
    description: 'My personal developer command center that showcases, monitors, and manages some of the apps I\'ve built — a unified system-wide analytics and portfolio dashboard.',
    image: '/images/emmanuelosScreenshot1.png',
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
    image: '/images/farmtrackScreenshot1.png',
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
    image: '/images/BibleGameHubScreenshot1.png',
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
    image: '/images/financeflowScreenshot1.png',
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
    image: '/images/jepligomScreenshot1.png',
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
            Software Engineering{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Portfolio
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Innovative web applications and digital solutions crafted with modern technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {developmentProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group relative bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-white/20 mb-2">
                      {project.title.split(' ')[0].charAt(0)}
                    </div>
                    <div className="text-sm text-gray-400">
                      {project.category}
                    </div>
                  </div>
                </div>

                {/* Status badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-green-500/20 backdrop-blur-sm text-green-400 text-xs rounded-full border border-green-400/30">
                    {project.status}
                  </span>
                </div>

                {/* Year badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-blue-500/20 backdrop-blur-sm text-blue-400 text-xs rounded-full border border-blue-400/30">
                    {project.year}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-blue-500/10 text-blue-400 text-xs rounded border border-blue-400/20">
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="px-2 py-1 bg-gray-500/10 text-gray-400 text-xs rounded border border-gray-400/20">
                        +{project.techStack.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Key Features */}
                <div className="mb-6">
                  <div className="space-y-2">
                    {project.features.slice(0, 3).map((feature, i) => (
                      <div key={i} className="flex items-center text-gray-300 text-sm">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                        <span className="truncate">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex gap-3">
                  <Link href={project.liveUrl} target="_blank" className="flex-1">
                    <motion.button
                      className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-2 transition-all duration-200"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </motion.button>
                  </Link>

                  <Link href={project.githubUrl} target="_blank" className="flex-1">
                    <motion.button
                      className="w-full border border-white/20 hover:bg-white/10 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-2 transition-all duration-200"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Github size={16} />
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
          className="text-center mt-12"
        >
          <div className="inline-flex items-center space-x-4 bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-xl p-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">{developmentProjects.length}</div>
              <div className="text-sm text-gray-400">Projects Completed</div>
            </div>

            <div className="w-px h-12 bg-white/20"></div>

            <div className="text-center">
              <div className="text-lg font-semibold text-white mb-2">Always Learning</div>
              <div className="text-sm text-gray-400">New technologies & frameworks</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
