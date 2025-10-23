'use client'

import { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark') // Always default to dark
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Force dark mode always - ignore system preferences
    const savedTheme = localStorage.getItem('theme') as Theme
    if (savedTheme && savedTheme !== 'dark') {
      // If user previously chose light mode, override to dark
      setTheme('dark')
      localStorage.setItem('theme', 'dark')
    } else if (!savedTheme) {
      // New users always get dark mode
      setTheme('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      setTheme('dark') // Ensure it's always dark
    }
  }, [])

  useEffect(() => {
    if (mounted) {
      const root = document.documentElement
      if (theme === 'dark') {
        root.classList.add('dark')
      } else {
        root.classList.remove('dark')
      }
      localStorage.setItem('theme', theme)
    }
  }, [theme, mounted])

  const toggleTheme = () => {
    // Disabled - always maintain dark mode for consistent branding
    // setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  if (!mounted) {
    return <>{children}</>
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
