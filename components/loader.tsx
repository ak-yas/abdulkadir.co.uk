import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Logo } from './icons'

const StyledLoader = styled('div').withConfig({
  shouldForwardProp: (prop) => !['filterThis'].includes(prop),
})`
  ${({ theme }) => theme.mixins.flexCenter};
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: var(--dark-fogra);
  z-index: 99;

  .logo-wrapper {
    width: 100px;
    max-width: 100px;
    transition: var(--transition);
    opacity: ${(props) => (props.$fg ? 1 : 0)};
    svg {
      display: block;
      width: 100%;
      height: 100%;
      margin: 0 auto;
      fill: none;
      user-select: none;
      /* #B {
        opacity: 0;
      } */
    }
  }
`

const Loader = ({ finishLoading }) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 10)
    finishLoading()
    return () => clearTimeout(timeout)
  }, [])

  return (
    <StyledLoader className="loader" $fg={isMounted}>
      <div className="logo-wrapper">
        <Logo />
      </div>
    </StyledLoader>
  )
}

export default Loader
