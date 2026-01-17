import React from 'react'
import { Github, Linkedin, Mail, Download, Eye } from 'lucide-react'
import { motion } from 'framer-motion'
import TypingAnimation from './TypingAnimation'

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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mb-8"
          >
            {/* Enhanced glowing background for headline */}
            <div className="absolute -inset-8 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-indigo-600/20 rounded-3xl blur-3xl animate-pulse" />
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-indigo-500/10 rounded-2xl blur-xl" />
            
            <h1 className="heading-hero relative floating-animation">
              <span className="inline-block">Hi, I am </span>
              <span className="relative inline-block glow-effect">
                <span className="gradient-text bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent font-extrabold">
                  Vikas
                </span>
                {/* Enhanced animated underline */}
                <motion.div 
                  className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full pulse-glow"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1, delay: 1 }}
                />
              </span>
              <span className="inline-block"> — a </span>
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent font-bold">
                  <TypingAnimation 
                    text="Web Developer" 
                    delay={1500} 
                    speed={100}
                  />
                </span>
              </span>
            </h1>
          </motion.div>
          
          {/* Subheadline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative mb-12"
          >
            <div className="glass p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
              <p className="text-xl md:text-2xl text-body leading-relaxed">
                I'm a{' '}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent font-semibold">
                    Full Stack Developer
                  </span>
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400 opacity-50" />
                </span>
                {' '}building fast, reliable web applications using{' '}
                <span className="inline-flex items-center px-2 py-1 bg-blue-500/10 border border-blue-500/20 rounded-lg text-blue-400 font-semibold mx-1">
                  React
                </span>,{' '}
                <span className="inline-flex items-center px-2 py-1 bg-purple-500/10 border border-purple-500/20 rounded-lg text-purple-400 font-semibold mx-1">
                  PHP
                </span>, and{' '}
                <span className="inline-flex items-center px-2 py-1 bg-orange-500/10 border border-orange-500/20 rounded-lg text-orange-400 font-semibold mx-1">
                  MySQL
                </span>.
                <br className="hidden md:block" />
                <span className="block mt-2 text-gray-300">
                  I focus on clean UI, maintainable code, and practical solutions.
                </span>
              </p>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 mb-16"
          >
            <motion.a 
              href="/Vikas_Uniyal_Resume.pdf"
              download="Vikas_Uniyal_Resume.pdf"
              className="relative group overflow-hidden cursor-hover"
              data-cursor-text="Download"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
              <div className="relative flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white font-semibold glow-effect">
                <Download size={18} />
                <span>Download Resume</span>
              </div>
            </motion.a>
            
            <motion.button 
              onClick={() => scrollToSection('projects')}
              className="relative group cursor-hover"
              data-cursor-text="View Work"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl group-hover:border-white/30 transition-all duration-300" />
              <div className="relative flex items-center space-x-2 px-8 py-4 text-white font-semibold">
                <Eye size={18} />
                <span>View Projects</span>
              </div>
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex items-center space-x-6"
          >
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-muted text-sm uppercase tracking-wider bg-gradient-to-r from-gray-400 to-gray-300 bg-clip-text text-transparent">
                Connect with me
              </span>
            </div>
            <div className="flex space-x-4">
              <motion.a 
                href="https://github.com/virusvickee" 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative group"
                whileHover={{ scale: 1.1, y: -2 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-gray-600/20 to-gray-500/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative p-3 glass rounded-xl border border-white/10 group-hover:border-white/20 transition-all duration-300">
                  <Github size={20} className="group-hover:text-indigo-400 transition-colors duration-200" />
                </div>
              </motion.a>
              <motion.a 
                href="https://linkedin.com/in/vikas-uniyal" 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative group"
                whileHover={{ scale: 1.1, y: -2 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-blue-500/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative p-3 glass rounded-xl border border-white/10 group-hover:border-white/20 transition-all duration-300">
                  <Linkedin size={20} className="group-hover:text-blue-400 transition-colors duration-200" />
                </div>
              </motion.a>
              <motion.a 
                href="mailto:vikasuniyalcsa@gmail.com"
                className="relative group"
                whileHover={{ scale: 1.1, y: -2 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-purple-500/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative p-3 glass rounded-xl border border-white/10 group-hover:border-white/20 transition-all duration-300">
                  <Mail size={20} className="group-hover:text-purple-400 transition-colors duration-200" />
                </div>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
