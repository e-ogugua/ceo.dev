import { Navigation } from '@/components/Navigation'
import { LearnHero } from '@/components/LearnHero'
import { LearningCards } from '@/components/LearningCards'
import { LearnSubscription } from '@/components/LearnSubscription'
import { Footer } from '@/components/Footer'

export default function Learn() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-all duration-500">
      <Navigation />
      <LearnHero />
      <LearningCards />
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <LearnSubscription />
        </div>
      </section>
      <Footer />
    </main>
  )
}
