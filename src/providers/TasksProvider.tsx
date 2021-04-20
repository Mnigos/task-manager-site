import React, { createContext, FC, useReducer } from 'react'

import { ITask } from 'interfaces/task.interface'

interface TasksContextType {
  tasks: ITask[]
  addTask(task: ITask): void
  deleteTask(taskToDelete: ITask): void
}

type Action = {
  type: 'ADD_TASK' | 'DELETE_TASK'
  value: ITask
}

export enum ActionTypes {
  addTask = 'ADD_TASK',
  deleteTask = 'DELETE_TASK',
}

export const TasksContext = createContext<TasksContextType>({
  tasks: [],
  addTask: () => {
    console.error('Cannot find addTask function deffinition')
  },
  deleteTask: () => {
    console.error('Cannot find deleteTask function deffinition')
  },
})

function reducer(state: ITask[], action: Action): ITask[] {
  switch (action.type) {
    case ActionTypes.addTask:
      return [...state, action.value]
    case ActionTypes.deleteTask:
      const filteredState = state.filter(
        task => task.name !== action.value.name
      )
      return filteredState
    default:
      return state
  }
}

const TasksProvider: FC = ({ children }) => {
  const [tasks, dispatch] = useReducer(reducer, [])

  function addTask(newTask: ITask) {
    dispatch({
      type: ActionTypes.addTask,
      value: newTask,
    })
  }

  function deleteTask(newTask: ITask) {
    dispatch({
      type: ActionTypes.deleteTask,
      value: newTask,
    })
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
