import { Navigation } from '@/components/Navigation'
import { HeroSection } from '@/components/HeroSection'
import { LatestWorks } from '@/components/LatestWorks'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <>
      <h1 className="sr-only">Emmanuel Chukwuka Ogugua - Software Engineer & Business Strategist Portfolio</h1>
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 transition-all duration-500">
        <Navigation />
        <HeroSection />
        <LatestWorks />
        <Footer />
      </main>
    </>
  )
}