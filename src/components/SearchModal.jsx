import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, X, Hash, User, Code, FileText } from 'lucide-react'

const SearchModal = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('')
  
  const searchData = [
    { type: 'section', title: 'About Me', description: 'Learn about my background and experience', icon: User, href: '#about' },
    { type: 'section', title: 'Skills', description: 'Technical skills and expertise', icon: Code, href: '#skills' },
    { type: 'section', title: 'Projects', description: 'Featured projects and work', icon: Hash, href: '#projects' },
    { type: 'section', title: 'Contact', description: 'Get in touch with me', icon: User, href: '#contact' },
    { type: 'skill', title: 'React', description: 'Frontend JavaScript library', icon: Code, href: '#skills' },
    { type: 'skill', title: 'PHP', description: 'Backend programming language', icon: Code, href: '#skills' },
    { type: 'skill', title: 'MySQL', description: 'Relational database management', icon: Code, href: '#skills' },
    { type: 'project', title: 'College Management System', description: 'Full-stack web application', icon: Hash, href: '#projects' },
    { type: 'project', title: 'AI Habit Tracker', description: 'Smart habit tracking app', icon: Hash, href: '#projects' },
    { type: 'article', title: 'React Best Practices', description: 'Building scalable applications', icon: FileText, href: '#blog' }
  ]

  const filteredResults = query.length > 0 
    ? searchData.filter(item => 
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase())
      )
    : []

  const handleItemClick = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    onClose()
    setQuery('')
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-gray-900/80 backdrop-blur-sm z-50 flex items-start justify-center pt-20"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: -50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.95 }}
            className="glass-card p-6 w-full max-w-2xl mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-4 mb-6">
              <Search size={20} className="text-gray-400" />
              <input
                type="text"
                placeholder="Search portfolio..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="flex-1 bg-transparent text-white placeholder-gray-400 outline-none text-lg"
                autoFocus
              />
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
              >
                <X size={20} className="text-gray-400" />
              </button>
            </div>

            {query.length > 0 && (
              <div className="space-y-2 max-h-96 overflow-y-auto">
                {filteredResults.length > 0 ? (
                  filteredResults.map((item, index) => (
                    <motion.button
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => handleItemClick(item.href)}
                      className="w-full flex items-center gap-4 p-4 hover:bg-gray-800/50 rounded-lg transition-colors text-left"
                    >
                      <div className="p-2 bg-indigo-600/20 rounded-lg">
                        <item.icon size={16} className="text-indigo-400" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white font-medium">{item.title}</h4>
                        <p className="text-gray-400 text-sm">{item.description}</p>
                      </div>
                      <span className="text-xs text-gray-500 uppercase tracking-wide">
                        {item.type}
                      </span>
                    </motion.button>
                  ))
                ) : (
                  <div className="text-center py-8 text-gray-400">
                    No results found for "{query}"
                  </div>
                )}
              </div>
            )}

            {query.length === 0 && (
              <div className="text-center py-8 text-gray-400">
                <Search size={48} className="mx-auto mb-4 opacity-50" />
                <p>Start typing to search through my portfolio...</p>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default SearchModal
