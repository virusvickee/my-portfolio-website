import React, { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import AnimatedBackground from './components/AnimatedBackground'
import ParticleBackground from './components/ParticleBackground'
import FloatingShapes from './components/FloatingShapes'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import SkillTree from './components/SkillTree'
import Projects from './components/Projects'
import TestimonialsCarousel from './components/TestimonialsCarousel'
import Articles from './components/Articles'
import BlogPage from './components/BlogPage'
import Timeline from './components/Timeline'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ChatBot from './components/ChatBot'
import LoadingScreen from './components/LoadingScreen'
import VoiceCommands from './components/VoiceCommands'
import EasterEgg from './components/EasterEgg'
import MiniGame from './components/MiniGame'
import DynamicContent from './components/DynamicContent'
import SoundEffects from './components/SoundEffects'
import ARBusinessCard from './components/ARBusinessCard'
import CursorTrail from './components/CursorTrail'
import ThemeToggle from './components/ThemeToggle'
import GitHubStats from './components/GitHubStats'
import LiveCodingActivity from './components/LiveCodingActivity'

function App() {
  const [currentPage, setCurrentPage] = useState('portfolio')
  const [isLoading, setIsLoading] = useState(true)

  if (currentPage === 'blog') {
    return (
      <div className="min-h-screen relative">
        <AnimatedBackground />
        <ParticleBackground />
        <FloatingShapes />
        <Navbar />
        <BlogPage onBack={() => setCurrentPage('portfolio')} />
        <Footer />
        <VoiceCommands />
        <MiniGame />
        <EasterEgg />
      </div>
    )
  }

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>
      
      {!isLoading && (
        <div className="min-h-screen relative">
          <CursorTrail />
          <AnimatedBackground />
          <ParticleBackground />
          <FloatingShapes />
          <Navbar />
          <DynamicContent />
          <Hero />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-6 mb-16">
            <div className="lg:col-span-2">
              <About />
            </div>
            <div className="space-y-8">
              <GitHubStats />
              <LiveCodingActivity />
            </div>
          </div>
          <Skills />
          <SkillTree />
          <Projects />
          <TestimonialsCarousel />
          <Articles onNavigateToBlog={() => setCurrentPage('blog')} />
          <Timeline />
          <Contact />
          <Footer />
          <ChatBot />
          <VoiceCommands />
          <MiniGame />
          <ARBusinessCard />
          <ThemeToggle />
          <EasterEgg />
          <SoundEffects />
        </div>
      )}
    </>
  )
}

export default App
