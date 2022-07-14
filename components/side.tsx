import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { usePrefersReducedMotion } from '../hooks'
import { loaderDelay } from '../utils'

const StyledSideElement = styled.div`
  width: 40px;
  position: fixed;
  bottom: 0;
  left: ${(props) => (props.orientation === 'left' ? '40px' : 'auto')};
  right: ${(props) => (props.orientation === 'left' ? 'auto' : '40px')};
  z-index: 10;
  color: var(--gold);

  @media (max-width: 1080px) {
    left: ${(props) => (props.orientation === 'left' ? '20px' : 'auto')};
    right: ${(props) => (props.orientation === 'left' ? 'auto' : '20px')};
  }

  @media (max-width: 768px) {
    display: none;
  }
`

const Side = ({ children, isHome, orientation }) => {
  const [isMounted, setIsMounted] = useState(!isHome)
  const prefersReducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    if (!isHome || prefersReducedMotion) {
      return
    }
    const timeout = setTimeout(() => setIsMounted(true), loaderDelay)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <StyledSideElement orientation={orientation}>
      {prefersReducedMotion
        ? children
        : isMounted && (
            <motion.div
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {children}
            </motion.div>
          )}
    </StyledSideElement>
  )
}

export default Side
