import React, { useContext } from 'react'
import { mount } from 'enzyme'

import TasksProvider, { TasksContext } from './TasksProvider'

describe('Tasks Provider', () => {
  const taskName = 'New Task'

  function TestComponent() {
    const { tasks, addTask, deleteTask } = useContext(TasksContext)

    return (
      <>
        <p data-testid="value">{...tasks}</p>
        <button onClick={() => addTask(taskName)}>Add Task</button>
        <button onClick={() => deleteTask(taskName)}>Delete Task</button>
      </>
    )
  }

  const wrapper = mount(
    <TasksProvider>
      <TestComponent />
    </TasksProvider>
  )
  it('Add task', () => {
    expect(wrapper.find('[data-testid="value"]').text()).toEqual('')

    wrapper.find('button').at(0).simulate('click')

    expect(wrapper.find('[data-testid="value"]').text()).toEqual(taskName)
  })

  it('Deleting task', () => {
    wrapper.find('button').at(1).simulate('click')

    expect(wrapper.find('[data-testid="value"]').text()).toEqual('')
  })
})
