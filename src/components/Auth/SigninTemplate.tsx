import React from 'react'

import AuthFormElement from './AuthFormElement'
import { Wrapper } from './SigninTemplate.styles'

export default function SigninTemplate() {
  return (
    <Wrapper>
      <AuthFormElement name="Username" />
      <AuthFormElement name="Password" password />
    </Wrapper>
  )
}
