import { motion } from 'framer-motion'
import RubberBandText from './RubberBandText'
export default function AnimationWrapper(props) {
  const letters = Array.from(props.text)
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.06, delayChildren: 0.04 * i }
    })
  }
  const child = {
    visible: {
      opacity: 1,
      transform: [
        'scale(1, 1)',
        'scale(1.05, 1.05)',
        'scale(.95, .95 )',
        'scale(1.03, 1)',
        'scale(1, 1)'
      ],
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 200,
        duration: 0.1
      }
    },
    hidden: { opacity: 0 }
  }

  return (
    <motion.span
      style={{ display: 'flex', flexWrap: 'wrap' }}
      variants={container}
      initial="hidden"
      whileInView="visible"
    >
      {letters.map((letter, index) => (
        <motion.span variants={child} key={index}>
          <RubberBandText>{letter === ' ' ? '\u00A0' : letter}</RubberBandText>
        </motion.span>
      ))}
    </motion.span>
  )
}
