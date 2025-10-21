import { Metadata } from 'next'
import { Navigation } from '@/components/Navigation'
import { PortfolioHero } from '@/components/PortfolioHero'
import { DynamicDevelopmentPortfolio } from '@/components/DynamicComponents'
import { DynamicBusinessVentures } from '@/components/DynamicComponents'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Portfolio & Ventures',
  description: 'Explore Emmanuel Chukwuka Ogugua\'s comprehensive portfolio featuring 6 innovative software projects including EmmanuelOS SWART Dashboard, FarmTrack, Bible Game Hub, FinanceFlow Pro, CodeMentor Academy, and Jepligom Ministry Portal. Also discover 6 successful business ventures including Emmdra Empire, PoshPOULE Farms, CEOTR Ltd, Zereth Foods, Roka Table Water, and CEOWrites.',
  keywords: [
    'Software Portfolio', 'Business Ventures', 'Emmanuel Ogugua Projects',
    'EmmanuelOS Dashboard', 'FarmTrack App', 'Bible Game Hub', 'FinanceFlow Pro',
    'CodeMentor Academy', 'Jepligom Ministry', 'Emmdra Empire', 'PoshPOULE Farms',
    'CEOTR Ltd', 'Zereth Foods', 'Roka Table Water', 'CEOWrites Blog',
    'Full Stack Developer Portfolio', 'Tech Entrepreneur Ventures'
  ],
  openGraph: {
    title: 'Portfolio & Ventures - Emmanuel Chukwuka Ogugua',
    description: 'Comprehensive showcase of software engineering projects and business ventures by Emmanuel Chukwuka Ogugua. View 6 innovative web applications and 6 successful entrepreneurial ventures.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio & Ventures - Emmanuel Chukwuka Ogugua',
    description: 'Comprehensive showcase of software engineering projects and business ventures by Emmanuel Chukwuka Ogugua.',
  },
}

export default function PortfolioVentures() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-all duration-500">
      <Navigation />
      <PortfolioHero />
      <DynamicDevelopmentPortfolio />
      <DynamicBusinessVentures />
      <Footer />
    </main>
  )
}
