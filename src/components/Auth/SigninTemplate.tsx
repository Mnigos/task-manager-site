import React from 'react'
import { useRouter } from 'next/router'

import { Label } from '../items/Label'
import { Button } from '../items/Button'

import AuthFormElement from './AuthFormElement'
import { Wrapper, Header, Form, Alert } from './AuthTemplates.styles'

export default function SigninTemplate() {
  const router = useRouter()

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
      <Alert>
        <p>Don&apos;t have an account?</p>
        <Button onClick={() => router.push('/auth/signup')}>Sign in</Button>
      </Alert>
    </Wrapper>
  )
}
