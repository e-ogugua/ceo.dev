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
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Skills{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Technical proficiency meets strategic business acumen
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, x: categoryIndex === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="text-center lg:text-left">
                <h3 className={`text-2xl font-bold mb-6 ${
                  categoryIndex === 0 ? 'text-blue-400' : 'text-purple-400'
                }`}>
                  {category.category}
                </h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className={`text-sm font-semibold ${
                        categoryIndex === 0 ? 'text-blue-400' : 'text-purple-400'
                      }`}>
                        {skill.level}%
                      </span>
                    </div>

                    <div className="w-full bg-slate-700/50 rounded-full h-3 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.3 + skillIndex * 0.1 }}
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

        {/* Overall Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center space-x-8 bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-xl p-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">95%</div>
              <div className="text-sm text-gray-400">Technical Proficiency</div>
            </div>

            <div className="w-px h-12 bg-white/20"></div>

            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">90%</div>
              <div className="text-sm text-gray-400">Strategic Thinking</div>
            </div>

            <div className="w-px h-12 bg-white/20"></div>

            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">100%</div>
              <div className="text-sm text-gray-400">Problem Solving</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
