import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Users, MessageCircle, BookOpen, Handshake, Clock, Award } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Consulting Services | Emmanuel Chukwuka Ogugua',
  description: 'Professional consulting services providing expert guidance on technology, business strategy, and digital transformation.',
}

export default function ConsultingPage() {
  return (
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
            <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full">
              <Users size={48} className="text-white" />
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            Professional
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              Consulting
            </span>
          </h1>

          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
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
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <MessageCircle className="text-blue-600 mr-3" size={24} />
                <h3 className="text-xl font-bold text-slate-900">Technology Consulting</h3>
              </div>
              <p className="text-slate-600 mb-4">
                Expert advice on technology selection, implementation strategies, and digital transformation initiatives.
              </p>
              <ul className="text-sm text-slate-500 space-y-1">
                <li>• Tech Stack Assessment</li>
                <li>• Implementation Planning</li>
                <li>• Risk Management</li>
              </ul>
            </div>

            {/* Strategic Planning */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <BookOpen className="text-green-600 mr-3" size={24} />
                <h3 className="text-xl font-bold text-slate-900">Strategic Planning</h3>
              </div>
              <p className="text-slate-600 mb-4">
                Develop comprehensive strategic plans that align technology capabilities with business objectives.
              </p>
              <ul className="text-sm text-slate-500 space-y-1">
                <li>• Goal Setting</li>
                <li>• Resource Planning</li>
                <li>• Success Metrics</li>
              </ul>
            </div>

            {/* Executive Advisory */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <Handshake className="text-purple-600 mr-3" size={24} />
                <h3 className="text-xl font-bold text-slate-900">Executive Advisory</h3>
              </div>
              <p className="text-slate-600 mb-4">
                High-level strategic guidance for executives and decision-makers on critical business challenges.
              </p>
              <ul className="text-sm text-slate-500 space-y-1">
                <li>• Leadership Coaching</li>
                <li>• Decision Support</li>
                <li>• Strategic Direction</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            Why Choose Our Consulting Services?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Clock className="text-white" size={24} />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Flexible Engagement</h3>
              <p className="text-slate-600 text-sm">
                Choose from hourly consultations, project-based engagements, or ongoing advisory relationships.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-600 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Award className="text-white" size={24} />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Proven Expertise</h3>
              <p className="text-slate-600 text-sm">
                15+ years of experience across technology leadership, business strategy, and digital transformation.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-600 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="text-white" size={24} />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Personalized Approach</h3>
              <p className="text-slate-600 text-sm">
                Tailored solutions that address your specific challenges and leverage your unique strengths.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready for Expert Guidance?
          </h2>
          <p className="text-slate-300 mb-8 text-lg">
            Let&apos;s discuss how strategic consulting can accelerate your business success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-slate-900 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors duration-200"
            >
              Book Consultation
            </Link>
            <Link
              href="/about"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-200"
            >
              About Me
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
