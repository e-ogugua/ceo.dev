'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export function PersonaChart() {
  return (
    <section className="py-12 bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Left Panel - Software Engineer */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="bg-slate-800/95 backdrop-blur-sm border border-slate-700/70 rounded-lg p-5 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-bold text-slate-100">Software Engineer</h3>
                <div className="text-2xl font-bold text-primary">65%</div>
              </div>

              <div className="space-y-1.5 mb-3">
                <div className="flex items-center text-slate-300">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></div>
                  <span className="text-xs">Full-Stack Development</span>
                </div>
                <div className="flex items-center text-slate-300">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></div>
                  <span className="text-xs">UI/UX Implementation</span>
                </div>
                <div className="flex items-center text-slate-300">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></div>
                  <span className="text-xs">System Architecture</span>
                </div>
              </div>

              <div className="p-2 bg-slate-700/60 rounded border border-slate-600/50">
                <p className="text-slate-200 text-xs italic">
                  &quot;Building robust, scalable, and intuitive digital solutions.&quot;
                </p>
              </div>
            </div>
          </motion.div>

          {/* Enhanced Pie Chart - Center (Larger) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="lg:col-span-1 flex justify-center"
          >
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              <Image
                src="/images/aboutImagePieChartSection.png"
                alt="Expertise distribution: 65% Software Engineering, 35% Business Strategy"
                fill
                sizes="(max-width: 1024px) 320px, 384px"
                className="w-full h-full object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </motion.div>

          {/* Right Panel - Business Strategist */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="bg-slate-800/95 backdrop-blur-sm border border-slate-700/70 rounded-lg p-5 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-bold text-slate-100">Business Strategist</h3>
                <div className="text-2xl font-bold text-secondary">35%</div>
              </div>

              <div className="space-y-1.5 mb-3">
                <div className="flex items-center text-slate-300">
                  <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-2 flex-shrink-0"></div>
                  <span className="text-xs">Brand Strategy</span>
                </div>
                <div className="flex items-center text-slate-300">
                  <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-2 flex-shrink-0"></div>
                  <span className="text-xs">Market Analysis</span>
                </div>
                <div className="flex items-center text-slate-300">
                  <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-2 flex-shrink-0"></div>
                  <span className="text-xs">Strategic Planning</span>
                </div>
              </div>

              <div className="p-2 bg-slate-700/60 rounded border border-slate-600/50">
                <p className="text-slate-200 text-xs italic">
                  &quot;Driving business growth through strategic vision.&quot;
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
