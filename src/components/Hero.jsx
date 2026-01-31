import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Download, ExternalLink, Code2, Database, Sparkles, Rocket } from 'lucide-react'
import TypingAnimation from './TypingAnimation'
import DeveloperActivity from './DeveloperActivity'


const BentoBox = ({ children, className = "", delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className={`bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:border-white/20 transition-all duration-300 hover:bg-white/[0.07] group ${className}`}
  >
    {children}
  </motion.div>
)

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-padding relative overflow-hidden pt-32">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-transparent to-blue-900/20 pointer-events-none" />
      <div className="absolute top-1/4 -left-64 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="container-premium relative z-10 w-full">
        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-4 lg:gap-6 auto-rows-[minmax(180px,auto)]">

          {/* 1. Intro Card (Large) */}
          <BentoBox className="md:col-span-6 lg:col-span-8 md:row-span-2 flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Code2 size={120} />
            </div>
            <div>
              <div className="flex gap-3 mb-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium"
                >
                  <span className="relative flex h-2 w-2 mr-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                  </span>
                  Available for work
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="inline-flex items-center px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-medium"
                >
                  <Sparkles size={12} className="mr-1" />
                  Full Stack Engineer
                </motion.div>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Vikas</span>.
                <br />
                I build <TypingAnimation text="scalable web apps,interactive experiences,robust backends" delay={1000} className="text-gray-400" />
              </h1>

              <p className="text-lg text-gray-400 max-w-2xl leading-relaxed mb-8">
                Turning complex problems into elegant solutions. With over 3 years of experience, I specialize in building high-performance applications using React, PHP, and modern web architectures.
                <span className="block mt-2 text-gray-500 text-sm">
                  Based in India • 20+ Projects Completed • Open Source Contributor
                </span>
              </p>

              <div className="flex flex-wrap gap-4">
                <motion.button
                  onClick={() => scrollToSection('projects')}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-3 bg-white text-black font-semibold rounded-xl hover:bg-gray-100 transition-colors flex items-center gap-2"
                >
                  <Rocket size={18} /> View Projects
                </motion.button>
                <motion.a
                  href="/vikas_uniyal.pdf"
                  download
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-3 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-colors flex items-center gap-2 border border-white/10"
                >
                  Download CV <Download size={18} />
                </motion.a>
              </div>
            </div>
          </BentoBox>

          {/* 2. Developer Activity (Merged) */}
          <div className="md:col-span-6 lg:col-span-4 md:row-span-2">
            <DeveloperActivity />
          </div>



        </div>
      </div>
    </section>
  )
}

export default Hero
