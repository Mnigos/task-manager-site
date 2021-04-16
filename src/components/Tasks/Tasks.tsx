import React from 'react'

import TaskItem from './TaskItem'

interface TasksProps {
  tasks: string[]
}

export default function Tasks({ tasks }: TasksProps) {
  return (
    <>
      <div>
        <ul>
          {tasks.map((task, i) => (
            <li key={i}>
              <TaskItem value={task} />
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
