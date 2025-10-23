import { Navigation } from '@/components/Navigation'
import { BlogHero } from '@/components/BlogHero'
import { DynamicBlogPosts } from '@/components/DynamicComponents'
import { BlogSubscription } from '@/components/BlogSubscription'
import { Footer } from '@/components/Footer'

export default function Blog() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 transition-all duration-500">
      <Navigation />
      <BlogHero />
      <DynamicBlogPosts />
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlogSubscription />
        </div>
      </section>
      <Footer />
    </main>
  )
}
