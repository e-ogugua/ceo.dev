import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Emmanuel Chukwuka Ogugua - Software Engineer & Business Strategist',
  description: 'Full-stack developer and strategic business leader specializing in modern web applications, agricultural technology, and entrepreneurial ventures.',
  keywords: ['Software Engineer', 'Business Strategist', 'Full Stack Developer', 'React', 'Next.js', 'TypeScript', 'Entrepreneur'],
  authors: [{ name: 'Emmanuel Chukwuka Ogugua' }],
  creator: 'Emmanuel Chukwuka Ogugua',
  publisher: 'CEO Portfolio',
  metadataBase: new URL('http://localhost:3000'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Emmanuel Chukwuka Ogugua - Software Engineer & Business Strategist',
    description: 'Full-stack developer and strategic business leader specializing in modern web applications, agricultural technology, and entrepreneurial ventures.',
    url: 'http://localhost:3000',
    siteName: 'CEO Portfolio',
    images: [
      {
        url: '/images/ceo-logo.png',
        width: 1200,
        height: 630,
        alt: 'Emmanuel Chukwuka Ogugua - Software Engineer & Business Strategist',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Emmanuel Chukwuka Ogugua - Software Engineer & Business Strategist',
    description: 'Full-stack developer and strategic business leader specializing in modern web applications, agricultural technology, and entrepreneurial ventures.',
    images: ['/images/ceo-logo.png'],
    creator: '@emmachuka',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
