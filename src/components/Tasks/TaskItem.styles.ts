import styled from 'styled-components'

import { theme } from 'assets/styles/theme'

export const Item = styled.div`
  margin: 10px;
  padding: 4px;
  max-width: 400px;
  min-height: 50px;
  font-size: ${theme.fontSize.xl};
  align-items: center;
  min-width: 200px;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  background-color: ${theme.colors.background};

  p {
    word-wrap: initial;
    overflow-wrap: anywhere;
  }

  &:hover {
    cursor: pointer;
    background: #1a1a1a;
  }

  button {
    min-width: 30px;
    margin: 10px;
  }
`
