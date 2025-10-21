import articlesData from '../data/articles.json'
import blogPostsData from '../data/blog-posts.json'

export type Article = {
  title: string
  description: string
  content: string
  category: string
  readTime: string
  publishedDate: string
  author: string
  tags: string[]
}

export type BlogPost = {
  title: string
  description: string
  content: string
  category: string
  readTime: string
  publishedDate: string
  author: string
  tags: string[]
}

export function getArticle(slug: string): Article | null {
  return articlesData[slug as keyof typeof articlesData] || null
}

export function getAllArticles(): Record<string, Article> {
  return articlesData as Record<string, Article>
}

export function getBlogPost(slug: string): BlogPost | null {
  return blogPostsData[slug as keyof typeof blogPostsData] || null
}

export function getAllBlogPosts(): Record<string, BlogPost> {
  return blogPostsData as Record<string, BlogPost>
}
