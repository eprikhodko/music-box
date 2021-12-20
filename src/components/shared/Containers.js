import styled from "styled-components"

export const MainGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(1em, 1fr) minmax(0, 700px) minmax(1em, 1fr);

  @media (min-width: 700px) {
    grid-template-columns: minmax(1em, 1fr) minmax(0, 1160px) minmax(1em, 1fr);
  }
`

// export const Content = styled.div`
//   /* set padding to the edges of the content so it won't stick to the device screen edges */
//   max-width: 72.5em;
//   display: ${({ display }) => display || "flex"};
//   justify-content: ${({ justifyContent }) => justifyContent};
//   margin: 0 auto;
//   margin-top: ${({ $marginTop }) => $marginTop};
//   flex-direction: ${({ flexDirection }) => flexDirection};
//   align-items: ${({ alignItems }) => alignItems};
// `

// export const CenterContent = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   margin: 0 auto;
// `

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  grid-column: 2/-2;

  margin-top: ${({ $marginTop }) => $marginTop};
`

export const MainContainer = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
`
