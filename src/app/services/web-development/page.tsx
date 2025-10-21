import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Code, Globe, Smartphone, Database } from 'lucide-react'
import { Navigation } from '@/components/Navigation'
import { DynamicServiceContactForm } from '@/components/DynamicComponents'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Web Development Services | Emmanuel Chukwuka Ogugua',
  description: 'Professional web development services including full-stack development, responsive design, and modern web technologies.',
}

export default function WebDevelopmentPage() {
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
              <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-lg">
                <Code size={48} className="text-white" />
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Web Development
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Services
              </span>
            </h1>

            <p className="text-xl text-slate-600 dark:text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              Crafting exceptional digital experiences through modern web technologies,
              responsive design, and scalable architectures.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Full-Stack Development */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <Globe className="text-blue-600 dark:text-blue-500 mr-3" size={24} />
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">Full-Stack Development</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                  Complete web applications built with modern frameworks like React, Next.js, Node.js, and databases.
                </p>
                <ul className="text-sm text-slate-500 dark:text-slate-400 space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Frontend & Backend Development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>API Integration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Database Design</span>
                  </li>
                </ul>
              </div>

              {/* Responsive Design */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <Smartphone className="text-green-600 dark:text-green-500 mr-3" size={24} />
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">Responsive Design</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                  Mobile-first responsive websites that work perfectly across all devices and screen sizes.
                </p>
                <ul className="text-sm text-slate-500 dark:text-slate-400 space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Mobile-First Approach</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Cross-Device Testing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Performance Optimization</span>
                  </li>
                </ul>
              </div>

              {/* E-commerce Solutions */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <Database className="text-purple-600 dark:text-purple-500 mr-3" size={24} />
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">E-commerce Solutions</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                  Custom online stores with payment integration, inventory management, and admin dashboards.
                </p>
                <ul className="text-sm text-slate-500 dark:text-slate-400 space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Payment Gateway Integration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Inventory Management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Admin Dashboards</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section with Form */}
        <div className="bg-slate-900 dark:bg-slate-800">
          <DynamicServiceContactForm
            serviceName="Web Development"
            serviceType="web-development"
            features={[
              'Custom Web Applications',
              'Responsive Design',
              'E-commerce Solutions',
              'Progressive Web Apps',
              'Performance Optimization',
              'SEO Optimization',
              'Accessibility (WCAG)',
              'Cross-browser Compatibility',
              'Modern Frameworks',
              'Ongoing Maintenance'
            ]}
          />
        </div>
      </div>
      <Footer />
    </>
  )
}
