import { Navigation } from '@/components/Navigation'
import { PortfolioHero } from '@/components/PortfolioHero'
import { DevelopmentPortfolio } from '@/components/DevelopmentPortfolio'
import { BusinessVentures } from '@/components/BusinessVentures'
import { Footer } from '@/components/Footer'

export default function PortfolioVentures() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <PortfolioHero />
      <DevelopmentPortfolio />
      <BusinessVentures />
      <Footer />
    </main>
  )
}
