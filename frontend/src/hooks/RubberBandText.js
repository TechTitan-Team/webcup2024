import { useState } from 'react'
import { motion, useAnimationControls } from 'framer-motion'

export default function RubberBandText({ children }) {
  const controls = useAnimationControls()
  const [isPlaying, setIsPlaying] = useState(false)

  const bouncingEffect = () => {
    controls.start({
      transform: [
        'scale(1, 1)',
        'scale(1.4, .6)',
        'scale(.85, 1.2)',
        'scale(1.25, .85)',
        'scale(.9, 1.05 )',
        'scale(1, 1)'
      ],
      transition: {
        times: [0, 0.4, 0.6, 0.7, 0.8, 0.9]
      }
    })
    setIsPlaying(true)
  }
  return (
    <motion.h1
      className="rubberband"
      style={{ display: 'inline-block' }}
      onMouseOver={() => (!isPlaying ? bouncingEffect() : null)}
      animate={controls}
      onAnimationComplete={() => setIsPlaying(false)}
    >
      {children}
    </motion.h1>
  )
}
