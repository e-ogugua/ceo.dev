import { Navigation } from '@/components/Navigation'
import { ArticleContent } from '@/components/ArticleContent'
import { Footer } from '@/components/Footer'

interface ArticlePageProps {
  params: {
    slug: string
  }
}

export default function ArticlePage({ params }: ArticlePageProps) {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <ArticleContent slug={params.slug} />
      <Footer />
    </main>
  )
}
