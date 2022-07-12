import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Loader from './loader'
import Nav from './nav'

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-block-size: 100vh;
  block-size: 2000px;
`

const Layout = ({ children }) => {
  const router = useRouter()
  const isHome = router.pathname === '/'
  const [isLoading, setIsLoading] = useState(isHome)
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    const onHashChangeStart = (url) => {
      setActiveId(url.substring(1).substring(1))
    }

    router.events.on('hashChangeStart', onHashChangeStart)

    return () => {
      router.events.off('hashChangeStart', onHashChangeStart)
    }
  }, [router.events])

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
            <Nav isHome={isHome} active={activeId} />
            <div id="content">{children}</div>
          </StyledContent>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Layout
