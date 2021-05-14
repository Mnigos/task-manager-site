import React from 'react'

import { Label } from '../items/Label'
import { Button } from '../items/Button'

import AuthFormElement from './AuthFormElement'
import { Wrapper, Header, Form } from './AuthTemplates.styles'

export default function SignupTemplate() {
  return (
    <Wrapper>
      <Header>
        <Label as="b" size="l">
          Sign up to TaskManager
        </Label>
      </Header>
      <Form>
        <AuthFormElement name="Username" />
        <AuthFormElement name="email" />
        <AuthFormElement name="Password" password />
        <AuthFormElement name="Password" password />
        <Button type="submit">Sign up</Button>
      </Form>
    </Wrapper>
  )
}
