import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Code, Users, Award, Zap } from 'lucide-react'

const StatsCounter = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const stats = [
    { icon: Code, number: 15, label: 'Projects Completed', suffix: '+' },
    { icon: Users, number: 8, label: 'Happy Clients', suffix: '+' },
    { icon: Award, number: 3, label: 'Years Experience', suffix: '+' },
    { icon: Zap, number: 95, label: 'Success Rate', suffix: '%' }
  ]

  const Counter = ({ target, suffix = '' }) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
      if (isInView) {
        let start = 0
        const end = target
        const duration = 2000
        const increment = end / (duration / 16)

        const timer = setInterval(() => {
          start += increment
          if (start >= end) {
            setCount(end)
            clearInterval(timer)
          } else {
            setCount(Math.floor(start))
          }
        }, 16)

        return () => clearInterval(timer)
      }
    }, [isInView, target])

    return (
      <span className="heading-lg gradient-text">
        {count}{suffix}
      </span>
    )
  }

  return (
    <section className="section-padding bg-gray-900/30">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg text-white mb-6">
            Achievements & <span className="gradient-text">Impact</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="glass-card p-8 text-center hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300"
            >
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-xl">
                  <stat.icon size={32} className="text-white" />
                </div>
              </div>
              <Counter target={stat.number} suffix={stat.suffix} />
              <p className="text-gray-300 font-medium mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsCounter
