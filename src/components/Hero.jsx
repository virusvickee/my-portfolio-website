import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Download, ExternalLink, Code2, Database, Layout, Terminal } from 'lucide-react'
import TypingAnimation from './TypingAnimation'
import GitHubActivity from './GitHubActivity'
import SocialCard from './SocialCard'

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
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-6"
              >
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                Available for work
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Vikas</span>.
                <br />
                I build <TypingAnimation text="scalable web apps" delay={1000} className="text-gray-400" />
              </h1>

              <p className="text-lg text-gray-400 max-w-2xl leading-relaxed mb-8">
                Full Stack Developer specializing in reliable, high-performance applications.
                Focused on React, PHP, and modern web standards.
              </p>

              <div className="flex flex-wrap gap-4">
                <motion.button
                  onClick={() => scrollToSection('projects')}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-3 bg-white text-black font-semibold rounded-xl hover:bg-gray-100 transition-colors flex items-center gap-2"
                >
                  View Projects <ExternalLink size={18} />
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

          {/* 2. GitHub Stats Card */}
          <div className="md:col-span-6 lg:col-span-4 md:row-span-2">
            <GitHubActivity />
          </div>

          {/* 3. Tech Stack Card */}
          <BentoBox className="md:col-span-3 lg:col-span-4 flex flex-col justify-between group" delay={0.2}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Terminal className="text-orange-400" size={20} />
                Tech Stack
              </h3>
              <Layout className="text-gray-600 group-hover:text-gray-400 transition-colors" size={20} />
            </div>

            <div className="flex flex-wrap gap-2">
              {['React', 'PHP', 'Node.js', 'MySQL', 'Tailwind', 'Next.js', 'TypeScript', 'Git'].map((tech) => (
                <span key={tech} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300 hover:text-white hover:border-white/30 transition-all cursor-default">
                  {tech}
                </span>
              ))}
            </div>

            <p className="text-sm text-gray-500 mt-4">
              Constantly exploring new frameworks and tools.
            </p>
          </BentoBox>

          {/* 4. Social & Contact Card */}
          <BentoBox className="md:col-span-3 lg:col-span-4 bg-gradient-to-br from-indigo-900/40 to-purple-900/40" delay={0.3}>
            <SocialCard />
          </BentoBox>

          {/* 5. Experience / Summary Card */}
          <BentoBox className="md:col-span-6 lg:col-span-4 flex items-center justify-between" delay={0.4}>
            <div>
              <div className="text-3xl font-bold text-white mb-1">3+</div>
              <div className="text-sm text-gray-400">Years Experience</div>
            </div>
            <div className="h-12 w-px bg-white/10" />
            <div>
              <div className="text-3xl font-bold text-white mb-1">20+</div>
              <div className="text-sm text-gray-400">Projects Built</div>
            </div>
            <div className="h-12 w-px bg-white/10" />
            <div>
              <div className="text-3xl font-bold text-white mb-1">100%</div>
              <div className="text-sm text-gray-400">Commitment</div>
            </div>
          </BentoBox>

        </div>
      </div>
    </section>
  )
}

export default Hero
