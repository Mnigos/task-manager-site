import React, { FormEvent, useRef } from 'react'
import { useRouter } from 'next/router'

import { Label } from '../items/Label'
import { Button } from '../items/Button'

import AuthFormElement from './AuthFormElement'
import { Wrapper, Header, Form, Alert } from './authTemplates.styles'

import { useAuth } from 'providers/AuthProvider'

export default function SignupTemplate() {
  const router = useRouter()
  const { signup } = useAuth()

  const credentials = {
    username: useRef<HTMLInputElement>(null),
    email: useRef<HTMLInputElement>(null),
    password: useRef<HTMLInputElement>(null),
    passwordConfirmation: useRef<HTMLInputElement>(null),
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const { email, password } = credentials

    signup(email.current?.value as string, password.current?.value as string)
  }

  return (
    <Wrapper>
      <div>
        <Header>
          <Label as="b" size="l">
            Sign up to TaskManager
          </Label>
        </Header>
        <Form onSubmit={handleSubmit}>
          <AuthFormElement name="Username" ref={credentials.username} />
          <AuthFormElement name="E-mail" ref={credentials.email} />
          <AuthFormElement
            name="Password"
            password
            ref={credentials.password}
          />
          <AuthFormElement
            name="Password Confirmation"
            password
            ref={credentials.passwordConfirmation}
          />
          <Button type="submit">Sign up</Button>
        </Form>
      </div>
      <Alert>
        <p>Already have an account?</p>
        <Button onClick={() => router.push('/auth/signin')}>Sign in</Button>
      </Alert>
    </Wrapper>
  )
}
