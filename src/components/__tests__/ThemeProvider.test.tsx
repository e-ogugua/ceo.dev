import { render, screen } from '@testing-library/react'
import { ThemeProvider, useTheme } from '../ThemeProvider'

// Test component that uses the theme context
function TestComponent() {
  const { theme, toggleTheme } = useTheme()
  return (
    <div>
      <span data-testid="theme-value">{theme}</span>
      <button onClick={toggleTheme} data-testid="toggle-button">
        Toggle Theme
      </button>
    </div>
  )
}

describe('ThemeProvider', () => {
  it('provides theme context to children', () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    )

    const themeValue = screen.getByTestId('theme-value')
    expect(themeValue).toHaveTextContent('dark')
  })

  it('defaults to dark theme', () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    )

    const themeValue = screen.getByTestId('theme-value')
    expect(themeValue).toHaveTextContent('dark')
  })

  it('throws error when useTheme is used outside provider', () => {
    // Mock console.error to avoid test output noise
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {})

    expect(() => render(<TestComponent />)).toThrow(
      'useTheme must be used within a ThemeProvider'
    )

    consoleSpy.mockRestore()
  })
})
