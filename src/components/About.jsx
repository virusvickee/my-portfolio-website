import React from 'react'
import { motion } from 'framer-motion'
import { Quote, Code2, Lightbulb, Target } from 'lucide-react'

const About = () => {
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
              Hi, I'm <span className="gradient-text">Vikas</span> – Building Smart Web Experiences
            </h2>
            
            <div className="space-y-8 text-lg text-body leading-relaxed max-w-3xl mx-auto">
              <p>
                I'm a passionate Full Stack Developer with hands-on experience in{' '}
                <span className="text-indigo-400 font-semibold">React</span>,{' '}
                <span className="text-blue-400 font-semibold">PHP</span>,{' '}
                <span className="text-purple-400 font-semibold">MySQL</span>, and modern web technologies.
                I enjoy solving complex problems and turning ideas into functional, user-friendly applications.
              </p>
              
              <p>
                I constantly explore new tools and technologies to stay ahead and deliver high-quality work.
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
              "Check out my projects below to see how I turn ideas into reality."
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
            <div className="premium-card p-8 text-center hover-glow">
              <Code2 className="text-indigo-400 mx-auto mb-4" size={32} />
              <h3 className="heading-md text-white mb-3">Clean Code</h3>
              <p className="text-body">Writing maintainable, scalable code that stands the test of time.</p>
            </div>
            
            <div className="premium-card p-8 text-center hover-glow">
              <Lightbulb className="text-blue-400 mx-auto mb-4" size={32} />
              <h3 className="heading-md text-white mb-3">Innovation</h3>
              <p className="text-body">Exploring cutting-edge technologies to deliver modern solutions.</p>
            </div>
            
            <div className="premium-card p-8 text-center hover-glow">
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
