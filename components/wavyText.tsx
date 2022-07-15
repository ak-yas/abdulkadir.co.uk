/* eslint-disable react/no-array-index-key */
import { HTMLMotionProps, motion } from 'framer-motion'

interface Props extends HTMLMotionProps<'div'> {
  text: string
  delay?: number
  replay: boolean
  duration?: number
}

const WavyText = ({
  text,
  delay = 0,
  duration = 0.07,
  color = false,
  ...props
}) => {
  const letters = Array.from(text)

  const container = {
    hidden: {
      opacity: 0,
    },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: duration,
        delayChildren: i * delay,
      },
    }),
  }

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 200,
      },
    },
  }

  return (
    <motion.div
      className="numbered-heading"
      style={{
        display: 'inline-flex',
        flexWrap: 'wrap',
        overflow: 'hidden',
        color: `${color ? `var(--pink)` : `var(--black-color)`}`,
        fontSize: 'clamp(24px, 4vw, 28px)',
        fontWeight: 800,
        marginBottom: '4rem',
      }}
      variants={container}
      initial="hidden"
      whileInView="visible"
      {...props}
    >
      {letters.map((letter, index) => (
        <motion.span key={index} variants={child}>
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.div>
  )
}

export default WavyText
