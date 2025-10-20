'use client'

import Link from 'next/link'
import { Linkedin, Twitter, Facebook, Instagram, ExternalLink } from 'lucide-react'
import Image from 'next/image'

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
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Brand Section - Left Side */}
          <div className="lg:col-span-4">
            <Link href="/" className="group inline-flex items-center space-x-4 mb-6">
              <div className="relative">
                <Image
                  src="/images/ChukwukaEmmanuelOguguaLogo.png"
                  alt="CEO Logo"
                  width={160}
                  height={160}
                  className="rounded-full object-cover shadow-3xl ring-4 ring-slate-700 group-hover:ring-blue-500/80 transition-all duration-300 hover:shadow-[0_25px_50px_rgba(0,163,255,0.4)] hover:scale-105"
                />
              </div>

              <div>
                <div className="space-y-1">
                  <p className="text-white font-bold text-xl leading-tight">
                    Chukwuka Emmanuel Ogugua
                  </p>
                  <p className="text-slate-400 font-medium">Software Engineer & Business Strategist</p>
                </div>
              </div>
            </Link>

            {/* EmmanuelOS Explore Button */}
            <div className="mb-6">
              <Link href="https://emmanuelos.vercel.app" target="_blank" rel="noopener noreferrer" className="group">
                <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/40 rounded-lg text-blue-400 hover:text-blue-300 hover:border-blue-400/60 hover:bg-gradient-to-r hover:from-blue-600/30 hover:to-purple-600/30 transition-all duration-300 text-sm font-semibold shadow-lg hover:shadow-xl">
                  Explore EmmanuelOS
                  <ExternalLink size={14} className="ml-2 group-hover:translate-x-0.5 transition-transform duration-200" />
                </span>
              </Link>
            </div>
          </div>

          {/* Navigation & Services - Center */}
          <div className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-8">
              {/* Navigation Links */}
              <div>
                <h3 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">Navigate</h3>
                <nav className="space-y-3">
                  {footerNavigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block text-slate-400 hover:text-white transition-colors duration-200 text-sm font-medium hover:translate-x-1 transform"
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </div>

              {/* Services Links */}
              <div>
                <h3 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">Services</h3>
                <nav className="space-y-3">
                  {servicesNavigation.slice(0, 4).map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="block text-slate-400 hover:text-white transition-colors duration-200 text-sm font-medium hover:translate-x-1 transform"
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
            <h3 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">Connect</h3>

            {/* Social Links */}
            <div className="flex items-center space-x-3 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-all duration-300 p-2 rounded-lg hover:bg-slate-800 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  aria-label={`Visit ${social.name}`}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>

            <div className="text-slate-400 text-sm">
              <p className="font-medium">Enugu, Nigeria</p>
              <a href="mailto:emmachuka@gmail.com" className="hover:text-white transition-colors duration-200 font-medium">
                emmachuka@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-800 mt-10 pt-6 text-center">
          <p className="text-slate-500 text-sm font-medium">
            © {new Date().getFullYear()} Emmanuel Chukwuka Ogugua. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}