import { AppProps } from 'next/app'

import { GlobalStyle } from 'assets/styles/GlobalStyle'
import NavBar from 'components/NavBar/NavBar'
import 'assets/styles/fonts.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Component {...pageProps} />
    </>
  )
}
