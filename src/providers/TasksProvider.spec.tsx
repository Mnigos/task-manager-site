import React, { useContext } from 'react'
import { mount, ReactWrapper } from 'enzyme'

import TasksProvider, { TasksContext } from './TasksProvider'

const task = {
  name: 'New Task',
}

function TestComponent() {
  const { tasks, addTask, deleteTask } = useContext(TasksContext)

  return (
    <>
      <div data-testid="value">
        {tasks.map((task, i) => (
          <div key={i}>
            <p>{task.id}</p>
            <p>{task.name}</p>
          </div>
        ))}
      </div>
      <button data-testid="add-user" onClick={() => addTask(task)}>
        Add Task
      </button>
      <button onClick={() => deleteTask(task)}>Delete Task</button>
    </>
  )
}

describe('Tasks Provider', () => {
  let wrapper: ReactWrapper

  beforeEach(() => {
    wrapper = mount(
      <TasksProvider>
        <TestComponent />
      </TasksProvider>
    )
  })

  it('Add task', () => {
    expect(wrapper.find('[data-testid="value"]').text()).toEqual('')

    wrapper.find('[data-testid="add-user"]').simulate('click')

    expect(wrapper.find('[data-testid="value"]').text()).toEqual(task.name)
  })

  it('Delete task', () => {
    wrapper.find('[data-testid="add-user"]').simulate('click')
    wrapper.find('button').at(1).simulate('click')

    expect(wrapper.find('[data-testid="value"]').text()).toEqual('')
  })
})
