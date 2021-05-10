import React from 'react'

import { Label } from '../items/Label'

import AuthFormElement from './AuthFormElement'
import { Wrapper, Header } from './SigninTemplate.styles'

export default function SigninTemplate() {
  return (
    <Wrapper>
      <Header>
        <Label as="b" size="xl">
          Sign in
        </Label>
      </Header>
      <div>
        <AuthFormElement name="Username" />
        <AuthFormElement name="Password" password />
      </div>
    </Wrapper>
  )
}
