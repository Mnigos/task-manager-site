import styled from 'styled-components'

interface LabelProps {
  size?: 's' | 'm' | 'l' | 'xl'
}

export const Label = styled.p<LabelProps>`
  margin: 2px;

  font-size: ${({ size }) => {
    if (size === 'xl') return '42px'
    else if (size === 'l') return '32px'
    else if (size === 'm') return '24px'
    else return '16px'
  }};
`
