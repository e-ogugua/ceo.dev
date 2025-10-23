'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const facts = [
  {
    id: 1,
    fact: "I'm deeply wired for problem-solving – the more complex the challenge, the more engaged I become.",
    icon: "🧠"
  },
  {
    id: 2,
    fact: "Gardening is my sanctuary; it's where I find my calm and recharge away from the digital world.",
    icon: "🌱"
  },
  {
    id: 3,
    fact: "A self-confessed clean freak, I find clarity and focus in organized spaces, a habit that extends to my code.",
    icon: "✨"
  },
  {
    id: 4,
    fact: "Beyond the keyboard, I'm a passionate cook (and eater!), always eager to create new flavors.",
    icon: "👨‍🍳"
  },
  {
    id: 5,
    fact: "I appreciate the strategic depth of chess, finding it a perfect complement to my analytical mind.",
    icon: "♟️"
  },
  {
    id: 6,
    fact: "Whether coding, designing, or even tending to my garden, I'm driven by an intrinsic joy in creating.",
    icon: "🎨"
  },
  {
    id: 7,
    fact: "Guided by my faith, I approach challenges with purpose and a strong sense of mentorship.",
    icon: "🙏"
  },
  {
    id: 8,
    fact: "You'll often find me on a road bike or in the pool; staying active is essential to my well-being and clear thinking.",
    icon: "🚴‍♂️"
  }
]

export function RandomFacts() {
  return (
    <section className="py-8 bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <h2 className="text-xl md:text-2xl font-bold text-slate-100 mb-1">
            Random facts{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              about me
            </span>
          </h2>
          <p className="text-sm text-slate-300">
            Discover what makes me tick
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-[4/3] max-w-md mx-auto lg:mx-0">
              <Image
                src="/images/aboutImageRandomFactsSection.png"
                alt="Random facts about Emmanuel"
                fill
                className="object-cover rounded-xl shadow-xl"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </motion.div>

          {/* Facts Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-3"
          >
            {facts.map((fact, index) => (
              <motion.div
                key={fact.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -1 }}
                className="group"
              >
                <div className="relative bg-slate-800/95 backdrop-blur-sm border border-slate-700/60 rounded-lg p-3 hover:border-slate-600/70 transition-all duration-300 shadow-md hover:shadow-lg">
                  <div className="w-px h-6 bg-slate-700/50"></div>
                  {/* Icon */}
                  <div className="text-lg mb-2 text-center">
                    {fact.icon}
                  </div>

                  {/* Fact Text */}
                  <p className="text-slate-200 text-xs leading-tight text-center font-medium">
                    {fact.fact}
                  </p>

                  {/* Subtle glow */}
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-400/5 to-purple-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Closing Quote */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-6"
        >
          <div className="inline-flex items-center space-x-2 bg-slate-800/90 backdrop-blur-sm border border-slate-700/50 rounded-lg px-4 py-2">
            <span className="text-slate-300 text-sm italic">
              &quot;Embracing life&apos;s diverse experiences.&quot;
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
