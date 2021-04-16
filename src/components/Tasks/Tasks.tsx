import React from 'react'

import TaskItem from './TaskItem'
import { StyledList, Wrapper } from './Tasks.styles'

interface TasksProps {
  tasks: string[]
}

export default function Tasks({ tasks }: TasksProps) {
  return (
    <>
      <Wrapper>
        <StyledList>
          {tasks.map((task, i) => (
            <li key={i}>
              <TaskItem value={task} />
            </li>
          ))}
        </StyledList>
      </Wrapper>
    </>
  )
}
