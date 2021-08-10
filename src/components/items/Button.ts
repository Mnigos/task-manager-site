import styled from 'styled-components'

import { theme } from 'assets/styles/theme'

interface ButtonProps {
  isDarker?: boolean
  size?: 's' | 'm' | 'l' | 'xl'
  type?: 'button' | 'submit' | 'reset'
  shape?: 'raised' | 'ghost'
  color?: 'primary' | 'white' | 'secondary' | 'black'
}

export const Button = styled.button<ButtonProps>`
  background-color: ${({ shape, color }) => {
    if (shape === 'ghost') return theme.colors.white
    else return theme.colors[color || 'primary']
  }};
  color: ${({ color, shape }) => {
    if (color === 'white') return theme.colors.black
    if (shape === 'ghost') return theme.colors[color || 'primary']
    else return theme.colors.white
  }};
  border: ${({ shape, color }) => {
    if (shape === 'ghost')
      return `1px ${theme.colors[color || 'primary']} solid`
    else return 'none'
  }};
  width: ${({ size }) => {
    if (size === 'xl') return '400px'
    else if (size === 'l') return '320px'
    else if (size === 'm') return '220px'
    else return '70px'
  }};
  height: ${({ size }) => {
    if (size === 'xl') return '150px'
    else if (size === 'l') return '100px'
    else if (size === 'm') return '80px'
    else return '30px'
  }};
  box-shadow: ${({ shape }) => {
    if (shape === 'ghost') return 'none'
    else
      return `0px 1px 2px rgba(0, 0, 0, 0.16), 0px 2px 4px rgba(0, 0, 0, 0.12),
    0px 1px 8px rgba(0, 0, 0, 0.1)`
  }};
  cursor: pointer;
  text-transform: uppercase;
  border-radius: 4px;
  margin: 7px;
  position: sticky;
  left: 0;
  top: 0;
  transition: 0.05s ease-in;

  &:hover {
    box-shadow: ${({ shape }) => {
      if (shape === 'ghost') return 'none'
      else
        return `1px 3px 4px rgba(0, 0, 0, 0.16), 1px 4px 6px rgba(0, 0, 0, 0.12),
    1px 3px 10px rgba(0, 0, 0, 0.1)`
    }};
  }

  &:active {
    transform: translatey(3px);

    &::after {
      transform: translatey(3px);
    }
  }
`
