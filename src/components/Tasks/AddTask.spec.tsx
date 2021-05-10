import React, { useContext } from 'react'
import { render } from '@testing-library/react'
import { mount, ReactWrapper } from 'enzyme'

import AddTask from './AddTask'

import TasksProvider, { TasksContext } from 'providers/TasksProvider'

function TestComponent() {
  const { tasks } = useContext(TasksContext)

  return (
    <>
      <AddTask />
      <p data-testid="tasks">
        {tasks.map((task, i) => (
          <i key={i}>{task.name}, </i>
        ))}
      </p>
    </>
  )
}

describe('Task Item', () => {
  let wrapper: ReactWrapper

  beforeEach(() => {
    wrapper = mount(
      <TasksProvider>
        <TestComponent />
      </TasksProvider>
    )
  })

  it('Renders component', () => {
    render(<AddTask />)
  })

  xit('Add task', () => {
    wrapper
      .find('input')
      .simulate('change', { target: { value: 'Another task' } })

    wrapper.find('button').simulate('click')

    expect(wrapper.find('[data-testid="tasks"]').text()).toEqual('Another Task')
  })
})
