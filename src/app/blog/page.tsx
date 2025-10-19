import { Navigation } from '@/components/Navigation'
import { BlogHero } from '@/components/BlogHero'
import { BlogPosts } from '@/components/BlogPosts'
import { Footer } from '@/components/Footer'

export default function Blog() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <BlogHero />
      <BlogPosts />
      <Footer />
    </main>
  )
}
