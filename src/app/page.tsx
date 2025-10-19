import { Navigation } from '@/components/Navigation'
import { HeroSection } from '@/components/HeroSection'
import { LatestWorks } from '@/components/LatestWorks'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <HeroSection />
      <LatestWorks />
      <Footer />
    </main>
  )
}