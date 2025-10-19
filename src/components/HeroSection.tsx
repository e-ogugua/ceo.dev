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
    gradient: 'from-slate-700 to-slate-800',
    bgGradient: 'from-slate-50/90 to-slate-100/90',
    image: '/images/DevEngineerHeroimage2.webp'
  },
  {
    id: 2,
    title: 'Versatile Leader',
    subtitle: 'Software Engineer & Business Strategist',
    description: 'Bridging technology and entrepreneurship to create innovative solutions and drive business growth.',
    cta: 'About Me',
    ctaLink: '/about',
    cta2: 'Get In Touch',
    cta2Link: '/contact',
    icon: TrendingUp,
    gradient: 'from-amber-600 to-amber-700',
    bgGradient: 'from-amber-50/90 to-yellow-50/90',
    image: '/images/DevCeoDualPersonal.webp'
  },
  {
    id: 3,
    title: 'Business Owner',
    subtitle: 'Serial Entrepreneur & Brand Strategist',
    description: 'Leading multiple ventures in agriculture, technology, and lifestyle brands.',
    cta: 'Discover My Ventures',
    ctaLink: '/portfolio-ventures',
    icon: Briefcase,
    gradient: 'from-slate-600 to-slate-700',
    bgGradient: 'from-slate-100/90 to-slate-200/90',
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
      className="relative h-[75vh] pt-12 flex items-center justify-center overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Hero section with rotating personas"
      role="banner"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100">
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
            className="absolute w-2 h-2 bg-amber-200/40 rounded-full"
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

      <div className="relative z-10 w-full h-full flex items-center justify-center text-center">
        {/* Persona Carousel */}
        <div className="w-full h-full relative" role="region" aria-label="Persona showcase" aria-live="polite">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className={`absolute inset-0 flex items-center justify-center ${current.bgGradient} backdrop-blur-sm border border-slate-200/50 rounded-2xl shadow-lg overflow-hidden`}
              role="group"
              aria-labelledby={`persona-${current.id}-title`}
              aria-describedby={`persona-${current.id}-description`}
            >
              <div className="absolute inset-0 opacity-90">
                <Image
                  src={current.image}
                  alt={`${current.title} - ${current.subtitle}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 85vw, 75vw"
                  className="object-cover object-center"
                  priority
                />
              </div>
              <div className="relative z-10 flex flex-col items-center justify-center h-full">
                <div className="flex items-center justify-center mb-6">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${current.gradient} flex items-center justify-center text-white`}>
                    <current.icon size={32} aria-hidden="true" />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href={current.ctaLink} aria-describedby={`persona-${current.id}-cta-description`}>
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
                    <Link href={current.cta2Link} aria-describedby={`persona-${current.id}-cta2-description`}>
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
      </div>
    </section>
  )
}
