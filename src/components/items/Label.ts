import styled from 'styled-components'

import { theme } from 'assets/styles/theme'

interface LabelProps {
  size?: 's' | 'm' | 'l' | 'xl'
  color?: 'error' | 'warn'
}

export const Label = styled.p<LabelProps>`
  margin: 2px;

  font-size: ${({ size }) => {
    if (size === 'xl') return '42px'
    else if (size === 'l') return '32px'
    else if (size === 'm') return '24px'
    else return '16px'
  }};

  color: ${({ color }) => {
    if (color === 'error') return theme.colors.error
    else if (color === 'warn') return theme.colors.warning
    else return theme.colors.white
  }};
`
