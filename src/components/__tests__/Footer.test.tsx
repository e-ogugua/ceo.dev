import { render, screen } from '@testing-library/react'
import { Footer } from '../Footer'

// Mock Next.js components
jest.mock('next/link', () => {
  const MockLink = ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  )
  MockLink.displayName = 'MockLink'

  return {
    __esModule: true,
    default: MockLink,
  }
})

jest.mock('next/image', () => {
  const MockImage = ({ alt, ...props }: { alt: string; src: string; width: number; height: number }) => (
    <img alt={alt} {...props} />
  )
  MockImage.displayName = 'MockImage'

  return {
    __esModule: true,
    default: MockImage,
  }
})

// Mock lucide-react icons
jest.mock('lucide-react', () => ({
  Twitter: () => <span data-testid="twitter-icon">🐦</span>,
  Linkedin: () => <span data-testid="linkedin-icon">💼</span>,
  Facebook: () => <span data-testid="facebook-icon">📘</span>,
  Instagram: () => <span data-testid="instagram-icon">📷</span>,
  ExternalLink: () => <span data-testid="external-link">🔗</span>,
}))

describe('Footer', () => {
  it('renders footer with brand information', () => {
    render(<Footer />)

    expect(screen.getByText('Chukwuka Emmanuel Ogugua')).toBeInTheDocument()
    expect(screen.getByText('Software Engineer & Business Strategist')).toBeInTheDocument()
  })

  it('displays navigation links', () => {
    render(<Footer />)

    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Ventures & Portfolio')).toBeInTheDocument()
    expect(screen.getByText('Blog')).toBeInTheDocument()
    expect(screen.getByText('Learn')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('displays service links', () => {
    render(<Footer />)

    expect(screen.getByText('Web Development')).toBeInTheDocument()
    expect(screen.getByText('Business Strategy')).toBeInTheDocument()
    expect(screen.getByText('Consulting')).toBeInTheDocument()
    expect(screen.getByText('Training')).toBeInTheDocument()
  })

  it('displays contact information', () => {
    render(<Footer />)

    expect(screen.getByText('Enugu, Nigeria')).toBeInTheDocument()
    expect(screen.getByText('+234 806 450 8595')).toBeInTheDocument()
    expect(screen.getByText('emmachuka@gmail.com')).toBeInTheDocument()
  })

  it('renders social media icons', () => {
    render(<Footer />)

    expect(screen.getByTestId('twitter-icon')).toBeInTheDocument()
    expect(screen.getByTestId('linkedin-icon')).toBeInTheDocument()
    expect(screen.getByTestId('facebook-icon')).toBeInTheDocument()
    expect(screen.getByTestId('instagram-icon')).toBeInTheDocument()
  })

  it('displays EmmanuelOS link', () => {
    render(<Footer />)

    expect(screen.getByText('Explore EmmanuelOS')).toBeInTheDocument()
    expect(screen.getByTestId('external-link')).toBeInTheDocument()
  })

  it('shows current year in copyright', () => {
    render(<Footer />)

    const currentYear = new Date().getFullYear().toString()
    expect(screen.getByText(`© ${currentYear} Emmanuel Chukwuka Ogugua. All rights reserved.`)).toBeInTheDocument()
  })

  it('has proper semantic structure', () => {
    render(<Footer />)

    const footer = screen.getByRole('contentinfo')
    expect(footer).toBeInTheDocument()
    expect(footer.tagName).toBe('FOOTER')
  })
})
