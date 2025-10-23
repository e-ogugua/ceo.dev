import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, TrendingUp, Target, BarChart3, Rocket } from 'lucide-react'
import { Navigation } from '@/components/Navigation'
import { DynamicServiceContactForm } from '@/components/DynamicComponents'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Business Strategy Services | Emmanuel Chukwuka Ogugua',
  description: 'Strategic business consulting services including growth strategy, market analysis, and digital transformation planning.',
}

export default function BusinessStrategyPage() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 transition-all duration-500">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Link
              href="/"
              className="inline-flex items-center text-slate-400 hover:text-slate-100 mb-8 transition-colors duration-200"
            >
              <ArrowLeft size={16} className="mr-2" />
              Back to Home
            </Link>

            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-to-r from-green-500 to-blue-600 rounded-full shadow-lg">
                <TrendingUp size={48} className="text-white" />
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Business Strategy
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
                Consulting
              </span>
            </h1>

            <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              Strategic guidance for business growth, digital transformation,
              and market positioning to achieve sustainable success.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Growth Strategy */}
              <div className="bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-700 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <Rocket className="text-green-500 mr-3" size={24} />
                  <h3 className="text-xl font-bold text-white">Growth Strategy</h3>
                </div>
                <p className="text-slate-300 mb-4 leading-relaxed">
                  Develop comprehensive growth strategies that scale your business and increase market share.
                </p>
                <ul className="text-sm text-slate-400 space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Market Analysis</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Growth Planning</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Competitive Strategy</span>
                  </li>
                </ul>
              </div>

              {/* Digital Transformation */}
              <div className="bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-700 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <Target className="text-blue-500 mr-3" size={24} />
                  <h3 className="text-xl font-bold text-white">Digital Transformation</h3>
                </div>
                <p className="text-slate-300 mb-4 leading-relaxed">
                  Guide your organization through digital transformation with modern technologies and processes.
                </p>
                <ul className="text-sm text-slate-400 space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Technology Adoption</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Process Optimization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Change Management</span>
                  </li>
                </ul>
              </div>

              {/* Market Analysis */}
              <div className="bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-700 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <BarChart3 className="text-purple-500 mr-3" size={24} />
                  <h3 className="text-xl font-bold text-white">Market Analysis</h3>
                </div>
                <p className="text-slate-300 mb-4 leading-relaxed">
                  In-depth market research and analysis to identify opportunities and competitive advantages.
                </p>
                <ul className="text-sm text-slate-400 space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Competitive Research</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Trend Analysis</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Opportunity Assessment</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section with Form */}
        <div className="bg-slate-800">
          <DynamicServiceContactForm
            serviceName="Business Strategy Consulting"
            serviceType="business-strategy"
            features={[
              'Business Model Analysis',
              'Growth Strategy',
              'Market Research',
              'Competitive Analysis',
              'Strategic Planning'
            ]}
          />
        </div>
      </div>
      <Footer />
    </>
  )
}
