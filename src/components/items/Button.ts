import styled from 'styled-components'

import { theme } from 'assets/styles/theme'

interface ButtonProps {
  isDarker?: boolean
  size?: 's' | 'm' | 'l' | 'xl'
  type?: 'button' | 'submit' | 'reset'
}

export const Button = styled.button<ButtonProps>`
  background-color: ${theme.colors.background};
  color: ${theme.colors.white};
  border: none;
  width: ${({ size }) => {
    if (size === 'xl') return '500px'
    else if (size === 'l') return '350px'
    else if (size === 'm') return '250px'
    else return '100px'
  }};
  height: ${({ size }) => {
    if (size === 'xl') return '150px'
    else if (size === 'l') return '100px'
    else if (size === 'm') return '80px'
    else return '30px'
  }};
  border-radius: 10px;
  margin: 3px;
  position: sticky;
  left: 0;
  top: 0;
  &:hover::after {
    transform: translateX(-50%);
    width: 80%;
  }
  &::after {
    content: '';
    width: 0;
    height: 2px;
    background-color: ${theme.colors.white};
    position: absolute;
    bottom: 0;
    left: 50%;
    transition: 0.5s ease-in-out;
    cursor: pointer;
  }
  &:active {
    background-color: ${theme.colors.background};
  }
`
