import { AppProps } from 'next/app'

import { GlobalStyle } from '../assets/styles/GlobalStyle'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}
