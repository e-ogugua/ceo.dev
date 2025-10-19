'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Code, Briefcase, TrendingUp } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
const personas = [
  {
    id: 1,
    title: 'Software Engineer',
    subtitle: 'Full-Stack Developer & Tech Innovator',
    description: 'Building robust, scalable applications with modern technologies and best practices.',
    cta: 'View Development Projects',
    ctaLink: '/portfolio-ventures',
    icon: Code,
    gradient: 'from-blue-500 to-cyan-500',
    bgGradient: 'from-blue-900/20 to-cyan-900/20',
    image: '/images/DevEngineerHeroimage2.webp'
  },
  {
    id: 2,
    title: 'Strategic Leader',
    subtitle: 'Business Strategist & Entrepreneur',
    description: 'Bridging technology and business to drive growth and innovation across ventures.',
    cta: 'Explore Business Ventures',
    ctaLink: '/portfolio-ventures',
    cta2: 'Learn More About Me',
    cta2Link: '/about',
    icon: TrendingUp,
    gradient: 'from-purple-500 to-pink-500',
    bgGradient: 'from-purple-900/20 to-pink-900/20',
    image: '/images/bizStrategistHeroimage.webp'
  },
  {
    id: 3,
    title: 'Business Owner',
    subtitle: 'Serial Entrepreneur & Brand Strategist',
    description: 'Leading multiple ventures in agriculture, technology, and lifestyle brands.',
    cta: 'Discover My Ventures',
    ctaLink: '/portfolio-ventures',
    icon: Briefcase,
    gradient: 'from-green-500 to-emerald-500',
    bgGradient: 'from-green-900/20 to-emerald-900/20',
    image: '/images/bizStrategistHeroimage1.webp'
  }
]

export function HeroSection() {
  const [currentPersona, setCurrentPersona] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) return

    const timer = setInterval(() => {
      setCurrentPersona((prev) => (prev + 1) % personas.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [isPaused])

  const current = personas[currentPersona]

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Hero section with rotating personas"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        {[
          { left: '15%', top: '20%' },
          { left: '75%', top: '15%' },
          { left: '45%', top: '35%' },
          { left: '85%', top: '25%' },
          { left: '25%', top: '55%' },
          { left: '65%', top: '45%' },
          { left: '35%', top: '75%' },
          { left: '90%', top: '60%' },
          { left: '10%', top: '80%' },
          { left: '55%', top: '10%' },
          { left: '80%', top: '70%' },
          { left: '20%', top: '40%' },
          { left: '70%', top: '80%' },
          { left: '40%', top: '15%' },
          { left: '60%', top: '65%' },
          { left: '30%', top: '25%' },
          { left: '85%', top: '45%' },
          { left: '15%', top: '70%' },
          { left: '75%', top: '55%' },
          { left: '50%', top: '85%' }
        ].map((position, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/10 rounded-full"
            style={{
              left: position.left,
              top: position.top,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 3 + (i % 3) * 2,
              repeat: Infinity,
              delay: (i % 5) * 0.5,
            }}
            aria-hidden="true"
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight text-balance">
            Chukwuka Emmanuel{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Ogugua
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto text-balance">
            Software Engineer & Business Strategist bridging technology and entrepreneurship
          </p>
        </motion.div>

        {/* Persona Carousel */}
        <div className="mb-12" role="region" aria-label="Persona showcase">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className={`max-w-4xl mx-auto p-8 rounded-2xl bg-gradient-to-r ${current.bgGradient} backdrop-blur-sm border border-white/10 relative overflow-hidden`}
            >
              <div className="absolute inset-0 opacity-10">
                <Image
                  src={current.image}
                  alt={current.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative z-10">
                <div className="flex items-center justify-center mb-6">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${current.gradient} flex items-center justify-center text-white`}>
                    <current.icon size={32} aria-hidden="true" />
                  </div>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-balance">
                  {current.title}
                </h2>

                <p className="text-lg md:text-xl text-gray-300 mb-4">
                  {current.subtitle}
                </p>

                <p className="text-gray-400 mb-8 max-w-2xl mx-auto text-balance">
                  {current.description}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href={current.ctaLink}>
                    <motion.button
                      className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={`${current.cta} for ${current.title}`}
                    >
                      {current.cta}
                      <ArrowRight size={20} aria-hidden="true" />
                    </motion.button>
                  </Link>

                  {current.cta2 && (
                    <Link href={current.cta2Link}>
                      <motion.button
                        className="btn-secondary w-full sm:w-auto"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label={current.cta2}
                      >
                        {current.cta2}
                      </motion.button>
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Persona indicators */}
        <div className="flex justify-center space-x-2 mb-8" role="tablist" aria-label="Persona selection">
          {personas.map((persona, index) => (
            <button
              key={persona.id}
              onClick={() => setCurrentPersona(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900 ${
                index === currentPersona
                  ? 'bg-white scale-125'
                  : 'bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`View ${persona.title} persona`}
              aria-selected={index === currentPersona}
              role="tab"
            />
          ))}
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          aria-hidden="true"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
