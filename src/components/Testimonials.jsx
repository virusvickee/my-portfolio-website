import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useEffect } from 'react'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'

const Testimonials = () => {
  const ref = useRef(null)
  const scrollRef = useRef(null)
  const isInView = useInView(ref, { once: true })

  const testimonials = [
    {
      name: "Alex Thompson",
      role: "Project Manager",
      company: "Microsoft",
      text: "Vikas delivered exceptional work on our web application. His attention to detail and technical expertise made the project a huge success.",
      rating: 5,
      avatar: "AT"
    },
    {
      name: "Priya Sharma",
      role: "CTO",
      company: "Flipkart",
      text: "Outstanding developer! Vikas built our entire platform from scratch with clean, maintainable code. Highly recommended.",
      rating: 5,
      avatar: "PS"
    },
    {
      name: "John Martinez",
      role: "Designer",
      company: "Adobe",
      text: "Working with Vikas was a pleasure. He perfectly translated our designs into a responsive, fast-loading website.",
      rating: 5,
      avatar: "JM"
    },
    {
      name: "Rachel Green",
      role: "Founder",
      company: "TechStart Inc",
      text: "Incredible problem-solving skills and delivery speed. Vikas transformed our complex requirements into an elegant solution.",
      rating: 5,
      avatar: "RG"
    },
    {
      name: "David Kim",
      role: "Marketing Director",
      company: "Shopify",
      text: "The website Vikas built increased our conversion rate by 40%. His focus on performance and UX is outstanding.",
      rating: 5,
      avatar: "DK"
    },
    {
      name: "Maria Garcia",
      role: "Product Owner",
      company: "Netflix",
      text: "Professional, reliable, and technically excellent. Vikas delivered ahead of schedule with zero bugs.",
      rating: 5,
      avatar: "MG"
    }
  ]

  // Continuous auto-scroll functionality
  useEffect(() => {
    const container = scrollRef.current
    if (!container) return

    const autoScroll = () => {
      const maxScroll = container.scrollWidth - container.clientWidth
      const currentScroll = container.scrollLeft
      
      if (currentScroll >= maxScroll) {
        container.scrollTo({ left: 0, behavior: 'auto' })
        setTimeout(() => {
          container.scrollBy({ left: 1, behavior: 'smooth' })
        }, 50)
      } else {
        container.scrollBy({ left: 1, behavior: 'auto' })
      }
    }

    const interval = setInterval(autoScroll, 20)
    return () => clearInterval(interval)
  }, [])

  const scroll = (direction) => {
    const container = scrollRef.current
    const scrollAmount = 320
    if (container) {
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section className="section-padding bg-gradient-to-br from-gray-900/50 to-gray-800/50">
      <div className="container-premium">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="heading-xl mb-8">
            Client <span className="gradient-text">Testimonials</span>
          </h2>
          <p className="text-xl text-body max-w-3xl mx-auto leading-relaxed">
            What clients say about working with me
          </p>
        </motion.div>

        <div className="relative">
          {/* Scroll buttons */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-200 -ml-6"
          >
            <ChevronLeft size={20} className="text-white" />
          </button>
          
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-200 -mr-6"
          >
            <ChevronRight size={20} className="text-white" />
          </button>

          {/* Scrollable container */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="flex-shrink-0 w-80 premium-card p-8 relative"
              >
                <Quote className="absolute top-6 right-6 text-indigo-400/20" size={32} />
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-semibold text-sm">{testimonial.avatar}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-lg">{testimonial.name}</h4>
                    <p className="text-gray-400">
                      {testimonial.role} at {testimonial.company}
                    </p>
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

export default Testimonials
