import { createGlobalStyle } from 'styled-components'

import { theme } from './theme'

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, *::after, *::before {
    box-sizing: inherit;
  }

  body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    color: ${theme.colors.white};
    background-color: ${theme.colors.background};
  }
`
