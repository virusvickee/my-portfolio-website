import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const CursorTrail = () => {
  const [trails, setTrails] = useState([])

  useEffect(() => {
    const handleMouseMove = (e) => {
      const newTrail = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
      }

      setTrails(prev => [...prev.slice(-10), newTrail])

      setTimeout(() => {
        setTrails(prev => prev.filter(trail => trail.id !== newTrail.id))
      }, 1000)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      <AnimatePresence>
        {trails.map((trail, index) => (
          <motion.div
            key={trail.id}
            className="absolute w-2 h-2 bg-blue-400 rounded-full"
            initial={{ 
              x: trail.x - 4, 
              y: trail.y - 4, 
              scale: 1, 
              opacity: 0.8 
            }}
            animate={{ 
              scale: 0, 
              opacity: 0 
            }}
            exit={{ opacity: 0 }}
            transition={{ 
              duration: 1,
              delay: index * 0.05
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  )
}

export default CursorTrail
