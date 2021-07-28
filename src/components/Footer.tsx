import styled from 'styled-components'

const Wrapper = styled.footer`
  display: flex;
  justify-content: center;
  padding: 20px;
  border-top: 1px #c0c0c0 solid;
`

export default function Footer() {
  return (
    <Wrapper>
      Copyright &copy;
      {new Date().getFullYear()}
      Igor Makowski
    </Wrapper>
  )
}
