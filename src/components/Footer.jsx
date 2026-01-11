import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowUp, ExternalLink } from 'lucide-react'
import TypingAnimation from './TypingAnimation'

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > window.innerHeight * 0.3)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
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

  return (
    <footer className="relative bg-[#070A14] overflow-hidden">
      {/* Gradient divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 via-purple-500/40 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          
          {/* Section 1 - Identity & Trust */}
          <div className="lg:col-span-5">
            <motion.div 
              className="flex items-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <motion.h3 
                  className="text-2xl font-semibold text-white tracking-tight"
                  whileHover={{ scale: 1.02 }}
                >
                  Vikas Uniyal
                </motion.h3>
                <motion.p 
                  className="text-gray-400 font-medium"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <TypingAnimation 
                    text="Full Stack Developer" 
                    delay={1000} 
                    speed={80}
                  />
                </motion.p>
              </motion.div>
            </motion.div>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-md">
              Building scalable, user-focused web applications with modern technologies and clean architecture.
            </p>
            
            <div className="w-12 h-px bg-gradient-to-r from-blue-500 to-purple-500 mb-6" />
            
            <div className="inline-flex items-center px-3 py-1.5 bg-green-500/10 border border-green-500/20 rounded-full">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
              <span className="text-green-400 text-sm font-medium">Available for work</span>
            </div>
          </div>

          {/* Section 2 - Navigation */}
          <div className="lg:col-span-2">
            <div className="space-y-8">
              <div>
                <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider opacity-90">Explore</h4>
                <ul className="space-y-3">
                  {[
                    { name: 'About', id: 'about' },
                    { name: 'Skills', id: 'skills' },
                    { name: 'Projects', id: 'projects' },
                    { name: 'Timeline', id: 'timeline' },
                    { name: 'Certifications', id: 'certifications' },
                    { name: 'Testimonials', id: 'testimonials' },
                    { name: 'Blog', id: 'blog' }
                  ].map((link) => (
                    <li key={link.id}>
                      <button
                        onClick={() => scrollToSection(link.id)}
                        className="group text-gray-400 hover:text-white transition-all duration-200 flex items-center"
                      >
                        <span className="group-hover:translate-x-1 transition-transform duration-200">{link.name}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider opacity-90">Work</h4>
                <ul className="space-y-3">
                  <li>
                    <button
                      onClick={() => scrollToSection('contact')}
                      className="group text-gray-400 hover:text-white transition-all duration-200 flex items-center"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-200">Contact</span>
                    </button>
                  </li>
                  <li>
                    <a
                      href="/resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group text-gray-400 hover:text-white transition-all duration-200 flex items-center"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-200">Resume</span>
                      <ExternalLink size={14} className="ml-1 opacity-60" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 3 - Expertise Snapshot */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider opacity-90">Expertise</h4>
            <ul className="space-y-4">
              {[
                'React & Frontend Systems',
                'Backend APIs & Databases', 
                'AI-assisted Applications',
                'Performance & Optimization'
              ].map((skill) => (
                <li key={skill} className="group flex items-center">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 group-hover:bg-purple-400 transition-colors duration-200" />
                  <span className="text-gray-400 group-hover:text-gray-300 transition-colors duration-200">{skill}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 4 - Connection & Proof */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider opacity-90">Connect</h4>
            
            <div className="space-y-4 mb-6">
              <a 
                href="mailto:vikasuniyalcsa@gmail.com"
                className="group flex items-center p-3 bg-white/3 border border-white/10 rounded-xl hover:bg-white/5 hover:border-white/20 transition-all duration-200"
              >
                <Mail size={18} className="text-blue-400 mr-3" />
                <div>
                  <div className="text-white text-sm font-medium">Email</div>
                  <div className="text-gray-400 text-xs">Primary contact</div>
                </div>
              </a>
              
              <div className="flex space-x-3">
                <a 
                  href="https://github.com/virusvickee" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 bg-white/3 border border-white/10 rounded-xl hover:bg-white/5 hover:border-white/20 hover:shadow-lg hover:shadow-white/5 transition-all duration-200"
                >
                  <Github size={18} className="text-gray-400 group-hover:text-white transition-colors duration-200" />
                </a>
                <a 
                  href="https://linkedin.com/in/vikas-uniyal" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 bg-white/3 border border-white/10 rounded-xl hover:bg-white/5 hover:border-white/20 hover:shadow-lg hover:shadow-white/5 transition-all duration-200"
                >
                  <Linkedin size={18} className="text-gray-400 group-hover:text-white transition-colors duration-200" />
                </a>
              </div>
            </div>
            
            <p className="text-gray-500 text-xs">Response time: &lt; 24h</p>
          </div>
        </div>

        {/* Footer base bar */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm opacity-70">© 2026 Vikas Uniyal</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="/privacy" className="text-gray-500 text-sm opacity-70 hover:opacity-100 transition-opacity duration-200">Privacy</a>
            <a href="/terms" className="text-gray-500 text-sm opacity-70 hover:opacity-100 transition-opacity duration-200">Terms</a>
          </div>
        </div>
      </div>

      {/* Back to top button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-2xl hover:bg-white/15 hover:border-white/30 transition-all duration-200 z-50 group"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            title="Back to top"
          >
            <ArrowUp size={20} className="group-hover:-translate-y-0.5 transition-transform duration-200" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  )
}

export default Footer
