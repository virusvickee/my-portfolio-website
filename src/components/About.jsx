import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Quote, Code2, Lightbulb, Target } from 'lucide-react'

const About = () => {
  const [displayText, setDisplayText] = useState('')
  const fullText = "Hi, I'm Vikas – Building Smart Web Experiences"
  
  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 50)
    
    return () => clearInterval(timer)
  }, [])

  const renderColoredText = (text) => {
    return text.replace("Vikas", '<span class="text-yellow-400 font-bold">Vikas</span>')
  }
  return (
    <section id="about" className="section-padding bg-gradient-to-b from-transparent to-indigo-950/10">
      <div className="container-premium">
        <div className="max-w-4xl mx-auto">
          
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading-xl mb-12">
              <span 
                className="bg-gradient-to-r from-indigo-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent"
                dangerouslySetInnerHTML={{ __html: renderColoredText(displayText) }}
              />
              <span className="animate-ping text-indigo-400">|</span>
            </h2>
            
            <div className="space-y-8 text-lg text-body leading-relaxed max-w-3xl mx-auto">
              <p>
                I'm a passionate Full Stack Developer with hands-on experience in{' '}
                <span className="text-indigo-400 font-semibold">React</span>,{' '}
                <span className="text-blue-400 font-semibold">PHP</span>,{' '}
                <span className="text-purple-400 font-semibold">MySQL</span>, and modern web technologies.
                I specialize in creating scalable web applications that combine beautiful user interfaces with robust backend systems.
              </p>
              
              <p>
                With expertise in <span className="text-indigo-400 font-semibold">JavaScript</span>, <span className="text-blue-400 font-semibold">Node.js</span>, 
                and <span className="text-purple-400 font-semibold">cloud technologies</span>, I build end-to-end solutions that solve real-world problems. 
                My approach focuses on clean code, optimal performance, and exceptional user experiences.
              </p>

              <p>
                I'm passionate about staying current with emerging technologies like <span className="text-indigo-400 font-semibold">AI integration</span>, 
                <span className="text-blue-400 font-semibold"> serverless architecture</span>, and <span className="text-purple-400 font-semibold">modern DevOps practices</span>. 
                Whether it's building responsive frontends or designing efficient APIs, I deliver solutions that exceed expectations.
              </p>
            </div>
          </motion.div>

          {/* Quote Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="premium-card p-12 text-center"
          >
            <Quote className="text-indigo-400 mx-auto mb-6" size={48} />
            <blockquote className="text-2xl text-white font-medium leading-relaxed">
              "I believe great software is built through continuous learning, attention to detail, and a genuine passion for solving problems that matter."
            </blockquote>
          </motion.div>

          {/* Quick Overview Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 mt-16"
          >
            <div className="premium-card p-8 text-center">
              <Code2 className="text-indigo-400 mx-auto mb-4" size={32} />
              <h3 className="heading-md text-white mb-3">Clean Code</h3>
              <p className="text-body">Writing maintainable, scalable code that stands the test of time.</p>
            </div>
            
            <div className="premium-card p-8 text-center">
              <Lightbulb className="text-blue-400 mx-auto mb-4" size={32} />
              <h3 className="heading-md text-white mb-3">Innovation</h3>
              <p className="text-body">Exploring cutting-edge technologies to deliver modern solutions.</p>
            </div>
            
            <div className="premium-card p-8 text-center">
              <Target className="text-purple-400 mx-auto mb-4" size={32} />
              <h3 className="heading-md text-white mb-3">Results</h3>
              <p className="text-body">Focused on delivering practical solutions that drive real value.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
