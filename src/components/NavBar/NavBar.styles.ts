import styled from 'styled-components'

import { theme } from 'assets/styles/theme'

export const Wrapper = styled.div`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  height: 72px;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  align-items: center;
`

export const H1 = styled.h1`
  margin: 0;
  font-weight: 400;
  font-size: calc(${theme.fontSize.xl}* 1.1);
`
