import { Navigation } from '@/components/Navigation'
import { HeroSection } from '@/components/HeroSection'
import { LatestWorks } from '@/components/LatestWorks'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-all duration-500">
      <Navigation />
      <HeroSection />
      <LatestWorks />
      <Footer />
    </main>
  )
}