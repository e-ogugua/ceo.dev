import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Code, Smartphone, Shield } from 'lucide-react'
import { Navigation } from '@/components/Navigation'
import { DynamicServiceContactForm } from '@/components/DynamicComponents'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Custom Development Services | Emmanuel Chukwuka Ogugua',
  description: 'Bespoke software development solutions tailored to your unique business requirements with modern technologies and scalable architectures.',
}

export default function CustomDevelopmentPage() {
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
              <div className="p-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full shadow-lg">
                <Code size={48} className="text-white" />
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Custom Software
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                Development
              </span>
            </h1>

            <p className="text-xl text-slate-600 dark:text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              Tailored software solutions built from the ground up to solve your unique business challenges.
              From concept to deployment, I create scalable, maintainable applications that grow with your business.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Custom Web Applications */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <Code className="text-indigo-600 dark:text-indigo-500 mr-3" size={24} />
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">Custom Web Applications</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                  Full-stack web applications built with modern frameworks, designed specifically for your business needs and user requirements.
                </p>
                <ul className="text-sm text-slate-500 dark:text-slate-400 space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>React/Next.js Frontend</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Node.js/Python Backend</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Database Integration</span>
                  </li>
                </ul>
              </div>

              {/* Mobile Applications */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <Smartphone className="text-green-600 dark:text-green-500 mr-3" size={24} />
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">Mobile Applications</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                  Native and cross-platform mobile apps that deliver exceptional user experiences across iOS and Android devices.
                </p>
                <ul className="text-sm text-slate-500 dark:text-slate-400 space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>React Native Development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Cross-Platform Solutions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>App Store Deployment</span>
                  </li>
                </ul>
              </div>

              {/* API Development */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <Shield className="text-purple-600 dark:text-purple-500 mr-3" size={24} />
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">API Development</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                  Robust, secure, and scalable APIs that power your applications and enable seamless integration with third-party services.
                </p>
                <ul className="text-sm text-slate-500 dark:text-slate-400 space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>RESTful API Design</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Authentication & Security</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Third-Party Integration</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section with Form */}
        <div className="bg-slate-900 dark:bg-slate-800">
          <DynamicServiceContactForm
            serviceName="Custom Development"
            serviceType="custom-development"
            features={[
              'Custom Web Applications',
              'Mobile App Development',
              'API Development & Integration',
              'Database Design & Optimization',
              'Scalable Architecture',
              'Performance Optimization',
              'Security Implementation',
              'Third-Party Integrations',
              'Comprehensive Testing',
              'Deployment & Support'
            ]}
          />
        </div>
      </div>
      <Footer />
    </>
  )
}
