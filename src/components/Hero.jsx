import React from 'react'
import { Github, Linkedin, Mail, Download, Eye } from 'lucide-react'
import { motion } from 'framer-motion'

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-transparent to-blue-900/20" />
      
      <div className="container-premium relative z-10">
        <div className="max-w-4xl">
          {/* Main Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="heading-hero mb-8"
          >
            Hi, I am <span className="gradient-text">Vikas</span> — a Web Developer
          </motion.h1>
          
          {/* Subheadline */}
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-body mb-12 max-w-3xl leading-relaxed"
          >
            I'm a Full Stack Developer building fast, reliable web applications using{' '}
            <span className="text-indigo-400 font-semibold">React</span>,{' '}
            <span className="text-blue-400 font-semibold">PHP</span>, and{' '}
            <span className="text-purple-400 font-semibold">MySQL</span>.
            <br />
            I focus on clean UI, maintainable code, and practical solutions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 mb-16"
          >
            <button className="btn-primary flex items-center space-x-2 group">
              <Download size={18} />
              <span>View CV</span>
            </button>
            
            <button 
              onClick={() => scrollToSection('projects')}
              className="btn-secondary flex items-center space-x-2"
            >
              <Eye size={18} />
              <span>View Projects</span>
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex items-center space-x-6"
          >
            <span className="text-muted text-sm uppercase tracking-wider">Connect with me</span>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/virusvickee" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 glass rounded-xl hover-glow group"
              >
                <Github size={20} className="group-hover:text-indigo-400 transition-colors duration-200" />
              </a>
              <a 
                href="https://linkedin.com/in/vikas-uniyal" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 glass rounded-xl hover-glow group"
              >
                <Linkedin size={20} className="group-hover:text-blue-400 transition-colors duration-200" />
              </a>
              <a 
                href="mailto:vikasuniyalcsa@gmail.com"
                className="p-3 glass rounded-xl hover-glow group"
              >
                <Mail size={20} className="group-hover:text-purple-400 transition-colors duration-200" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
