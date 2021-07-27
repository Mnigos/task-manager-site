import styled from 'styled-components'

import { theme } from 'assets/styles/theme'

export const Item = styled.div`
  margin: 10px;
  padding: 4px;
  width: 328px;
  height: 55px;
  font-size: ${theme.fontSize.xl};
  align-items: center;
  border-radius: 4px;
  margin: 7px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.16), 0px 2px 4px rgba(0, 0, 0, 0.12),
    0px 1px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  background-color: ${theme.colors.background};

  p {
    word-wrap: initial;
    overflow-wrap: anywhere;
  }

  button {
    min-width: 30px;
    margin: 10px;
  }
`
