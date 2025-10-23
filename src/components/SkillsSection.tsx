'use client'

import { motion } from 'framer-motion'

const skillCategories = [
  {
    category: 'Technical Skills',
    skills: [
      { name: 'JavaScript/TypeScript', level: 95 },
      { name: 'React/Next.js', level: 90 },
      { name: 'Node.js/Python', level: 85 },
      { name: 'Database Design', level: 80 },
      { name: 'System Architecture', level: 85 }
    ]
  },
  {
    category: 'Business Skills',
    skills: [
      { name: 'Strategic Planning', level: 90 },
      { name: 'Brand Strategy', level: 85 },
      { name: 'Market Analysis', level: 80 },
      { name: 'Team Leadership', level: 85 },
      { name: 'Project Management', level: 90 }
    ]
  }
]

export function SkillsSection() {
  return (
    <section className="py-8 bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <h2 className="text-xl md:text-2xl font-bold text-slate-100 mb-1">
            Skills{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, x: categoryIndex === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="text-center lg:text-left">
                <h3 className={`text-lg font-bold mb-3 ${
                  categoryIndex === 0 ? 'text-blue-400' : 'text-purple-400'
                }`}>
                  {category.category}
                </h3>
              </div>

              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.08 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className={`text-sm font-semibold ${
                        categoryIndex === 0 ? 'text-blue-400' : 'text-purple-400'
                      }`}>
                        {skill.name}
                      </span>
                      <span className={`text-sm font-semibold ${
                        categoryIndex === 0 ? 'text-blue-400' : 'text-purple-400'
                      }`}>
                        {skill.level}%
                      </span>
                    </div>

                    <div className="w-full bg-slate-700/80 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 0.8, delay: 0.2 + skillIndex * 0.08 }}
                        viewport={{ once: true }}
                        className={`h-full rounded-full ${
                          categoryIndex === 0
                            ? 'bg-gradient-to-r from-blue-400 to-blue-600'
                            : 'bg-gradient-to-r from-purple-400 to-purple-600'
                        }`}
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Compact Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <div className="inline-flex items-center space-x-4 bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-lg p-4">
            <div className="text-center">
              <div className="text-xl font-bold text-blue-400 mb-1">95%</div>
              <div className="text-xs text-slate-400">Technical</div>
            </div>

            <div className="w-px h-6 bg-slate-700/50"></div>

            <div className="text-center">
              <div className="text-xl font-bold text-purple-400 mb-1">90%</div>
              <div className="text-xs text-slate-400">Strategic</div>
            </div>

            <div className="w-px h-6 bg-slate-700/50"></div>

            <div className="text-center">
              <div className="text-xl font-bold text-green-400 mb-1">100%</div>
              <div className="text-xs text-slate-400">Problem Solving</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
