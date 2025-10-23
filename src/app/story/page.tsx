import { Navigation } from '@/components/Navigation'
import { StoryHero } from '@/components/StoryHero'
import { InteractiveStory } from '@/components/InteractiveStory'
import { Footer } from '@/components/Footer'

export default function Story() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 transition-all duration-500">
      <Navigation />
      <StoryHero />
      <InteractiveStory />
      <Footer />
    </main>
  )
}
