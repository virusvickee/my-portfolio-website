import { useState, useEffect } from 'react'
import { Sun, Moon } from 'lucide-react'
import { motion } from 'framer-motion'

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    if (saved) {
      setIsDark(saved === 'dark')
    }
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('light-theme', !isDark)
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark])

  return (
    <motion.button
      onClick={() => setIsDark(!isDark)}
      className="fixed top-56 right-4 md:right-6 p-2 md:p-3 bg-yellow-500 text-white rounded-full shadow-lg z-40"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      animate={{ rotate: isDark ? 0 : 180 }}
    >
      {isDark ? <Sun size={16} className="md:w-5 md:h-5" /> : <Moon size={16} className="md:w-5 md:h-5" />}
    </motion.button>
  )
}

export default ThemeToggle
