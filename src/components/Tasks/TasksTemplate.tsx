import React, { useContext } from 'react'

import AddTask from './AddTask'
import Tasks from './Tasks'
import { Wrapper } from './TasksTemplate.styles'

import { TasksContext } from 'providers/TasksProvider'

export default function TasksTemplate() {
  const { tasks } = useContext(TasksContext)

  return (
    <Wrapper>
      <AddTask />
      <Tasks tasks={tasks} />
    </Wrapper>
  )
}
