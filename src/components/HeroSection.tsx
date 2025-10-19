'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Code, Briefcase, TrendingUp, Sparkles } from 'lucide-react'
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
    gradient: 'from-slate-900 via-slate-800 to-slate-900',
    bgGradient: 'from-slate-50/95 to-slate-100/95',
    image: '/images/DevEngineerHeroimage2.webp',
    accent: 'from-primary-500 to-primary-600'
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
    gradient: 'from-ceo-600 via-ceo-500 to-ceo-600',
    bgGradient: 'from-ceo-50/95 to-yellow-50/95',
    image: '/images/DevCeoDualPersonal.webp',
    accent: 'from-ceo-500 to-ceo-600'
  },
  {
    id: 3,
    title: 'Business Owner',
    subtitle: 'Serial Entrepreneur & Brand Strategist',
    description: 'Leading multiple ventures in agriculture, technology, and lifestyle brands.',
    cta: 'Discover My Ventures',
    ctaLink: '/portfolio-ventures',
    icon: Briefcase,
    gradient: 'from-slate-800 via-slate-700 to-slate-800',
    bgGradient: 'from-slate-100/95 to-slate-200/95',
    image: '/images/bizStrategistHeroimage1.webp',
    accent: 'from-slate-600 to-slate-700'
  }
]

export function HeroSection() {
  const [currentPersona, setCurrentPersona] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
    if (isPaused) return

    const timer = setInterval(() => {
      setCurrentPersona((prev) => (prev + 1) % personas.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [isPaused])

  const current = personas[currentPersona]

  if (!isLoaded) {
    return (
      <section className="relative h-[75vh] pt-12 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        </div>
        <div className="relative z-10 w-full h-full flex items-center justify-center">
          <div className="glass-card p-8 rounded-3xl animate-pulse">
            <div className="w-16 h-16 bg-slate-200 rounded-full mx-auto mb-4"></div>
            <div className="h-8 bg-slate-200 rounded w-48 mx-auto mb-2"></div>
            <div className="h-4 bg-slate-200 rounded w-32 mx-auto"></div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section
      className="relative h-[75vh] pt-12 flex items-center justify-center overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Hero section with rotating personas"
      role="banner"
    >
      {/* Enhanced animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-40"></div>
      </div>

      {/* Enhanced floating elements */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        {[
          { left: '15%', top: '20%', delay: 0 },
          { left: '75%', top: '15%', delay: 0.5 },
          { left: '45%', top: '35%', delay: 1 },
          { left: '85%', top: '25%', delay: 1.5 },
          { left: '25%', top: '55%', delay: 2 },
          { left: '65%', top: '45%', delay: 2.5 },
          { left: '35%', top: '75%', delay: 3 },
          { left: '90%', top: '60%', delay: 3.5 },
          { left: '10%', top: '80%', delay: 4 },
          { left: '55%', top: '10%', delay: 4.5 },
          { left: '80%', top: '70%', delay: 5 },
          { left: '20%', top: '40%', delay: 5.5 },
          { left: '70%', top: '80%', delay: 6 },
          { left: '40%', top: '15%', delay: 6.5 },
          { left: '60%', top: '65%', delay: 7 },
          { left: '30%', top: '25%', delay: 7.5 },
          { left: '85%', top: '45%', delay: 8 },
          { left: '15%', top: '70%', delay: 8.5 },
          { left: '75%', top: '55%', delay: 9 },
          { left: '50%', top: '85%', delay: 9.5 }
        ].map((position, i) => (
          <motion.div
            key={i}
            className={`absolute w-2 h-2 rounded-full ${
              i % 3 === 0 ? 'bg-ceo-200/60' :
              i % 3 === 1 ? 'bg-primary-200/60' : 'bg-slate-200/60'
            }`}
            style={{
              left: position.left,
              top: position.top,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.1, 0.4, 0.1],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4 + (i % 3) * 2,
              repeat: Infinity,
              delay: position.delay,
            }}
            aria-hidden="true"
          />
        ))}
      </div>

      <div className="relative z-10 w-full h-full flex items-center justify-center text-center">
        {/* Enhanced Persona Carousel */}
        <div className="w-full h-full relative" role="region" aria-label="Persona showcase" aria-live="polite">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -50, scale: 1.05 }}
              transition={{
                duration: 0.7,
                ease: [0.4, 0, 0.2, 1]
              }}
              className={`absolute inset-0 flex items-center justify-center ${current.bgGradient} backdrop-blur-sm border border-slate-200/60 rounded-3xl shadow-2xl overflow-hidden`}
              role="group"
              aria-labelledby={`persona-${current.id}-title`}
              aria-describedby={`persona-${current.id}-description`}
            >
              {/* Enhanced background image */}
              <div className="absolute inset-0 opacity-80">
                <Image
                  src={current.image}
                  alt={`${current.title} - ${current.subtitle}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 85vw, 75vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  priority={current.id === 1}
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${current.gradient} opacity-20`}></div>
              </div>

              {/* Enhanced content overlay */}
              <div className="relative z-10 flex flex-col items-center justify-center h-full p-8 lg:p-12">
                {/* Enhanced icon with glow effect */}
                <motion.div
                  className="flex items-center justify-center mb-8"
                  animate={{
                    boxShadow: [
                      `0 0 20px rgba(234, 179, 8, 0.3)`,
                      `0 0 40px rgba(234, 179, 8, 0.6)`,
                      `0 0 20px rgba(234, 179, 8, 0.3)`
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${current.gradient} flex items-center justify-center text-white shadow-2xl`}>
                    <current.icon size={40} aria-hidden="true" />
                  </div>
                </motion.div>

                {/* Enhanced CTA buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href={current.ctaLink} aria-describedby={`persona-${current.id}-cta-description`}>
                    <motion.button
                      className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold relative overflow-hidden group"
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0 20px 40px rgba(15, 23, 42, 0.15)"
                      }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={`${current.cta} for ${current.title}`}
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        {current.cta}
                        <ArrowRight size={20} aria-hidden="true" />
                      </span>
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-r ${current.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                        initial={false}
                        animate={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                      />
                    </motion.button>
                  </Link>

                  {current.cta2 && (
                    <Link href={current.cta2Link} aria-describedby={`persona-${current.id}-cta2-description`}>
                      <motion.button
                        className="btn-secondary w-full sm:w-auto px-8 py-4 text-lg font-semibold"
                        whileHover={{
                          scale: 1.05,
                          borderColor: "rgb(234 179 8)",
                          backgroundColor: "rgb(254 252 232 / 0.1)"
                        }}
                        whileTap={{ scale: 0.95 }}
                        aria-label={current.cta2}
                      >
                        {current.cta2}
                      </motion.button>
                    </Link>
                  )}
                </div>
              </div>

              {/* Enhanced decorative elements */}
              <div className="absolute top-8 right-8 opacity-20">
                <Sparkles size={32} className="text-ceo-400" />
              </div>
              <div className="absolute bottom-8 left-8 opacity-20">
                <Sparkles size={24} className="text-primary-400" />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Enhanced progress indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {personas.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentPersona(index)
              setIsPaused(true)
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentPersona
                ? 'bg-ceo-500 scale-125'
                : 'bg-slate-300 hover:bg-slate-400'
            }`}
            aria-label={`Go to persona ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
