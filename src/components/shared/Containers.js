import styled from "styled-components"

export const ContainerMain = styled.div`
  /* ########## make Footer stick to the bottom of the page ########## */
  /* set ContainerMain height to 100vh, this means that ContainerMain will take 100% of viewport height */
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  border: 5px solid goldenrod;
`

export const Content = styled.div`
  width: 90%;
  max-width: 72.5em;
  display: ${({ display }) => display || "flex"};
  justify-content: ${({ justifyContent }) => justifyContent};
  margin: 0 auto;
  margin-top: ${({ $marginTop }) => $marginTop};
  flex-direction: ${({ flexDirection }) => flexDirection};
  align-items: ${({ alignItems }) => alignItems};

  border: 1px solid magenta;
`

export const CenterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`

export const PageBody = styled.main`
  /* flex-grow defines how much a flexbox item should grow if there's space available */
  /* make PageBody fill up all remaining space if no other flexbox item has a flex-grow value*/
  flex-grow: 1;
`
