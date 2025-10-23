'use client'

import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, CheckCircle, AlertCircle, Loader2, X } from 'lucide-react'

interface ServiceContactFormData {
  name: string
  email: string
  company: string
  service: string
  budget: string
  timeline: string
  projectDetails: string
  currentChallenges: string
  goals: string
  technicalRequirements: string
}

interface FormErrors {
  name?: string
  email?: string
  projectDetails?: string
}

interface ServiceContactFormProps {
  serviceName: string
  serviceType: 'web-development' | 'business-strategy' | 'consulting' | 'training' | 'custom-development'
  title?: string
  description?: string
  features?: string[]
  className?: string
}

export function ServiceContactForm({
  serviceName,
  serviceType,
  title,
  description,
  features = [],
  className = ""
}: ServiceContactFormProps) {
  const [formData, setFormData] = useState<ServiceContactFormData>({
    name: '',
    email: '',
    company: '',
    service: serviceName,
    budget: '',
    timeline: '',
    projectDetails: '',
    currentChallenges: '',
    goals: '',
    technicalRequirements: ''
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const serviceConfig = {
    'web-development': {
      title: 'Start Your Web Development Project',
      description: 'Let\'s build something amazing together. Tell me about your web development needs.',
      color: 'from-blue-600 to-purple-600',
      features: [
        'Custom Web Applications',
        'Responsive Design',
        'E-commerce Solutions',
        'API Integration',
        'Performance Optimization'
      ]
    },
    'business-strategy': {
      title: 'Strategic Business Consultation',
      description: 'Transform your business with strategic insights and actionable plans.',
      color: 'from-green-600 to-blue-600',
      features: [
        'Business Model Analysis',
        'Growth Strategy',
        'Market Research',
        'Competitive Analysis',
        'Strategic Planning'
      ]
    },
    'consulting': {
      title: 'Technical Consulting Services',
      description: 'Get expert guidance on technology decisions and implementation.',
      color: 'from-purple-600 to-pink-600',
      features: [
        'Technology Assessment',
        'Architecture Review',
        'Performance Optimization',
        'Security Consulting',
        'Team Training'
      ]
    },
    'custom-development': {
      title: 'Start Your Custom Development Project',
      description: 'Let\'s build something unique together. Tell me about your custom software needs.',
      color: 'from-indigo-600 to-purple-600',
      features: [
        'Custom Web Applications',
        'Mobile App Development',
        'API Development & Integration',
        'Database Design & Optimization',
        'Scalable Architecture',
        'Performance Optimization'
      ]
    },
    'training': {
      title: 'Professional Training Programs',
      description: 'Empower your team with cutting-edge technical and business skills.',
      color: 'from-orange-600 to-red-600',
      features: [
        'Technical Workshops',
        'Business Strategy Training',
        'Leadership Development',
        'Custom Training Programs',
        'Mentorship'
      ]
    }
  }

  const config = serviceConfig[serviceType]

  const validateForm = useCallback((): boolean => {
    const newErrors: FormErrors = {}

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters'
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    // Project details validation
    if (!formData.projectDetails.trim()) {
      newErrors.projectDetails = 'Project details are required'
    } else if (formData.projectDetails.trim().length < 20) {
      newErrors.projectDetails = 'Please provide more details (at least 20 characters)'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }, [formData])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))

    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          message: `
Project Details: ${formData.projectDetails}

Current Challenges: ${formData.currentChallenges || 'Not specified'}

Goals & Objectives: ${formData.goals || 'Not specified'}

Technical Requirements: ${formData.technicalRequirements || 'Not specified'}

Budget Range: ${formData.budget}
Timeline: ${formData.timeline}
          `.trim()
        }),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          company: '',
          service: serviceName,
          budget: '',
          timeline: '',
          projectDetails: '',
          currentChallenges: '',
          goals: '',
          technicalRequirements: ''
        })
        setErrors({})
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const dismissMessage = () => {
    setSubmitStatus('idle')
  }

  return (
    <section className={`py-16 ${className}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {title || config.title}
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            {description || config.description}
          </p>

          {features.length > 0 && (
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-4">
                  <p className="text-slate-300 text-sm">{feature}</p>
                </div>
              ))}
            </div>
          )}
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          noValidate
        >
          {/* Success/Error Messages */}
          <AnimatePresence>
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="bg-green-500/10 border border-green-400/30 rounded-lg p-4 flex items-center"
              >
                <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                <span className="text-green-400">
                  {serviceType === 'training' ? 'Training request received! I\'ll contact you soon to discuss your training needs.' :
                   'Project inquiry received! I\'ll review your requirements and get back to you within 24 hours.'}
                </span>
                <button
                  onClick={dismissMessage}
                  className="ml-auto text-green-400 hover:text-green-300"
                  aria-label="Dismiss success message"
                >
                  <X size={16} />
                </button>
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="bg-red-500/10 border border-red-400/30 rounded-lg p-4 flex items-center"
              >
                <AlertCircle className="w-5 h-5 text-red-400 mr-3 flex-shrink-0" />
                <span className="text-red-400">
                  Failed to send message. Please try again or contact me directly at{' '}
                  <a href="mailto:emmachuka@gmail.com" className="underline">
                    emmachuka@gmail.com
                  </a>
                </span>
                <button
                  onClick={dismissMessage}
                  className="ml-auto text-red-400 hover:text-red-300"
                  aria-label="Dismiss error message"
                >
                  <X size={16} />
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Basic Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                Full Name <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className={`w-full px-4 py-3 bg-slate-800/50 border rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.name ? 'border-red-400' : 'border-slate-700/50'}`}
                placeholder="Your full name"
              />
              {errors.name && (
                <p className="text-red-400 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                Email <span className="text-red-400">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className={`w-full px-4 py-3 bg-slate-800/50 border rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.email ? 'border-red-400' : 'border-slate-700/50'}`}
                placeholder="your@email.com"
              />
              {errors.email && (
                <p className="text-red-400 text-sm mt-1">{errors.email}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-slate-300 mb-2">
                Company/Organization
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Your company or organization"
              />
            </div>

            <div>
              <label htmlFor="budget" className="block text-sm font-medium text-slate-300 mb-2">
                Budget Range <span className="text-red-400">*</span>
              </label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              >
                <option value="">Select your budget range</option>
                <option value="under-5k">Under $5,000</option>
                <option value="5k-15k">$5,000 - $15,000</option>
                <option value="15k-50k">$15,000 - $50,000</option>
                <option value="50k-100k">$50,000 - $100,000</option>
                <option value="100k-250k">$100,000 - $250,000</option>
                <option value="over-250k">$250,000+</option>
                <option value="discuss">Let&apos;s discuss</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="timeline" className="block text-sm font-medium text-slate-300 mb-2">
                Preferred Timeline
              </label>
              <select
                id="timeline"
                name="timeline"
                value={formData.timeline}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select timeline preference</option>
                <option value="asap">ASAP (Rush project)</option>
                <option value="1-month">Within 1 month</option>
                <option value="2-3-months">2-3 months</option>
                <option value="3-6-months">3-6 months</option>
                <option value="6-months-plus">6+ months</option>
                <option value="flexible">Flexible timeline</option>
              </select>
            </div>

            <div>
              <label htmlFor="service" className="block text-sm font-medium text-slate-300 mb-2">
                Service Interest
              </label>
              <input
                type="text"
                id="service"
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                readOnly
              />
            </div>
          </div>

          <div>
            <label htmlFor="projectDetails" className="block text-sm font-medium text-slate-300 mb-2">
              Project Details & Requirements <span className="text-red-400">*</span>
            </label>
            <textarea
              id="projectDetails"
              name="projectDetails"
              value={formData.projectDetails}
              onChange={handleInputChange}
              required
              rows={4}
              className={`w-full px-4 py-3 bg-slate-800/50 border rounded-lg text-white placeholder-slate-500 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.projectDetails ? 'border-red-400' : 'border-slate-700/50'}`}
              placeholder={`Describe your ${serviceName.toLowerCase()} project in detail. What are you looking to achieve? What features do you need? Any specific technologies or platforms?`}
            />
            {errors.projectDetails && (
              <p className="text-red-400 text-sm mt-1">{errors.projectDetails}</p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label htmlFor="currentChallenges" className="block text-sm font-medium text-slate-300 mb-2">
                Current Challenges
              </label>
              <textarea
                id="currentChallenges"
                name="currentChallenges"
                value={formData.currentChallenges}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-500 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="What challenges are you facing?"
              />
            </div>

            <div>
              <label htmlFor="goals" className="block text-sm font-medium text-slate-300 mb-2">
                Goals & Objectives
              </label>
              <textarea
                id="goals"
                name="goals"
                value={formData.goals}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-500 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="What are your goals for this project?"
              />
            </div>

            <div>
              <label htmlFor="technicalRequirements" className="block text-sm font-medium text-slate-300 mb-2">
                Technical Requirements
              </label>
              <textarea
                id="technicalRequirements"
                name="technicalRequirements"
                value={formData.technicalRequirements}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-500 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Any specific technical requirements?"
              />
            </div>
          </div>

          <motion.button
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-gradient-to-r ${config.color} hover:opacity-90 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2`}
            whileHover={!isSubmitting ? { scale: 1.02 } : {}}
            whileTap={!isSubmitting ? { scale: 0.98 } : {}}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Sending...</span>
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                <span>
                  {serviceType === 'training' ? 'Request Training Quote' :
                   serviceType === 'consulting' ? 'Get Consulting Quote' :
                   'Get Project Quote'}
                </span>
              </>
            )}
          </motion.button>

          <p className="text-slate-400 text-sm text-center">
            I&apos;ll review your requirements and provide a detailed proposal within 24 hours.
            All information is kept confidential and secure.
          </p>
        </motion.form>
      </div>
    </section>
  )
}
