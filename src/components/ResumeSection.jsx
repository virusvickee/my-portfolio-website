import React from 'react'
import { motion } from 'framer-motion'
import { Download, Eye } from 'lucide-react'

const ResumeSection = () => {
  return (
    <section className="section-padding bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-md text-white mb-6">Ready to Work Together?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Download my resume or view my work samples to learn more about my experience
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2">
              <Download size={20} />
              Download Resume
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center gap-2">
              <Eye size={20} />
              View Portfolio
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ResumeSection
