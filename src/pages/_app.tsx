import { AppProps } from 'next/app'
import styled from 'styled-components'

import { GlobalStyle } from 'assets/styles/GlobalStyle'
import Footer from 'components/Footer'
import NavBar from 'components/NavBar/NavBar'
import 'assets/styles/fonts.css'
import AuthProvider from 'providers/AuthProvider'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Wrapper>
      <AuthProvider>
        <GlobalStyle />
        <div>
          <NavBar />
          <Component {...pageProps} />
        </div>
        <Footer />
      </AuthProvider>
    </Wrapper>
  )
}
