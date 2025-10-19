import { Navigation } from '@/components/Navigation'
import { BlogPostContent } from '@/components/BlogPostContent'
import { Footer } from '@/components/Footer'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <BlogPostContent slug={params.slug} />
      <Footer />
    </main>
  )
}
