import { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Sun, Moon, Download } from 'lucide-react'

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#timeline' },
    { name: 'Projects', href: '#projects' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 bg-gray-900/80 backdrop-blur-xl border-b border-gray-800/50"
    >
      <div className="container-custom">
        <div className="flex justify-between items-center h-20">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0"
          >
            <div className="relative w-12 h-12 bg-gradient-to-br from-indigo-600 via-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/25 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
              <span className="text-white font-bold text-xl relative z-10">V</span>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-400 rounded-full opacity-60"></div>
            </div>
          </motion.div>

          <div className="hidden md:flex items-center space-x-12">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ y: -2 }}
                className="text-gray-300 hover:text-white font-medium transition-colors duration-300 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-blue-500 group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="gradient-border"
            >
              <div className="bg-gray-900 px-6 py-3 rounded-xl flex items-center gap-2 font-semibold uppercase tracking-wide text-sm">
                <Download size={16} />
                View CV
              </div>
            </motion.a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden pb-6"
          >
            <div className="space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-gray-300 hover:text-white font-medium transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#contact"
                className="block text-indigo-400 font-semibold"
                onClick={() => setIsOpen(false)}
              >
                View CV
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}

export default Navbar
