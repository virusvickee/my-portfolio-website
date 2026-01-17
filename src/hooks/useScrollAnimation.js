import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

// ScrollTrigger is included with GSAP
if (typeof window !== 'undefined') {
  import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
    gsap.registerPlugin(ScrollTrigger)
  })
}

const useScrollAnimation = (trigger, animation, options = {}) => {
  const elementRef = useRef(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

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
  }, [trigger, animation, options])

  return elementRef
}

export default useScrollAnimation
