import styled from 'styled-components'

interface InputProps {
  size?: 's' | 'm' | 'l' | 'xl'
}

export const Input = styled.input<InputProps>`
  border-radius: 5px;
  border: none;

  width: ${({ size }) => {
    if (size === 'xl') return '600px'
    else if (size === 'l') return '450px'
    else if (size === 'm') return '300px'
    else return '150px'
  }};
  height: ${({ size }) => {
    if (size === 'xl') return '120px'
    else if (size === 'l') return '80px'
    else if (size === 'm') return '60px'
    else return '20px'
  }};

  &:hover,
  &:focus,
  &:active {
    outline: none;
  }
`
