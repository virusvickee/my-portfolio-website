import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, CheckCircle, Clock, Wrench, X, Eye } from 'lucide-react'
import { Card3D } from './Card3D'
import ProjectFilters from './ProjectFilters'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)
  const [filteredProjects, setFilteredProjects] = useState(null)
  
  const projects = [
    {
      title: 'FreshMart - Modern Grocery eCommerce',
      description: 'Full-stack grocery eCommerce platform with secure payment integration, real-time inventory management, and responsive design for seamless shopping experience.',
      longDescription: 'FreshMart is a comprehensive grocery eCommerce platform built with MERN stack. Features include user authentication, product catalog with search and filtering, shopping cart functionality, secure checkout with Stripe integration, order tracking, and admin dashboard for inventory management.',
      features: [
        'JWT-based user authentication and authorization',
        'Advanced product search with category filtering',
        'Real-time shopping cart with price calculations',
        'Secure payment processing with Stripe API',
        'Order management and tracking system',
        'Admin dashboard for inventory control',
        'Responsive design for all devices',
        'Email notifications for order updates'
      ],
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Stripe', 'JWT', 'Tailwind CSS'],
      status: 'completed',
      statusText: 'In Development',
      github: 'https://github.com/virusvickee/freshmart-ecommerce',
      live: 'https://fresh-hub-hero-ah4byf8mw-virusvickees-projects.vercel.app/',
      featured: true,
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=center'
    },
    {
      title: 'Smart College Management System',
      description: 'Comprehensive academic management platform with multi-role authentication, automated attendance tracking, grade management, and analytics dashboard.',
      longDescription: 'A complete college management solution streamlining academic operations with dedicated portals for students, faculty, and administrators. Features real-time attendance with QR codes, automated grade calculations, timetable management, and comprehensive analytics.',
      features: [
        'Multi-role authentication (Student, Faculty, Admin)',
        'QR code-based attendance tracking system',
        'Automated grade calculation and GPA computation',
        'Interactive timetable with conflict detection',
        'Real-time analytics and performance insights',
        'Document management for assignments and resources',
        'Email notifications and announcements',
        'Mobile-responsive interface',
        'Data export functionality (PDF, Excel)',
        'Secure API endpoints with role-based access'
      ],
      tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Chart.js', 'Material-UI', 'JWT'],
      status: 'completed',
      statusText: 'Production Deployed',
      github: 'https://github.com/virusvickee/college-management',
      live: 'https://principal-s-command-center.vercel.app/',
      featured: true,
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop&crop=center'
    },
    {
      title: 'AI-Powered Habit Tracker',
      description: 'Intelligent habit tracking application with AI coaching, behavioral analysis, progress analytics, and wearable device integration for lifestyle optimization.',
      longDescription: 'Advanced habit tracking platform leveraging AI to provide personalized coaching and insights. Uses machine learning algorithms to analyze behavior patterns, suggest optimal schedules, and provide motivational recommendations.',
      features: [
        'AI-powered habit recommendations and coaching',
        'Behavioral pattern analysis with ML algorithms',
        'Smart scheduling with optimal timing suggestions',
        'Progress tracking with streak analytics',
        'Wearable device integration (Fitbit, Apple Watch)',
        'Social challenges and community features',
        'Mood and energy correlation analysis',
        'Gamification with rewards and achievements',
        'Offline mode with data synchronization',
        'Detailed reports with trend visualization'
      ],
      tech: ['React', 'Python', 'TensorFlow', 'Firebase', 'OpenAI API', 'Chart.js', 'PWA'],
      status: 'completed',
      statusText: 'Live Application',
      github: 'https://github.com/virusvickee/ai-habit-tracker',
      live: 'https://ai-habit-coach-nine.vercel.app/',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop&crop=center'
    },
    {
      title: 'Enterprise Inventory Management',
      description: 'Scalable inventory management system with real-time tracking, automated reporting, supplier management, and predictive analytics for business optimization.',
      longDescription: 'Enterprise-grade inventory management solution with advanced features for multi-location businesses. Includes barcode scanning, automated reordering, supplier management, and AI-powered demand forecasting.',
      features: [
        'Real-time inventory tracking with barcode scanning',
        'Automated purchase order generation',
        'Multi-location inventory synchronization',
        'Supplier management and vendor relations',
        'AI-powered demand forecasting',
        'Low stock alerts and notifications',
        'Comprehensive reporting and analytics',
        'Integration with accounting systems',
        'Mobile app for warehouse operations',
        'Custom dashboard with KPI metrics'
      ],
      tech: ['React', 'Node.js', 'PostgreSQL', 'Python', 'Docker', 'AWS', 'Redis'],
      status: 'development',
      statusText: 'In Development',
      github: 'https://github.com/virusvickee/inventory-management',
      live: '#',
      image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=400&fit=crop&crop=center'
    },
    {
      title: 'AI Travel Companion',
      description: 'Intelligent travel planning platform with AI-generated itineraries, budget optimization, local recommendations, and collaborative trip planning features.',
      longDescription: 'Smart travel planning application that creates personalized itineraries using AI. Integrates with mapping services, weather APIs, and local business data to provide comprehensive travel recommendations.',
      features: [
        'AI-generated personalized travel itineraries',
        'Interactive maps with route optimization',
        'Budget planning and expense tracking',
        'Local recommendations with reviews and ratings',
        'Weather integration and travel alerts',
        'Collaborative trip planning for groups',
        'Booking integration for hotels and flights',
        'Offline access to itineraries and maps',
        'Travel document management',
        'Social sharing and travel community'
      ],
      tech: ['React', 'Node.js', 'MongoDB', 'OpenAI API', 'Google Maps API', 'Stripe'],
      status: 'completed',
      statusText: 'Live Application',
      github: 'https://github.com/virusvickee/ai-travel-planner',
      live: 'https://ai-travel-companion-eta.vercel.app/',
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop&crop=center'
    },
    {
      title: 'Modern Portfolio Website',
      description: 'Premium portfolio website with 3D animations, glassmorphism design, dark theme, SEO optimization, and performance-focused architecture.',
      longDescription: 'Professional portfolio showcasing modern web development skills with advanced animations, responsive design, and optimal performance. Built with React and featuring glassmorphism effects, smooth scrolling, and comprehensive project showcase.',
      features: [
        'Responsive design for all screen sizes',
        '3D animations with Framer Motion',
        'Glassmorphism UI with premium effects',
        'SEO optimized with meta tags',
        'Performance optimized with lazy loading',
        'Interactive project showcase with modals',
        'Contact form with email integration',
        'Blog integration with search functionality',
        'Smooth scrolling navigation',
        'Modern CSS Grid and Flexbox layouts'
      ],
      tech: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite', 'Netlify', 'EmailJS'],
      status: 'completed',
      statusText: 'Currently Live',
      github: 'https://github.com/virusvickee/my-portfolio-website',
      live: window.location.origin,
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

        <ProjectFilters 
          projects={projects} 
          onFilteredProjects={(filtered) => setFilteredProjects(filtered)}
        />

        <div className="overflow-x-auto pb-6">
          {filteredProjects !== null && filteredProjects.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No projects match the selected filters.</p>
              <p className="text-gray-500 text-sm mt-2">Try adjusting your filter criteria.</p>
            </div>
          ) : (
            <div className="flex space-x-8 w-max animate-scroll hover:pause-animation">
              {(filteredProjects !== null ? [...filteredProjects, ...filteredProjects] : [...projects, ...projects]).map((project, index) => (
              <Card3D key={`${project.title}-${index}`} className="w-80 h-96 flex-shrink-0">
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="premium-card glass-morphism overflow-hidden hover-glow group w-full h-full flex flex-col cursor-hover"
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
              </Card3D>
              ))}
            </div>
          )}
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
