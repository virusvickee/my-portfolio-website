import { useEffect } from 'react'

const SoundEffects = () => {
  useEffect(() => {
    // Create audio context for sound effects
    const audioContext = new (window.AudioContext || window.webkitAudioContext)()
    
    const playSound = (frequency, duration = 100) => {
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
  }, [])

  return null
}

export default SoundEffects
