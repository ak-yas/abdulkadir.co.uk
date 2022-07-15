import Head from 'next/head'
import styled from 'styled-components'
import Hero from '../sections/hero'
import Work from '../sections/work'
import Projects from '../sections/projects'
import Skills from '../sections/skills'
import Footer from '../sections/footer'

const StyledMainContainer = styled.main`
  counter-reset: section;
`

const Home = () => (
  <>
    <Head>
      <title>Abdulkadir Yassin</title>
    </Head>
    <Hero />
    <StyledMainContainer className="fillHeight">
      <Work />
      <Projects />
      <Skills />
      <Footer />
    </StyledMainContainer>
  </>
)

export default Home
