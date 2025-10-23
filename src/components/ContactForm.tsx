'use client'

import { useState, useCallback, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, CheckCircle, AlertCircle, Loader2, X } from 'lucide-react'
import { useSearchParams } from 'next/navigation'

interface FormData {
  name: string
  email: string
  company: string
  service: string
  budget: string
  timeline: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

export function ContactForm() {
  const searchParams = useSearchParams()
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    timeline: '',
    message: ''
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  // Handle URL parameters on component mount
  useEffect(() => {
    const serviceParam = searchParams.get('service')
    if (serviceParam) {
      setFormData(prev => ({
        ...prev,
        service: serviceParam
      }))
    }
  }, [searchParams])

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

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
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
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          company: '',
          service: '',
          budget: '',
          timeline: '',
          message: ''
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
    <section className="py-8">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Send Your Project{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Details
            </span>
          </h2>
          <p className="text-sm text-slate-300">
            Fill out the form below and I&apos;ll get back to you within 24 hours.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
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
                  Message sent successfully! I&apos;ll get back to you within 24 hours.
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
                  <a href="mailto:e.ogugua.dev@gmail.com" className="underline">
                    e.ogugua.dev@gmail.com
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

          {/* Form Fields - Compact Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <label htmlFor="name" className="block text-xs font-medium text-slate-300 mb-1">
                Full Name <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className={`w-full px-3 py-2 bg-slate-800/50 border rounded text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent text-sm ${errors.name ? 'border-red-400' : 'border-slate-700/50'}`}
                placeholder="Your full name"
              />
              {errors.name && (
                <p className="text-red-400 text-xs mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-medium text-slate-300 mb-1">
                Email <span className="text-red-400">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className={`w-full px-3 py-2 bg-slate-800/50 border rounded text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent text-sm ${errors.email ? 'border-red-400' : 'border-slate-700/50'}`}
                placeholder="your@email.com"
              />
              {errors.email && (
                <p className="text-red-400 text-xs mt-1">{errors.email}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <label htmlFor="company" className="block text-xs font-medium text-slate-300 mb-1">
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                className="w-full px-3 py-2 bg-slate-800/50 border border-slate-700/50 rounded text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent text-sm"
                placeholder="Your company"
              />
            </div>

            <div>
              <label htmlFor="service" className="block text-xs font-medium text-slate-300 mb-1">
                Service
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                className="w-full px-3 py-2 bg-slate-800/50 border border-slate-700/50 rounded text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent text-sm"
              >
                <option value="">Select service</option>
                <option value="web-development">Web Development</option>
                <option value="custom-solution">Custom Project</option>
                <option value="technical-consulting">Technical Consulting</option>
                <option value="team-training">Team Training</option>
                <option value="ongoing-support">Ongoing Support</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <label htmlFor="budget" className="block text-xs font-medium text-slate-300 mb-1">
                Budget Range
              </label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleInputChange}
                className="w-full px-3 py-2 bg-slate-800/50 border border-slate-700/50 rounded text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent text-sm"
              >
                <option value="">Select budget</option>
                <option value="under-5k">Under $5,000</option>
                <option value="5k-15k">$5,000 - $15,000</option>
                <option value="15k-50k">$15,000 - $50,000</option>
                <option value="50k-100k">$50,000 - $100,000</option>
                <option value="over-100k">$100,000+</option>
              </select>
            </div>

            <div>
              <label htmlFor="timeline" className="block text-xs font-medium text-slate-300 mb-1">
                Timeline
              </label>
              <select
                id="timeline"
                name="timeline"
                value={formData.timeline}
                onChange={handleInputChange}
                className="w-full px-3 py-2 bg-slate-800/50 border border-slate-700/50 rounded text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent text-sm"
              >
                <option value="">Select timeline</option>
                <option value="asap">ASAP</option>
                <option value="1-2-weeks">1-2 weeks</option>
                <option value="1-month">Within 1 month</option>
                <option value="2-3-months">2-3 months</option>
                <option value="flexible">Flexible</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-xs font-medium text-slate-300 mb-1">
              Project Details <span className="text-red-400">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows={4}
              className={`w-full px-3 py-2 bg-slate-800/50 border rounded text-white placeholder-slate-500 resize-none focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent text-sm ${errors.message ? 'border-red-400' : 'border-slate-700/50'}`}
              placeholder={formData.service === 'custom-solution' ? "Describe your custom project requirements, goals, and any specific features you need..." : "Tell me about your project, goals, and requirements..."}
            />
            {errors.message && (
              <p className="text-red-400 text-xs mt-1">{errors.message}</p>
            )}
          </div>

          <motion.button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-2.5 px-4 rounded text-sm transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            whileHover={!isSubmitting ? { scale: 1.02 } : {}}
            whileTap={!isSubmitting ? { scale: 0.98 } : {}}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Sending...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </>
            )}
          </motion.button>

          <p className="text-slate-400 text-xs text-center">
            I&apos;ll respond within 24 hours. Your information is kept private and secure.
          </p>
        </motion.form>
      </div>
    </section>
  )
}
