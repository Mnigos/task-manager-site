import React from 'react'
import { render } from '@testing-library/react'

import { Button } from './Button'

describe('Button', () => {
  it('Render component', () => {
    render(<Button />)
  })
})
