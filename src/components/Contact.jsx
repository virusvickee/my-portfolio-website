import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Send, User, MessageSquare } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="section-padding">
      <div className="container-premium">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-xl mb-8">
            Let's Work <span className="gradient-text">Together</span>
          </h2>
          <p className="text-xl text-body max-w-3xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? I'm available for freelance projects and full-time opportunities.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.form
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="premium-card p-12"
          >
            {/* Name Field */}
            <div className="mb-8">
              <label className="block text-white font-medium mb-4 flex items-center">
                <User size={18} className="mr-2 text-indigo-400" />
                Name
              </label>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-4 bg-gray-800/50 border border-gray-600 rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 text-white placeholder-gray-400 transition-all duration-200"
                placeholder="Your full name"
              />
            </div>
            
            {/* Email Field */}
            <div className="mb-8">
              <label className="block text-white font-medium mb-4 flex items-center">
                <Mail size={18} className="mr-2 text-indigo-400" />
                Email
              </label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-4 bg-gray-800/50 border border-gray-600 rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 text-white placeholder-gray-400 transition-all duration-200"
                placeholder="your.email@example.com"
              />
            </div>
            
            {/* Message Field */}
            <div className="mb-10">
              <label className="block text-white font-medium mb-4 flex items-center">
                <MessageSquare size={18} className="mr-2 text-indigo-400" />
                Message
              </label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                className="w-full p-4 bg-gray-800/50 border border-gray-600 rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 text-white placeholder-gray-400 resize-none transition-all duration-200"
                placeholder="Tell me about your project or opportunity..."
              />
            </div>
            
            {/* Submit Button */}
            <button 
              type="submit" 
              className="w-full btn-primary flex items-center justify-center space-x-3 text-lg py-4"
            >
              <Send size={20} />
              <span>Send Message</span>
            </button>
          </motion.form>

          {/* Direct Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-body mb-4">Or reach out directly:</p>
            <a 
              href="mailto:vikasuniyalcsa@gmail.com"
              className="text-indigo-400 hover:text-indigo-300 font-medium text-lg transition-colors duration-200"
            >
              vikasuniyalcsa@gmail.com
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
