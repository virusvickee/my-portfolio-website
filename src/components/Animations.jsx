import { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

export const ScrollReveal = ({ children, delay = 0 }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [isInView, controls])

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.6, delay }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 }
      }}
    >
      {children}
    </motion.div>
  )
}

export const CodeTyping = ({ code, delay = 0 }) => {
  return (
    <motion.pre
      className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-hidden"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      transition={{ duration: 2, delay }}
    >
      <motion.code
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.1, delay: delay + 0.5 }}
      >
        {code}
      </motion.code>
    </motion.pre>
  )
}
