import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Quote, Code, Zap, Users } from 'lucide-react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const highlights = [
    { icon: Code, title: 'Clean Code', desc: 'Maintainable & scalable solutions' },
    { icon: Zap, title: 'Performance', desc: 'Optimized for speed & efficiency' },
    { icon: Users, title: 'Collaboration', desc: 'Team player & great communicator' }
  ]

  return (
    <section id="about" className="section-padding bg-gray-900/50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="heading-lg text-white mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            Building smart web experiences with modern technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="heading-md text-white mb-6">
                Hi, I'm Vikas – Building Smart Web Experiences
              </h3>
              <div className="space-y-6 text-body">
                <p>
                  I'm a passionate Full-Stack Developer with hands-on experience in React, PHP, MySQL, and modern web technologies. I enjoy solving complex problems and turning ideas into functional, user-friendly applications.
                </p>
                <p>
                  I continuously explore new tools and technologies to stay ahead and deliver high-quality work. I enjoy collaboration, learning from challenges, and converting ideas into real-world solutions.
                </p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="glass-card p-8 relative"
            >
              <Quote className="absolute top-6 right-6 text-indigo-500/20" size={32} />
              <p className="text-lg text-gray-300 italic mb-4">
                "Check out my projects below to see how I turn ideas into reality."
              </p>
              <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full"></div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8"
          >
            <div className="glass-card p-8">
              <h4 className="heading-md text-white mb-8">Core Technologies</h4>
              <div className="space-y-6">
                <div>
                  <h5 className="font-semibold text-gray-200 mb-3">Frontend</h5>
                  <p className="text-muted">React · JavaScript · Tailwind CSS · Framer Motion</p>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-200 mb-3">Backend</h5>
                  <p className="text-muted">PHP · Node.js · Express · MySQL · MongoDB</p>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-200 mb-3">Tools & DevOps</h5>
                  <p className="text-muted">Git · Docker · AWS · Vite · Bootstrap</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="glass-card p-6 flex items-center gap-4 hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300"
                >
                  <div className="p-3 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-xl">
                    <item.icon size={24} className="text-white" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-white mb-1">{item.title}</h5>
                    <p className="text-sm text-muted">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
