import React from 'react'
import { useRouter } from 'next/router'

import { Label } from '../items/Label'
import { Button } from '../items/Button'

import AuthFormElement from './AuthFormElement'
import { Wrapper, Header, Form, Alert } from './AuthTemplates.styles'

export default function SignupTemplate() {
  const router = useRouter()

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
      <Alert>
        <p>Already have an account?</p>
        <Button onClick={() => router.push('/auth/signin')}>Sign in</Button>
      </Alert>
    </Wrapper>
  )
}
