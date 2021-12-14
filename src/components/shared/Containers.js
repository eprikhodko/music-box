import styled from "styled-components"
// import MainGridSharedStyle from "../../pages/sharedStyles"

export const MainGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(1em, 1fr) minmax(0, 700px) minmax(1em, 1fr);

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

export const ContainerMain = styled.div`
  /* ########## make Footer stick to the bottom of the page ########## */
  /* set ContainerMain height to 100vh, this means that ContainerMain will take 100% of viewport height */
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  /* border: 5px solid goldenrod; */
`

export const Content = styled.div`
  /* set padding to the edges of the content so it won't stick to the device screen edges */
  /* width: ${({ $width }) => $width || "95%"}; */
  max-width: 72.5em;
  display: ${({ display }) => display || "flex"};
  justify-content: ${({ justifyContent }) => justifyContent};
  margin: 0 auto;
  margin-top: ${({ $marginTop }) => $marginTop};
  flex-direction: ${({ flexDirection }) => flexDirection};
  align-items: ${({ alignItems }) => alignItems};

  /* border: 1px solid magenta; */

  /* @media (min-width: 75.4em) {
    margin: 0 auto;
  } */

  /* grid-column: 2 / -2; */
`

export const CenterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  grid-column: 2/-2;

  margin-top: ${({ $marginTop }) => $marginTop};
`
