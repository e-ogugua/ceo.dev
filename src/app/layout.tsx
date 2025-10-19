import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Emmanuel Chukwuka Ogugua - Software Engineer & Business Strategist',
    template: '%s | Emmanuel Chukwuka Ogugua'
  },
  description: 'Professional software engineer and business strategist specializing in full-stack development, modern web applications, and entrepreneurial ventures. Explore innovative projects and strategic business solutions.',
  keywords: [
    'Software Engineer', 'Business Strategist', 'Full Stack Developer', 'React Developer',
    'Next.js Developer', 'TypeScript Developer', 'Entrepreneur', 'Web Development',
    'Portfolio', 'Emmanuel Ogugua', 'CEO Portfolio', 'Tech Entrepreneur', 'Modern Web Apps',
    'AI Integration', 'Machine Learning', 'Cloud Architecture', 'DevOps', 'Agile Development'
  ],
  authors: [{ name: 'Emmanuel Chukwuka Ogugua' }],
  creator: 'Emmanuel Chukwuka Ogugua',
  publisher: 'CEO Portfolio',
  metadataBase: new URL('https://ceodev.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Emmanuel Chukwuka Ogugua - Software Engineer & Business Strategist',
    description: 'Professional software engineer and business strategist specializing in full-stack development, modern web applications, and entrepreneurial ventures.',
    url: 'https://ceodev.vercel.app',
    siteName: 'CEO Portfolio',
    images: [
      {
        url: '/images/ceo-logo.png',
        width: 1200,
        height: 630,
        alt: 'Emmanuel Chukwuka Ogugua - Software Engineer & Business Strategist Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Emmanuel Chukwuka Ogugua - Software Engineer & Business Strategist',
    description: 'Professional software engineer and business strategist specializing in full-stack development and entrepreneurial ventures.',
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
  verification: {
    google: 'your-google-verification-code',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
  other: {
    'theme-color': '#0f172a',
    'msapplication-TileColor': '#0f172a',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f8fafc' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
  colorScheme: 'light dark',
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Emmanuel Chukwuka Ogugua',
              alternateName: 'CEO Emmanuel',
              jobTitle: 'Software Engineer & Business Strategist',
              description: 'Professional software engineer and business strategist specializing in full-stack development, modern web applications, and entrepreneurial ventures.',
              url: 'https://ceodev.vercel.app',
              sameAs: [
                'https://twitter.com/emmachuka',
                'https://www.linkedin.com/in/emmanuelogugua',
                'https://web.facebook.com/CEOICLtd/',
                'https://www.instagram.com/ceo231/',
                'https://github.com/e-ogugua'
              ],
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Enugu',
                addressCountry: 'Nigeria'
              },
              knowsAbout: [
                'Software Engineering',
                'Business Strategy',
                'Full Stack Development',
                'React.js',
                'Next.js',
                'TypeScript',
                'Entrepreneurship',
                'Modern Web Development',
                'AI Integration',
                'Cloud Computing',
                'DevOps'
              ],
              hasOccupation: {
                '@type': 'Occupation',
                name: 'Software Engineer & Business Strategist',
                occupationLocation: {
                  '@type': 'City',
                  name: 'Enugu, Nigeria'
                }
              },
              alumniOf: {
                '@type': 'EducationalOrganization',
                name: 'University (Details Available on LinkedIn)'
              },
              worksFor: [
                {
                  '@type': 'Organization',
                  name: 'CEOTR Ltd',
                  url: 'https://ceotr-ltd.com'
                },
                {
                  '@type': 'Organization',
                  name: 'PoshPOULE Farms Ltd',
                  url: 'https://poshpoule-farms.com'
                }
              ]
            })
          }}
        />
        {/* Preload critical fonts */}
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          as="style"
        />
        <noscript>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          />
        </noscript>
      </head>
      <body suppressHydrationWarning className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 text-slate-900 antialiased">
        <div className="relative">
          {/* Subtle background pattern */}
          <div className="fixed inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-30 pointer-events-none" />

          {/* Main content */}
          <div className="relative z-10">
            {children}
          </div>
        </div>

        {/* Performance monitoring script */}
        <script
          defer
          data-domain="ceodev.vercel.app"
          src="https://plausible.io/js/script.js"
        />
      </body>
    </html>
  )
}
