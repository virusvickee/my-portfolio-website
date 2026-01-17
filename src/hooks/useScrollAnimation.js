import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

/**
 * Custom hook for scroll-triggered animations using GSAP ScrollTrigger.
 * 
 * @param {string|Element} trigger - Element or selector to trigger animation
 * @param {Object} animation - Animation configuration with 'from' and 'to' properties
 * @param {Object} options - ScrollTrigger options
 * 
 * Note: Please memoize the 'animation' and 'options' objects using useMemo 
 * to prevent unnecessary re-renders and effect re-runs.
 */
const useScrollAnimation = (trigger, animation, options = {}) => {
  const elementRef = useRef(null)
  const prevAnimationRef = useRef(null)
  const prevOptionsRef = useRef(null)

  useEffect(() => {
    // Deep equality check to avoid unnecessary re-runs
    const animationChanged = JSON.stringify(animation) !== JSON.stringify(prevAnimationRef.current)
    const optionsChanged = JSON.stringify(options) !== JSON.stringify(prevOptionsRef.current)
    
    if (!animationChanged && !optionsChanged && prevAnimationRef.current) {
      return
    }

    const element = elementRef.current
    if (!element) return

    // Dynamic import and setup
    const setupAnimation = async () => {
      try {
        const { ScrollTrigger } = await import('gsap/ScrollTrigger')
        gsap.registerPlugin(ScrollTrigger)

        const ctx = gsap.context(() => {
          gsap.set(element, animation.from || {})
          
          gsap.to(element, {
            ...animation.to,
            scrollTrigger: {
              trigger: trigger || element,
              start: 'top 80%',
              end: 'bottom 20%',
              toggleActions: 'play none none reverse',
              ...options
            }
          })
        }, element)

        return () => ctx.revert()
      } catch (error) {
        console.warn('Failed to load ScrollTrigger:', error)
      }
    }

    let cleanup
    setupAnimation().then(cleanupFn => {
      cleanup = cleanupFn
    })

    // Update refs
    prevAnimationRef.current = animation
    prevOptionsRef.current = options

    return () => {
      if (cleanup) cleanup()
    }
  }, [trigger, animation, options])

  return elementRef
}

export default useScrollAnimation
