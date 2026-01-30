import React, { useState, useEffect } from 'react'
import { Menu, X, Download } from 'lucide-react'
import { motion } from 'framer-motion'
import TypingAnimation from './TypingAnimation'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Articles', id: 'articles' },
    { name: 'Timeline', id: 'timeline' },
    { name: 'Contact', id: 'contact' }
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'glass py-4' : 'py-6'
        }`}
    >
      <div className="container-premium">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.button
            onClick={() => scrollToSection('home')}
            className="flex items-center group relative"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {/* Glowing background effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-indigo-600/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative px-4 py-2 bg-gradient-to-r from-slate-900/50 to-slate-800/50 backdrop-blur-sm border border-white/10 rounded-xl group-hover:border-white/20 transition-all duration-300">
                <motion.div
                  className="text-xl font-bold bg-gradient-to-r from-white via-blue-200 to-indigo-300 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:via-purple-300 group-hover:to-indigo-200 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  Vikas Uniyal
                </motion.div>

                <motion.div
                  className="text-sm font-medium -mt-1 flex items-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <div className="w-1 h-1 bg-emerald-400 rounded-full mr-2 animate-pulse" />
                  <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                    <TypingAnimation
                      text="Full Stack Developer"
                      delay={800}
                      speed={80}
                    />
                  </span>
                </motion.div>
              </div>
            </motion.div>
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-300 hover:text-white font-medium transition-colors duration-200 relative group"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-blue-500 group-hover:w-full transition-all duration-300" />
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 glass rounded-xl"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden mt-6 glass rounded-2xl p-6"
          >
            <div className="space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left py-3 text-gray-300 hover:text-white font-medium transition-colors duration-200"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}

export default Navbar
