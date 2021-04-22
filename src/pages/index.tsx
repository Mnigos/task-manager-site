import Head from 'next/head'
import styled from 'styled-components'

import TasksProvider from 'providers/TasksProvider'
import TasksTemplate from 'components/Tasks/TasksTemplate'

const Wrapper = styled.main`
  display: flex;
  justify-content: center;
`

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Wrapper>
        <TasksProvider>
          <TasksTemplate />
        </TasksProvider>
      </Wrapper>
    </div>
  )
}
