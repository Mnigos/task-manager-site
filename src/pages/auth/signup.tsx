import Head from 'next/head'

import { Wrapper } from './auth.styles'

import SignupTemplate from 'components/Auth/SignupTemplate'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Wrapper>
        <SignupTemplate />
      </Wrapper>
    </div>
  )
}
