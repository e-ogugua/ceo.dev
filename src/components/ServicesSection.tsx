'use client'

import { motion } from 'framer-motion'
import { Code, Users, TrendingUp, Headphones, ArrowRight, CheckCircle } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    id: 1,
    title: 'Custom Development',
    description: 'Bespoke software solutions tailored to your specific business needs. From web applications to mobile apps, I build scalable, maintainable code that grows with your business.',
    icon: Code,
    features: [
      'Full-stack web applications',
      'Mobile app development',
      'API development & integration',
      'Database design & optimization',
      'Performance optimization',
      'Code review & refactoring'
    ],
    startingPrice: 'From $2,500',
    timeline: '2-8 weeks',
    gradient: 'from-blue-500 to-cyan-500',
    bgGradient: 'from-blue-900/20 to-cyan-900/20'
  },
  {
    id: 2,
    title: 'Technical Consulting',
    description: 'Strategic technology guidance to help you make informed decisions about your tech stack, architecture, and development processes. Get expert advice on scaling and optimization.',
    icon: TrendingUp,
    features: [
      'Technology stack evaluation',
      'Architecture planning',
      'Performance audits',
      'Security assessments',
      'Scalability planning',
      'Tech strategy roadmap'
    ],
    startingPrice: 'From $150/hr',
    timeline: '1-4 weeks',
    gradient: 'from-purple-500 to-pink-500',
    bgGradient: 'from-purple-900/20 to-pink-900/20'
  },
  {
    id: 3,
    title: 'Team Training',
    description: 'Comprehensive training programs to upskill your development team. From modern JavaScript frameworks to software architecture patterns, ensure your team stays current.',
    icon: Users,
    features: [
      'React/Next.js workshops',
      'TypeScript fundamentals',
      'Modern CSS techniques',
      'Git workflows & collaboration',
      'Code quality & testing',
      'Performance optimization'
    ],
    startingPrice: 'From $800/session',
    timeline: '1-5 days',
    gradient: 'from-green-500 to-emerald-500',
    bgGradient: 'from-green-900/20 to-emerald-900/20'
  },
  {
    id: 4,
    title: 'Ongoing Support',
    description: 'Reliable maintenance and support for your applications. Keep your software running smoothly with regular updates, bug fixes, and performance monitoring.',
    icon: Headphones,
    features: [
      'Bug fixes & patches',
      'Performance monitoring',
      'Security updates',
      'Feature enhancements',
      '24/7 emergency support',
      'Monthly health reports'
    ],
    startingPrice: 'From $500/month',
    timeline: 'Ongoing',
    gradient: 'from-orange-500 to-red-500',
    bgGradient: 'from-orange-900/20 to-red-900/20'
  }
]

export function ServicesSection() {
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
            Services &{' '}
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Solutions
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional services tailored to help you build, scale, and maintain exceptional digital products
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className={`group relative bg-gradient-to-r ${service.bgGradient} backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300`}
            >
              {/* Service Header */}
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${service.gradient} flex items-center justify-center text-white mr-4`}>
                    <service.icon size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {service.title}
                    </h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-300">
                      <span>{service.startingPrice}</span>
                      <span>•</span>
                      <span>{service.timeline}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-white mb-4">What's Included</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <Link href={`/contact?service=${service.title.toLowerCase().replace(/\s+/g, '-')}`}>
                  <motion.button
                    className={`w-full bg-gradient-to-r ${service.gradient} hover:opacity-90 text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-200`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get Started
                    <ArrowRight size={20} />
                  </motion.button>
                </Link>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm border border-white/10 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Need a Custom Solution?</h3>
            <p className="text-gray-300 mb-6">
              Every project is unique. Let's discuss your specific requirements and create a tailored solution that perfectly fits your needs and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact?service=custom-solution">
                <motion.button
                  className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Discuss Custom Project
                </motion.button>
              </Link>

              <button className="border border-white/20 hover:bg-white/10 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200">
                View Portfolio
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
