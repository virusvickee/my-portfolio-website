import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Gamepad2 } from 'lucide-react'

const MiniGame = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [score, setScore] = useState(0)
  const [gameActive, setGameActive] = useState(false)
  const [targets, setTargets] = useState([])

  const startGame = () => {
    setGameActive(true)
    setScore(0)
    setTargets([])

    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        const newTarget = {
          id: Date.now(),
          x: Math.random() * 300,
          y: Math.random() * 200
        }
        setTargets(prev => [...prev, newTarget])

        setTimeout(() => {
          setTargets(prev => prev.filter(t => t.id !== newTarget.id))
        }, 2000)
      }
    }, 800)

    setTimeout(() => {
      clearInterval(interval)
      setGameActive(false)
      setTargets([])
    }, 15000)
  }

  const hitTarget = (targetId) => {
    setTargets(prev => prev.filter(t => t.id !== targetId))
    setScore(prev => prev + 10)
  }

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(true)}
        className="p-3 bg-green-500 text-white rounded-full shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Gamepad2 size={16} className="md:w-5 md:h-5" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-[60]"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 md:p-6 w-80 md:w-96 h-72 md:h-80 relative mx-4"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-3 md:top-4 right-3 md:right-4 text-white/70 hover:text-white"
              >
                <X size={18} className="md:w-5 md:h-5" />
              </button>

              <h3 className="text-white text-lg md:text-xl font-bold mb-3 md:mb-4">Click Game</h3>
              <p className="text-white/70 mb-3 md:mb-4 text-sm md:text-base">Score: {score}</p>

              <div className="relative w-full h-36 md:h-48 bg-gray-800 rounded-lg overflow-hidden">
                {targets.map(target => (
                  <motion.button
                    key={target.id}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    onClick={() => hitTarget(target.id)}
                    className="absolute w-6 h-6 md:w-8 md:h-8 bg-red-500 rounded-full"
                    style={{ left: target.x, top: target.y }}
                    whileHover={{ scale: 1.2 }}
                  />
                ))}
              </div>

              <button
                onClick={startGame}
                disabled={gameActive}
                className="mt-3 md:mt-4 px-3 md:px-4 py-2 bg-blue-500 text-white rounded-lg disabled:opacity-50 text-sm md:text-base"
              >
                {gameActive ? 'Playing...' : 'Start Game'}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default MiniGame
