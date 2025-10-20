'use client'

import { useState, useEffect, useRef } from 'react'
import NextImage from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Menu,
  X,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Home,
  User,
  Briefcase,
  BookOpen,
  FileText,
  Mail,
  Sparkles
} from 'lucide-react'

const navigationItems = [
  { name: 'About', href: '/about', icon: User },
  { name: 'Portfolio & Ventures', href: '/portfolio-ventures', icon: Briefcase },
  { name: 'Learn', href: '/learn', icon: BookOpen },
  { name: 'Blog', href: '/blog', icon: FileText },
  { name: 'Contact', href: '/contact', icon: Mail },
]

const socialLinks = [
  { name: 'Twitter', href: 'https://twitter.com/emmachuka', icon: Twitter },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/emmanuelogugua', icon: Linkedin },
  { name: 'Facebook', href: 'https://web.facebook.com/CEOICLtd/', icon: Facebook },
  { name: 'Instagram', href: 'https://www.instagram.com/ceo231/', icon: Instagram },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const pathname = usePathname()
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsLoaded(true)
    const handleScroll = () => {
      const scrolled = window.scrollY > 50
      setIsScrolled(scrolled)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false)
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isMobileMenuOpen])

  const isActiveLink = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(href)
  }

  if (!isLoaded) {
    return (
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-2xl border-b border-slate-800/50 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="w-24 h-24 bg-slate-800 rounded-xl animate-pulse"></div>
            <div className="hidden md:flex space-x-8">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-20 h-6 bg-slate-800 rounded animate-pulse"></div>
              ))}
            </div>
            <div className="w-10 h-10 bg-slate-800 rounded-full animate-pulse"></div>
          </div>
        </div>
      </nav>
    )
  }

  return (
    <>
      {/* Modern Glassy Black Navigation */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-slate-900/95 backdrop-blur-2xl border-b border-slate-800/60 shadow-2xl'
            : 'bg-slate-900/90 backdrop-blur-2xl border-b border-slate-800/40 shadow-xl'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              {/* Enhanced CEO Logo Section */}
              <div className="flex-shrink-0">
                <Link
                  href="/"
                  className="group transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-ceo-500 focus:ring-offset-2 rounded-xl"
                  aria-label="Go to Emmanuel Chukwuka Ogugua homepage"
                >
                  <motion.div
                    className="relative w-24 h-24 bg-white/10 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-2 hover:bg-white/15 transition-all duration-300"
                    whileHover={{
                      scale: 1.05,
                      rotate: [0, -2, 2, 0],
                      transition: { duration: 0.5 }
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <NextImage
                      src="/images/ChukwukaEmmanuelOguguaLogo.png"
                      alt="CEO - Chukwuka Emmanuel Ogugua Logo"
                      fill
                      sizes="96px"
                      className="object-cover transition-all duration-300 group-hover:brightness-110"
                      priority
                    />
                    {/* Subtle glow effect */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl bg-gradient-to-r from-ceo-500/10 to-primary-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      animate={{
                        background: [
                          "linear-gradient(45deg, rgba(234, 179, 8, 0.05), rgba(15, 23, 42, 0.05))",
                          "linear-gradient(45deg, rgba(234, 179, 8, 0.1), rgba(15, 23, 42, 0.1))",
                          "linear-gradient(45deg, rgba(234, 179, 8, 0.05), rgba(15, 23, 42, 0.05))"
                        ]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                  </motion.div>
                </Link>
              </div>

              {/* Modern Desktop Navigation */}
              <div className="hidden md:block">
                <nav className="flex items-center space-x-1">
                  {navigationItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        className={`relative px-5 py-3 text-sm font-semibold transition-all duration-300 rounded-xl group focus:outline-none focus:ring-2 focus:ring-ceo-500 focus:ring-offset-2 ${
                          isActiveLink(item.href)
                            ? 'text-white bg-ceo-500/20 border border-ceo-500/30'
                            : 'text-slate-300 hover:text-white hover:bg-white/10'
                        }`}
                        aria-current={isActiveLink(item.href) ? 'page' : undefined}
                        aria-describedby={`${item.name.toLowerCase()}-description`}
                      >
                        <span className="flex items-center gap-2">
                          <item.icon size={16} className="opacity-70" />
                          {item.name}
                        </span>

                        {/* Active indicator */}
                        {isActiveLink(item.href) && (
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-ceo-500/20 to-ceo-600/20 rounded-xl border border-ceo-500/30"
                            layoutId="activeTab"
                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                          />
                        )}

                        {/* Hover glow */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          initial={false}
                        />
                      </Link>

                      <div
                        id={`${item.name.toLowerCase()}-description`}
                        className="sr-only"
                      >
                        Navigate to {item.name} section
                      </div>
                    </motion.div>
                  ))}
                </nav>
              </div>

              {/* Modern Social Links & Mobile Menu */}
              <div className="flex items-center space-x-4">
                {/* Social Icons - Desktop */}
                <div className="hidden md:flex items-center space-x-2">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative p-2.5 text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 group"
                      whileHover={{
                        scale: 1.1,
                        y: -2,
                        boxShadow: "0 8px 25px rgba(255, 255, 255, 0.1)"
                      }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                      aria-label={`Visit Emmanuel's ${social.name} profile (opens in new tab)`}
                    >
                      <social.icon size={18} />
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={false}
                      />
                    </motion.a>
                  ))}
                </div>

                {/* Modern Mobile Menu Button */}
                <motion.button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className={`relative md:hidden p-2.5 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 ${
                    isMobileMenuOpen
                      ? 'bg-white/20 text-white'
                      : 'text-slate-400 hover:text-white hover:bg-white/10'
                  }`}
                  aria-expanded={isMobileMenuOpen}
                  aria-controls="mobile-menu"
                  aria-label="Toggle mobile navigation menu"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className="w-6 h-6 transition-transform duration-300"
                    animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
                  >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                  </motion.div>
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Modern Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            ref={mobileMenuRef}
            id="mobile-menu"
            className="fixed inset-x-0 top-20 z-40 md:hidden"
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            role="region"
            aria-label="Mobile navigation menu"
          >
            <div className="bg-slate-900/95 backdrop-blur-2xl mx-4 rounded-2xl shadow-2xl border border-slate-800/60">
              <div className="px-6 py-8 space-y-4">
                {/* Mobile Navigation Links */}
                <nav className="space-y-2">
                  {navigationItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        className={`flex items-center gap-3 px-4 py-4 text-base font-semibold rounded-xl transition-all duration-300 ${
                          isActiveLink(item.href)
                            ? 'text-white bg-ceo-500/20 border border-ceo-500/30'
                            : 'text-slate-300 hover:text-white hover:bg-white/10'
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                        aria-current={isActiveLink(item.href) ? 'page' : undefined}
                      >
                        <item.icon size={18} className="opacity-70" />
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* Mobile Social Links */}
                <motion.div
                  className="pt-6 border-t border-slate-800"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <p className="px-4 text-sm font-semibold text-slate-400 mb-4 flex items-center gap-2">
                    <Sparkles size={16} />
                    Connect With Me
                  </p>
                  <div className="flex justify-center space-x-3 px-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-12 h-12 text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
                        whileHover={{
                          scale: 1.1,
                          y: -2,
                          boxShadow: "0 8px 20px rgba(255, 255, 255, 0.1)"
                        }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 + index * 0.1 }}
                        aria-label={`Visit Emmanuel's ${social.name} profile (opens in new tab)`}
                      >
                        <social.icon size={20} />
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Backdrop */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-30 md:hidden bg-black/30 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>
    </>
  )
}