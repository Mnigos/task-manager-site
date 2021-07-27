import { Button } from '../items/Button'

import { Wrapper, H1 } from './NavBar.styles'

export default function NavBar() {
  return (
    <Wrapper>
      <header>
        <H1>Task Manager</H1>
      </header>
      <div>
        <Button color="white">Sign In</Button>
        <Button color="secondary">Sign Up</Button>
      </div>
    </Wrapper>
  )
}
