import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Download, ArrowRight } from 'lucide-react'
import { useState, useEffect } from 'react'

const Hero = () => {
  const [text, setText] = useState('')
  const fullText = "Full Stack Developer"
  
  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      setText(fullText.slice(0, i))
      i++
      if (i > fullText.length) {
        clearInterval(timer)
      }
    }, 100)
    return () => clearInterval(timer)
  }, [])

  const socialLinks = [
    { icon: Github, href: 'https://github.com/virusvickee', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:vikasuniyalcsa@gmail.com', label: 'Email' }
  ]

  return (
    <section className="min-h-screen flex items-center justify-center section-padding pt-32">
      <div className="container-custom">
        <div className="text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-indigo-400 font-semibold uppercase tracking-wider mb-6"
            >
              Welcome to my portfolio
            </motion.p>
            
            <h1 className="heading-xl text-white mb-8">
              Hi, I'm{' '}
              <span className="gradient-text">Vikas</span>
              <br />
              <span className="text-gray-300">— a </span>
              <span className="gradient-text">{text}</span>
              <span className="animate-pulse text-indigo-400">|</span>
            </h1>
            
            <p className="text-body max-w-3xl mx-auto mb-12">
              I build fast, reliable web applications using React, PHP, and MySQL. 
              Focused on clean code, maintainable solutions, and exceptional user experiences.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary flex items-center gap-3"
            >
              View Projects
              <ArrowRight size={20} />
            </motion.a>
            
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary flex items-center gap-3"
            >
              <Download size={20} />
              Download CV
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex justify-center space-x-8"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="p-4 glass-card hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 group"
                aria-label={social.label}
              >
                <social.icon size={24} className="text-gray-400 group-hover:text-indigo-400 transition-colors" />
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-20"
          >
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted">
              {['Clean UI', 'Maintainable Code', 'Performance Focused', 'Responsive Design'].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                  {item}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
