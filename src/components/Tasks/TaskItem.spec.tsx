import React from 'react'
import { render } from '@testing-library/react'
import { mount } from 'enzyme'

import TaskItem from './TaskItem'

describe('Task Item', () => {
  it('Renders component', () => {
    render(<TaskItem value="Do some work" />)
  })

  it('Value displays', () => {
    const wrapper = mount(<TaskItem value="Do some work" />)

    expect(wrapper.find('p').text()).toEqual('Do some work')
  })
})
