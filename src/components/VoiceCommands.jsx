import { useEffect, useState } from 'react'
import { Mic, MicOff } from 'lucide-react'
import { motion } from 'framer-motion'

const VoiceCommands = () => {
  const [isListening, setIsListening] = useState(false)
  const [recognition, setRecognition] = useState(null)

  useEffect(() => {
    if ('webkitSpeechRecognition' in window) {
      const recognition = new window.webkitSpeechRecognition()
      recognition.continuous = false
      recognition.interimResults = false
      recognition.lang = 'en-US'

      recognition.onresult = (event) => {
        const command = event.results[0][0].transcript.toLowerCase()
        handleVoiceCommand(command)
        setIsListening(false)
      }

      recognition.onerror = () => setIsListening(false)
      recognition.onend = () => setIsListening(false)

      setRecognition(recognition)
    }
  }, [])

  const handleVoiceCommand = (command) => {
    const commands = {
      'home': () => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' }),
      'about': () => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }),
      'skills': () => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' }),
      'projects': () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }),
      'contact': () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    }

    Object.keys(commands).forEach(key => {
      if (command.includes(key)) {
        commands[key]()
      }
    })
  }

  const toggleListening = () => {
    if (!recognition) return

    if (isListening) {
      recognition.stop()
      setIsListening(false)
    } else {
      recognition.start()
      setIsListening(true)
    }
  }

  if (!recognition) return null

  return (
    <motion.button
      onClick={toggleListening}
      className={`fixed top-20 right-4 md:right-6 p-2 md:p-3 rounded-full shadow-lg z-40 ${
        isListening ? 'bg-red-500' : 'bg-blue-500'
      } text-white`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      animate={isListening ? { scale: [1, 1.1, 1] } : {}}
      transition={{ duration: 0.5, repeat: isListening ? Infinity : 0 }}
    >
      {isListening ? <MicOff size={16} className="md:w-5 md:h-5" /> : <Mic size={16} className="md:w-5 md:h-5" />}
    </motion.button>
  )
}

export default VoiceCommands
