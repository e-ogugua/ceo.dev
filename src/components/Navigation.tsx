'use client'

import { useState, useEffect, useRef } from 'react'
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
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
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
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-slate-900/95 backdrop-blur-lg border-b border-white/10'
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <motion.div
              className="flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/" className="flex items-center group" aria-label="Go to homepage">
                <Image
                  src="/ChukwukaEmmanuelOguguaLogo.webp"
                  alt="Chukwuka Emmanuel Ogugua Logo"
                  width={40}
                  height={40}
                  className="transition-transform group-hover:rotate-3"
                />
                <span className="ml-2 text-white font-semibold text-lg hidden sm:block">
                  Chukwuka Emmanuel Ogugua
                </span>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navigationItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className={`px-3 py-2 text-sm font-medium transition-all duration-200 relative group ${
                        isActiveLink(item.href)
                          ? 'text-white'
                          : 'text-gray-300 hover:text-white'
                      }`}
                      aria-current={isActiveLink(item.href) ? 'page' : undefined}
                    >
                      {item.name}
                      <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 ${
                        isActiveLink(item.href) ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}></span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Icons */}
            <div className="hidden md:flex items-center space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200 p-2 rounded-full hover:bg-white/10"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={`Visit ${social.name} profile`}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <motion.button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-400 hover:text-white focus:outline-none focus:text-white p-2"
                whileTap={{ scale: 0.9 }}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
                aria-label="Toggle mobile menu"
              >
                <motion.div
                  animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </motion.div>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            ref={mobileMenuRef}
            id="mobile-menu"
            className="fixed inset-x-0 top-16 z-40 md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="bg-slate-900/95 backdrop-blur-lg border-t border-white/10 shadow-lg">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`block px-3 py-3 text-base font-medium transition-colors duration-200 ${
                      isActiveLink(item.href)
                        ? 'text-white bg-blue-500/10'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    aria-current={isActiveLink(item.href) ? 'page' : undefined}
                  >
                    {item.name}
                  </Link>
                ))}

                {/* Mobile Social Icons */}
                <div className="border-t border-white/10 pt-4">
                  <p className="px-3 text-sm font-medium text-gray-400 mb-3">Connect</p>
                  <div className="flex space-x-4 px-3">
                    {socialLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors duration-200 p-2 rounded-full hover:bg-white/10"
                        aria-label={`Visit ${social.name} profile`}
                      >
                        <social.icon size={20} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile menu backdrop */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-30 md:hidden"
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