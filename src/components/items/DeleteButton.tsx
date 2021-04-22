import styled from 'styled-components'
import { FC } from 'react'

import { theme } from 'assets/styles/theme'

const StyledButton = styled.button`
  width: 30px;
  height: 30px;
  background-color: #111;
  border-radius: 50px;
  border: none;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: ${theme.colors.black};
  }
`

const DeleteButton: FC = props => <StyledButton {...props}>X</StyledButton>

export default DeleteButton
