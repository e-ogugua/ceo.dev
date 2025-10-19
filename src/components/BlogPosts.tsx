'use client'

import { motion } from 'framer-motion'
import { Clock, Calendar, User, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const blogPosts = [
  {
    id: 1,
    title: 'Beyond the Screen: How Gardening Sharpens My Problem-Solving Skills',
    excerpt: 'This post leverages my "Gardening is my therapy" fact. Explore the surprising parallels between nurturing a garden and debugging code or growing a business.',
    category: 'Personal Growth',
    readTime: '8 min read',
    publishedDate: '2024-01-15',
    author: 'Emmanuel Chukwuka Ogugua',
    featured: true,
    slug: 'gardening-problem-solving'
  },
  {
    id: 2,
    title: 'The Digital Farmer: Leveraging Tech for Sustainable Agriculture',
    excerpt: 'Dive into my experience with PoshPOULE Farms Ltd. Discuss specific technologies and strategic approaches for making organic farming more efficient and sustainable.',
    category: 'Business Strategy',
    readTime: '12 min read',
    publishedDate: '2024-01-10',
    author: 'Emmanuel Chukwuka Ogugua',
    featured: true,
    slug: 'digital-farmer-poshpoule'
  },
  {
    id: 3,
    title: 'My Go-To Tech Stack for Building Robust Web Applications in 2025',
    excerpt: 'A practical post detailing my preferred tools and frameworks for full-stack development, including why I chose them and introducing EmmanuelOS.',
    category: 'Technology',
    readTime: '10 min read',
    publishedDate: '2024-01-08',
    author: 'Emmanuel Chukwuka Ogugua',
    featured: false,
    slug: 'tech-stack-2025'
  },
  {
    id: 4,
    title: 'From Farm to Code: How Agricultural Thinking Improves Software Architecture',
    excerpt: 'Drawing parallels between sustainable farming practices and scalable software design, exploring how nature-inspired patterns can improve our digital systems.',
    category: 'Technology',
    readTime: '14 min read',
    publishedDate: '2024-01-05',
    author: 'Emmanuel Chukwuka Ogugua',
    featured: false,
    slug: 'farm-to-code-architecture'
  },
  {
    id: 5,
    title: 'Building Authentic Brands: Lessons from Nigerian Markets to Global Tech',
    excerpt: 'How my experience in Nigerian markets shaped my approach to building authentic technology brands that resonate with real people and solve genuine problems.',
    category: 'Business Strategy',
    readTime: '11 min read',
    publishedDate: '2024-01-03',
    author: 'Emmanuel Chukwuka Ogugua',
    featured: true,
    slug: 'authentic-brands-nigerian-markets'
  },
  {
    id: 6,
    title: 'The Entrepreneur\'s Garden: Cultivating Business Growth Through Patience and Care',
    excerpt: 'Using gardening metaphors to explore business development, discussing how patience, nurturing, and strategic timing lead to sustainable entrepreneurial success.',
    category: 'Personal Growth',
    readTime: '9 min read',
    publishedDate: '2024-01-01',
    author: 'Emmanuel Chukwuka Ogugua',
    featured: false,
    slug: 'entrepreneurs-garden'
  }
]

export function BlogPosts() {
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
            Latest{' '}
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Articles
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Insights, stories, and practical wisdom from the intersection of technology, business, and life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className={`group relative bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border transition-all duration-300 ${
                post.featured
                  ? 'border-green-400/30 hover:border-green-400/50'
                  : 'border-white/10 hover:border-white/20'
              }`}
            >
              {/* Featured Badge */}
              {post.featured && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="px-3 py-1 bg-green-500/20 backdrop-blur-sm text-green-400 text-xs rounded-full border border-green-400/30">
                    Featured
                  </span>
                </div>
              )}

              {/* Content */}
              <div className="p-6">
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      post.category === 'Technology'
                        ? 'bg-blue-500/20 text-blue-400 border border-blue-400/30'
                        : post.category === 'Business Strategy'
                        ? 'bg-purple-500/20 text-purple-400 border border-purple-400/30'
                        : post.category === 'Personal Growth'
                        ? 'bg-green-500/20 text-green-400 border border-green-400/30'
                        : 'bg-orange-500/20 text-orange-400 border border-orange-400/30'
                    }`}>
                      {post.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                {/* Meta Info */}
                <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{new Date(post.publishedDate).toLocaleDateString()}</span>
                  </div>
                </div>

                {/* Action Button */}
                <Link href={`/blog/${post.slug}`}>
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
                post.featured
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
            <div className="text-4xl mb-4">📧</div>
            <h3 className="text-2xl font-bold text-white mb-4">Never Miss an Insight</h3>
            <p className="text-gray-300 mb-6">
              Join my newsletter for weekly insights on technology, business strategy, and personal growth. No spam, just valuable content delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-slate-800/50 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-400 transition-colors"
              />
              <button className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105">
                Subscribe
              </button>
            </div>
            <p className="text-gray-400 text-sm mt-4">
              Join 500+ readers who get my latest articles and insights
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
