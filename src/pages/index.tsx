import Head from 'next/head'

import { Wrapper } from './index.styles'

import TasksProvider from 'providers/TasksProvider'
import TasksTemplate from 'components/Tasks/TasksTemplate'

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
