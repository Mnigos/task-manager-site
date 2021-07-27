import styled from 'styled-components'

import { theme } from 'assets/styles/theme'

export const Wrapper = styled.div`
  background-color: ${theme.colors.background};
  width: 40vw;
  border-radius: 20px;
  height: 100vh;
  margin: 40px;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export const Header = styled.header`
  margin: 35px;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Alert = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-self: center;
  justify-content: center;
  align-items: center;
`
