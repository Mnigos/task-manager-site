import React from 'react'
import { render } from '@testing-library/react'
import { mount } from 'enzyme'

import Tasks from './Tasks'

const tasksMock = [
  {
    name: 'Task nr. One',
  },
  {
    name: 'Task nr. Two',
  },
]

describe('Task Item', () => {
  it('Renders component', () => {
    render(<Tasks tasks={tasksMock} />)
  })

  it('Value displays', () => {
    const wrapper = mount(<Tasks tasks={tasksMock} />)

    expect(wrapper.find('p').at(0).text()).toEqual(tasksMock[0].name)
    expect(wrapper.find('p').at(1).text()).toEqual(tasksMock[1].name)
  })
})
