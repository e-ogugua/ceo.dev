import { Metadata } from 'next'
import { Navigation } from '@/components/Navigation'
import { PortfolioHero } from '@/components/PortfolioHero'
import { DynamicDevelopmentPortfolio } from '@/components/DynamicComponents'
import { DynamicBusinessVentures } from '@/components/DynamicComponents'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Business Ventures & Portfolio - Emmanuel Chukwuka Ogugua',
  description: 'Explore Emmanuel Chukwuka Ogugua\'s comprehensive portfolio featuring 6 successful business ventures including Emmdra Empire, PoshPOULE Farms, CEOTR Ltd, Zereth Foods, Roka Table Water, and CEOWrites. Also discover 6 innovative software projects including EmmanuelOS SWART Dashboard, FarmTrack, Bible Game Hub, FinanceFlow Pro, CodeMentor Academy, and Jepligom Ministry Portal.',
  keywords: [
    'Business Ventures', 'Software Portfolio', 'Emmanuel Ogugua Projects',
    'Emmdra Empire', 'PoshPOULE Farms', 'CEOTR Ltd', 'Zereth Foods', 'Roka Table Water', 'CEOWrites',
    'EmmanuelOS Dashboard', 'FarmTrack App', 'Bible Game Hub', 'FinanceFlow Pro',
    'CodeMentor Academy', 'Jepligom Ministry', 'Tech Entrepreneur Ventures',
    'Full Stack Developer Portfolio', 'Business Leadership Portfolio'
  ],
  openGraph: {
    title: 'Business Ventures & Portfolio - Emmanuel Chukwuka Ogugua',
    description: 'Comprehensive showcase of business ventures and software engineering projects by Emmanuel Chukwuka Ogugua. View 6 successful entrepreneurial ventures and 6 innovative web applications.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Business Ventures & Portfolio - Emmanuel Chukwuka Ogugua',
    description: 'Comprehensive showcase of business ventures and software engineering projects by Emmanuel Chukwuka Ogugua.',
  },
}

export default function PortfolioVentures() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 transition-all duration-500">
      <Navigation />
      <PortfolioHero />
      <DynamicBusinessVentures />
      <DynamicDevelopmentPortfolio />
      <Footer />
    </main>
  )
}
