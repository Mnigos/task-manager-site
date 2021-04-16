import React, { createContext, FC, useState } from 'react'

type TasksContextType = {
  tasks: string[]
  // eslint-disable-next-line no-unused-vars
  addTask(value: string): void
  // eslint-disable-next-line no-unused-vars
  deleteTask(taskToDelete: string): void
}

export const TasksContext = createContext<TasksContextType>({
  tasks: [],
  addTask: () => {},
  deleteTask: () => {},
})

const TasksProvider: FC = ({ children }) => {
  const [tasks, setTasks] = useState<string[]>([])

  const addTask = (value: string) => setTasks([value, ...tasks])

  function deleteTask(taskToDelete: string) {
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