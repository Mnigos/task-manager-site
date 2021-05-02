import Head from 'next/head'
import styled from 'styled-components'

import SigninTemplate from 'components/Auth/SigninTemplate'

const Wrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`

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
