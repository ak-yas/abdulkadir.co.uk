import { useEffect, useState } from 'react'
import Link from 'next/link'
import styled, { css } from 'styled-components'
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion'
import {
  useMediaQuery,
  useScrollDirection,
  usePrefersReducedMotion,
} from '../hooks'
import Menu from './menu'
import { Logo } from './icons'
import theme from '../styles/theme'

const navLinks = [
  {
    name: 'home',
    url: '#home',
  },
  {
    name: 'work',
    url: '#work',
  },
  {
    name: 'skills',
    url: '#skills',
  },
  {
    name: 'contact',
    url: '#contact',
  },
]

const StyledHeader = styled.header`
  /* border: 1px solid gold; */
  font-family: var(--font-base);
  ${({ theme }) => theme.mixins.flexBetween}
  position: fixed;
  top: 0;
  inline-size: 100%;
  block-size: var(--nav-height);
  padding-inline: 2rem;
  margin-inline: auto;
  z-index: 11;
  background-color: var(--primary-color);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  transition: var(--transition);

  @media (prefers-reduced-motion: no-preference) {
    ${(props) =>
      props.scrollDirection === 'up' &&
      !props.scrolledToTop &&
      css`
        height: var(--nav-scroll-height);
        transform: translateY(0);
        /* background-color: rgb(109, 65, 161); */
        box-shadow: 0 10px 30px -10px var(--fogra-shadow);
      `};
    ${(props) =>
      props.scrollDirection === 'down' &&
      !props.scrolledToTop &&
      css`
        height: var(--nav-scroll-height);
        transform: translateY(calc(var(--nav-scroll-height) * -1));
        box-shadow: 0 10px 30px -10px var(--fogra-shadow);
      `};
  }
`
const StyledNav = styled.nav`
  ${({ theme }) => theme.mixins.flexBetween};
  inline-size: 100%;
  color: var(--gold);
  z-index: 12;
  /* border: 1px solid red; */
  position: relative;

  .logo {
    ${({ theme }) => theme.mixins.flexCenter};

    a {
      color: var(--gold);
      width: 42px;
      height: 42px;

      &:hover,
      &:focus {
        svg {
          fill: var(--green-tint);
        }
      }

      svg {
        fill: none;
        transition: var(--transition);
        user-select: none;
      }
    }
  }

  .cv-button {
    ${({ theme }) => theme.mixins.smallButton};
    margin-left: 15px;
    font-size: var(--fz-sm);
  }
`
const StyledLinks = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  ul {
    ${({ theme }) => theme.mixins.flexBetween};
    padding: 0;
    margin: 0;
    list-style: none;

    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0 5px;
      position: relative;
      font-size: var(--fz-sm);

      &:hover {
        div {
          background: var(--gold);
        }
      }

      div {
        block-size: 5px;
        inline-size: 5px;
        background: transparent;
        border-radius: 50%;
        margin-block-end: 5px;
      }

      a {
        padding: 10px;
        color: var(--lightest-platinum);
        text-decoration: none;
        font-weight: 400;
        text-transform: uppercase;
        transition: all 0.3s ease-in-out;

        &:hover {
          color: var(--gold);
        }
      }
    }
  }
`
const container = {
  animate: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2, duration: 2.5 },
  },
  initial: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}
const item = {
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
      opacity: { stiffness: 1000, velocity: -100 },
    },
  },
  initial: {
    y: 20,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
}
const Nav = ({ isHome, active }) => {
  const [isMounted, setIsMounted] = useState(!isHome)
  const scrollDirection = useScrollDirection({
    initialDirection: 'down',
    thresholdPixels: 0,
    off: false,
  })

  const [scrolledToTop, setScrolledToTop] = useState(true)
  const prefersReducedMotion = usePrefersReducedMotion()
  const isTabletL = useMediaQuery(`(${theme.breakpoints.tabletL})`)
  const isMobileS = useMediaQuery(`(${theme.breakpoints.mobileS})`)

  const handleScroll = () => {
    setScrolledToTop(window.pageYOffset < 50)
  }

  useEffect(() => {
    if (prefersReducedMotion) {
      return
    }

    const timeout = setTimeout(() => {
      setIsMounted(true)
    }, 100)

    window.addEventListener('scroll', handleScroll)

    return () => {
      clearTimeout(timeout)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [prefersReducedMotion])

  const IconLogo = (
    <div className="logo" tabIndex={-1}>
      {isHome ? (
        <a href="/" aria-label="home">
          <Logo />
        </a>
      ) : (
        <Link href="/" aria-label="home" passHref>
          <a>
            <Logo />
          </a>
        </Link>
      )}
    </div>
  )

  return (
    <StyledHeader
      scrollDirection={scrollDirection}
      scrolledToTop={scrolledToTop}
    >
      {prefersReducedMotion ? (
        <StyledNav>
          <>{IconLogo}</>

          {!isTabletL && (
            <StyledLinks>
              <ul>
                {navLinks &&
                  navLinks.map(({ name, url }, i) => (
                    <li key={i}>
                      <div />
                      <Link href={url}>
                        <a
                          style={
                            active === name ? { color: 'var(--gold)' } : {}
                          }
                        >
                          {name}
                        </a>
                      </Link>
                    </li>
                  ))}
              </ul>
            </StyledLinks>
          )}

          {!isMobileS && (
            <div>
              <Link href="/cv.pdf">
                <a
                  className="cv-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download CV
                </a>
              </Link>
            </div>
          )}

          <Menu />
        </StyledNav>
      ) : (
        <AnimateSharedLayout>
          <StyledNav
            as={motion.nav}
            layout
            initial={false}
            animate={isMounted ? 'animate' : 'initial'}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {IconLogo}
            </motion.div>

            {!isTabletL && (
              <StyledLinks>
                <motion.ul variants={container}>
                  {navLinks &&
                    navLinks.map(({ name, url }, i) => (
                      <motion.li
                        key={i}
                        variants={item}
                        whileTap={{ scale: 0.95 }}
                      >
                        <div />
                        <Link href={url}>
                          <a
                            style={
                              active === name ? { color: 'var(--gold)' } : {}
                            }
                          >
                            {name}
                          </a>
                        </Link>
                      </motion.li>
                    ))}
                </motion.ul>
              </StyledLinks>
            )}

            {!isMobileS && (
              <motion.div variants={item}>
                <Link href="/cv.pdf">
                  <a
                    className="cv-button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download CV
                  </a>
                </Link>
              </motion.div>
            )}

            <Menu />
          </StyledNav>
        </AnimateSharedLayout>
      )}
    </StyledHeader>
  )
}

export default Nav
