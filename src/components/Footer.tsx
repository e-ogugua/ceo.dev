'use client'

import Link from 'next/link'
import { Linkedin, Twitter, Facebook, Instagram, ExternalLink } from 'lucide-react'
import Image from 'next/image'
import { NewsletterSubscription } from '@/components/NewsletterSubscription'

const footerNavigation = [
  { name: 'About', href: '/about' },
  { name: 'Portfolio', href: '/portfolio-ventures' },
  { name: 'Blog', href: '/blog' },
  { name: 'Learn', href: '/learn' },
  { name: 'Contact', href: '/contact' },
]

const servicesNavigation = [
  { name: 'Web Development', href: '/services/web-development' },
  { name: 'Business Strategy', href: '/services/business-strategy' },
  { name: 'Consulting', href: '/services/consulting' },
  { name: 'Training', href: '/services/training' },
]

const socialLinks = [
  { name: 'Twitter', href: 'https://twitter.com/emmachuka', icon: Twitter },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/emmanuelogugua', icon: Linkedin },
  { name: 'Facebook', href: 'https://web.facebook.com/CEOICLtd/', icon: Facebook },
  { name: 'Instagram', href: 'https://www.instagram.com/ceo231/', icon: Instagram },
]

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900/70 via-slate-900/80 to-slate-900/95 dark:bg-slate-900/95 border-t border-primary/20 dark:border-slate-700/70 transition-all duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Brand Section - Left Side */}
          <div className="lg:col-span-5">
            <Link href="/" className="group inline-flex items-center space-x-3 mb-4">
              <div className="relative">
                <Image
                  src="/images/ChukwukaEmmanuelOguguaLogo.png"
                  alt="CEO Logo"
                  width={120}
                  height={120}
                  className="rounded-full object-cover shadow-2xl ring-2 ring-primary/60 group-hover:ring-primary/80 transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,163,255,0.3)] hover:scale-105 bg-gradient-to-br from-primary/20 via-secondary/10 to-primary/5 backdrop-blur-sm hover:from-primary/30 hover:via-secondary/20 hover:to-primary/10"
                />
              </div>

              <div>
                <div className="space-y-0.5">
                  <p className="text-white dark:text-slate-100 font-bold text-lg leading-tight">
                    Chukwuka Emmanuel Ogugua
                  </p>
                  <p className="text-slate-400 dark:text-slate-300 font-medium text-sm">Software Engineer & Business Strategist</p>
                </div>
              </div>
            </Link>

            {/* EmmanuelOS Explore Button */}
            <div className="mb-4">
              <Link href="https://emmanuelos.vercel.app" target="_blank" rel="noopener noreferrer" className="group">
                <span className="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/40 rounded text-blue-400 hover:text-blue-300 hover:border-blue-400/60 hover:bg-gradient-to-r hover:from-blue-600/30 hover:to-purple-600/30 transition-all duration-300 text-sm font-semibold shadow-lg hover:shadow-xl">
                  Explore EmmanuelOS
                  <ExternalLink size={12} className="ml-1.5 group-hover:translate-x-0.5 transition-transform duration-200" />
                </span>
              </Link>
            </div>
          </div>

          {/* Navigation & Services - Center */}
          <div className="lg:col-span-4">
            <div className="grid grid-cols-2 gap-6">
              {/* Navigation Links */}
              <div>
                <h3 className="text-white dark:text-slate-100 font-bold text-xs mb-3 uppercase tracking-wider">Navigate</h3>
                <nav className="space-y-2">
                  {footerNavigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block text-slate-400 dark:text-slate-300 hover:text-white dark:hover:text-slate-100 transition-colors duration-200 text-sm font-medium hover:translate-x-1 transform hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10 hover:backdrop-blur-sm hover:px-2 hover:py-1 hover:rounded"
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </div>

              {/* Services Links */}
              <div>
                <h3 className="text-white dark:text-slate-100 font-bold text-xs mb-3 uppercase tracking-wider">Services</h3>
                <nav className="space-y-2">
                  {servicesNavigation.slice(0, 4).map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="block text-slate-400 dark:text-slate-300 hover:text-white dark:hover:text-slate-100 transition-colors duration-200 text-sm font-medium hover:translate-x-1 transform hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10 hover:backdrop-blur-sm hover:px-2 hover:py-1 hover:rounded"
                    >
                      {service.name}
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
          </div>

          {/* Social & Connect - Right Side */}
          <div className="lg:col-span-3">
            <h3 className="text-white dark:text-slate-100 font-bold text-xs mb-3 uppercase tracking-wider">Connect</h3>

            {/* Social Links */}
            <div className="flex items-center space-x-2 mb-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 dark:text-slate-300 hover:text-white dark:hover:text-slate-100 transition-all duration-300 p-1.5 rounded hover:bg-gradient-to-r hover:from-primary/20 hover:to-secondary/20 hover:backdrop-blur-sm hover:scale-110 focus:outline-none focus:ring-1 focus:ring-primary/50 focus:ring-offset-2"
                  aria-label={`Visit ${social.name}`}
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>

            <div className="text-slate-400 dark:text-slate-300 text-sm">
              <p className="font-medium">Enugu, Nigeria</p>
              <a href="mailto:emmachuka@gmail.com" className="hover:text-white dark:hover:text-slate-100 transition-colors duration-200 font-medium">
                emmachuka@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="border-t border-slate-800/50 dark:border-slate-700/50 mt-8 pt-8">
          <div className="max-w-md mx-auto">
            <NewsletterSubscription
              variant="minimal"
              title="Stay Updated"
              description="Get the latest insights and updates delivered to your inbox."
            />
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-800/50 dark:border-slate-700/50 mt-8 pt-6 text-center">
          <p className="text-slate-500 dark:text-slate-400 text-xs font-medium">
            © {new Date().getFullYear()} Emmanuel Chukwuka Ogugua. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}