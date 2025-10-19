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
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            My Dual{' '}
            <span className="bg-gradient-to-r from-ceo-600 to-ceo-500 bg-clip-text text-transparent">
              Persona
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
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
                src="/images/aboutImagePieChartSection.png"
                alt="Persona pie chart showing 65% Software Engineer and 35% Business Strategist"
                fill
                sizes="256px"
                loading="lazy"
                unoptimized={true}
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
            <div className="bg-white/80 backdrop-blur-sm border border-slate-200/60 rounded-xl p-6 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Software Engineer</h3>
              <div className="text-4xl font-bold text-slate-900 mb-2">65%</div>
              <p className="text-slate-600 mb-4">
                <strong className="text-slate-900">Focus:</strong> Technical Expertise & Development
              </p>

              <div className="space-y-3">
                <div className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-slate-900 rounded-full mr-3"></div>
                  <span>Full-Stack Development</span>
                </div>
                <div className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-slate-900 rounded-full mr-3"></div>
                  <span>UI/UX Implementation</span>
                </div>
                <div className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-slate-900 rounded-full mr-3"></div>
                  <span>System Architecture</span>
                </div>
                <div className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-slate-900 rounded-full mr-3"></div>
                  <span>Problem-Solving & Coding</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-slate-50 rounded-lg border border-slate-200">
                <p className="text-slate-700 italic">
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
            <div className="bg-white/80 backdrop-blur-sm border border-slate-200/60 rounded-xl p-6 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Business Strategist</h3>
              <div className="text-4xl font-bold text-slate-900 mb-2">35%</div>
              <p className="text-slate-600 mb-4">
                <strong className="text-slate-900">Focus:</strong> Business Acumen & Growth
              </p>

              <div className="space-y-3">
                <div className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-slate-900 rounded-full mr-3"></div>
                  <span>Brand Strategy</span>
                </div>
                <div className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-slate-900 rounded-full mr-3"></div>
                  <span>Entrepreneurship</span>
                </div>
                <div className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-slate-900 rounded-full mr-3"></div>
                  <span>Market Analysis</span>
                </div>
                <div className="flex items-center text-slate-600">
                  <div className="w-2 h-2 bg-slate-900 rounded-full mr-3"></div>
                  <span>Strategic Planning</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-slate-50 rounded-lg border border-slate-200">
                <p className="text-slate-700 italic">
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
