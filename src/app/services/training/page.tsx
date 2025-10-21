import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, GraduationCap, Users, BookOpen, Zap } from 'lucide-react'
import { Navigation } from '@/components/Navigation'
import { DynamicServiceContactForm } from '@/components/DynamicComponents'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Training Services | Emmanuel Chukwuka Ogugua',
  description: 'Professional training and workshops on web development, business strategy, and leadership skills.',
}

export default function TrainingPage() {
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
            <div className="p-4 bg-gradient-to-r from-orange-500 to-red-600 rounded-full shadow-lg">
              <GraduationCap size={48} className="text-white" />
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Professional
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
              Training
            </span>
          </h1>

          <p className="text-xl text-slate-600 dark:text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Empower your team with comprehensive training programs covering modern web development,
            strategic thinking, and leadership skills.
          </p>
        </div>
      </section>

      {/* Training Programs Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Web Development Training */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <BookOpen className="text-blue-600 dark:text-blue-500 mr-3" size={24} />
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Web Development</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                Comprehensive training in modern web technologies including React, Next.js, Node.js, and best practices.
              </p>
              <ul className="text-sm text-slate-500 dark:text-slate-400 space-y-2">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Frontend Development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Backend Integration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Modern Frameworks</span>
                </li>
              </ul>
            </div>

            {/* Leadership Training */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <Users className="text-green-600 dark:text-green-500 mr-3" size={24} />
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Leadership Development</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                Develop essential leadership skills including team management, strategic thinking, and decision-making.
              </p>
              <ul className="text-sm text-slate-500 dark:text-slate-400 space-y-2">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Team Management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Strategic Planning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Communication Skills</span>
                </li>
              </ul>
            </div>

            {/* Technical Workshops */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <Zap className="text-purple-600 dark:text-purple-500 mr-3" size={24} />
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Technical Workshops</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                Intensive workshops on specific technologies, tools, and methodologies for rapid skill development.
              </p>
              <ul className="text-sm text-slate-500 dark:text-slate-400 space-y-2">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Specialized Tools</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Best Practices</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Hands-on Projects</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

        {/* CTA Section with Form */}
        <div className="bg-slate-900 dark:bg-slate-800">
          <DynamicServiceContactForm
            serviceName="Professional Training"
            serviceType="training"
            features={[
              'Technical Workshops',
              'Business Strategy Training',
              'Leadership Development',
              'Custom Training Programs',
              'Mentorship'
            ]}
          />
        </div>
      </div>
      <Footer />
    </>
  )
}
