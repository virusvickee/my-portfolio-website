import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import AnimatedBackground from './components/AnimatedBackground'
import Hero from './components/Hero'
import About from './components/About'
import StatsCounter from './components/StatsCounter'
import Skills from './components/Skills'
import Timeline from './components/Timeline'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Blog from './components/Blog'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import SearchModal from './components/SearchModal'

function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [searchOpen, setSearchOpen] = useState(false)

  useEffect(() => {
    const isDark = localStorage.getItem('darkMode') !== 'false'
    setDarkMode(isDark)
    document.documentElement.classList.toggle('dark', isDark)

    // Keyboard shortcut for search
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault()
        setSearchOpen(true)
      }
      if (e.key === 'Escape') {
        setSearchOpen(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)
    localStorage.setItem('darkMode', newDarkMode)
    document.documentElement.classList.toggle('dark', newDarkMode)
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <AnimatedBackground />
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} onSearchOpen={() => setSearchOpen(true)} />
      <main>
        <Hero />
        <About />
        <StatsCounter />
        <Skills />
        <Timeline />
        <Projects />
        <Certifications />
        <Blog />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </div>
  )
}

export default App
