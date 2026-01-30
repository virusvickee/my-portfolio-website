import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Quote, Star, MapPin } from 'lucide-react'
import TestimonialGlobe from './TestimonialGlobe'

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Product Manager",
      company: "TechCorp",
      location: "San Francisco, USA",
      lat: 37.7749,
      lng: -122.4194,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      text: "Vikas delivered an exceptional web application that exceeded our expectations. His attention to detail and technical expertise are outstanding.",
      rating: 5,
      project: "E-commerce Platform"
    },
    {
      name: "Michael Chen",
      role: "CTO",
      company: "StartupXYZ",
      location: "Singapore",
      lat: 1.3521,
      lng: 103.8198,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      text: "Working with Vikas was a game-changer for our startup. He built a scalable solution that handles our growing user base perfectly.",
      rating: 5,
      project: "SaaS Dashboard"
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director",
      company: "Creative Agency",
      location: "London, UK",
      lat: 51.5074,
      lng: -0.1278,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      text: "The portfolio website Vikas created for us is stunning and performs flawlessly. Our client inquiries increased by 40%!",
      rating: 5,
      project: "Portfolio Website"
    },
    {
      name: "David Park",
      role: "Founder",
      company: "InnovateLab",
      location: "Seoul, South Korea",
      lat: 37.5665,
      lng: 126.9780,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      text: "Vikas combines technical skill with creative problem-solving. He delivered our project on time and within budget.",
      rating: 5,
      project: "Custom CRM"
    },
    {
      name: "James Wilson",
      role: "CEO",
      company: "FinTech Global",
      location: "Sydney, Australia",
      lat: -33.8688,
      lng: 151.2093,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      text: "Incredible attention to security and performance. The financial dashboard Vikas built for us is world-class.",
      rating: 5,
      project: "Banking App"
    },
    {
      name: "Anna Kowalski",
      role: "Creative Lead",
      company: "Design Studio",
      location: "Berlin, Germany",
      lat: 52.5200,
      lng: 13.4050,
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
      text: "Vikas has a rare eye for design implementation. He translated our Figma designs into code with pixel-perfect precision.",
      rating: 5,
      project: "Agency Portfolio"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="testimonials" className="section-padding overflow-hidden">
      <div className="container-premium">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="heading-xl mb-8">
            Global <span className="gradient-text">Testimonials</span>
          </h2>
          <p className="text-xl text-body max-w-3xl mx-auto leading-relaxed">
            Trusted by clients worldwide
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Testimonial Card */}
          <div className="relative z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.5 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 backdrop-blur-md shadow-2xl relative"
              >
                {/* Decorative Quote Mark */}
                <div className="absolute -top-6 -left-6 bg-gradient-to-br from-indigo-600 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg transform -rotate-6">
                  <Quote className="text-white" size={32} />
                </div>

                <div className="mb-8 mt-4">
                  <div className="flex space-x-1 mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 fill-current" size={20} />
                    ))}
                  </div>
                  <p className="text-xl md:text-2xl text-white leading-relaxed font-light italic">
                    "{testimonials[currentIndex].text}"
                  </p>
                </div>

                <div className="flex items-center space-x-4 border-t border-white/10 pt-6">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-indigo-500/50"
                  />
                  <div>
                    <h4 className="text-white font-bold text-lg">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-indigo-400 font-medium text-sm mb-1">
                      {testimonials[currentIndex].role} @ {testimonials[currentIndex].company}
                    </p>
                    <div className="flex items-center gap-1 text-gray-500 text-xs uppercase tracking-wider">
                      <MapPin size={12} />
                      <span>{testimonials[currentIndex].location}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Dots */}
            <div className="flex space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${index === currentIndex ? 'w-12 bg-indigo-500' : 'w-4 bg-white/20 hover:bg-white/40'
                    }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right: Interactive Globe */}
          <div className="h-[500px] w-full relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500/5 to-transparent blur-3xl -z-10" />
            <TestimonialGlobe
              locations={testimonials}
              activeIndex={currentIndex}
              onLocationSelect={setCurrentIndex}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsCarousel
