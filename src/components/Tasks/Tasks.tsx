import React from 'react'

import TaskItem from './TaskItem'
import { StyledList, Wrapper } from './Tasks.styles'

import { ITask } from 'interfaces/task.interface'

interface TasksProps {
  tasks: ITask[]
}

export default function Tasks({ tasks }: TasksProps) {
  return tasks.length ? (
    <Wrapper>
      <StyledList>
        {tasks.map((task, i) => (
          <li key={i}>
            <TaskItem task={task} />
          </li>
        ))}
      </StyledList>
    </Wrapper>
  ) : (
    <Wrapper>
      <p>No tasks found</p>
    </Wrapper>
  )
}

Tasks.defaultProps = {
  tasks: [],
}
