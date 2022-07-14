import Head from 'next/head'
import styled from 'styled-components'
import Hero from '../sections/hero'
import Work from '../sections/work'

const StyledMainContainer = styled.main`
  counter-reset: section;
`

const Home = () => (
  <>
    <Head>
      <title>Abdulkadir Yassin</title>
    </Head>
    <Hero />
  </>
)

export default Home
