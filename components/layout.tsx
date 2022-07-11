import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Loader from './loader'

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-block-size: 100vh;
`

const Layout = ({ children }) => {
  const router = useRouter()
  const isHome = router.pathname === '/'
  const [isLoading, setIsLoading] = useState(isHome)

  return (
    <div id="root">
      <AnimatePresence exitBeforeEnter>
        {isLoading ? (
          <motion.div
            exit={{ y: -2000 }}
            initial={{ y: -1000 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.4 }}
            key="loader"
          >
            <Loader
              finishLoading={() => {
                setTimeout(() => {
                  setIsLoading(false)
                }, 3000)
              }}
            />
          </motion.div>
        ) : (
          <StyledContent>
            <div id="content">{children}</div>
          </StyledContent>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Layout
