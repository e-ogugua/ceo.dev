'use client'

import { useState, useEffect, useRef } from 'react'
import React from 'react'
import NextImage from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react'
const navigationItems = [
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
  const pathname = usePathname()
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
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

  return (
    <>
      {/* Main Navigation Bar */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-xl border-b border-slate-200/50 shadow-lg'
            : 'bg-white/80 backdrop-blur-lg border-b border-slate-200/30'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              {/* Logo Section */}
              <div className="flex-shrink-0">
                <Link
                  href="/"
                  className="flex items-center group transition-transform duration-200"
                  aria-label="Go to Emmanuel Chukwuka Ogugua homepage"
                >
                  <div className="relative w-24 h-24 bg-white/10 backdrop-blur-sm border border-slate-200/20 rounded-xl p-2">
                    <NextImage
                      src="/images/ChukwukaEmmanuelOguguaLogo.png"
                      alt="Chukwuka Emmanuel Ogugua Logo - Software Engineer and Business Strategist"
                      fill
                      sizes="96px"
                      className="object-cover transition-transform duration-200 group-hover:rotate-3"
                    />
                  </div>
                </Link>
              </div>

              {/* Desktop Navigation Menu */}
              <div className="hidden md:block">
                <nav className="flex items-center space-x-8">
                  {navigationItems.map((item, index) => (
                    <div
                      key={item.name}
                      className="relative"
                    >
                      <Link
                        href={item.href}
                        className={`px-3 py-2 text-sm font-medium transition-all duration-200 relative group ${
                          isActiveLink(item.href)
                            ? 'text-slate-900'
                            : 'text-slate-600 hover:text-cyan-600'
                        }`}
                        aria-current={isActiveLink(item.href) ? 'page' : undefined}
                        aria-describedby={`${item.name.toLowerCase()}-description`}
                      >
                        {item.name}
                        <span
                          className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-300 ${
                            isActiveLink(item.href) ? 'w-full' : 'w-0 group-hover:w-full'
                          }`}
                          aria-hidden="true"
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

              {/* Social Links & Mobile Menu */}
              <div className="flex items-center space-x-4">
                {/* Social Icons - Desktop */}
                <div className="hidden md:flex items-center space-x-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-500 hover:text-cyan-600 transition-all duration-200 p-2 rounded-full hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
                      aria-label={`Visit Emmanuel Chukwuka Ogugua's ${social.name} profile (opens in new tab)`}
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="md:hidden text-slate-600 hover:text-cyan-600 focus:outline-none focus:text-cyan-600 p-2 rounded-lg transition-colors duration-200"
                  aria-expanded={isMobileMenuOpen}
                  aria-controls="mobile-menu"
                  aria-label="Toggle mobile navigation menu"
                >
                  <div
                    className={`w-6 h-6 transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-180' : 'rotate-0'}`}
                  >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          id="mobile-menu"
          className="fixed inset-x-0 top-20 z-40 md:hidden"
          role="region"
          aria-label="Mobile navigation menu"
        >
          <div className="bg-white/95 backdrop-blur-xl border-t border-slate-200/50 shadow-xl">
            <div className="px-4 py-6 space-y-4">
              {/* Mobile Navigation Links */}
              <nav className="space-y-2">
                {navigationItems.map((item) => (
                  <React.Fragment key={item.name}>
                    <Link
                      href={item.href}
                      className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 ${
                        isActiveLink(item.href)
                          ? 'text-slate-900 bg-cyan-50 border border-cyan-200'
                          : 'text-slate-700 hover:text-cyan-600 hover:bg-slate-50'
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      aria-current={isActiveLink(item.href) ? 'page' : undefined}
                      aria-describedby={`mobile-${item.name.toLowerCase()}-description`}
                    >
                      {item.name}
                    </Link>
                    <div
                      id={`mobile-${item.name.toLowerCase()}-description`}
                      className="sr-only"
                    >
                      Navigate to {item.name} section of the website
                    </div>
                  </React.Fragment>
                ))}
              </nav>

              {/* Mobile Social Links */}
              <div className="pt-4 border-t border-slate-200">
                <p className="px-4 text-sm font-medium text-slate-600 mb-4">Connect With Me</p>
                <div className="flex justify-center space-x-6 px-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-500 hover:text-cyan-600 transition-all duration-200 p-3 rounded-full hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
                      aria-label={`Visit Emmanuel Chukwuka Ogugua's ${social.name} profile (opens in new tab)`}
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-30 md:hidden bg-black/20"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  )
}