import React from 'react'
import { render } from '@testing-library/react'

import TaskItem from './TaskItem'

describe('Task Item', () => {
  it('Renders component', () => {
    render(<TaskItem value="Do some work" />)
  })
})
