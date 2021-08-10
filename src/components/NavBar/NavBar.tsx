import router from 'next/router'

import { Button } from '../items/Button'

import { Wrapper, H1, HeaderButton } from './NavBar.styles'

export default function NavBar() {
  const push = (path: string) => () => router.push(path)

  return (
    <Wrapper>
      <header>
        <HeaderButton onClick={push('/')}>
          <H1>Task Manager</H1>
        </HeaderButton>
      </header>
      <div>
        <Button color="white" onClick={push('/auth/signin')}>
          Sign In
        </Button>
        <Button color="secondary" onClick={push('/auth/signup')}>
          Sign Up
        </Button>
      </div>
    </Wrapper>
  )
}
