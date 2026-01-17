import React, { useEffect, useRef, useState } from 'react'

const CustomCursor = () => {
  const cursorRef = useRef(null)
  const followerRef = useRef(null)
  const [isHovering, setIsHovering] = useState(false)
  const [cursorText, setCursorText] = useState('')

  useEffect(() => {
    const cursor = cursorRef.current
    const follower = followerRef.current
    
    let mouseX = 0
    let mouseY = 0
    let followerX = 0
    let followerY = 0

    const handleMouseMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      
      if (cursor) {
        cursor.style.left = mouseX + 'px'
        cursor.style.top = mouseY + 'px'
      }
    }

    const animateFollower = () => {
      followerX += (mouseX - followerX) * 0.1
      followerY += (mouseY - followerY) * 0.1
      
      if (follower) {
        follower.style.left = followerX + 'px'
        follower.style.top = followerY + 'px'
      }
      
      requestAnimationFrame(animateFollower)
    }

    const handleMouseEnter = (e) => {
      const target = e.target
      if (target.matches('a, button, .cursor-hover')) {
        setIsHovering(true)
        const text = target.dataset.cursorText
        if (text) setCursorText(text)
      }
    }

    const handleMouseLeave = (e) => {
      const target = e.target
      if (target.matches('a, button, .cursor-hover')) {
        setIsHovering(false)
        setCursorText('')
      }
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseenter', handleMouseEnter, true)
    document.addEventListener('mouseleave', handleMouseLeave, true)
    
    animateFollower()

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseenter', handleMouseEnter, true)
      document.removeEventListener('mouseleave', handleMouseLeave, true)
    }
  }, [])

  return (
    <>
      {/* Main cursor */}
      <div
        ref={cursorRef}
        className={`fixed w-4 h-4 bg-indigo-500 rounded-full pointer-events-none z-50 transition-transform duration-200 ${
          isHovering ? 'scale-150' : 'scale-100'
        }`}
        style={{ transform: 'translate(-50%, -50%)' }}
      />
      
      {/* Follower cursor */}
      <div
        ref={followerRef}
        className={`fixed w-8 h-8 border-2 border-indigo-400/50 rounded-full pointer-events-none z-40 transition-all duration-300 ${
          isHovering ? 'scale-200 border-indigo-300' : 'scale-100'
        }`}
        style={{ transform: 'translate(-50%, -50%)' }}
      >
        {cursorText && (
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-2 py-1 bg-black/80 text-white text-xs rounded whitespace-nowrap">
            {cursorText}
          </div>
        )}
      </div>
    </>
  )
}

export default CustomCursor
