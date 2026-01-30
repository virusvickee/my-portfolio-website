import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowRight, ExternalLink } from 'lucide-react'

const Articles = ({ onNavigateToBlog }) => {
  const articles = [
    {
      title: 'Neural Interfaces: The Dawn of Human-Computer Integration',
      excerpt: 'Exploring the latest breakthroughs in Brain-Computer Interfaces (BCI) from Neuralink and Synchron, and what they mean for the future of human capability.',
      date: '2025-01-20',
      readTime: '6 min read',
      category: 'BioTech',
      image: 'https://images.unsplash.com/photo-1555664424-778a1e5e1b48?w=800&h=500&fit=crop', // Brain/Neural abstract
      link: '#'
    },
    {
      title: 'Quantum Advantage: Beyond Binary Computing',
      excerpt: 'How recent milestones in qubit stability are pushing us closer to solving problems deemed impossible for classical supercomputers.',
      date: '2025-01-15',
      readTime: '8 min read',
      category: 'Quantum',
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=500&fit=crop', // Quantum chip abstract
      link: '#'
    },
    {
      title: 'The New Space Race: AI in Orbital Manufacturing',
      excerpt: 'Autonomous factories in zero-gravity? How AI is orchestrating the next generation of space stations and orbital infrastructure.',
      date: '2025-01-08',
      readTime: '10 min read',
      category: 'SpaceTech',
      image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800&h=500&fit=crop', // Space station/Orbit
      link: '#'
    }
  ]

  const getCategoryColor = (category) => {
    const colors = {
      'BioTech': 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400',
      'Quantum': 'bg-violet-500/10 border-violet-500/20 text-violet-400',
      'SpaceTech': 'bg-orange-500/10 border-orange-500/20 text-orange-400',
      'Next.js': 'bg-black/50 border-white/20 text-white',
      'React': 'bg-blue-500/10 border-blue-500/20 text-blue-400',
      'AI/ML': 'bg-purple-500/10 border-purple-500/20 text-purple-400',
      'Full-Stack': 'bg-green-500/10 border-green-500/20 text-green-400',
      'CSS': 'bg-pink-500/10 border-pink-500/20 text-pink-400',
      'Database': 'bg-orange-500/10 border-orange-500/20 text-orange-400',
      'DevOps': 'bg-indigo-500/10 border-indigo-500/20 text-indigo-400'
    }
    return colors[category] || 'bg-gray-500/10 border-gray-500/20 text-gray-400'
  }

  return (
    <section id="articles" className="section-padding bg-gradient-to-b from-transparent to-purple-950/10">
      <div className="container-premium">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="heading-xl mb-8">
            Latest <span className="gradient-text">Articles</span>
          </h2>
          <p className="text-xl text-body max-w-3xl mx-auto leading-relaxed">
            Insights and tutorials on modern web development, AI integration, and best practices.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
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
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-indigo-400 transition-colors duration-200 line-clamp-2">
                  {article.title}
                </h3>

                <p className="text-body text-sm leading-relaxed mb-4 line-clamp-3">
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
                  className="inline-flex items-center space-x-2 text-indigo-400 hover:text-indigo-300 transition-colors duration-200 group/link"
                >
                  <span>Read Article</span>
                  <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform duration-200" />
                </a>


              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Articles Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button
            onClick={onNavigateToBlog}
            className="btn-primary inline-flex items-center space-x-2"
          >
            <span>View All Articles</span>
            <ArrowRight size={18} />
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Articles
