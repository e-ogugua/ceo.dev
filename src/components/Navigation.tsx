'use client'

import { useState, useEffect, useRef } from 'react'
import React from 'react'
import NextImage from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Linkedin, Twitter, Facebook, Instagram, Home, Sparkles } from 'lucide-react'

const navigationItems = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'About', href: '/about' },
  { name: 'Portfolio & Ventures', href: '/portfolio-ventures' },
  { name: 'Learn', href: '/learn' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
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

    handleScroll() // Set initial state
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  // Handle escape key to close mobile menu
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
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-slate-200/50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="w-24 h-24 bg-slate-200 rounded-xl animate-pulse"></div>
            <div className="hidden md:flex space-x-8">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-20 h-6 bg-slate-200 rounded animate-pulse"></div>
              ))}
            </div>
            <div className="w-10 h-10 bg-slate-200 rounded-full animate-pulse"></div>
          </div>
        </div>
      </nav>
    )
  }

  return (
    <>
      {/* Enhanced Main Navigation Bar */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'glass-card shadow-2xl border-slate-200/60'
            : 'bg-white/95 backdrop-blur-2xl border-b border-slate-200/40 shadow-lg'
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
              {/* Enhanced Logo Section */}
              <div className="flex-shrink-0">
                <Link
                  href="/"
                  className="group transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-ceo-500 focus:ring-offset-2 rounded-xl"
                  aria-label="Go to Emmanuel Chukwuka Ogugua homepage"
                >
                  <motion.div
                    className="relative w-24 h-24 glass-card p-2 rounded-2xl"
                    whileHover={{
                      scale: 1.05,
                      rotate: [0, -2, 2, 0],
                      transition: { duration: 0.5 }
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <NextImage
                      src="/images/ChukwukaEmmanuelOguguaLogo.png"
                      alt="Chukwuka Emmanuel Ogugua Logo - Software Engineer and Business Strategist"
                      fill
                      sizes="96px"
                      className="object-cover transition-all duration-300 group-hover:brightness-110"
                      priority
                    />
                    {/* Logo glow effect */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl bg-gradient-to-r from-ceo-500/20 to-primary-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      animate={{
                        background: [
                          "linear-gradient(45deg, rgba(234, 179, 8, 0.1), rgba(15, 23, 42, 0.1))",
                          "linear-gradient(45deg, rgba(234, 179, 8, 0.2), rgba(15, 23, 42, 0.2))",
                          "linear-gradient(45deg, rgba(234, 179, 8, 0.1), rgba(15, 23, 42, 0.1))"
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </motion.div>
                </Link>
              </div>

              {/* Enhanced Desktop Navigation Menu */}
              <div className="hidden md:block">
                <nav className="flex items-center space-x-1">
                  {navigationItems.map((item, index) => (
                    <div key={item.name} className="relative">
                      <Link
                        href={item.href}
                        className={`relative px-4 py-3 text-sm font-semibold transition-all duration-300 rounded-xl group focus:outline-none focus:ring-2 focus:ring-ceo-500 focus:ring-offset-2 ${
                          isActiveLink(item.href)
                            ? 'text-slate-900 bg-ceo-50'
                            : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                        }`}
                        aria-current={isActiveLink(item.href) ? 'page' : undefined}
                        aria-describedby={`${item.name.toLowerCase()}-description`}
                      >
                        <span className="flex items-center gap-2">
                          {item.icon && <item.icon size={16} className="opacity-70" />}
                          {item.name}
                        </span>

                        {/* Enhanced active indicator */}
                        {isActiveLink(item.href) && (
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-ceo-500/10 to-primary-500/10 rounded-xl"
                            layoutId="activeTab"
                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                          />
                        )}

                        {/* Hover effect */}
                        <motion.div
                          className={`absolute inset-0 bg-gradient-to-r from-slate-100/50 to-slate-50/50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                            isActiveLink(item.href) ? 'opacity-100' : ''
                          }`}
                          initial={false}
                        />
                      </Link>

                      <div
                        id={`${item.name.toLowerCase()}-description`}
                        className="sr-only"
                      >
                        Navigate to {item.name} section of the website
                      </div>
                    </div>
                  ))}
                </nav>
              </div>

              {/* Enhanced Social Links & Mobile Menu */}
              <div className="flex items-center space-x-3">
                {/* Enhanced Social Icons - Desktop */}
                <div className="hidden md:flex items-center space-x-2">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative p-2.5 text-slate-500 hover:text-slate-900 bg-slate-50 hover:bg-slate-100 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 group"
                      whileHover={{
                        scale: 1.1,
                        y: -2,
                        boxShadow: "0 8px 25px rgba(15, 23, 42, 0.15)"
                      }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      aria-label={`Visit Emmanuel Chukwuka Ogugua's ${social.name} profile (opens in new tab)`}
                    >
                      <social.icon size={18} />
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-slate-200/50 to-slate-100/50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={false}
                      />
                    </motion.a>
                  ))}
                </div>

                {/* Enhanced Mobile Menu Button */}
                <motion.button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className={`relative md:hidden p-2.5 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 ${
                    isMobileMenuOpen
                      ? 'bg-slate-100 text-slate-900'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
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

      {/* Enhanced Mobile Navigation Menu */}
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
            <div className="glass-card mx-4 rounded-2xl shadow-2xl border border-slate-200/60">
              <div className="px-6 py-8 space-y-3">
                {/* Enhanced Mobile Navigation Links */}
                <nav className="space-y-2">
                  {navigationItems.map((item, index) => (
                    <React.Fragment key={item.name}>
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          href={item.href}
                          className={`flex items-center gap-3 px-4 py-3.5 text-base font-semibold rounded-xl transition-all duration-300 ${
                            isActiveLink(item.href)
                              ? 'text-slate-900 bg-ceo-50 border border-ceo-200 shadow-sm'
                              : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
                          }`}
                          onClick={() => setIsMobileMenuOpen(false)}
                          aria-current={isActiveLink(item.href) ? 'page' : undefined}
                          aria-describedby={`mobile-${item.name.toLowerCase()}-description`}
                        >
                          {item.icon && <item.icon size={18} className="opacity-70" />}
                          {item.name}
                        </Link>
                      </motion.div>

                      <div
                        id={`mobile-${item.name.toLowerCase()}-description`}
                        className="sr-only"
                      >
                        Navigate to {item.name} section of the website
                      </div>
                    </React.Fragment>
                  ))}
                </nav>

                {/* Enhanced Mobile Social Links */}
                <motion.div
                  className="pt-6 border-t border-slate-200"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <p className="px-4 text-sm font-semibold text-slate-600 mb-4 flex items-center gap-2">
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
                        className="flex items-center justify-center w-12 h-12 text-slate-500 hover:text-slate-900 bg-slate-50 hover:bg-slate-100 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
                        whileHover={{
                          scale: 1.1,
                          y: -2,
                          boxShadow: "0 8px 20px rgba(15, 23, 42, 0.15)"
                        }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 + index * 0.1 }}
                        aria-label={`Visit Emmanuel Chukwuka Ogugua's ${social.name} profile (opens in new tab)`}
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

      {/* Enhanced Mobile Menu Backdrop */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-30 md:hidden bg-black/20 backdrop-blur-sm"
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