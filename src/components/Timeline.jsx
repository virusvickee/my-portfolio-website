import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Briefcase, GraduationCap, Calendar } from 'lucide-react'

const Timeline = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const experiences = [
    {
      type: 'work',
      icon: Briefcase,
      year: '2024 - Present',
      title: 'Full Stack Developer',
      company: 'Freelance',
      description: 'Building modern web applications for clients using React, PHP, and cloud technologies. Specialized in AI integration and performance optimization.',
      skills: ['React', 'PHP', 'MySQL', 'AWS', 'AI APIs']
    },
    {
      type: 'work',
      icon: Briefcase,
      year: '2023 - 2024',
      title: 'Web Developer',
      company: 'Tech Startup',
      description: 'Developed responsive web applications and collaborated with cross-functional teams to deliver high-quality software solutions.',
      skills: ['JavaScript', 'Node.js', 'MongoDB', 'Git']
    },
    {
      type: 'education',
      icon: GraduationCap,
      year: '2021 - 2023',
      title: 'Computer Science',
      company: 'University',
      description: 'Focused on software engineering, data structures, algorithms, and modern web development technologies.',
      skills: ['Java', 'Python', 'Database Design', 'Software Engineering']
    },
    {
      type: 'work',
      icon: Briefcase,
      year: '2022',
      title: 'Junior Developer',
      company: 'Local Agency',
      description: 'Started career building websites and learning industry best practices. Gained experience in client communication and project management.',
      skills: ['HTML', 'CSS', 'JavaScript', 'WordPress']
    }
  ]

  return (
    <section id="timeline" className="section-padding">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="heading-lg text-white mb-6">
            Experience & <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            My professional journey and key milestones in web development
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-600 to-blue-600 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative flex items-start gap-8"
              >
                {/* Timeline Dot */}
                <div className="hidden md:flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-full shadow-lg shadow-indigo-500/25 flex-shrink-0">
                  <exp.icon size={24} className="text-white" />
                </div>

                {/* Content Card */}
                <div className="flex-1 glass-card p-8 hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="heading-md text-white mb-2">{exp.title}</h3>
                      <p className="text-indigo-400 font-semibold">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 mt-2 md:mt-0">
                      <Calendar size={16} />
                      <span className="text-sm font-medium">{exp.year}</span>
                    </div>
                  </div>

                  <p className="text-body mb-6">{exp.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-indigo-500/10 text-indigo-300 rounded-lg text-sm font-medium border border-indigo-500/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Timeline
