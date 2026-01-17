import React, { useState } from 'react'
import AnimatedBackground from './components/AnimatedBackground'
import ParticleBackground from './components/ParticleBackground'
import FloatingShapes from './components/FloatingShapes'
import CustomCursor from './components/CustomCursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Articles from './components/Articles'
import BlogPage from './components/BlogPage'
import Timeline from './components/Timeline'
import Certifications from './components/Certifications'
import StatsCounter from './components/StatsCounter'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import ChatAssistant from './components/ChatAssistant'

function App() {
  const [currentPage, setCurrentPage] = useState('portfolio')

  if (currentPage === 'blog') {
    return (
      <div className="min-h-screen relative">
        <FloatingShapes />
        <CustomCursor />
        <ParticleBackground />
        <AnimatedBackground />
        <BlogPage onBack={() => setCurrentPage('portfolio')} />
      </div>
    )
  }

  return (
    <div className="min-h-screen relative">
      <FloatingShapes />
      <CustomCursor />
      <ParticleBackground />
      <AnimatedBackground />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Articles onNavigateToBlog={() => setCurrentPage('blog')} />
      <Timeline />
      <Certifications />
      <StatsCounter />
      <Testimonials />
      <Newsletter />
      <Contact />
      <Footer />
      <ScrollToTop />
      <ChatAssistant />
    </div>
  )
}

export default App
