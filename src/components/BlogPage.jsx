import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowLeft, Search, Filter } from 'lucide-react'
import { allArticles } from '../data/articles'

const BlogPage = ({ onBack }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', 'React', 'AI/ML', 'Full-Stack', 'CSS', 'Database', 'DevOps', 'JavaScript', 'Backend']

  const filteredArticles = allArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const getCategoryColor = (category) => {
    const colors = {
      'React': 'bg-blue-500/10 border-blue-500/20 text-blue-400',
      'AI/ML': 'bg-purple-500/10 border-purple-500/20 text-purple-400',
      'Full-Stack': 'bg-green-500/10 border-green-500/20 text-green-400',
      'CSS': 'bg-pink-500/10 border-pink-500/20 text-pink-400',
      'Database': 'bg-orange-500/10 border-orange-500/20 text-orange-400',
      'DevOps': 'bg-indigo-500/10 border-indigo-500/20 text-indigo-400',
      'JavaScript': 'bg-yellow-500/10 border-yellow-500/20 text-yellow-400',
      'Backend': 'bg-red-500/10 border-red-500/20 text-red-400'
    }
    return colors[category] || 'bg-gray-500/10 border-gray-500/20 text-gray-400'
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="section-padding">
        <div className="container-premium">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <button
              onClick={onBack}
              className="flex items-center space-x-2 text-indigo-400 hover:text-indigo-300 mb-8 transition-colors"
            >
              <ArrowLeft size={20} />
              <span>Back to Portfolio</span>
            </button>
            
            <h1 className="heading-xl mb-6">
              All <span className="gradient-text">Articles</span>
            </h1>
            <p className="text-xl text-body max-w-3xl leading-relaxed">
              Explore my complete collection of articles on web development, AI integration, and modern programming practices.
            </p>
          </motion.div>

          {/* Search and Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <div className="flex flex-col md:flex-row gap-6 mb-8">
              {/* Search */}
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  aria-label="Search articles"
                  className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500/50 transition-colors"
                />
              </div>
              
              {/* Category Filter */}
              <div className="relative">
                <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  aria-label="Filter by category"
                  className="pl-12 pr-8 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-indigo-500/50 transition-colors appearance-none cursor-pointer"
                >
                  {categories.map(category => (
                    <option key={category} value={category} className="bg-slate-800">
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </motion.div>

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article, index) => (
              <motion.article
                key={article.title}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="premium-card glass-morphism overflow-hidden hover-glow group cursor-pointer"
              >
                {/* Article Image */}
                <div className="h-48 relative overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Category Badge */}
                  <div className={`absolute top-4 right-4 status-badge ${getCategoryColor(article.category)}`}>
                    {article.category}
                  </div>
                </div>

                {/* Article Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-indigo-400 transition-colors duration-200">
                    {article.title}
                  </h3>
                  
                  <p className="text-body text-sm leading-relaxed mb-4">
                    {article.excerpt}
                  </p>

                  {/* Article Meta */}
                  <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Calendar size={14} />
                        <span>{new Date(article.date).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric', 
                          year: 'numeric' 
                        })}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock size={14} />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                  </div>

                  {/* Read More Link */}
                  <a 
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-sm px-4 py-2 w-full text-center inline-block"
                  >
                    Read Full Article
                  </a>
                </div>
              </motion.article>
            ))}
          </div>

          {/* No Results */}
          {filteredArticles.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-gray-400 text-lg">No articles found matching your criteria.</p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}

export default BlogPage
