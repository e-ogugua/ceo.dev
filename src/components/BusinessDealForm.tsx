'use client'

import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, CheckCircle, AlertCircle, Loader2, X, Briefcase, Users, Building } from 'lucide-react'

interface BusinessDealFormData {
  name: string
  email: string
  company: string
  clientType: 'customer' | 'employer' | 'collaborator' | 'investor'
  projectType: string
  budget: string
  timeline: string
  teamSize: string
  currentChallenges: string
  goals: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

interface BusinessDealFormProps {
  clientType?: 'customer' | 'employer' | 'collaborator' | 'investor'
  title?: string
  description?: string
}

export function BusinessDealForm({
  clientType = 'customer',
  title,
  description
}: BusinessDealFormProps) {
  const [formData, setFormData] = useState<BusinessDealFormData>({
    name: '',
    email: '',
    company: '',
    clientType,
    projectType: '',
    budget: '',
    timeline: '',
    teamSize: '',
    currentChallenges: '',
    goals: '',
    message: ''
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const clientTypeConfig = {
    customer: {
      title: 'Partner with Me',
      description: 'Let\'s build something amazing together. Tell me about your project needs.',
      icon: Briefcase,
      color: 'from-blue-600 to-purple-600'
    },
    employer: {
      title: 'Join My Team',
      description: 'Looking for exceptional talent? Let\'s discuss opportunities.',
      icon: Users,
      color: 'from-green-600 to-blue-600'
    },
    collaborator: {
      title: 'Collaborate',
      description: 'Let\'s create something great together. Share your collaboration ideas.',
      icon: Users,
      color: 'from-purple-600 to-pink-600'
    },
    investor: {
      title: 'Investment Opportunity',
      description: 'Exploring investment opportunities? Let\'s discuss potential partnerships.',
      icon: Building,
      color: 'from-orange-600 to-red-600'
    }
  }

  const config = clientTypeConfig[clientType]

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
        body: JSON.stringify({
          ...formData,
          service: `${clientType} - ${formData.projectType}`,
          subject: `${clientTypeConfig[clientType].title} - ${formData.name}`
        }),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          company: '',
          clientType,
          projectType: '',
          budget: '',
          timeline: '',
          teamSize: '',
          currentChallenges: '',
          goals: '',
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

  const Icon = config.icon

  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <div className={`w-16 h-16 bg-gradient-to-r ${config.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
            <Icon className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {title || config.title}
          </h2>
          <p className="text-slate-300 text-lg">
            {description || config.description}
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 space-y-6"
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
                  {clientType === 'employer' ? 'Application received! I\'ll review and get back to you soon.' :
                   clientType === 'collaborator' ? 'Collaboration request received! Let\'s connect soon.' :
                   'Message sent successfully! I\'ll get back to you within 24 hours.'}
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
              <label htmlFor="projectType" className="block text-sm font-medium text-slate-300 mb-2">
                {clientType === 'employer' ? 'Position/Role' :
                 clientType === 'collaborator' ? 'Collaboration Type' :
                 clientType === 'investor' ? 'Investment Focus' : 'Project Type'}
              </label>
              <select
                id="projectType"
                name="projectType"
                value={formData.projectType}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select {clientType === 'employer' ? 'position' : clientType === 'collaborator' ? 'collaboration type' : clientType === 'investor' ? 'investment focus' : 'project type'}</option>
                {clientType === 'customer' && (
                  <>
                    <option value="web-application">Web Application</option>
                    <option value="mobile-app">Mobile App</option>
                    <option value="e-commerce">E-commerce Platform</option>
                    <option value="saas">SaaS Platform</option>
                    <option value="api-integration">API Integration</option>
                    <option value="consulting">Technical Consulting</option>
                    <option value="training">Team Training</option>
                    <option value="maintenance">Ongoing Support</option>
                  </>
                )}
                {clientType === 'employer' && (
                  <>
                    <option value="fullstack-developer">Full Stack Developer</option>
                    <option value="frontend-developer">Frontend Developer</option>
                    <option value="backend-developer">Backend Developer</option>
                    <option value="devops-engineer">DevOps Engineer</option>
                    <option value="technical-lead">Technical Lead</option>
                    <option value="cto">CTO</option>
                  </>
                )}
                {clientType === 'collaborator' && (
                  <>
                    <option value="joint-project">Joint Project</option>
                    <option value="open-source">Open Source Contribution</option>
                    <option value="research">Research Partnership</option>
                    <option value="workshop">Workshop/Speaking</option>
                    <option value="mentorship">Mentorship</option>
                  </>
                )}
                {clientType === 'investor' && (
                  <>
                    <option value="startup-investment">Startup Investment</option>
                    <option value="project-funding">Project Funding</option>
                    <option value="joint-venture">Joint Venture</option>
                    <option value="acquisition">Acquisition</option>
                  </>
                )}
              </select>
            </div>
          </div>

          {/* Business-specific fields */}
          {clientType === 'customer' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-slate-300 mb-2">
                  Budget Range
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select budget range</option>
                  <option value="under-10k">Under $10,000</option>
                  <option value="10k-50k">$10,000 - $50,000</option>
                  <option value="50k-100k">$50,000 - $100,000</option>
                  <option value="100k-500k">$100,000 - $500,000</option>
                  <option value="over-500k">$500,000+</option>
                </select>
              </div>

              <div>
                <label htmlFor="timeline" className="block text-sm font-medium text-slate-300 mb-2">
                  Timeline
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select timeline</option>
                  <option value="asap">ASAP (Rush)</option>
                  <option value="1-month">Within 1 month</option>
                  <option value="2-3-months">2-3 months</option>
                  <option value="3-6-months">3-6 months</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>
            </div>
          )}

          {clientType === 'employer' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="teamSize" className="block text-sm font-medium text-slate-300 mb-2">
                  Team Size
                </label>
                <select
                  id="teamSize"
                  name="teamSize"
                  value={formData.teamSize}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="">Select team size</option>
                  <option value="startup">Startup (1-10)</option>
                  <option value="small">Small (11-50)</option>
                  <option value="medium">Medium (51-200)</option>
                  <option value="large">Large (200+)</option>
                  <option value="enterprise">Enterprise</option>
                </select>
              </div>

              <div>
                <label htmlFor="timeline" className="block text-sm font-medium text-slate-300 mb-2">
                  Start Date
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="">Select start date</option>
                  <option value="immediate">Immediate</option>
                  <option value="2-weeks">Within 2 weeks</option>
                  <option value="1-month">Within 1 month</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>
            </div>
          )}

          {clientType === 'collaborator' && (
            <div>
              <label htmlFor="currentChallenges" className="block text-sm font-medium text-slate-300 mb-2">
                Current Challenges & Goals
              </label>
              <textarea
                id="currentChallenges"
                name="currentChallenges"
                value={formData.currentChallenges}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-500 resize-none focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="What challenges are you facing? What are your collaboration goals?"
              />
            </div>
          )}

          {clientType === 'investor' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-slate-300 mb-2">
                  Investment Range
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                >
                  <option value="">Select investment range</option>
                  <option value="under-100k">Under $100,000</option>
                  <option value="100k-500k">$100,000 - $500,000</option>
                  <option value="500k-1m">$500,000 - $1M</option>
                  <option value="1m-5m">$1M - $5M</option>
                  <option value="over-5m">$5M+</option>
                </select>
              </div>

              <div>
                <label htmlFor="timeline" className="block text-sm font-medium text-slate-300 mb-2">
                  Investment Timeline
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                >
                  <option value="">Select timeline</option>
                  <option value="immediate">Ready to invest now</option>
                  <option value="1-3-months">1-3 months</option>
                  <option value="3-6-months">3-6 months</option>
                  <option value="exploring">Just exploring options</option>
                </select>
              </div>
            </div>
          )}

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
              {clientType === 'employer' ? 'Why You Should Hire Me & Your Requirements' :
               clientType === 'collaborator' ? 'Collaboration Details & Vision' :
               clientType === 'investor' ? 'Investment Thesis & Requirements' :
               'Project Details & Vision'} <span className="text-red-400">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows={5}
              className={`w-full px-4 py-3 bg-slate-800/50 border rounded-lg text-white placeholder-slate-500 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.message ? 'border-red-400' : 'border-slate-700/50'}`}
              placeholder={
                clientType === 'employer' ? 'Tell me about your company culture, tech stack, and what you\'re looking for in a team member...' :
                clientType === 'collaborator' ? 'Describe the collaboration opportunity and what you hope to achieve together...' :
                clientType === 'investor' ? 'Share your investment criteria, sector preferences, and what you look for in opportunities...' :
                'Tell me about your project vision, requirements, and what success looks like...'
              }
            />
            {errors.message && (
              <p className="text-red-400 text-sm mt-1">{errors.message}</p>
            )}
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
                  {clientType === 'employer' ? 'Submit Application' :
                   clientType === 'collaborator' ? 'Propose Collaboration' :
                   clientType === 'investor' ? 'Discuss Investment' :
                   'Start Project Discussion'}
                </span>
              </>
            )}
          </motion.button>

          <p className="text-slate-400 text-sm text-center">
            {clientType === 'employer' ? 'I\'ll review your requirements and get back to you within 48 hours.' :
             clientType === 'collaborator' ? 'I\'ll review your collaboration proposal and respond within 24 hours.' :
             clientType === 'investor' ? 'I\'ll review your investment opportunity and get back to you soon.' :
             'I\'ll respond within 24 hours. Your information is kept private and secure.'}
          </p>
        </motion.form>
      </div>
    </section>
  )
}
