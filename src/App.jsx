import React, { useState } from 'react'
import AnimatedBackground from './components/AnimatedBackground'
import ParticleBackground from './components/ParticleBackground'
import FloatingShapes from './components/FloatingShapes'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Articles from './components/Articles'
import BlogPage from './components/BlogPage'
import Timeline from './components/Timeline'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [currentPage, setCurrentPage] = useState('portfolio')

  if (currentPage === 'blog') {
    return (
      <div className="min-h-screen relative">
        <AnimatedBackground />
        <ParticleBackground />
        <FloatingShapes />
        <Navbar />
        <BlogPage onBack={() => setCurrentPage('portfolio')} />
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      <ParticleBackground />
      <FloatingShapes />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Articles onNavigateToBlog={() => setCurrentPage('blog')} />
      <Timeline />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
