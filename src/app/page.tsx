import { Navigation } from '@/components/Navigation'
import { HeroSection } from '@/components/HeroSection'
import { LatestWorks } from '@/components/LatestWorks'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <Navigation />
      <HeroSection />
      <LatestWorks />
      <Footer />
    </main>
  )
}