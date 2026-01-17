import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, CheckCircle, Clock, Wrench, X, Eye } from 'lucide-react'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)
  const projects = [
    {
      title: 'FreshMart - Grocery eCommerce Platform',
      description: 'Modern grocery eCommerce platform with secure shopping experience, product browsing, cart management, and seamless checkout flow using MERN stack architecture.',
      longDescription: 'FreshMart is a modern grocery eCommerce platform designed to provide a smooth and secure online shopping experience. Users can browse products by category, search items, add them to the cart, and place orders through a seamless checkout flow. The application follows a scalable MERN architecture with secure APIs, optimized database design, and a responsive user interface.',
      features: [
        'User registration & login with JWT authentication',
        'Product listing, search, and category filtering', 
        'Shopping cart with real-time price updates',
        'Secure checkout and order management',
        'Responsive UI for desktop and mobile devices',
        'Error handling and form validation across the app'
      ],
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'HTML5', 'CSS3'],
      status: 'completed',
      statusText: 'Completed',
      github: 'https://github.com/virusvickee',
      live: 'https://fresh-hub-hero-ah4byf8mw-virusvickees-projects.vercel.app/',
      featured: true,
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=center'
    },
    {
      title: 'Smart College Management System',
      description: 'Comprehensive academic management system with multi-role authentication, attendance tracking, grade management, timetable scheduling, and analytics dashboard.',
      longDescription: 'A comprehensive college management system that streamlines academic operations with dedicated modules for students and faculty. The system features real-time attendance tracking, automated grade calculations, interactive timetable scheduling, and powerful analytics dashboard. Built with scalable MERN architecture, it handles multiple user roles including students, faculty, and administrators. The platform includes automated notifications, report generation, and data visualization for better decision-making.',
      features: [
        'Multi-role authentication system (Student, Faculty, Admin)',
        'Real-time attendance tracking with QR code scanning',
        'Automated grade calculation and transcript generation',
        'Interactive timetable with conflict detection',
        'Analytics dashboard with performance insights',
        'Automated email notifications for important updates',
        'Document management for assignments and resources',
        'Mobile-responsive design for all devices',
        'Data export functionality (PDF, Excel)',
        'Secure API endpoints with JWT authentication'
      ],
      tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'JWT', 'Chart.js', 'Material-UI'],
      status: 'completed',
      statusText: 'Completed',
      github: 'https://github.com/virusvickee',
      live: 'https://principal-s-command-center.vercel.app/',
      featured: true,
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop&crop=center'
    },
    {
      title: 'Smart Habit Tracker with AI Coach',
      description: 'AI-powered habit tracking application with personalized coaching, behavior analysis, progress analytics, and wearable device integration for lifestyle monitoring.',
      longDescription: 'An intelligent habit tracking application that leverages artificial intelligence to provide personalized coaching recommendations and detailed progress analytics. The app uses machine learning algorithms to analyze user behavior patterns, suggest optimal habit schedules, and provide motivational insights. Features include streak tracking, habit difficulty adjustment, social challenges, and integration with wearable devices for comprehensive lifestyle monitoring.',
      features: [
        'AI-powered habit recommendations based on user behavior',
        'Personalized coaching with motivational insights',
        'Advanced progress tracking with streak analytics',
        'Smart scheduling with optimal timing suggestions',
        'Social challenges and community features',
        'Wearable device integration (Fitbit, Apple Watch)',
        'Mood and energy level correlation analysis',
        'Custom habit categories and difficulty levels',
        'Detailed reports with trend analysis',
        'Gamification with rewards and achievements',
        'Offline mode with data synchronization',
        'Dark/light theme with accessibility features'
      ],
      tech: ['React', 'Firebase', 'OpenAI API', 'Chart.js', 'PWA', 'Web Push API'],
      status: 'development',
      statusText: 'Under Development',
      github: 'https://github.com/virusvickee',
      live: '#',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop&crop=center'
    },
    {
      title: 'Smart Inventory & Sales Assistant',
      description: 'Intelligent inventory management system with real-time stock tracking, automated sales reporting, supplier management, and business analytics for optimization.',
      longDescription: 'A comprehensive inventory management solution that automates stock tracking, sales monitoring, and generates intelligent reports for business optimization. The system provides real-time inventory updates, automated alerts, and comprehensive analytics to help businesses make informed decisions.',
      features: [
        'Real-time inventory tracking with barcode scanning',
        'Automated sales reporting and analytics',
        'Low stock alerts and notifications',
        'Comprehensive supplier management system',
        'Advanced analytics and demand forecasting',
        'Multi-location inventory management',
        'Purchase order automation',
        'Integration with accounting systems',
        'Mobile app for warehouse operations',
        'Custom reporting and dashboard'
      ],
      tech: ['PHP', 'MySQL', 'JavaScript', 'Python', 'Chart.js', 'Bootstrap'],
      status: 'development',
      statusText: 'Under Development',
      github: 'https://github.com/virusvickee',
      live: '#',
      image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=400&fit=crop&crop=center'
    },
    {
      title: 'Smart Travel Planner with AI Itinerary',
      description: 'AI-powered travel planning platform with intelligent itinerary generation, interactive mapping, budget tracking, and personalized recommendations engine.',
      longDescription: 'An intelligent travel planning platform that creates personalized itineraries using AI, integrates with mapping services, and provides comprehensive travel recommendations. The application analyzes user preferences, budget constraints, and travel patterns to suggest optimal travel plans.',
      features: [
        'AI-generated personalized travel itineraries',
        'Interactive map integration with route optimization',
        'Comprehensive budget planning and tracking',
        'Local recommendations engine with reviews',
        'Real-time weather and travel alerts',
        'Collaborative trip planning for groups',
        'Booking integration for hotels and flights',
        'Offline access to itineraries and maps',
        'Travel document management',
        'Social sharing and travel community'
      ],
      tech: ['React', 'Express', 'MongoDB', 'Google Maps API', 'OpenAI API', 'Stripe'],
      status: 'completed',
      statusText: 'Completed',
      github: 'https://github.com/virusvickee',
      live: 'https://ai-travel-companion-eta.vercel.app/',
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop&crop=center'
    },
    {
      title: 'Personal Portfolio (React)',
      description: 'Modern, responsive portfolio website with premium design, smooth animations, dark theme, SEO optimization, and fast loading performance using React.',
      longDescription: 'A professional portfolio website showcasing projects and skills with modern design principles, smooth animations, and optimal performance. Built with React and Tailwind CSS, featuring glassmorphism effects, responsive design, and comprehensive project showcase.',
      features: [
        'Responsive design for all devices and screen sizes',
        'Smooth animations with Framer Motion library',
        'Premium dark theme with glassmorphism effects',
        'SEO optimized structure and meta tags',
        'Fast loading performance and optimization',
        'Interactive project showcase with modals',
        'Contact form with email integration',
        'Skills visualization with progress bars',
        'Smooth scrolling navigation',
        'Modern UI/UX design principles'
      ],
      tech: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite', 'Netlify'],
      status: 'completed',
      statusText: 'Completed',
      github: 'https://github.com/virusvickee/my-portfolio-website',
      live: '#',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop&crop=center'
    }
  ]

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return <CheckCircle size={16} className="text-green-400" />
      case 'development':
        return <Wrench size={16} className="text-yellow-400" />
      default:
        return <Clock size={16} className="text-blue-400" />
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500/10 border-green-500/20 text-green-400'
      case 'development':
        return 'bg-yellow-500/10 border-yellow-500/20 text-yellow-400'
      default:
        return 'bg-blue-500/10 border-blue-500/20 text-blue-400'
    }
  }

  return (
    <section id="projects" className="section-padding bg-gradient-to-b from-transparent to-indigo-950/10">
      <div className="container-premium">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="heading-xl mb-8">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-body max-w-3xl mx-auto leading-relaxed">
            A showcase of my recent work, featuring full-stack applications with modern technologies and AI integration.
          </p>
        </motion.div>

        <div className="overflow-x-auto pb-6">
          <div className="flex space-x-8 w-max animate-scroll hover:pause-animation">
            {[...projects, ...projects].map((project, index) => (
              <motion.div
                key={`${project.title}-${index}`}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="premium-card glass-morphism overflow-hidden hover-glow group w-80 h-96 flex-shrink-0 flex flex-col cursor-hover"
                data-cursor-text="Explore"
              >
              {/* Project Image */}
              <div className="h-32 relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Status Badge */}
                <div className={`absolute top-4 right-4 status-badge ${getStatusColor(project.status)} flex items-center space-x-2`}>
                  {getStatusIcon(project.status)}
                  <span>{project.statusText}</span>
                </div>
                
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-indigo-500 to-blue-500 text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide">
                    Featured
                  </div>
                )}
              </div>
              {/* Project Content */}
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-indigo-400 transition-colors duration-200">
                  {project.title}
                </h3>
                
                <p className="text-body text-sm leading-relaxed mb-3 flex-1 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span key={tech} className="tech-chip text-xs px-2 py-1">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex space-x-2 mt-auto">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors duration-200 text-xs"
                  >
                    <Eye size={14} />
                    <span>Details</span>
                  </button>
                  
                  <a 
                    href={project.live} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-xs px-3 py-1 flex items-center space-x-1"
                  >
                    <ExternalLink size={12} />
                    <span>Live</span>
                  </a>
                </div>
              </div>

            </motion.div>
          ))}
          </div>
        </div>

        {/* Project Details Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="premium-card max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="relative">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors"
                  >
                    <X size={20} className="text-white" />
                  </button>
                  
                  <div className={`absolute top-4 left-4 status-badge ${getStatusColor(selectedProject.status)} flex items-center space-x-2`}>
                    {getStatusIcon(selectedProject.status)}
                    <span>{selectedProject.statusText}</span>
                  </div>
                </div>

                {/* Modal Content */}
                <div className="p-8">
                  <h2 className="heading-lg text-white mb-6">{selectedProject.title}</h2>
                  
                  <p className="text-body text-lg leading-relaxed mb-8">
                    {selectedProject.longDescription}
                  </p>

                  {/* All Features */}
                  {selectedProject.features && (
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold text-white mb-4">Key Features</h3>
                      <div className="grid md:grid-cols-2 gap-3">
                        {selectedProject.features.map((feature, i) => (
                          <div key={i} className="flex items-start space-x-3">
                            <CheckCircle size={16} className="text-green-400 mt-1 flex-shrink-0" />
                            <span className="text-gray-300">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Tech Stack */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-white mb-4">Technologies Used</h3>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.tech.map((tech) => (
                        <span key={tech} className="tech-chip">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-4">
                    <a 
                      href={selectedProject.github} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary flex items-center space-x-2"
                    >
                      <Github size={20} />
                      <span>View Source Code</span>
                    </a>
                    
                    <a 
                      href={selectedProject.live} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary flex items-center space-x-2"
                    >
                      <ExternalLink size={20} />
                      <span>View Live Demo</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Projects
