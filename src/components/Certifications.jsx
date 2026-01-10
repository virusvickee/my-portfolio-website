import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Award, ExternalLink, Calendar, CheckCircle } from 'lucide-react'

const Certifications = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const certifications = [
    {
      name: 'AWS Certified Developer',
      issuer: 'Amazon Web Services',
      year: '2024',
      status: 'Verified',
      description: 'Associate level certification for developing applications on AWS platform',
      skills: ['AWS Lambda', 'DynamoDB', 'S3', 'API Gateway'],
      credentialUrl: '#'
    },
    {
      name: 'React Professional Certificate',
      issuer: 'Meta',
      year: '2023',
      status: 'Verified',
      description: 'Advanced React development including hooks, context, and performance optimization',
      skills: ['React Hooks', 'Context API', 'Performance', 'Testing'],
      credentialUrl: '#'
    },
    {
      name: 'Full Stack Web Development',
      issuer: 'freeCodeCamp',
      year: '2023',
      status: 'Verified',
      description: 'Comprehensive full-stack development covering frontend and backend technologies',
      skills: ['HTML/CSS', 'JavaScript', 'Node.js', 'MongoDB'],
      credentialUrl: '#'
    },
    {
      name: 'JavaScript Algorithms & Data Structures',
      issuer: 'freeCodeCamp',
      year: '2022',
      status: 'Verified',
      description: 'Advanced JavaScript programming and computer science fundamentals',
      skills: ['Algorithms', 'Data Structures', 'ES6+', 'Functional Programming'],
      credentialUrl: '#'
    }
  ]

  return (
    <section className="section-padding bg-gray-900/50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="heading-lg text-white mb-6">
            Certifications & <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            Professional certifications and technical validations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="glass-card p-8 hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-xl group-hover:scale-110 transition-transform">
                    <Award size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="heading-md text-white mb-1">{cert.name}</h3>
                    <p className="text-indigo-400 font-semibold">{cert.issuer}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-green-400">
                  <CheckCircle size={16} />
                  <span className="text-sm font-medium">{cert.status}</span>
                </div>
              </div>

              <p className="text-body mb-6">{cert.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {cert.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-indigo-500/10 text-indigo-300 rounded-lg text-sm font-medium border border-indigo-500/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-gray-400">
                  <Calendar size={16} />
                  <span className="text-sm font-medium">{cert.year}</span>
                </div>
                <motion.a
                  href={cert.credentialUrl}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-medium text-sm transition-colors"
                >
                  View Credential
                  <ExternalLink size={16} />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications
