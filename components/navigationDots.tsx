import Link from 'next/link'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import Side from './side'

const StyledLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  min-height: 100vh;

  a {
    margin: 20px auto;
    padding: 10px;
    font-family: var(--font-mono);
    font-size: var(--fz-xxs);
    line-height: var(--fz-lg);
    letter-spacing: 0.1em;
    writing-mode: vertical-rl;
  }

  .app__navigation {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;

    padding: 2rem;

    .app__navigation-dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: #cbcbcb;
      margin: 0.5rem;

      transition: background-color 0.25s ease-in-out;

      &:hover {
        background-color: var(--green-tint);
      }

      @media screen and (min-width: 2000px) {
        width: 20px;
        height: 20px;
      }
    }
  }
`

const NavigationDots = ({ isHome, active }) => {
  if (active === '') {
    active = 'home'
  }

  return (
    <Side isHome={isHome} orientation="right">
      <StyledLinkWrapper>
        <motion.div
          className="app__navigation"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3 }}
        >
          {['home', 'work', 'more', 'skills', 'contact'].map((item, index) => (
            <Link key={item + index} href={`#${item}`}>
              <a
                className="app__navigation-dot"
                style={
                  active === item ? { backgroundColor: 'var(--gold)' } : {}
                }
              />
            </Link>
          ))}
        </motion.div>
      </StyledLinkWrapper>
    </Side>
  )
}
export default NavigationDots
