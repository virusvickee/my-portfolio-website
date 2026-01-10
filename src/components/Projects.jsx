import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, Github, CheckCircle, Clock } from 'lucide-react'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const projects = [
    {
      title: 'FreshMart – Groceries & More',
      stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
      description: 'Full-Stack MERN E-Commerce platform with secure authentication, product management, shopping cart, and seamless checkout flow.',
      status: 'Completed',
      statusIcon: CheckCircle,
      statusColor: 'text-green-400',
      image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&h=400&fit=crop',
      demo: '#',
      github: '#',
      features: [
        'User registration & login with JWT authentication',
        'Product listing, search, and category filtering', 
        'Shopping cart with real-time price updates',
        'Secure checkout and order management',
        'Responsive UI for desktop and mobile devices',
        'Error handling and form validation'
      ]
    },
    {
      title: 'Smart College Management System',
      stack: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT'],
      description: 'Comprehensive college management platform with student & faculty modules, attendance tracking, grade management, and analytics dashboard.',
      status: 'Completed',
      statusIcon: CheckCircle,
      statusColor: 'text-green-400',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      demo: '#',
      github: '#',
      features: [
        'Student & Faculty registration with role-based access',
        'Real-time attendance tracking and reporting',
        'Grade management and transcript generation',
        'Timetable creation and scheduling system',
        'Push notifications for important updates',
        'Analytics dashboard with performance metrics'
      ]
    },
    {
      title: 'AI Habit Tracker',
      stack: ['React', 'Firebase', 'OpenAI API', 'Chart.js'],
      description: 'Intelligent habit tracking application with AI-powered coaching, streak management, and personalized insights for better lifestyle habits.',
      status: 'In Progress',
      statusIcon: Clock,
      statusColor: 'text-yellow-400',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      demo: '#',
      github: '#',
      features: [
        'AI-powered personalized coaching and tips',
        'Daily habit tracking with streak counters',
        'Performance analytics and progress visualization',
        'Smart reminders and notification system',
        'Social sharing and community features',
        'Goal setting with milestone achievements'
      ]
    },
    {
      title: 'Smart Inventory System',
      stack: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap', 'Python'],
      description: 'AI-powered inventory management system with sales forecasting, automated reordering, and comprehensive analytics dashboard.',
      status: 'In Progress',
      statusIcon: Clock,
      statusColor: 'text-yellow-400',
      image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=400&fit=crop',
      demo: '#',
      github: '#',
      features: [
        'Real-time inventory tracking and management',
        'AI-based sales forecasting and predictions',
        'Automated low-stock alerts and reordering',
        'Comprehensive billing and invoice system',
        'Multi-location warehouse management',
        'Advanced analytics and reporting dashboard'
      ]
    },
    {
      title: 'AI Travel Planner',
      stack: ['React', 'Express.js', 'MongoDB', 'Google Maps API', 'OpenAI API'],
      description: 'Intelligent travel planning platform with AI itinerary generation, route optimization, and personalized recommendations.',
      status: 'In Progress',
      statusIcon: Clock,
      statusColor: 'text-yellow-400',
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop',
      demo: '#',
      github: '#',
      features: [
        'AI-generated personalized travel itineraries',
        'Smart route optimization and navigation',
        'Real-time weather and traffic integration',
        'Hotel and restaurant recommendations',
        'Budget tracking and expense management',
        'Trip sharing and collaborative planning'
      ]
    },
    {
      title: 'Resume Builder AI',
      stack: ['React', 'Node.js', 'MongoDB', 'OpenAI API', 'PDF-lib'],
      description: 'AI-powered resume generator with intelligent content suggestions, live preview, theme customization, and ATS optimization.',
      status: 'In Progress',
      statusIcon: Clock,
      statusColor: 'text-yellow-400',
      image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=400&fit=crop',
      demo: '#',
      github: '#',
      features: [
        'AI-powered content generation and suggestions',
        'Real-time live preview with multiple themes',
        'ATS-friendly formatting and optimization',
        'Professional template library',
        'PDF export with custom styling',
        'Skills matching and job recommendation'
      ]
    },
    {
      title: 'Portfolio Website',
      stack: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
      description: 'Modern, responsive portfolio website with dark mode, smooth animations, and premium UI design for professional presentation.',
      status: 'Completed',
      statusIcon: CheckCircle,
      statusColor: 'text-green-400',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
      demo: '#',
      github: '#',
      features: [
        'Modern glassmorphism design with dark/light modes',
        'Smooth scroll animations and micro-interactions',
        'Fully responsive mobile-first design',
        'SEO optimized with meta tags and structure',
        'Contact form with validation and submission',
        'Performance optimized with lazy loading'
      ]
    }
  ]

  return (
    <section id="projects" className="section-padding bg-gray-900/50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="heading-lg text-white mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            A showcase of my latest work in web development and AI integration
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02, rotateX: 5, rotateY: 5 }}
              className="glass-card p-0 group hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300 overflow-hidden"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="aspect-video bg-gray-800 overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                <div className={`absolute top-4 right-4 flex items-center gap-2 px-3 py-1 rounded-full bg-gray-900/80 backdrop-blur-sm ${project.statusColor}`}>
                  <project.statusIcon size={14} />
                  <span className="text-xs font-semibold uppercase tracking-wide">{project.status}</span>
                </div>
              </div>

              <div className="p-8">
                <h3 className="heading-md text-white mb-4 group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-body mb-6 line-clamp-3">
                  {project.description}
                </p>

                {project.features && (
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-300 mb-3">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-400">
                          <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-indigo-500/10 text-indigo-300 rounded-lg text-xs font-medium border border-indigo-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <motion.a
                    href={project.demo}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 btn-primary flex items-center justify-center gap-2 text-sm py-3"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </motion.a>
                  {project.github && (
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 glass-card hover:bg-gray-800 transition-colors"
                    >
                      <Github size={20} className="text-gray-400" />
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
