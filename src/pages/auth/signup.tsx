import Head from 'next/head'
import styled from 'styled-components'

export const Wrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
`

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
