import { Navigation } from '@/components/Navigation'
import { BlogPostContent } from '@/components/BlogPostContent'
import { Footer } from '@/components/Footer'

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <Navigation />
      <BlogPostContent slug={slug} />
      <Footer />
    </main>
  )
}
