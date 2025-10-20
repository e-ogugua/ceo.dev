import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Users, MessageCircle, BookOpen, Handshake } from 'lucide-react'
import { Navigation } from '@/components/Navigation'
import { ServiceContactForm } from '@/components/ServiceContactForm'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Consulting Services | Emmanuel Chukwuka Ogugua',
  description: 'Professional consulting services providing expert guidance on technology, business strategy, and digital transformation.',
}

export default function ConsultingPage() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-all duration-500">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Link
              href="/"
              className="inline-flex items-center text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 mb-8 transition-colors duration-200"
            >
              <ArrowLeft size={16} className="mr-2" />
              Back to Home
            </Link>

            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full shadow-lg">
                <Users size={48} className="text-white" />
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Professional
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                Consulting
              </span>
            </h1>

            <p className="text-xl text-slate-600 dark:text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              Expert guidance and strategic advice to help you navigate complex challenges,
              make informed decisions, and achieve your business objectives.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Technology Consulting */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <MessageCircle className="text-blue-600 dark:text-blue-500 mr-3" size={24} />
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">Technology Consulting</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                  Expert advice on technology selection, implementation strategies, and digital transformation initiatives.
                </p>
                <ul className="text-sm text-slate-500 dark:text-slate-400 space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Tech Stack Assessment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Implementation Planning</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Risk Management</span>
                  </li>
                </ul>
              </div>

              {/* Strategic Planning */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <BookOpen className="text-green-600 dark:text-green-500 mr-3" size={24} />
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">Strategic Planning</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                  Develop comprehensive strategic plans that align technology capabilities with business objectives.
                </p>
                <ul className="text-sm text-slate-500 dark:text-slate-400 space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Goal Setting</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Resource Planning</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Success Metrics</span>
                  </li>
                </ul>
              </div>

              {/* Executive Advisory */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <Handshake className="text-purple-600 dark:text-purple-500 mr-3" size={24} />
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">Executive Advisory</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                  High-level strategic guidance for executives and decision-makers on critical business challenges.
                </p>
                <ul className="text-sm text-slate-500 dark:text-slate-400 space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Leadership Coaching</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Decision Support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Strategic Direction</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section with Form */}
        <div className="bg-slate-900 dark:bg-slate-800">
          <ServiceContactForm
            serviceName="Technical Consulting"
            serviceType="consulting"
            features={[
              'Technology Assessment',
              'Architecture Review',
              'Performance Optimization',
              'Security Consulting',
              'Team Training'
            ]}
          />
        </div>
      </div>
      <Footer />
    </>
  )
}
