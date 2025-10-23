'use client'

import { Moon, Sun } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from './ThemeProvider'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative p-3 text-slate-400 hover:text-slate-100 bg-slate-800/60 hover:bg-slate-700/80 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 border border-slate-600/50 shadow-lg hover:shadow-xl"
      whileHover={{
        scale: 1.1,
        y: -2,
        boxShadow: "0 8px 25px rgba(0, 163, 255, 0.15)"
      }}
      whileTap={{ scale: 0.95 }}
      aria-label="Theme settings (currently dark mode)"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key="moon"
          initial={{ opacity: 0, rotate: 90 }}
          animate={{ opacity: 1, rotate: 0 }}
          exit={{ opacity: 0, rotate: -90 }}
          transition={{ duration: 0.3 }}
        >
          <Moon size={20} className="text-blue-400 drop-shadow-sm" />
        </motion.div>
      </AnimatePresence>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-slate-700/30 to-slate-600/50 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300"
        initial={false}
      />
    </motion.button>
  )
}
