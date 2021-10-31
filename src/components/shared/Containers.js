import styled from "styled-components"

export const ContainerMain = styled.div`
  width: 90%;
  max-width: 90em;
  margin: 0 auto;
  border: 5px solid goldenrod;

  /* ########## make Footer stick to the bottom of the page ########## */
  /* set ContainerMain height to 100vh. This means that ContainerMain will take 100% of viewport height*/
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

export const Content = styled.div`
  max-width: 72.5em;
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent};
  margin: 0 auto;
  margin-top: ${({ $marginTop }) => $marginTop};
  flex-direction: ${({ flexDirection }) => flexDirection};
  align-items: ${({ alignItems }) => alignItems};

  /* border: 1px solid magenta; */
`

export const CenterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`
