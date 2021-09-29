import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  * {box-sizing: border-box;}

  body {
    margin: 0;
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
    color: rgba(0, 0, 0, 0.7);
    font-weight: 500;
    line-height: 1.6;
  }

  h1, h2, strong {
    font-weight: 800;
  }
`

export default GlobalStyle
