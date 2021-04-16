import React, { createContext, FC, useState } from 'react'

import { ITask } from 'interfaces/task.interface'

interface TasksContextType {
  tasks: ITask[]
  // eslint-disable-next-line no-unused-vars
  addTask(value: ITask): void
  // eslint-disable-next-line no-unused-vars
  deleteTask(taskToDelete: ITask): void
}

export const TasksContext = createContext<TasksContextType>({
  tasks: [],
  addTask: () => {},
  deleteTask: () => {},
})

const TasksProvider: FC = ({ children }) => {
  const [tasks, setTasks] = useState<ITask[]>([])

  const addTask = (task: ITask) => setTasks([task, ...tasks])

  function deleteTask(taskToDelete: ITask) {
    const filteredTasks = tasks.filter(task => task !== taskToDelete)
    setTasks(filteredTasks)
  }

  return (
    <TasksContext.Provider
      value={{
        tasks,
        addTask,
        deleteTask,
      }}
    >
      {children}
    </TasksContext.Provider>
  )
}

export default TasksProvider
