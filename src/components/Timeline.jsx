import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Briefcase, GraduationCap, Calendar, Code2 } from 'lucide-react'
import { Card3D } from './Card3D'

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
      description: 'Delivering end-to-end web solutions for global clients, ranging from high-performance e-commerce platforms to AI-driven SaaS applications.',
      achievements: [
        'Architected a grocery e-commerce platform handling 10k+ daily requests',
        'Integrated OpenAI APIs to build intelligent customer support chatbots',
        'Optimized legacy PHP applications, improving load times by 40%',
        'Deployed scalable applications on AWS EC2 and Vercel'
      ],
      skills: ['React', 'PHP', 'MySQL', 'AWS', 'AI APIs'],
      gradient: 'from-blue-500/20 to-cyan-500/20'
    },
    {
      type: 'work',
      icon: Briefcase,
      year: '2023 - 2024',
      title: 'Web Developer',
      company: 'Tech Startup',
      description: 'Core member of the engineering team, contributing to the development of a rapid-growth SaaS product using modern agile methodologies.',
      achievements: [
        'Developed reusable UI component library using Tailwind CSS',
        'Implemented real-time collaboration features using WebSockets',
        'Reduced bug reports by 30% through rigorous unit testing',
        'Collaborated with designers to implement pixel-perfect responsive layouts'
      ],
      skills: ['JavaScript', 'Node.js', 'MongoDB', 'Git'],
      gradient: 'from-purple-500/20 to-pink-500/20'
    },
    {
      type: 'education',
      icon: GraduationCap,
      year: '2021 - 2023',
      title: 'Computer Software Application',
      company: 'University',
      description: 'Specialized in advanced software engineering principles, gaining a strong foundation in data structures, algorithms, and system design.',
      achievements: [
        'Graduated with distinction (Top 5% of class)',
        'Led the university coding club and organized 2 hackathons',
        'Built a "Student Management System" as a final year capstone project',
        'Published a research paper on "AI in Modern Web Development"'
      ],
      skills: ['Java', 'Python', 'Database Design', 'Software Engineering'],
      gradient: 'from-amber-500/20 to-orange-500/20'
    },
    {
      type: 'work',
      icon: Briefcase,
      year: '2022',
      title: 'Junior Developer',
      company: 'Local Agency',
      description: 'Kickstarted professional career by building and maintaining client websites, learning the importance of clean code and client communication.',
      achievements: [
        'Built and deployed 15+ responsive websites for local businesses',
        'Maintained and updated legacy WordPress sites',
        'Optimized images and assets for faster page load speeds',
        'Learned version control best practices with Git'
      ],
      skills: ['HTML', 'CSS', 'JavaScript', 'WordPress'],
      gradient: 'from-green-500/20 to-emerald-500/20'
    },
    {
      type: 'milestone',
      icon: Code2,
      year: '2020',
      title: 'Hello World',
      company: 'Personal Milestone',
      description: 'The spark that started it all. Wrote my first line of HTML code and realized the infinite possibilities of creating for the web.',
      achievements: [
        'Designed first personal website using raw HTML/CSS',
        'Completed "CS50: Introduction to Computer Science"',
        'Built a simple calculator app to understand JavaScript logic',
        'Decided to pursue a career in software development'
      ],
      skills: ['Curiosity', 'Logic', 'Problem Solving'],
      gradient: 'from-white/10 to-gray-500/10'
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
          {/* Timeline Line */}
          <motion.div
            initial={{ height: 0 }}
            animate={isInView ? { height: '100%' } : { height: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-8 top-0 w-0.5 bg-gradient-to-b from-indigo-600 via-purple-600 to-blue-600 hidden md:block"
          />

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
                <div className="flex-1">
                  <Card3D className="w-full h-full">
                    <div className="glass-card p-8 hover:shadow-2xl hover:shadow-indigo-500/20 transition-all duration-300 relative overflow-hidden group h-full">
                      {/* Holographic Background */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${exp.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`} />

                      {/* Grid Pattern Overlay */}
                      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />

                      <div className="relative z-10">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                          <div>
                            <h3 className="heading-md text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-indigo-200 transition-all">
                              {exp.title}
                            </h3>
                            <p className="text-indigo-400 font-semibold">{exp.company}</p>
                          </div>
                          <div className="flex items-center gap-2 text-gray-400 mt-2 md:mt-0">
                            <Calendar size={16} />
                            <span className="text-sm font-medium">{exp.year}</span>
                          </div>
                        </div>

                        <p className="text-body mb-6 group-hover:text-gray-200 transition-colors">{exp.description}</p>

                        {/* Achievements List */}
                        {exp.achievements && (
                          <ul className="mb-6 space-y-2">
                            {exp.achievements.map((achievement, i) => (
                              <li key={i} className="flex items-start text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                                <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-indigo-500 rounded-full flex-shrink-0 group-hover:bg-white transition-colors" />
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        )}

                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-3 py-1 bg-white/5 group-hover:bg-white/10 text-indigo-300 group-hover:text-white rounded-lg text-sm font-medium border border-white/10 transition-all"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card3D>
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
