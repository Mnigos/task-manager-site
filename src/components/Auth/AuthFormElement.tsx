import React, { InputHTMLAttributes } from 'react'

import { Input } from '../items/Input'
import { Label } from '../items/Label'

import { FormWrapper } from './AuthFormElement.styles'

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'size' | 'color'
>

interface AuthFormElementProps extends HTMLInputProps {
  name: string
  password?: boolean
}

export default function AuthFormElement({
  name,
  password,
  ...props
}: AuthFormElementProps) {
  return (
    <FormWrapper>
      <Label as="label" htmlFor={name} size="m">
        {name}
      </Label>
      <Input id={name} type={password ? 'password' : 'text'} {...props} />
    </FormWrapper>
  )
}
