import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,700;1,300&display=swap');

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
  }
`
