import { useEffect, useState } from 'react'

const SoundEffects = () => {
  const [audioContext, setAudioContext] = useState(null)
  const [isEnabled, setIsEnabled] = useState(false)

  useEffect(() => {
    const initAudio = () => {
      if (!audioContext && !isEnabled) {
        const context = new (window.AudioContext || window.webkitAudioContext)()
        setAudioContext(context)
        setIsEnabled(true)
      }
    }

    // Initialize audio on first user interaction
    const handleFirstInteraction = () => {
      initAudio()
      document.removeEventListener('click', handleFirstInteraction)
      document.removeEventListener('touchstart', handleFirstInteraction)
    }

    document.addEventListener('click', handleFirstInteraction)
    document.addEventListener('touchstart', handleFirstInteraction)

    return () => {
      document.removeEventListener('click', handleFirstInteraction)
      document.removeEventListener('touchstart', handleFirstInteraction)
    }
  }, [audioContext, isEnabled])

  useEffect(() => {
    if (!audioContext || !isEnabled) return

    const playSound = (frequency, duration = 100) => {
      try {
        const oscillator = audioContext.createOscillator()
        const gainNode = audioContext.createGain()
        
        oscillator.connect(gainNode)
        gainNode.connect(audioContext.destination)
        
        oscillator.frequency.value = frequency
        oscillator.type = 'sine'
        
        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime)
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration / 1000)
        
        oscillator.start(audioContext.currentTime)
        oscillator.stop(audioContext.currentTime + duration / 1000)
      } catch (error) {
        console.log('Audio playback failed:', error)
      }
    }

    // Add sound to buttons
    const addSoundToButtons = () => {
      document.querySelectorAll('button, a').forEach(element => {
        element.addEventListener('mouseenter', () => playSound(800, 50))
        element.addEventListener('click', () => playSound(1000, 100))
      })
    }

    // Add sound to scroll
    let scrollTimeout
    const handleScroll = () => {
      clearTimeout(scrollTimeout)
      scrollTimeout = setTimeout(() => playSound(600, 30), 100)
    }

    addSoundToButtons()
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [audioContext, isEnabled])

  return null
}

export default SoundEffects
