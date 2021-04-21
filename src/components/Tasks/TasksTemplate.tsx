import React, { useContext } from 'react'

import { Label } from '../items/Label'

import AddTask from './AddTask'
import Tasks from './Tasks'
import { Wrapper } from './TasksTemplate.styles'

import { TasksContext } from 'providers/TasksProvider'

export default function TasksTemplate() {
  const { tasks } = useContext(TasksContext)

  return (
    <Wrapper>
      <AddTask />
      <Label as="b" size="l">
        Your Tasks
      </Label>
      <Tasks tasks={tasks} />
    </Wrapper>
  )
}
