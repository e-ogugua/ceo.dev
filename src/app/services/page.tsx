import { Metadata } from 'next'
import { Navigation } from '@/components/Navigation'
import { ServicesHero } from '@/components/ServicesHero'
import { ServicesSection } from '@/components/ServicesSection'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Services - Emmanuel Chukwuka Ogugua',
  description: 'Professional services offered by Emmanuel Chukwuka Ogugua, including web development, business strategy consulting, training, and more. Explore how I can help your projects succeed.',
  keywords: [
    'Services', 'Web Development', 'Business Strategy', 'Consulting', 'Training',
    'Software Engineering Services', 'Business Consulting', 'Tech Training',
    'Emmanuel Ogugua Services', 'Full Stack Development Services'
  ],
  openGraph: {
    title: 'Services - Emmanuel Chukwuka Ogugua',
    description: 'Professional services including web development, business strategy, consulting, and training.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Services - Emmanuel Chukwuka Ogugua',
    description: 'Professional services including web development, business strategy, consulting, and training.',
  },
}

export default function Services() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-all duration-500">
      <Navigation />
      <ServicesHero />
      <ServicesSection />
      <Footer />
    </main>
  )
}
