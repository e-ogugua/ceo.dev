'use client'

import dynamic from 'next/dynamic'
import { ArticleCardSkeleton, ArticleListSkeleton } from '@/components/LoadingSkeletons'

// Dynamic imports for heavy components with loading skeletons
export const DynamicBusinessDealForm = dynamic(
  () => import('@/components/BusinessDealForm').then(mod => ({ default: mod.BusinessDealForm })),
  {
    loading: () => <ArticleCardSkeleton />,
    ssr: false, // Client-side only since it has complex state management
  }
)

export const DynamicServiceContactForm = dynamic(
  () => import('@/components/ServiceContactForm').then(mod => ({ default: mod.ServiceContactForm })),
  {
    loading: () => <ArticleCardSkeleton />,
    ssr: false, // Client-side only for form interactions
  }
)

export const DynamicBlogPosts = dynamic(
  () => import('@/components/BlogPosts').then(mod => ({ default: mod.BlogPosts })),
  {
    loading: () => <ArticleListSkeleton />,
    ssr: true, // Server-side render for SEO
  }
)

export const DynamicDevelopmentPortfolio = dynamic(
  () => import('@/components/DevelopmentPortfolio').then(mod => ({ default: mod.DevelopmentPortfolio })),
  {
    loading: () => <ArticleListSkeleton />,
    ssr: true, // Server-side render for SEO
  }
)

export const DynamicBusinessVentures = dynamic(
  () => import('@/components/BusinessVentures').then(mod => ({ default: mod.BusinessVentures })),
  {
    loading: () => <ArticleListSkeleton />,
    ssr: true, // Server-side render for SEO
  }
)
