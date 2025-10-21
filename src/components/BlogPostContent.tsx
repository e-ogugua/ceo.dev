'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Clock, Calendar, Share2, Twitter, Linkedin, Facebook } from 'lucide-react'
import Link from 'next/link'
import { getBlogPost } from '@/lib/articles'

interface BlogPostContentProps {
  slug: string
}

export function BlogPostContent({ slug }: BlogPostContentProps) {
  const blogPost = getBlogPost(slug)

  const handleShare = async (platform: 'twitter' | 'linkedin' | 'facebook') => {
    if (!blogPost) return

    const url = typeof window !== 'undefined' ? window.location.href : ''
    const title = blogPost.title
    const description = blogPost.description

    // Use Web Share API if available (mobile)
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text: description,
          url,
        })
        return
      } catch (_err) { // eslint-disable-line @typescript-eslint/no-unused-vars
        // User cancelled or error, fallback to platform-specific sharing
      }
    }

    // Platform-specific sharing URLs
    let shareUrl = ''

    switch (platform) {
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`
        break
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
        break
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
        break
    }

    // Open sharing URL in new window
    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400')
    }
  }

  if (!blogPost) {
    return (
      <section className="py-20 pt-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Article Not Found</h1>
          <p className="text-gray-300 mb-8">The article you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/blog">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold">
              Back to Blog
            </button>
          </Link>
        </div>
      </section>
    )
  }

  return (
    <>
      {/* Article Header */}
      <section className="py-20 pt-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/blog">
              <button className="flex items-center text-gray-400 hover:text-white mb-8 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </button>
            </Link>

            <div className="mb-8">
              <div className="flex items-center gap-4 mb-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  blogPost.category === 'Technical'
                    ? 'bg-blue-500/20 text-blue-400 border border-blue-400/30'
                    : blogPost.category === 'Business Strategy'
                    ? 'bg-purple-500/20 text-purple-400 border border-purple-400/30'
                    : blogPost.category === 'Personal Growth'
                    ? 'bg-green-500/20 text-green-400 border border-green-400/30'
                    : blogPost.category === 'Leadership'
                    ? 'bg-orange-500/20 text-orange-400 border border-orange-400/30'
                    : 'bg-gray-500/20 text-gray-400 border border-gray-400/30'
                }`}>
                  {blogPost.category}
                </span>
                <div className="flex items-center text-gray-400 text-sm">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{blogPost.readTime}</span>
                </div>
                <div className="flex items-center text-gray-400 text-sm">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>{new Date(blogPost.publishedDate).toLocaleDateString()}</span>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                {blogPost.title}
              </h1>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                {blogPost.description}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {blogPost.author.split(' ')[0].charAt(0)}{blogPost.author.split(' ')[1]?.charAt(0)}
                  </div>
                  <div>
                    <div className="text-white font-semibold">{blogPost.author}</div>
                    <div className="text-gray-400 text-sm">Author & Software Engineer</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => handleShare('twitter')}
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => handleShare('linkedin')}
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => handleShare('facebook')}
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    <Facebook className="w-5 h-5" />
                  </button>
                  <button className="text-gray-400 hover:text-white transition-colors">
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg prose-invert max-w-none"
          >
            <div className="bg-slate-800/30 backdrop-blur-sm border border-white/10 rounded-xl p-8 md:p-12">
              {blogPost.content.split('\n').map((paragraph, index) => {
                if (paragraph.startsWith('# ')) {
                  return <h1 key={index} className="text-3xl font-bold text-white mb-6 mt-8 first:mt-0">{paragraph.substring(2)}</h1>
                } else if (paragraph.startsWith('## ')) {
                  return <h2 key={index} className="text-2xl font-bold text-white mb-4 mt-8">{paragraph.substring(3)}</h2>
                } else if (paragraph.startsWith('### ')) {
                  return <h3 key={index} className="text-xl font-semibold text-white mb-3 mt-6">{paragraph.substring(4)}</h3>
                } else if (paragraph.startsWith('```')) {
                  if (paragraph.includes('\n')) {
                    const codeContent = paragraph.split('\n').slice(1, -1).join('\n')
                    const language = paragraph.split('\n')[0].substring(3)
                    return (
                      <pre key={index} className="bg-slate-900 rounded-lg p-4 mb-6 overflow-x-auto">
                        <code className={`language-${language} text-gray-300 text-sm`}>
                          {codeContent}
                        </code>
                      </pre>
                    )
                  }
                } else if (paragraph.trim() === '') {
                  return <br key={index} />
                } else {
                  return <p key={index} className="text-gray-300 mb-4 leading-relaxed">{paragraph}</p>
                }
              })}
            </div>
          </motion.div>

          {/* Article Footer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 pt-8 border-t border-white/10"
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Written by {blogPost.author}</h3>
                <p className="text-gray-400">
                  Software Engineer & Business Strategist passionate about creating innovative solutions and driving growth.
                </p>
              </div>

              <div className="flex items-center space-x-4">
                <span className="text-gray-400 text-sm">Share this article:</span>
                <button
                  onClick={() => handleShare('twitter')}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </button>
                <button
                  onClick={() => handleShare('linkedin')}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </button>
                <button
                  onClick={() => handleShare('facebook')}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
