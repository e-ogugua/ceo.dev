import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, TrendingUp, Target, BarChart3, Rocket } from 'lucide-react'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Business Strategy Services | Emmanuel Chukwuka Ogugua',
  description: 'Strategic business consulting services including growth strategy, market analysis, and digital transformation planning.',
}

export default function BusinessStrategyPage() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-slate-100">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Link
              href="/"
              className="inline-flex items-center text-slate-600 hover:text-slate-900 mb-8 transition-colors duration-200"
            >
              <ArrowLeft size={16} className="mr-2" />
              Back to Home
            </Link>

            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-to-r from-green-500 to-blue-600 rounded-full">
                <TrendingUp size={48} className="text-white" />
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
              Business Strategy
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
                Consulting
              </span>
            </h1>

            <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
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
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <Rocket className="text-green-600 mr-3" size={24} />
                  <h3 className="text-xl font-bold text-slate-900">Growth Strategy</h3>
                </div>
                <p className="text-slate-600 mb-4">
                  Develop comprehensive growth strategies that scale your business and increase market share.
                </p>
                <ul className="text-sm text-slate-500 space-y-1">
                  <li>• Market Analysis</li>
                  <li>• Growth Planning</li>
                  <li>• Competitive Strategy</li>
                </ul>
              </div>

              {/* Digital Transformation */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <Target className="text-blue-600 mr-3" size={24} />
                  <h3 className="text-xl font-bold text-slate-900">Digital Transformation</h3>
                </div>
                <p className="text-slate-600 mb-4">
                  Guide your organization through digital transformation with modern technologies and processes.
                </p>
                <ul className="text-sm text-slate-500 space-y-1">
                  <li>• Technology Adoption</li>
                  <li>• Process Optimization</li>
                  <li>• Change Management</li>
                </ul>
              </div>

              {/* Market Analysis */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <BarChart3 className="text-purple-600 mr-3" size={24} />
                  <h3 className="text-xl font-bold text-slate-900">Market Analysis</h3>
                </div>
                <p className="text-slate-600 mb-4">
                  In-depth market research and analysis to identify opportunities and competitive advantages.
                </p>
                <ul className="text-sm text-slate-500 space-y-1">
                  <li>• Competitive Research</li>
                  <li>• Trend Analysis</li>
                  <li>• Opportunity Assessment</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
              Our Strategic Process
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-blue-600 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">Analysis</h3>
                <p className="text-slate-600 text-sm">Comprehensive business and market analysis</p>
              </div>

              <div className="text-center">
                <div className="bg-green-600 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">Strategy</h3>
                <p className="text-slate-600 text-sm">Develop actionable strategic plans</p>
              </div>

              <div className="text-center">
                <div className="bg-purple-600 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">Execution</h3>
                <p className="text-slate-600 text-sm">Implement strategies with expert guidance</p>
              </div>

              <div className="text-center">
                <div className="bg-orange-600 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">Growth</h3>
                <p className="text-slate-600 text-sm">Monitor progress and optimize results</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-slate-300 mb-8 text-lg">
              Let&apos;s develop a strategic roadmap for your business growth and success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-slate-900 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors duration-200"
              >
                Start Consultation
              </Link>
              <Link
                href="/about"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-200"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
