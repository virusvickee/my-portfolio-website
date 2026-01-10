import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react'

const Blog = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const articles = [
    {
      title: 'Building Scalable React Applications in 2024',
      excerpt: 'Learn the latest patterns and best practices for building maintainable React apps with modern tools and techniques.',
      date: 'Dec 15, 2024',
      readTime: '8 min read',
      category: 'React',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop',
      slug: 'scalable-react-apps-2024'
    },
    {
      title: 'PHP Modern Development: Beyond the Basics',
      excerpt: 'Exploring advanced PHP concepts, frameworks, and tools that make PHP a powerful choice for backend development.',
      date: 'Nov 28, 2024',
      readTime: '12 min read',
      category: 'PHP',
      image: 'https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?w=600&h=400&fit=crop',
      slug: 'php-modern-development'
    },
    {
      title: 'AI Integration in Web Applications',
      excerpt: 'A practical guide to integrating AI APIs and machine learning features into your web applications.',
      date: 'Nov 10, 2024',
      readTime: '10 min read',
      category: 'AI',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
      slug: 'ai-integration-web-apps'
    },
    {
      title: 'Database Optimization Techniques',
      excerpt: 'Performance optimization strategies for MySQL and MongoDB databases in production environments.',
      date: 'Oct 22, 2024',
      readTime: '15 min read',
      category: 'Database',
      image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=600&h=400&fit=crop',
      slug: 'database-optimization'
    }
  ]

  const categories = ['All', 'React', 'PHP', 'AI', 'Database']

  return (
    <section id="blog" className="section-padding">
      <div className="container-premium">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="heading-lg text-white mb-6">
            Latest <span className="gradient-text">Articles</span>
          </h2>
          <p className="text-body max-w-2xl mx-auto mb-8">
            Sharing knowledge and insights about web development, AI, and modern technologies
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 glass-card hover:bg-indigo-500/20 text-gray-300 hover:text-white transition-all duration-300 text-sm font-medium"
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((article, index) => (
            <motion.article
              key={article.slug}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="glass-card p-0 overflow-hidden hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300 group"
            >
              <div className="aspect-video bg-gray-800 overflow-hidden relative">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-indigo-600 text-white rounded-full text-xs font-semibold uppercase tracking-wide">
                    {article.category}
                  </span>
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-center gap-4 text-gray-400 text-sm mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <h3 className="heading-md text-white mb-4 group-hover:text-indigo-400 transition-colors line-clamp-2">
                  {article.title}
                </h3>

                <p className="text-body mb-6 line-clamp-3">
                  {article.excerpt}
                </p>

                <motion.a
                  href={`/blog/${article.slug}`}
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-medium transition-colors"
                >
                  Read More
                  <ArrowRight size={16} />
                </motion.a>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12"
        >
          <motion.a
            href="/blog"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-secondary inline-flex items-center gap-2"
          >
            View All Articles
            <ArrowRight size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Blog
