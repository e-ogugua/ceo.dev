import { Navigation } from '@/components/Navigation'
import { ContactHero } from '@/components/ContactHero'
import { ServicesSection } from '@/components/ServicesSection'
import { ContactForm } from '@/components/ContactForm'
import { Footer } from '@/components/Footer'

export default function Contact() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <ContactHero />
      <ServicesSection />
      <ContactForm />
      <Footer />
    </main>
  )
}
