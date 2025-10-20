'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Code, Sparkles, ExternalLink, Mail } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const personas = [
  {
    id: 0,
    title: 'Software Engineer',
    subtitle: 'Full-Stack Developer & Problem Solver',
    description: 'Crafting digital solutions with modern technologies. Passionate about clean code, scalable architectures, and delivering exceptional user experiences that drive business growth.',
    primaryCta: 'View My Work',
    primaryCtaLink: '/portfolio-ventures',
    secondaryCta: 'Learn More',
    secondaryCtaLink: '/about',
    icon: Code,
    gradient: 'from-primary via-slate-800 to-primary',
    bgGradient: 'from-white/95 to-slate-50/95',
    image: '/images/DevEngineerHeroimage2.webp',
    accent: 'from-primary to-secondary',
    stats: [
      { label: 'Years Experience', value: '15+' },
      { label: 'Projects Built', value: '50+' },
      { label: 'Technologies', value: '20+' }
    ]
  },
  {
    id: 1,
    title: 'Versatile Leader',
    subtitle: 'Developer & Business Strategist',
    description: 'Bridging the gap between technical innovation and strategic business growth. Leading digital transformation initiatives while maintaining technical excellence.',
    primaryCta: 'About Me',
    primaryCtaLink: '/about',
    secondaryCta: 'Get In Touch',
    secondaryCtaLink: '/contact',
    icon: Sparkles,
    gradient: 'from-secondary via-purple-900 to-secondary',
    bgGradient: 'from-purple-50/95 to-slate-50/95',
    image: '/images/bizStrategistHeroimage.webp',
    accent: 'from-secondary to-purple-500',
    stats: [
      { label: 'Dual Expertise', value: '65% / 35%' },
      { label: 'Team Leadership', value: '10+' },
      { label: 'ROI Generated', value: '$500K+' }
    ]
  }
]

export function HeroSection() {
  const [currentPersona, setCurrentPersona] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentPersona((prev) => (prev + 1) % personas.length)
    }, 6000) // Change every 6 seconds

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const handlePersonaChange = (index: number) => {
    setCurrentPersona(index)
    setIsAutoPlaying(false)
  }

  const currentPersonaData = personas[currentPersona]

  return (
    <section className="relative h-[70vh] overflow-hidden mt-20">
      {/* Large Image Background - 70vh height */}
      <div className="absolute inset-0" style={{ perspective: '1000px' }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPersona}
            initial={{ opacity: 0, scale: 0.8, rotateY: -45 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            exit={{ opacity: 0, scale: 0.8, rotateY: 45 }}
            transition={{ 
              duration: 0.8, 
              ease: "easeInOut",
              scale: { type: "spring", stiffness: 300, damping: 20 }
            }}
            className="absolute inset-0"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <Image
              src={currentPersonaData.image}
              alt={`${currentPersonaData.title} - ${currentPersonaData.subtitle}`}
              fill
              sizes="100vw"
              priority={currentPersona === 0}
              className="object-cover object-center"
            />
            <div className={`absolute inset-0 bg-gradient-to-b ${currentPersonaData.gradient} opacity-40`} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Content Overlay - Bottom 30% (adjusted for new height) */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Spacer to push content to bottom */}
        <div className="flex-1" />

        {/* Content Section - Bottom 30% (adjusted for new height) */}
        <div className="bg-gradient-to-t from-black/90 via-black/50 to-transparent">
          <div className="container-padding py-12">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`max-w-4xl mx-auto ${currentPersonaData.id === 1 ? 'text-left ml-8' : currentPersonaData.id === 0 ? 'text-right mr-16' : 'text-center'}`}
            >
              {/* Stats Pills & Buttons - Positioned based on persona */}
              <motion.div
                key={currentPersona}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col items-center justify-center space-y-6 ${
                  currentPersonaData.id === 1 
                    ? 'md:items-start md:justify-start' 
                    : 'items-center justify-center'
                }`}
              >
                {/* Stats Pills */}
                <motion.div
                  className={`flex flex-wrap gap-4 ${
                    currentPersonaData.id === 1 
                      ? 'justify-start md:justify-start' 
                      : currentPersonaData.id === 0 
                      ? 'justify-end md:justify-end' 
                      : 'justify-center'
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {currentPersonaData.stats.map((stat) => (
                    <motion.div
                      key={stat.label}
                      className="bg-white/30 backdrop-blur-md text-white px-5 py-3 rounded-full text-sm font-semibold border-2 border-white/40 shadow-lg"
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.4)", borderColor: "rgba(255, 255, 255, 0.6)" }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                    >
                      <span className="font-bold">{stat.value}</span> {stat.label}
                    </motion.div>
                  ))}
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                  className={`flex flex-col sm:flex-row gap-4 ${
                    currentPersonaData.id === 1 
                      ? 'justify-start md:justify-start' 
                      : currentPersonaData.id === 0 
                      ? 'justify-end md:justify-end' 
                      : 'justify-center'
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <Link href={currentPersonaData.primaryCtaLink}>
                    <motion.button
                      className="bg-white/25 backdrop-blur-md hover:bg-white/35 text-white border-2 border-white/40 hover:border-white/60 px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl"
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0 25px 50px rgba(255, 255, 255, 0.3)",
                        backgroundColor: "rgba(255, 255, 255, 0.35)"
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="flex items-center gap-2">
                        {currentPersonaData.primaryCta}
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
                      </span>
                    </motion.button>
                  </Link>

                  {currentPersonaData.id === 1 ? (
                    // Special case for business strategist - show Contact button (secondary CTA)
                    <Link href={currentPersonaData.secondaryCtaLink}>
                      <motion.button
                        className="bg-transparent hover:bg-white/15 text-white border-2 border-white/60 hover:border-white/80 px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                        whileHover={{
                          scale: 1.05,
                          borderColor: "rgba(255, 255, 255, 0.9)",
                          backgroundColor: "rgba(255, 255, 255, 0.15)"
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span className="flex items-center gap-2">
                          <Mail size={20} />
                          {currentPersonaData.secondaryCta}
                        </span>
                      </motion.button>
                    </Link>
                  ) : (
                    <Link href={currentPersonaData.secondaryCtaLink}>
                      <motion.button
                        className="bg-transparent hover:bg-white/15 text-white border-2 border-white/60 hover:border-white/80 px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                        whileHover={{
                          scale: 1.05,
                          borderColor: "rgba(255, 255, 255, 0.9)",
                          backgroundColor: "rgba(255, 255, 255, 0.15)"
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span className="flex items-center gap-2">
                          {currentPersonaData.secondaryCta}
                          <ExternalLink size={16} />
                        </span>
                      </motion.button>
                    </Link>
                  )}
                </motion.div>
              </motion.div>

              {/* Persona Indicators */}
              <motion.div
                className="flex justify-center mt-8 space-x-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                {personas.slice(0, 2).map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => handlePersonaChange(index)}
                    className={`w-4 h-4 rounded-full transition-all duration-300 shadow-lg ${
                      index === currentPersona
                        ? `bg-white scale-125 shadow-white/50`
                        : 'bg-white/50 hover:bg-white/70 shadow-white/30'
                    }`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={`Go to persona ${index + 1}`}
                  />
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-7 h-12 border-2 border-white/70 rounded-full flex justify-center shadow-lg">
          <motion.div
            className="w-1.5 h-4 bg-white rounded-full mt-3 shadow-sm"
            animate={{
              y: [0, 16, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>
    </section>
  )
}
