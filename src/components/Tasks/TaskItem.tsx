import React, { useContext } from 'react'

import { Item } from './TaskItem.styles'

import DeleteButton from 'components/items/DeleteButton'
import { TasksContext } from 'providers/TasksProvider'
import { ITask } from 'interfaces/task.interface'
interface TaskItemProps {
  task: ITask
}

export default function TaskItem({ task }: TaskItemProps) {
  const { deleteTask } = useContext(TasksContext)

  return (
    <>
      <Item>
        <p>{task.name}</p>
        <DeleteButton onClick={() => deleteTask(task)} />
      </Item>
    </>
  )
}
