import React from 'react'
import { render } from '@testing-library/react'
import { mount } from 'enzyme'

import TaskItem from './TaskItem'

const mockTask = { name: 'Do some work' }

describe('Task Item', () => {
  it('Renders component', () => {
    render(<TaskItem task={mockTask} />)
  })

  it('Value displays', () => {
    const wrapper = mount(<TaskItem task={mockTask} />)

    expect(wrapper.find('p').text()).toEqual('Do some work')
  })
})
