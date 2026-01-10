import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Star, Quote } from 'lucide-react'

const Testimonials = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Project Manager",
      company: "TechCorp",
      text: "Vikas delivered exceptional work on our web application. His attention to detail and technical expertise made the project a huge success.",
      rating: 5
    },
    {
      name: "Mike Chen",
      role: "CTO",
      company: "StartupXYZ",
      text: "Outstanding developer! Vikas built our entire platform from scratch with clean, maintainable code. Highly recommended.",
      rating: 5
    },
    {
      name: "Emily Davis",
      role: "Designer",
      company: "Creative Agency",
      text: "Working with Vikas was a pleasure. He perfectly translated our designs into a responsive, fast-loading website.",
      rating: 5
    }
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Client <span className="gradient-text">Testimonials</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            What clients say about working with me
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="glass dark:glass-dark p-6 rounded-2xl relative"
            >
              <Quote className="absolute top-4 right-4 text-blue-600/20 dark:text-blue-400/20" size={32} />
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6 italic">
                "{testimonial.text}"
              </p>
              
              <div>
                <h4 className="font-bold text-gray-800 dark:text-gray-200">{testimonial.name}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {testimonial.role} at {testimonial.company}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
