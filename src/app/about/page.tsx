import { Navigation } from '@/components/Navigation'
import { AboutHero } from '@/components/AboutHero'
import { Timeline } from '@/components/Timeline'
import { PersonaChart } from '@/components/PersonaChart'
import { RandomFacts } from '@/components/RandomFacts'
import { SkillsSection } from '@/components/SkillsSection'
import { FeaturedProject } from '@/components/FeaturedProject'
import { BlogShowcase } from '@/components/BlogShowcase'
import { Footer } from '@/components/Footer'

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <AboutHero />
      <Timeline />
      <PersonaChart />
      <RandomFacts />
      <SkillsSection />
      <FeaturedProject />
      <BlogShowcase />
      <Footer />
    </main>
  )
}
