import React from 'react'

import TaskItem from './TaskItem'

interface TaskProps {
  tasks: string[]
}

export default function Task({ tasks }: TaskProps) {
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
