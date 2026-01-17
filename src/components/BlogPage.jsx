import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowLeft, Search, Filter } from 'lucide-react'

const BlogPage = ({ onBack }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const allArticles = [
    {
      title: 'Building Scalable React Applications with Modern Architecture',
      excerpt: 'Learn how to structure React applications for scalability using modern patterns, state management, and performance optimization techniques. This comprehensive guide covers component architecture, state management patterns, and performance optimization strategies.',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'React',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop',
      link: 'https://dev.to/virusvickee/building-scalable-react-applications'
    },
    {
      title: 'AI Integration in Web Development: A Practical Guide',
      excerpt: 'Explore practical ways to integrate AI APIs into web applications, from chatbots to recommendation systems and automated workflows. Learn about OpenAI integration, natural language processing, and machine learning APIs.',
      date: '2024-01-10',
      readTime: '12 min read',
      category: 'AI/ML',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
      link: 'https://medium.com/@vikasuniyalcsa/ai-integration-web-development'
    },
    {
      title: 'Full-Stack Development with MERN: Best Practices',
      excerpt: 'Complete guide to building production-ready applications using MongoDB, Express.js, React, and Node.js with security and performance in mind. Covers authentication, database design, API development, and deployment strategies.',
      date: '2024-01-05',
      readTime: '15 min read',
      category: 'Full-Stack',
      image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=600&h=400&fit=crop',
      link: 'https://hashnode.com/@virusvickee/mern-stack-best-practices'
    },
    {
      title: 'Modern CSS Techniques: From Grid to Container Queries',
      excerpt: 'Master advanced CSS features including CSS Grid, Flexbox, Container Queries, and CSS Custom Properties for responsive design. Learn about modern layout techniques and responsive design patterns.',
      date: '2023-12-28',
      readTime: '10 min read',
      category: 'CSS',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop',
      link: 'https://css-tricks.com/a-complete-guide-to-css-grid/'
    },
    {
      title: 'Database Design Patterns for Modern Applications',
      excerpt: 'Understanding database design patterns, normalization, indexing strategies, and choosing between SQL and NoSQL databases. Covers MongoDB, PostgreSQL, and database optimization techniques.',
      date: '2023-12-20',
      readTime: '11 min read',
      category: 'Database',
      image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=600&h=400&fit=crop',
      link: 'https://blog.vikasdev.com/database-design-patterns'
    },
    {
      title: 'DevOps Essentials: CI/CD Pipeline Setup',
      excerpt: 'Step-by-step guide to setting up continuous integration and deployment pipelines using GitHub Actions, Docker, and cloud platforms. Learn about automated testing, deployment strategies, and monitoring.',
      date: '2023-12-15',
      readTime: '14 min read',
      category: 'DevOps',
      image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=600&h=400&fit=crop',
      link: 'https://dev.to/virusvickee/devops-cicd-pipeline-setup'
    },
    {
      title: 'JavaScript Performance Optimization Techniques',
      excerpt: 'Advanced JavaScript optimization techniques including code splitting, lazy loading, memory management, and performance monitoring. Learn how to build faster web applications.',
      date: '2023-12-10',
      readTime: '9 min read',
      category: 'JavaScript',
      image: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=600&h=400&fit=crop',
      link: 'https://dev.to/virusvickee/javascript-performance-optimization'
    },
    {
      title: 'Building RESTful APIs with Node.js and Express',
      excerpt: 'Complete guide to building robust RESTful APIs using Node.js and Express.js. Covers routing, middleware, authentication, error handling, and API documentation.',
      date: '2023-12-05',
      readTime: '13 min read',
      category: 'Backend',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop',
      link: 'https://medium.com/@vikasuniyalcsa/building-restful-apis-nodejs'
    }
  ]

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
                  className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500/50 transition-colors"
                />
              </div>
              
              {/* Category Filter */}
              <div className="relative">
                <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
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
