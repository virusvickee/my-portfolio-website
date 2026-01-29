import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowUp, ExternalLink, Clock, MapPin, Coffee } from 'lucide-react'

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [currentTime, setCurrentTime] = useState('')
  const [visitorCount, setVisitorCount] = useState(1247)
  const [isTyping, setIsTyping] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > window.innerHeight * 0.3)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setCurrentTime(now.toLocaleTimeString('en-US', { 
        timeZone: 'Asia/Kolkata',
        hour12: true,
        hour: '2-digit',
        minute: '2-digit'
      }))
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setVisitorCount(prev => prev + Math.floor(Math.random() * 3))
    }, 30000)
    return () => clearInterval(interval)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const quotes = [
    "Code is poetry written in logic",
    "Building the future, one line at a time",
    "Where creativity meets functionality",
    "Turning ideas into digital reality"
  ]

  const [currentQuote, setCurrentQuote] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTyping(true)
      setTimeout(() => {
        setCurrentQuote(prev => (prev + 1) % quotes.length)
        setIsTyping(false)
      }, 500)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20 overflow-hidden">
      {/* Animated wave border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500">
        <motion.div
          className="h-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-8 relative z-10">
        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand section with animated quote */}
          <div className="lg:col-span-2">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl font-bold text-white mb-2">Vikas Uniyal</h3>
              <p className="text-blue-400 font-medium mb-6">Full Stack Developer</p>
              
              {/* Animated quote */}
              <div className="h-8 mb-8">
                <motion.p 
                  className="text-gray-300 italic"
                  key={currentQuote}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: isTyping ? 0.5 : 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  "{quotes[currentQuote]}"
                </motion.p>
              </div>

              {/* Status indicators */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-green-400 text-sm">Available for projects</span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 text-sm text-gray-400">
                  <div className="flex items-center space-x-1">
                    <Clock size={14} />
                    <span>{currentTime} IST</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin size={14} />
                    <span>India</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Coffee size={14} />
                    <span>Fueled by coffee</span>
                  </div>
                </div>
              </div>

              {/* Social links with hover effects */}
              <div className="flex space-x-4">
                {[
                  { icon: Github, href: "https://github.com/virusvickee", color: "hover:text-gray-300" },
                  { icon: Linkedin, href: "https://linkedin.com/in/vikas-uniyal", color: "hover:text-blue-400" },
                  { icon: Mail, href: "mailto:vikasuniyalcsa@gmail.com", color: "hover:text-purple-400" }
                ].map(({ icon: Icon, href, color }, index) => (
                  <motion.a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-white/5 border border-white/10 rounded-xl text-gray-400 ${color} transition-all duration-300`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Quick navigation */}
          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 transform"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Stats and info */}
          <div>
            <h4 className="text-white font-semibold mb-6">Stats</h4>
            <div className="space-y-4">
              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold text-blue-400">{visitorCount.toLocaleString()}</div>
                <div className="text-gray-400 text-sm">Portfolio views</div>
              </div>
              
              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold text-purple-400">50+</div>
                <div className="text-gray-400 text-sm">Projects completed</div>
              </div>

              <a
                href="/vikas_uniyal.pdf"
                download
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200"
              >
                <ExternalLink size={16} />
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2026 Vikas Uniyal. Built with React & ❤️
          </div>
          
          {/* Mini tech stack */}
          <div className="flex items-center space-x-4 text-xs text-gray-500">
            <span>React</span>
            <span>•</span>
            <span>Tailwind</span>
            <span>•</span>
            <span>Framer Motion</span>
            <span>•</span>
            <span>Vite</span>
          </div>
        </div>
      </div>

      {/* Enhanced back to top button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg z-50 group"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform duration-200" />
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-20"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  )
}

export default Footer
