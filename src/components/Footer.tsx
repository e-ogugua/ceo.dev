'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Linkedin, Twitter, Facebook, Instagram, ExternalLink } from 'lucide-react'

const footerNavigation = [
  { name: 'About', href: '/about' },
  { name: 'Portfolio & Ventures', href: '/portfolio-ventures' },
  { name: 'Learn', href: '/learn' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
]

const services = [
  { name: 'Custom Development', href: '/contact?service=custom-development' },
  { name: 'Technical Consulting', href: '/contact?service=technical-consulting' },
  { name: 'Team Training', href: '/contact?service=team-training' },
  { name: 'Ongoing Support', href: '/contact?service=ongoing-support' },
]

const socialLinks = [
  { name: 'Twitter', href: 'https://twitter.com/emmachuka', icon: Twitter },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/emmanuelogugua', icon: Linkedin },
  { name: 'Facebook', href: 'https://web.facebook.com/CEOICLtd/', icon: Facebook },
  { name: 'Instagram', href: 'https://www.instagram.com/ceo231/', icon: Instagram },
]

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-100 via-slate-50 to-slate-100 border-t border-slate-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center mb-4">
              <div className="relative w-24 h-24 mr-4 bg-white/10 backdrop-blur-sm border border-slate-200/20 rounded-xl p-2">
                <Image
                  src="/images/ChukwukaEmmanuelOguguaLogo.png"
                  alt="Chukwuka Emmanuel Ogugua Logo"
                  fill
                  sizes="96px"
                  className="object-cover"
                />
              </div>
              <span className="text-slate-800 font-semibold text-lg">
                Chukwuka Emmanuel Ogugua
              </span>
            </div>
            <p className="text-slate-600 mb-6 max-w-md">
              Software Engineer & Business Strategist bridging technology and entrepreneurship to create innovative solutions and drive business growth.
            </p>

            {/* EmmanuelOS Button */}
            <Link href="https://emmanuelos.vercel.app/" target="_blank">
              <motion.button
                className="bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-600 hover:from-amber-700 hover:via-yellow-700 hover:to-amber-700 text-white px-8 py-4 rounded-2xl font-semibold flex items-center gap-3 transition-all duration-300 hover-lift hover-glow mb-6"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                EmmanuelOS-SWART Dashboard
                <ExternalLink size={16} />
              </motion.button>
            </Link>

            {/* Social links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-amber-600 transition-all duration-200 p-3 rounded-full hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-slate-800 font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerNavigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-slate-600 hover:text-amber-600 transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-slate-800 font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-slate-600 hover:text-amber-600 transition-colors duration-200"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-slate-200 mt-8 pt-8 text-center"
        >
          <p className="text-slate-600">
            © {new Date().getFullYear()} Chukwuka Emmanuel Ogugua. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}