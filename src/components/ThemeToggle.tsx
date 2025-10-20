'use client'

import { Moon, Sun } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from './ThemeProvider'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative p-2.5 text-slate-600 hover:text-slate-900 bg-white/10 hover:bg-white/20 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      whileHover={{
        scale: 1.1,
        y: -2,
        boxShadow: "0 8px 25px rgba(255, 255, 255, 0.1)"
      }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <AnimatePresence mode="wait">
        {theme === 'light' ? (
          <motion.div
            key="sun"
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 90 }}
            transition={{ duration: 0.3 }}
          >
            <Sun size={18} />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ opacity: 0, rotate: 90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: -90 }}
            transition={{ duration: 0.3 }}
          >
            <Moon size={18} />
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/20 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300"
        initial={false}
      />
    </motion.button>
  )
}
