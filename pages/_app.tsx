import 'reset-css'
import styled, { ThemeProvider } from 'styled-components'
// import Layout from '../components/layout'
import { GlobalStyle, theme } from '../styles'

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
