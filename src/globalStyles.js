import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`

html, body, #root, .App {
  height: 100%;
}

/* set base font size to 10px */
html {
  /* 62.5% of 16px base font size is 10px */
  font-size: 62.5%;
}

* {box-sizing: border-box;}

body {
  margin: 0;
  font-family: 'Inter', sans-serif;
  /* if we won't specify font-size of the body, font size of html will be used instead, which is 16px in this case.
  This way we can use 1em as 10px. If we'll specify the font-size of body and set it to 1.6rem, (which is 16px),
  1em will become 16px */
  font-size: 1.6rem;
  color: rgba(0, 0, 0, 0.7);
  font-weight: 500;
  line-height: 1.6;
  background-color: #dbdbdb;
}

h1, h2, h3, strong {
  font-weight: 500;
  margin: 0;
}

h1, h2 {
  color: #000;
}

h2 { 
  font-size: 4.5rem;
}

h3 {
  font-size: 2.5rem;
  color: rgba(0, 0, 0, 0.7);
}
`

export default GlobalStyle
