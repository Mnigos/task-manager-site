import styled from 'styled-components'
import React, { MouseEventHandler } from 'react'

import { theme } from 'assets/styles/theme'

interface DeleteButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>
}

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

function DeleteButton({ onClick, ...props }: DeleteButtonProps) {
  return (
    <StyledButton onClick={onClick} {...props}>
      X
    </StyledButton>
  )
}

export default DeleteButton
