import React from 'react'

import { Input } from '../items/Input'
import { Label } from '../items/Label'

import { FormWrapper } from './AuthFormElement.styles'

interface AuthFormElementProps {
  name: string
  password?: boolean
}

export default function AuthFormElement({
  name,
  password,
}: AuthFormElementProps) {
  return (
    <FormWrapper>
      <Label as="label" htmlFor={name} size="m">
        {name}
      </Label>
      <Input id={name} type={password ? 'password' : 'text'} />
    </FormWrapper>
  )
}
