import React, { InputHTMLAttributes, forwardRef } from 'react'

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

const AuthFormElement = forwardRef<HTMLInputElement, AuthFormElementProps>(
  ({ name, password, value, onChange, ...props }, ref) => {
    return (
      <FormWrapper>
        <Label as="label" htmlFor={name} size="m">
          {name}
        </Label>
        <Input
          id={name}
          type={password ? 'password' : 'text'}
          value={value}
          onChange={onChange}
          {...props}
          ref={ref}
        />
      </FormWrapper>
    )
  }
)

AuthFormElement.displayName = 'AuthFormElement'

export default AuthFormElement

/*
{
  name,
  password,
  ...props
}) {
  return (
    <FormWrapper>
      <Label as="label" htmlFor={name} size="m">
        {name}
      </Label>
      <Input id={name} type={password ? 'password' : 'text'} {...props} />
    </FormWrapper>
  )
} */
