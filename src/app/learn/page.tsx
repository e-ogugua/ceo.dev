import { Navigation } from '@/components/Navigation'
import { LearnHero } from '@/components/LearnHero'
import { LearningCards } from '@/components/LearningCards'
import { Footer } from '@/components/Footer'

export default function Learn() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <LearnHero />
      <LearningCards />
      <Footer />
    </main>
  )
}
