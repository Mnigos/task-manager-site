import React from 'react'
import { render } from '@testing-library/react'
import { mount } from 'enzyme'

import AddTask from './AddTask'

const tasksMock = [
  {
    name: 'Task nr. One',
  },
  {
    name: 'Task nr. Two',
  },
]

const value = {
  name: '',
}

describe('Task Item', () => {
  it('Renders component', () => {
    render(<AddTask />)
  })

  xit('Add task', () => {
    const wrapper = mount(
      <>
        <AddTask />
        <p>
          {tasksMock.map((task, i) => (
            <i key={i}>{task.name}, </i>
          ))}
        </p>
        <b>{value.name}</b>
      </>
    )

    const input = wrapper
      .find('input')
      .simulate('change', { target: { value: 'Another task' } })

    expect(input.props().value).toEqual('Another task')

    wrapper.find('button').simulate('click')

    expect(wrapper.find('b').text()).toEqual(
      'Task nr. One, Task nr. Two, Another Task'
    )
  })
})
