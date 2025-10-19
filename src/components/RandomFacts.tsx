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
            Beyond the{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Code
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Random facts that make me who I am
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {facts.map((fact, index) => (
            <motion.div
              key={fact.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group"
            >
              <div className="h-full bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all duration-300">
                <div className="text-4xl mb-4 text-center">
                  {fact.icon}
                </div>

                <p className="text-gray-300 text-sm leading-relaxed text-center">
                  {fact.fact}
                </p>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl"></div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 italic">
            &quot;These facets of my personality fuel my creativity and drive my passion for both technology and life.&quot;
          </p>
        </motion.div>
      </div>
    </section>
  )
}
