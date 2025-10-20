import { Navigation } from '@/components/Navigation'
import { ContactHero } from '@/components/ContactHero'
import { ServicesSection } from '@/components/ServicesSection'
import { ContactForm } from '@/components/ContactForm'
import { Footer } from '@/components/Footer'

export default function Contact() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-slate-100">
      <Navigation />
      <ContactHero />
      <ServicesSection />
      <ContactForm />
      <Footer />
    </main>
  )
}
