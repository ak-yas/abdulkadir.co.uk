import Head from 'next/head'
import styled from 'styled-components'
import Hero from '../sections/hero'
import Work from '../sections/work'
import Projects from '../sections/projects'

const StyledMainContainer = styled.main`
  counter-reset: section;
`

const Home = () => (
  <>
    <Head>
      <title>Abdulkadir Yassin</title>
    </Head>
    <Hero />
    <StyledMainContainer>
      <Work />
      <Projects />
    </StyledMainContainer>
  </>
)

export default Home
