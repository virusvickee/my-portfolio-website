import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Send } from 'lucide-react'

const Newsletter = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = 'Newsletter Subscription'
    const body = `Please add this email to your newsletter: ${email}`
    window.location.href = `mailto:vikasuniyalcsa@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setEmail('')
  }

  return (
    <section className="section-padding bg-gradient-to-br from-indigo-900/20 to-purple-900/20">
      <div className="container-premium">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="premium-card p-12">
            <Mail size={48} className="text-indigo-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay <span className="gradient-text">Updated</span>
            </h2>
            <p className="text-body mb-8">
              Get notified about new projects, tech insights, and opportunities.
            </p>
            
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 p-4 bg-gray-800/50 border border-gray-600 rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 text-white placeholder-gray-400"
              />
              <button
                type="submit"
                className="btn-primary flex items-center justify-center space-x-2 px-8 py-4"
              >
                <Send size={18} />
                <span>Subscribe</span>
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Newsletter
