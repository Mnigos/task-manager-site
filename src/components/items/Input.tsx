import { theme } from '@/assets/styles/theme'
import { InputHTMLAttributes } from 'react'
import styled from 'styled-components'

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'size' | 'color'
>

interface StyledInputProps {
  color?: 'primary' | 'white' | 'secondary' | 'black'
}

interface StyledWrapperProps {
  size?: 's' | 'm' | 'l' | 'xl'
}

interface InputProps
  extends StyledInputProps,
    StyledWrapperProps,
    HTMLInputProps {
  id?: string
  label?: string
}

export const StyledInput = styled.input<InputProps>`
  border-radius: 4px;
  margin: 7px;
  position: sticky;
  left: 0;
  top: 0;
  position: absolute;

  color: ${theme.colors.black};
  border: ${({ color }) => `1px ${theme.colors[color || 'primary']} solid`};
  &:hover,
  &:focus,
  &:active {
    outline: none;
  }
`

const StyledLabel = styled.label`
  position: absolute;
  left: 1rem;
  top: 0.45rem;
  padding: 0 0.5rem;
  color: ${theme.colors.black};
  cursor: text;
  transition: top 200ms ease-in, left 200ms ease-in, font-size 200ms ease-in;

  &:focus {
    top: -0.5rem;
    font-size: 0.8rem;
    left: 0.8rem;
  }
`

const Wrapper = styled.div<StyledWrapperProps>`
  position: relative;
  width: ${({ size }) => {
    if (size === 'xl') return '600px'
    else if (size === 'l') return '450px'
    else if (size === 'm') return '300px'
    else return '150px'
  }};
  height: ${({ size }) => {
    if (size === 'xl') return '150px'
    else if (size === 'l') return '100px'
    else if (size === 'm') return '80px'
    else return '30px'
  }};

  input:focus ~ label,
  input:not(:placeholder-shown)label:not(:focus) ~ label {
    top: -0.5rem;
    font-size: 0.8rem;
    left: 0.8rem;
  }
`

export function Input({
  size,
  color,
  label,
  id = 'input',
  ...props
}: InputProps) {
  return (
    <Wrapper size={size}>
      <StyledInput
        id={id}
        color={color}
        placeholder=" "
        {...props}
      ></StyledInput>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
    </Wrapper>
  )
}
