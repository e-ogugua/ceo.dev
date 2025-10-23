import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ThemeProvider } from '../ThemeProvider'
import { ThemeToggle } from '../ThemeToggle'

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    button: ({ children, ...props }: any) => <button {...props}>{children}</button>,
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
  AnimatePresence: ({ children }: any) => children,
}))

// Mock lucide-react
jest.mock('lucide-react', () => ({
  Moon: () => <span data-testid="moon-icon">🌙</span>,
}))

const renderWithTheme = (component: React.ReactElement) => {
  return render(
    <ThemeProvider>
      {component}
    </ThemeProvider>
  )
}

describe('ThemeToggle', () => {
  it('renders theme toggle button', () => {
    renderWithTheme(<ThemeToggle />)

    const button = screen.getByRole('button', { name: /theme preferences/i })
    expect(button).toBeInTheDocument()
  })

  it('displays moon icon', () => {
    renderWithTheme(<ThemeToggle />)

    const moonIcon = screen.getByTestId('moon-icon')
    expect(moonIcon).toBeInTheDocument()
  })

  it('has proper accessibility attributes', () => {
    renderWithTheme(<ThemeToggle />)

    const button = screen.getByRole('button')
    expect(button).toHaveAttribute('aria-label', 'Theme preferences (dark mode)')
  })

  it('maintains dark theme styling', () => {
    renderWithTheme(<ThemeToggle />)

    const button = screen.getByRole('button')
    expect(button).toHaveClass('text-slate-400')
  })
})
