import { css } from "styled-components"

const MainGridSharedStyle = css`
  display: grid;
  grid-template-columns: minmax(1em, 1fr) minmax(0, 500px) minmax(1em, 1fr);

  /* > * {
    grid-column: 2 / -2;
  } */

  /* @media (min-width: 600px) {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1160px) minmax(0, 1fr);
  } */

  @media (min-width: 700px) {
    grid-template-columns: minmax(1em, 1fr) minmax(0, 1160px) minmax(1em, 1fr);

    /* & > * {
      grid-column: 2 / -2;
    } */
  }
`

export default MainGridSharedStyle
