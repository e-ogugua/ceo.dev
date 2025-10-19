'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Clock, BookOpen } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
const learningResources = [
  {
    id: 1,
    title: 'Mastering Next.js Performance Optimization',
    description: 'Comprehensive guide to optimizing Next.js applications for production, covering code splitting, image optimization, and performance monitoring.',
    category: 'Technical',
    readTime: '15 min read',
    difficulty: 'Advanced',
    tags: ['Next.js', 'Performance', 'React', 'Optimization'],
    featured: true,
    slug: 'nextjs-performance-optimization',
    image: '/images/learnCardMastetringNext.webp'
  },
  {
    id: 2,
    title: 'AI Integration Patterns for Modern Web Apps',
    description: 'Exploring practical patterns for integrating AI capabilities into web applications, from chatbots to content generation.',
    category: 'Technical',
    readTime: '12 min read',
    difficulty: 'Intermediate',
    tags: ['AI', 'Web Development', 'APIs', 'Machine Learning'],
    featured: true,
    slug: 'ai-integration-patterns',
    image: '/images/learnBuildingProjectsWithAiIntegration.webp'
  },
  {
    id: 3,
    title: 'Building Scalable React Applications',
    description: 'Best practices for creating maintainable and scalable React applications with proper state management and component architecture.',
    category: 'Technical',
    readTime: '18 min read',
    difficulty: 'Intermediate',
    tags: ['React', 'Architecture', 'State Management', 'Best Practices'],
    featured: false,
    slug: 'scalable-react-applications',
    image: '/images/learnBrandStorytelling.webp'
  },
  {
    id: 4,
    title: 'Strategic Brand Building for Tech Entrepreneurs',
    description: 'How to build a compelling personal and business brand that resonates with your target audience and drives business growth.',
    category: 'Business',
    readTime: '10 min read',
    difficulty: 'Beginner',
    tags: ['Branding', 'Entrepreneurship', 'Marketing', 'Strategy'],
    featured: true,
    slug: 'strategic-brand-building',
    image: '/images/learnEffectiveRemoteProjectMangement.webp'
  },
  {
    id: 5,
    title: 'Effective Remote Team Management',
    description: 'Strategies for leading and managing distributed teams effectively, including communication, productivity, and culture building.',
    category: 'Leadership',
    readTime: '14 min read',
    difficulty: 'Intermediate',
    tags: ['Leadership', 'Remote Work', 'Team Management', 'Productivity'],
    featured: false,
    slug: 'remote-team-management',
    image: '/images/learnCardMastetringNext.webp'
  },
  {
    id: 6,
    title: 'From Developer to Tech Leader',
    description: 'The journey from individual contributor to technical leadership, including the skills and mindset shifts required.',
    category: 'Career',
    readTime: '16 min read',
    difficulty: 'Advanced',
    tags: ['Career Growth', 'Leadership', 'Technical Leadership', 'Mentorship'],
    featured: true,
    slug: 'developer-to-tech-leader',
    image: '/images/learnTheCleanCode.webp'
  }
]

export function LearningCards() {
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
            Curated Learning{' '}
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Resources
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            In-depth articles, tutorials, and insights covering software engineering, business strategy, and leadership
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {learningResources.map((resource, index) => (
            <motion.div
              key={resource.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className={`group relative bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border transition-all duration-300 ${
                resource.featured
                  ? 'border-green-400/30 hover:border-green-400/50'
                  : 'border-white/10 hover:border-white/20'
              }`}
            >
              {/* Featured Badge */}
              {resource.featured && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="px-3 py-1 bg-green-500/20 backdrop-blur-sm text-green-400 text-xs rounded-full border border-green-400/30">
                    Featured
                  </span>
                </div>
              )}

              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={resource.image}
                  alt={resource.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                {/* Category badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm rounded-full border border-white/20 ${
                    resource.category === 'Technical'
                      ? 'bg-blue-500/20 text-blue-400 border border-blue-400/30'
                      : resource.category === 'Business'
                      ? 'bg-purple-500/20 text-purple-400 border border-purple-400/30'
                      : resource.category === 'Leadership'
                      ? 'bg-green-500/20 text-green-400 border border-green-400/30'
                      : 'bg-orange-500/20 text-orange-400 border border-orange-400/30'
                  }`}>
                    {resource.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      resource.category === 'Technical'
                        ? 'bg-blue-500/20 text-blue-400 border border-blue-400/30'
                        : resource.category === 'Business'
                        ? 'bg-purple-500/20 text-purple-400 border border-purple-400/30'
                        : resource.category === 'Leadership'
                        ? 'bg-green-500/20 text-green-400 border border-green-400/30'
                        : 'bg-orange-500/20 text-orange-400 border border-orange-400/30'
                    }`}>
                      {resource.category}
                    </span>
                    <span className={`px-2 py-1 rounded text-xs ${
                      resource.difficulty === 'Beginner'
                        ? 'bg-green-500/20 text-green-400'
                        : resource.difficulty === 'Intermediate'
                        ? 'bg-yellow-500/20 text-yellow-400'
                        : 'bg-red-500/20 text-red-400'
                    }`}>
                      {resource.difficulty}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors line-clamp-2">
                    {resource.title}
                  </h3>

                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {resource.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {resource.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded">
                        {tag}
                      </span>
                    ))}
                    {resource.tags.length > 3 && (
                      <span className="px-2 py-1 bg-slate-600/50 text-gray-400 text-xs rounded">
                        +{resource.tags.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Meta Info */}
                <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{resource.readTime}</span>
                  </div>
                  <div className="flex items-center">
                    <BookOpen className="w-4 h-4 mr-1" />
                    <span>Article</span>
                  </div>
                </div>

                {/* Action Button */}
                <Link href={`/learn/${resource.slug}`}>
                  <motion.button
                    className="w-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-4 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-all duration-200"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Read Article
                    <ArrowRight size={16} />
                  </motion.button>
                </Link>
              </div>

              {/* Hover effect overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${
                resource.featured
                  ? 'from-green-600/10'
                  : 'from-blue-600/10'
              }`}></div>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 backdrop-blur-sm border border-green-400/20 rounded-xl p-8 max-w-2xl mx-auto">
            <div className="text-4xl mb-4">📚</div>
            <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-6">
              Get notified when I publish new articles, tutorials, and insights on software engineering and business strategy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-slate-800/50 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-400 transition-colors"
              />
              <button className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
