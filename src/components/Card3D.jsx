import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export const Card3D = ({ children, className = "" }) => {
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(window.innerWidth < 768)
  }, [])

  const handleMouseMove = (e) => {
    if (isMobile) return
    
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const mouseX = e.clientX - centerX
    const mouseY = e.clientY - centerY

    setRotateY(mouseX / 10)
    setRotateX(-mouseY / 10)
  }

  const handleMouseLeave = () => {
    if (isMobile) return
    setRotateX(0)
    setRotateY(0)
  }

  return (
    <motion.div
      className={`transform-gpu ${!isMobile ? 'perspective-1000' : ''} ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={!isMobile ? {
        rotateX,
        rotateY,
      } : {}}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      style={!isMobile ? {
        transformStyle: "preserve-3d",
      } : {}}
    >
      {children}
    </motion.div>
  )
}
