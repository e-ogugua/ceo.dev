'use client'

import { motion } from 'framer-motion'

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
    <section className="py-8 bg-slate-50/60 dark:bg-slate-900/85">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <h2 className="text-xl md:text-2xl font-bold text-white dark:text-slate-100 mb-1">
            Random facts{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              about me
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {facts.map((fact, index) => (
            <motion.div
              key={fact.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -2 }}
              className="group relative"
            >
              <div className="relative h-full bg-slate-800/60 dark:bg-slate-800/80 backdrop-blur-sm border border-white/10 dark:border-slate-700/50 rounded-lg p-4 hover:border-white/20 dark:hover:border-slate-600 transition-all duration-300 shadow-md hover:shadow-lg overflow-hidden">
                {/* Liquid screen effect background */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 via-purple-400/20 to-pink-400/30 animate-pulse"></div>
                  <div className="absolute inset-0 bg-gradient-to-tl from-cyan-300/20 via-transparent to-violet-300/20 animate-pulse delay-1000"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-400/10 via-transparent to-teal-400/10 animate-pulse delay-500"></div>
                </div>

                {/* Animated liquid overlay */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 transform rotate-12 animate-pulse"></div>
                  <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-cyan-400/15 to-pink-400/15 transform -rotate-12 animate-pulse delay-700"></div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="text-xl mb-3 text-center">
                    {fact.icon}
                  </div>

                  <p className="text-gray-200 dark:text-slate-200 text-xs leading-relaxed text-center font-medium drop-shadow-sm">
                    {fact.fact}
                  </p>
                </div>

                {/* Subtle border glow */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-4"
        >
          <p className="text-gray-400 dark:text-slate-400 text-xs italic">
            &quot;Embracing life&apos;s diverse experiences.&quot;
          </p>
        </motion.div>
      </div>
    </section>
  )
}
