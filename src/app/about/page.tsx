import { Metadata } from 'next'
import { Navigation } from '@/components/Navigation'
import { AboutHero } from '@/components/AboutHero'
import { Timeline } from '@/components/Timeline'
import { PersonaChart } from '@/components/PersonaChart'
import { RandomFacts } from '@/components/RandomFacts'
import { SkillsSection } from '@/components/SkillsSection'
import { FeaturedProject } from '@/components/FeaturedProject'
import { BlogShowcase } from '@/components/BlogShowcase'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'About Emmanuel Chukwuka Ogugua',
  description: 'Learn about Emmanuel Chukwuka Ogugua\'s journey from curious kid to software engineer and business strategist. Discover his 65% technical expertise in full-stack development and 35% business acumen in strategic planning and entrepreneurship.',
  keywords: [
    'About Emmanuel Ogugua', 'Software Engineer Biography', 'Business Strategist Profile',
    'Full Stack Developer Story', 'Tech Entrepreneur Journey', 'Emmanuel Chukwuka Background',
    'Software Engineering Career', 'Business Strategy Expertise', 'Portfolio About Page'
  ],
  openGraph: {
    title: 'About Emmanuel Chukwuka Ogugua - Software Engineer & Business Strategist',
    description: 'Discover the journey of Emmanuel Chukwuka Ogugua from curious kid to software engineer and business strategist. Explore his technical expertise and entrepreneurial ventures.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Emmanuel Chukwuka Ogugua - Software Engineer & Business Strategist',
    description: 'Discover the journey of Emmanuel Chukwuka Ogugua from curious kid to software engineer and business strategist.',
  },
}

export default function About() {
  return (
    <>
      <h1 className="sr-only">About Emmanuel Chukwuka Ogugua - Software Engineer & Business Strategist</h1>
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 transition-all duration-500">
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
    </>
  )
}
