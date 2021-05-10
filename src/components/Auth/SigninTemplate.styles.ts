import styled from 'styled-components'

import { theme } from 'assets/styles/theme'

export const Wrapper = styled.div`
  background-color: ${theme.colors.backgroundComponent};
  width: 40vw;
  border-radius: 20px;
  min-height: 70vh;
  margin: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Header = styled.header`
  margin: 35px;
`
