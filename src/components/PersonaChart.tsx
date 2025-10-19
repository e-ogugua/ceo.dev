'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export function PersonaChart() {
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
            My Dual{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Persona
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Balancing technical expertise with strategic business acumen
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Pie Chart Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-1 flex justify-center"
          >
            <div className="relative w-64 h-64">
              <Image
                src="/images/aboutImagePieChartSection.webp"
                alt="Persona pie chart showing 65% Software Engineer and 35% Business Strategist"
                fill
                sizes="256px"
                loading="lazy"
                className="w-full h-full object-contain"
              />
            </div>
          </motion.div>

          {/* Left Panel - Software Engineer */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="lg:col-span-1 space-y-8"
          >
            <div className="bg-blue-500/10 backdrop-blur-sm border border-blue-400/20 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">Software Engineer</h3>
              <div className="text-4xl font-bold text-white mb-2">65%</div>
              <p className="text-gray-300 mb-4">
                <strong className="text-blue-400">Focus:</strong> Technical Expertise & Development
              </p>

              <div className="space-y-3">
                <div className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  <span>Full-Stack Development</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  <span>UI/UX Implementation</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  <span>System Architecture</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  <span>Problem-Solving & Coding</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-blue-400/10 rounded-lg border border-blue-400/20">
                <p className="text-blue-300 italic">
                  &quot;Building robust, scalable, and intuitive digital solutions.&quot;
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Panel - Business Strategist */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="lg:col-span-1 space-y-8"
          >
            <div className="bg-purple-500/10 backdrop-blur-sm border border-purple-400/20 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-purple-400 mb-4">Business Strategist</h3>
              <div className="text-4xl font-bold text-white mb-2">35%</div>
              <p className="text-gray-300 mb-4">
                <strong className="text-purple-400">Focus:</strong> Business Acumen & Growth
              </p>

              <div className="space-y-3">
                <div className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                  <span>Brand Strategy</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                  <span>Entrepreneurship</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                  <span>Market Analysis</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                  <span>Strategic Planning</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-purple-400/10 rounded-lg border border-purple-400/20">
                <p className="text-purple-300 italic">
                  &quot;Driving business growth through strategic vision and compelling brand narratives.&quot;
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
