import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react'

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const quickLinks = [
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
    { name: 'Services', id: 'about' }
  ]

  const services = [
    'Web Development',
    'React Applications', 
    'Backend Development',
    'Database Design',
    'API Integration'
  ]

  return (
    <footer className="relative bg-[#070A14] border-t border-gray-800/50">
      {/* Gradient divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />
      
      <div className="container-premium py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Column 1 - Branding */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl flex items-center justify-center mr-4">
                <span className="text-white font-bold text-xl">V</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Vikas Uniyal</h3>
                <p className="text-indigo-400 font-medium">Full Stack Developer</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-md mb-8">
              Building modern web applications with clean code, responsive design, and user-focused solutions.
            </p>
            
            {/* Social Icons */}
            <div className="flex space-x-4">
              <a 
                href="https://github.com/virusvickee" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass rounded-xl hover:bg-white/20 transition-all duration-200 hover:scale-110"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/vikas-uniyal" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass rounded-xl hover:bg-white/20 transition-all duration-200 hover:scale-110"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:vikasuniyalcsa@gmail.com"
                className="p-3 glass rounded-xl hover:bg-white/20 transition-all duration-200 hover:scale-110"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-white hover:underline hover:underline-offset-4 transition-all duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Services */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-lg">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-400 hover:text-gray-300 transition-colors duration-200 cursor-default">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-gray-800/50 text-center">
          <p className="text-gray-500">
            © 2026 Vikas Uniyal
          </p>
        </div>
      </div>

      {/* Back to top button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-full shadow-lg hover:shadow-xl hover:shadow-indigo-500/25 transition-all duration-300 z-50 hover:scale-110"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <ArrowUp size={24} />
      </motion.button>
    </footer>
  )
}

export default Footer
