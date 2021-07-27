import styled from 'styled-components'

import { theme } from 'assets/styles/theme'

interface InputProps {
  color?: 'primary' | 'white' | 'secondary' | 'black'
  size?: 's' | 'm' | 'l' | 'xl'
}

export const Input = styled.input<InputProps>`
  border-radius: 4px;
  margin: 7px;
  position: sticky;
  left: 0;
  top: 0;

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

  color: ${theme.colors.black};
  border: ${({ color }) => `1px ${theme.colors[color || 'primary']} solid`};
  &:hover,
  &:focus,
  &:active {
    outline: none;
  }
`
