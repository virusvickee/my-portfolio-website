import React, { useState, Suspense, lazy } from 'react'
import { AnimatePresence } from 'framer-motion'
import AnimatedBackground from './components/AnimatedBackground'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import LoadingScreen from './components/LoadingScreen'
import CursorTrail from './components/CursorTrail'

// Lazy Load Heavy Components
const ParticleBackground = lazy(() => import('./components/ParticleBackground'))
const FloatingShapes = lazy(() => import('./components/FloatingShapes'))
const About = lazy(() => import('./components/About'))
const Services = lazy(() => import('./components/Services'))
const Skills = lazy(() => import('./components/Skills'))
const Projects = lazy(() => import('./components/Projects'))
const TestimonialsCarousel = lazy(() => import('./components/TestimonialsCarousel'))
const Articles = lazy(() => import('./components/Articles'))
const BlogPage = lazy(() => import('./components/BlogPage'))
const Timeline = lazy(() => import('./components/Timeline'))
const Contact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('./components/Footer'))
const EasterEgg = lazy(() => import('./components/EasterEgg'))
const DynamicContent = lazy(() => import('./components/DynamicContent'))
const SoundEffects = lazy(() => import('./components/SoundEffects'))

const StickyCTA = lazy(() => import('./components/StickyCTA'))
import ErrorBoundary from './components/ErrorBoundary'

import { Helmet } from 'react-helmet-async'

// ... existing imports

function App() {
  const [currentPage, setCurrentPage] = useState('portfolio')
  const [isLoading, setIsLoading] = useState(true)

  if (currentPage === 'blog') {
    return (
      <div className="min-h-screen relative">
        <Helmet>
          <title>Blog | Vikas Uniyal - Full Stack Developer</title>
          <meta name="description" content="Technical articles and thoughts on web development, React, and software engineering." />
        </Helmet>
        <AnimatedBackground />
        <ParticleBackground />
        <FloatingShapes />
        <Navbar />
        <BlogPage onBack={() => setCurrentPage('portfolio')} />
        <Footer />
        <EasterEgg />
      </div>
    )
  }

  return (
    <ErrorBoundary>
      <AnimatePresence>
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <div className="min-h-screen relative">
          <Helmet>
            <title>Vikas Uniyal | Full Stack Developer</title>
            <meta name="description" content="Portfolio of Vikas Uniyal, a Full Stack Developer specializing in React, PHP, and Modern Web Tech." />
            <meta name="keywords" content="Vikas Uniyal, Full Stack Developer, React Developer, Web Developer, Portfolio" />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://vikasuniyal.com/" />
            <meta property="og:title" content="Vikas Uniyal | Full Stack Developer" />
            <meta property="og:description" content="Building amazing web experiences with modern technologies." />
            <meta property="og:image" content="/og-image.png" />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://vikasuniyal.com/" />
            <meta property="twitter:title" content="Vikas Uniyal | Full Stack Developer" />
            <meta property="twitter:description" content="Building amazing web experiences with modern technologies." />
            <meta property="twitter:image" content="/og-image.png" />
          </Helmet>

          <CursorTrail />
          <AnimatedBackground />
          <Suspense fallback={null}>
            <ParticleBackground />
            <FloatingShapes />
          </Suspense>
          <Navbar />
          <Suspense fallback={null}>
            <DynamicContent />
          </Suspense>
          <Hero />

          <Suspense fallback={<div className="h-screen" />}>




            <About />
            <Services />
            <Skills />
            <Projects />
            <Timeline />
            <TestimonialsCarousel />
            <Articles onNavigateToBlog={() => setCurrentPage('blog')} />
            <Contact />
            <Footer />

            {/* FeaturesDrawer removed */}
            <SoundEffects />
            <StickyCTA />
          </Suspense>
        </div>
      )}
    </ErrorBoundary>
  )
}

export default App
