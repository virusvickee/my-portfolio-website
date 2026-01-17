import React from 'react'
import AnimatedBackground from './components/AnimatedBackground'
import ParticleBackground from './components/ParticleBackground'
import FloatingShapes from './components/FloatingShapes'
import CustomCursor from './components/CustomCursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Timeline from './components/Timeline'
import Certifications from './components/Certifications'
import StatsCounter from './components/StatsCounter'
import Testimonials from './components/Testimonials'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import ChatAssistant from './components/ChatAssistant'

function App() {
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
      <Timeline />
      <Certifications />
      <StatsCounter />
      <Testimonials />
      <Blog />
      <Newsletter />
      <Contact />
      <Footer />
      <ScrollToTop />
      <ChatAssistant />
    </div>
  )
}

export default App
