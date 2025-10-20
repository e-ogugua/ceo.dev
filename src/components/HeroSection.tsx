'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Code, Briefcase, Sparkles, ExternalLink, User, Mail } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const personas = [
  {
    id: 1,
    title: 'Software Engineer',
    subtitle: 'Full-Stack Developer & Tech Innovator',
    description: 'Building robust, scalable applications with modern technologies and best practices. Passionate about creating intuitive digital experiences that solve real-world problems.',
    primaryCta: 'View Development Projects',
    primaryCtaLink: '/portfolio-ventures',
    secondaryCta: 'View Technical Skills',
    secondaryCtaLink: '/about',
    icon: Code,
    gradient: 'from-slate-900 via-slate-800 to-slate-900',
    bgGradient: 'from-slate-50/95 to-slate-100/95',
    image: '/images/DevEngineerHeroimage2.webp',
    accent: 'from-blue-500 to-cyan-500',
    stats: [
      { label: 'Years Experience', value: '15+' },
      { label: 'Projects Built', value: '50+' },
      { label: 'Technologies', value: '20+' }
    ]
  },
  {
    id: 2,
    title: 'Versatile Leader',
    subtitle: 'Developer & Business Strategist',
    description: 'Bridging the gap between technical innovation and strategic business growth. Leading digital transformation initiatives while maintaining technical excellence.',
    primaryCta: 'About Me',
    primaryCtaLink: '/about',
    secondaryCta: 'Get In Touch',
    secondaryCtaLink: '/contact',
    icon: Sparkles,
    gradient: 'from-slate-800 via-purple-900 to-slate-900',
    bgGradient: 'from-purple-50/95 to-slate-100/95',
    image: '/images/bizStrategistHeroimage.webp',
    accent: 'from-purple-500 to-pink-500',
    stats: [
      { label: 'Dual Expertise', value: '65% / 35%' },
      { label: 'Team Leadership', value: '10+' },
      { label: 'ROI Generated', value: '$500K+' }
    ]
  },
  {
    id: 3,
    title: 'Business Strategist',
    subtitle: 'Entrepreneur & Brand Architect',
    description: 'Driving business growth through strategic vision and compelling brand narratives. Building sustainable ventures that create lasting impact in the market.',
    primaryCta: 'View Business Ventures',
    primaryCtaLink: '/portfolio-ventures',
    secondaryCta: 'Learn More',
    secondaryCtaLink: '/about',
    icon: Briefcase,
    gradient: 'from-slate-900 via-slate-800 to-slate-900',
    bgGradient: 'from-slate-50/95 to-slate-100/95',
    image: '/images/bizStrategistHeroimage1.webp',
    accent: 'from-emerald-500 to-teal-500',
    stats: [
      { label: 'Companies Founded', value: '6+' },
      { label: 'Team Members', value: '50+' },
      { label: 'Market Impact', value: 'Regional' }
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-ceo-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container-padding relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <motion.div
              key={currentPersona}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Persona Title & Icon */}
              <div className="flex items-center justify-center lg:justify-start gap-4">
                <motion.div
                  className={`p-3 rounded-2xl bg-gradient-to-r ${currentPersonaData.accent} shadow-lg`}
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <currentPersonaData.icon className="w-8 h-8 text-white" />
                </motion.div>
                <div>
                  <motion.h1
                    className="text-5xl md:text-6xl font-bold text-slate-900 mb-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {currentPersonaData.title}
                  </motion.h1>
                  <motion.p
                    className="text-xl text-slate-600 font-medium"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    {currentPersonaData.subtitle}
                  </motion.p>
                </div>
              </div>

              {/* Description */}
              <motion.p
                className="text-lg text-slate-600 max-w-2xl leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                {currentPersonaData.description}
              </motion.p>

              {/* Stats */}
              <motion.div
                className="grid grid-cols-3 gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                {currentPersonaData.stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-slate-200/60 shadow-sm"
                    whileHover={{ scale: 1.05, y: -2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <div className={`text-2xl font-bold bg-gradient-to-r ${currentPersonaData.accent} bg-clip-text text-transparent`}>
                      {stat.value}
                    </div>
                    <div className="text-sm text-slate-600 font-medium">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                className={`flex flex-col sm:flex-row gap-4 ${currentPersonaData.id === 2 ? 'justify-center lg:justify-start' : 'justify-center lg:justify-start'}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <Link href={currentPersonaData.primaryCtaLink}>
                  <motion.button
                    className={`btn-primary flex items-center gap-2 px-8 py-4 text-lg font-semibold relative overflow-hidden group`}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 20px 40px rgba(234, 179, 8, 0.3)"
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      {currentPersonaData.primaryCta}
                      <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
                    </span>
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-r ${currentPersonaData.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                      initial={false}
                      animate={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    />
                  </motion.button>
                </Link>

                {currentPersonaData.id === 2 ? (
                  // Special case for middle persona - show both About and Contact buttons
                  <>
                    <Link href={currentPersonaData.primaryCtaLink}>
                      <motion.button
                        className={`btn-primary flex items-center gap-2 px-8 py-4 text-lg font-semibold relative overflow-hidden group`}
                        whileHover={{
                          scale: 1.05,
                          boxShadow: "0 20px 40px rgba(234, 179, 8, 0.3)"
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span className="relative z-10 flex items-center gap-2">
                          <User size={20} />
                          {currentPersonaData.primaryCta}
                          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
                        </span>
                        <motion.div
                          className={`absolute inset-0 bg-gradient-to-r ${currentPersonaData.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                          initial={false}
                          animate={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                        />
                      </motion.button>
                    </Link>

                    <Link href={currentPersonaData.secondaryCtaLink}>
                      <motion.button
                        className={`btn-secondary flex items-center gap-2 px-8 py-4 text-lg font-semibold`}
                        whileHover={{
                          scale: 1.05,
                          borderColor: "rgb(234 179 8)",
                          backgroundColor: "rgba(234, 179, 8, 0.05)"
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Mail size={20} />
                        {currentPersonaData.secondaryCta}
                      </motion.button>
                    </Link>
                  </>
                ) : (
                  <Link href={currentPersonaData.secondaryCtaLink}>
                    <motion.button
                      className={`btn-secondary flex items-center gap-2 px-8 py-4 text-lg font-semibold`}
                      whileHover={{
                        scale: 1.05,
                        borderColor: "rgb(234 179 8)",
                        backgroundColor: "rgba(234, 179, 8, 0.05)"
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {currentPersonaData.secondaryCta}
                      <ExternalLink size={16} />
                    </motion.button>
                  </Link>
                )}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative w-full max-w-lg mx-auto">
              {/* Main Image Container */}
              <motion.div
                className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentPersona}
                    initial={{ opacity: 0, scale: 0.9, rotateY: -90 }}
                    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                    exit={{ opacity: 0, scale: 0.9, rotateY: 90 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={currentPersonaData.image}
                      alt={`${currentPersonaData.title} - ${currentPersonaData.subtitle}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority={currentPersona === 0}
                      className="object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${currentPersonaData.gradient} opacity-20`} />
                  </motion.div>
                </AnimatePresence>

                {/* Floating Elements */}
                <div className="absolute inset-0 pointer-events-none">
                  <motion.div
                    className="absolute top-4 right-4 w-3 h-3 bg-white/80 rounded-full"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.8, 1, 0.8],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <motion.div
                    className="absolute bottom-8 left-8 w-2 h-2 bg-white/60 rounded-full"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.6, 1, 0.6],
                    }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                  />
                </div>
              </motion.div>

              {/* Persona Indicators */}
              <div className="flex justify-center mt-8 space-x-3">
                {personas.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => handlePersonaChange(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentPersona
                        ? `bg-gradient-to-r ${currentPersonaData.accent} scale-125`
                        : 'bg-slate-300 hover:bg-slate-400'
                    }`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={`Go to persona ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
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
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-slate-400 rounded-full mt-2"
            animate={{
              y: [0, 12, 0],
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
