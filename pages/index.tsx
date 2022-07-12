import Head from 'next/head'
import styled from 'styled-components'
import Hero from '../sections/hero'

const StyledMainContainer = styled.main`
  counter-reset: section;
  /* background-color: var(--primary-color); */
`

const Home = () => (
  <>
    <Hero />
  </>
)

export default Home
