import { motion } from 'framer-motion'
import { ArrowUp, Github, Linkedin, Mail, ExternalLink } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
    { name: 'Services', href: '#contact' }
  ]

  const services = [
    'Web Development',
    'React Applications', 
    'Backend Development',
    'Database Design',
    'API Integration'
  ]

  const socialLinks = [
    { 
      icon: Mail, 
      href: 'mailto:vikasuniyalcsa@gmail.com', 
      label: 'Email',
      text: 'vikasuniyalcsa@gmail.com'
    },
    { 
      icon: Github, 
      href: 'https://github.com/virusvickee', 
      label: 'GitHub',
      text: 'GitHub'
    },
    { 
      icon: Linkedin, 
      href: '#', 
      label: 'LinkedIn',
      text: 'LinkedIn'
    }
  ]

  return (
    <footer className="relative bg-gray-950 border-t border-gray-800/50">
      {/* Gradient Divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"></div>
      
      <div className="container-custom section-padding">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1 - Branding */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="flex items-center mb-6">
              <img 
                src="/logo.png" 
                alt="Vikas Uniyal Logo" 
                className="w-12 h-12 rounded-xl shadow-lg shadow-indigo-500/25 mr-4"
              />
              <div>
                <h3 className="text-xl font-bold text-white">Vikas Uniyal</h3>
                <p className="text-indigo-400 font-medium">Full Stack Developer</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Building modern web applications with clean code and user-focused solutions.
            </p>
          </motion.div>

          {/* Column 2 - Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white hover:underline hover:underline-offset-4 transition-all duration-300 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3 - Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold text-white mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-400">{service}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4 - Get in Touch */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold text-white mb-6">Get in Touch</h4>
            <div className="space-y-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 text-gray-400 hover:text-indigo-400 transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon size={18} className="group-hover:scale-110 transition-transform" />
                  <span className="text-sm">{social.text}</span>
                  <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Footer Bar */}
        <div className="border-t border-gray-800/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-sm text-gray-500"
            >
              © 2026 Vikas Uniyal. All rights reserved.
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex space-x-6 text-sm"
            >
              <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors duration-300">
                Privacy
              </a>
              <span className="text-gray-700">|</span>
              <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors duration-300">
                Terms
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-full shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 z-50 group"
        aria-label="Back to top"
      >
        <ArrowUp size={20} className="group-hover:scale-110 transition-transform" />
      </motion.button>
    </footer>
  )
}

export default Footer
