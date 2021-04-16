import React from 'react'
import { render } from '@testing-library/react'
import { mount } from 'enzyme'

import Tasks from './Tasks'

describe('Task Item', () => {
  it('Renders component', () => {
    render(<Tasks tasks={['Task nr. One', 'Task nr. Two']} />)
  })

  it('Value displays', () => {
    const wrapper = mount(<Tasks tasks={['Task nr. One', 'Task nr. Two']} />)

    expect(wrapper.find('p').at(0).text()).toEqual('Task nr. One')
    expect(wrapper.find('p').at(1).text()).toEqual('Task nr. Two')
  })
})
