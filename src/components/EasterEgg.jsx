import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const EasterEgg = () => {
  const [showEgg, setShowEgg] = useState(false)
  const [sequence, setSequence] = useState([])
  const secretCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight']

  useEffect(() => {
    const handleKeyPress = (e) => {
      const newSequence = [...sequence, e.code].slice(-8)
      setSequence(newSequence)

      if (JSON.stringify(newSequence) === JSON.stringify(secretCode)) {
        setShowEgg(true)
        setTimeout(() => setShowEgg(false), 3000)
        setSequence([])
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [sequence])

  return (
    <AnimatePresence>
      {showEgg && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none"
        >
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-8 rounded-xl text-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-6xl mb-4"
            >
              🎉
            </motion.div>
            <h2 className="text-2xl font-bold mb-2">Easter Egg Found!</h2>
            <p>You discovered the Konami Code!</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default EasterEgg
