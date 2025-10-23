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
} from 'lucide-react'
import { ThemeToggle } from './ThemeToggle'

const navigationItems = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'About', href: '/about', icon: User },
  { name: 'Ventures & Portfolio', href: '/portfolio-ventures', icon: Briefcase },
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
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-700/80 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <div className="w-16 h-16 bg-slate-700 rounded-full animate-pulse shadow-lg"></div>
              <div className="hidden sm:block w-32 h-6 bg-slate-700 rounded animate-pulse"></div>
            </div>
            <div className="hidden md:flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-16 h-8 bg-slate-700 rounded animate-pulse"></div>
              ))}
            </div>
            <div className="w-8 h-8 bg-slate-700 rounded-full animate-pulse"></div>
          </div>
        </div>
      </nav>
    )
  }

  return (
    <>
      {/* Modern Minimal Navigation */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-slate-900/95 backdrop-blur-md border-b border-slate-700/80 shadow-lg'
            : 'bg-slate-900/90 backdrop-blur-sm border-b border-slate-700/60'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              {/* Elegant Brand Identity */}
              <div className="flex-shrink-0">
                <Link
                  href="/"
                  className="group flex items-center space-x-3 transition-all duration-300 hover:opacity-80"
                  aria-label="Go to Emmanuel Chukwuka Ogugua homepage"
                >
                  <div className="relative w-16 h-16 rounded-full overflow-hidden shadow-lg ring-2 ring-primary/60 group-hover:ring-primary/80 transition-all duration-300 bg-gradient-to-br from-primary/20 via-secondary/10 to-primary/5 backdrop-blur-sm hover:from-primary/30 hover:via-secondary/20 hover:to-primary/10">
                    <NextImage
                      src="/images/ChukwukaEmmanuelOguguaLogo.png"
                      alt="Emmanuel Chukwuka Ogugua - Professional Logo"
                      fill
                      sizes="64px"
                      className="object-cover"
                      priority
                    />
                  </div>
                  <span className="hidden sm:block text-xl font-bold text-slate-300 group-hover:text-white transition-colors duration-300">
                    CEO.dev
                  </span>
                </Link>
              </div>

              {/* Clean Desktop Navigation */}
              <div className="hidden md:block">
                <nav className="flex items-center space-x-1">
                  {navigationItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`px-3 py-2.5 text-sm font-medium transition-all duration-300 rounded-lg min-h-[44px] ${
                        isActiveLink(item.href)
                          ? 'text-primary bg-gradient-to-r from-primary/20 to-secondary/20 backdrop-blur-sm border border-primary/30 shadow-sm'
                          : 'text-slate-300 hover:text-white hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10 hover:backdrop-blur-sm hover:border hover:border-primary/20'
                      }`}
                      aria-current={isActiveLink(item.href) ? 'page' : undefined}
                    >
                      <span className="hidden lg:inline">{item.name}</span>
                      <span className="lg:hidden">{item.name.split(' ')[0]}</span>
                    </Link>
                  ))}
                </nav>
              </div>

              {/* Minimal Social & Mobile Menu */}
              <div className="flex items-center space-x-2">
                {/* Refined Social Icons */}
                <div className="hidden md:flex items-center space-x-1">
                  {socialLinks.slice(0, 3).map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-slate-400 hover:text-white transition-all duration-300 rounded-lg hover:bg-gradient-to-r hover:from-primary/20 hover:to-secondary/20 hover:backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary/50 hover:scale-105"
                      aria-label={`Visit ${social.name}`}
                    >
                      <social.icon size={18} />
                    </a>
                  ))}

                  {/* Elegant Theme Toggle */}
                  <ThemeToggle />
                </div>

                {/* Clean Mobile Menu Button */}
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className={`md:hidden p-2 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 min-h-[44px] min-w-[44px] flex items-center justify-center ${
                    isMobileMenuOpen
                      ? 'text-white bg-gradient-to-r from-primary/30 to-secondary/30 backdrop-blur-sm shadow-sm'
                      : 'text-slate-400 hover:text-white hover:bg-gradient-to-r hover:from-primary/20 hover:to-secondary/20 hover:backdrop-blur-sm'
                  }`}
                  aria-expanded={isMobileMenuOpen}
                  aria-controls="mobile-menu"
                  aria-label="Toggle mobile navigation menu"
                >
                  {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Simple Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            ref={mobileMenuRef}
            id="mobile-menu"
            className="fixed inset-x-0 top-20 z-40 md:hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            role="region"
            aria-label="Mobile navigation menu"
          >
            <div className="bg-gradient-to-br from-slate-800/95 via-slate-800/90 to-slate-900/95 backdrop-blur-md mx-4 rounded-lg shadow-xl border border-primary/20">
              <div className="px-4 py-6 space-y-3">
                {/* Clean Mobile Navigation Links */}
                <nav className="space-y-1">
                  {navigationItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`flex items-center px-3 py-2.5 text-sm font-medium rounded-md transition-all duration-200 min-h-[44px] ${
                        isActiveLink(item.href)
                          ? 'text-primary bg-gradient-to-r from-primary/20 to-secondary/20 backdrop-blur-sm border border-primary/30'
                          : 'text-slate-300 hover:text-white hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10 hover:backdrop-blur-sm hover:border hover:border-primary/20'
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      aria-current={isActiveLink(item.href) ? 'page' : undefined}
                    >
                      <span className="hidden lg:inline">{item.name}</span>
                      <span className="lg:hidden">{item.name.split(' ')[0]}</span>
                    </Link>
                  ))}
                </nav>

                {/* Refined Mobile Social Links */}
                <div className="pt-4 border-t border-slate-700">
                  <p className="px-3 text-xs font-medium text-slate-400 mb-3 uppercase tracking-wider">Connect</p>
                  <div className="flex justify-center space-x-2 px-3">
                    {socialLinks.slice(0, 3).map((social) => (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-8 h-8 text-slate-400 hover:text-white bg-gradient-to-r from-primary/10 to-secondary/10 hover:from-primary/20 hover:to-secondary/20 rounded-md transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-primary/50"
                        aria-label={`Visit ${social.name}`}
                      >
                        <social.icon size={14} />
                      </a>
                    ))}
                  </div>

                  {/* Mobile Theme Toggle */}
                  <div className="flex justify-center mt-3">
                    <ThemeToggle />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Backdrop */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-30 md:hidden bg-slate-900/30 backdrop-blur-sm"
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