import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, GraduationCap, Users, Calendar, Award, BookOpen, Zap } from 'lucide-react'
import { Navigation } from '@/components/Navigation'
import { ServiceContactForm } from '@/components/ServiceContactForm'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Training Services | Emmanuel Chukwuka Ogugua',
  description: 'Professional training and workshops on web development, business strategy, and leadership skills.',
}

export default function TrainingPage() {
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
            <div className="p-4 bg-gradient-to-r from-orange-500 to-red-600 rounded-full">
              <GraduationCap size={48} className="text-white" />
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            Professional
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
              Training
            </span>
          </h1>

          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
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
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <BookOpen className="text-blue-600 mr-3" size={24} />
                <h3 className="text-xl font-bold text-slate-900">Web Development</h3>
              </div>
              <p className="text-slate-600 mb-4">
                Comprehensive training in modern web technologies including React, Next.js, Node.js, and best practices.
              </p>
              <ul className="text-sm text-slate-500 space-y-1">
                <li>• Frontend Development</li>
                <li>• Backend Integration</li>
                <li>• Modern Frameworks</li>
              </ul>
            </div>

            {/* Leadership Training */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <Users className="text-green-600 mr-3" size={24} />
                <h3 className="text-xl font-bold text-slate-900">Leadership Development</h3>
              </div>
              <p className="text-slate-600 mb-4">
                Develop essential leadership skills including team management, strategic thinking, and decision-making.
              </p>
              <ul className="text-sm text-slate-500 space-y-1">
                <li>• Team Management</li>
                <li>• Strategic Planning</li>
                <li>• Communication Skills</li>
              </ul>
            </div>

            {/* Technical Workshops */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <Zap className="text-purple-600 mr-3" size={24} />
                <h3 className="text-xl font-bold text-slate-900">Technical Workshops</h3>
              </div>
              <p className="text-slate-600 mb-4">
                Intensive workshops on specific technologies, tools, and methodologies for rapid skill development.
              </p>
              <ul className="text-sm text-slate-500 space-y-1">
                <li>• Specialized Tools</li>
                <li>• Best Practices</li>
                <li>• Hands-on Projects</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Training Formats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            Training Formats
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="text-white" size={24} />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">In-Person Workshops</h3>
              <p className="text-slate-600 text-sm">
                Interactive classroom sessions with hands-on exercises and real-time feedback.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-600 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Calendar className="text-white" size={24} />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Virtual Sessions</h3>
              <p className="text-slate-600 text-sm">
                Online training sessions accessible from anywhere with interactive elements and recordings.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-600 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Award className="text-white" size={24} />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Custom Programs</h3>
              <p className="text-slate-600 text-sm">
                Tailored training programs designed specifically for your team&apos;s needs and goals.
              </p>
            </div>
          </div>
        </div>
      </section>

        {/* CTA Section with Form */}
        <div className="bg-slate-900">
          <ServiceContactForm
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
