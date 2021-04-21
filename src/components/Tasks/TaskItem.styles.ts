import styled from 'styled-components'

import { theme } from 'assets/styles/theme'

export const Item = styled.p`
  margin: 10px;
  padding: 4px;
  max-width: 400px;
  min-height: 50px;
  display: flex;
  font-size: ${theme.fontSize.xl};
  align-items: center;
  min-width: 200px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  background-color: ${theme.colors.background};

  &:hover {
    cursor: pointer;
    background: #1a1a1a;
  }
`
