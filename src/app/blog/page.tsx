import { Navigation } from '@/components/Navigation'
import { BlogHero } from '@/components/BlogHero'
import { BlogPosts } from '@/components/BlogPosts'
import { Footer } from '@/components/Footer'

export default function Blog() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-slate-100">
      <Navigation />
      <BlogHero />
      <BlogPosts />
      <Footer />
    </main>
  )
}
