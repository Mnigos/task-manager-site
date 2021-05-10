import React from 'react'

import { Label } from '../items/Label'
import { Button } from '../items/Button'

import AuthFormElement from './AuthFormElement'
import { Wrapper, Header, Form } from './SigninTemplate.styles'

export default function SigninTemplate() {
  return (
    <Wrapper>
      <Header>
        <Label as="b" size="l">
          Sign in to TaskManager
        </Label>
      </Header>
      <Form>
        <AuthFormElement name="Username" />
        <AuthFormElement name="Password" password />
        <Button type="submit">Sign in</Button>
      </Form>
    </Wrapper>
  )
}
