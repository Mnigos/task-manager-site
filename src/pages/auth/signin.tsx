import Head from 'next/head'

import { Wrapper } from './auth.styles'

import SigninTemplate from 'components/Auth/SigninTemplate'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Wrapper>
        <SigninTemplate />
      </Wrapper>
    </div>
  )
}
