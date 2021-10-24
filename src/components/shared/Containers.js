import styled from "styled-components"

export const ContainerMain = styled.div`
  width: 90%;
  max-width: 1440px;
  margin: 0 auto;
  /* border: 5px solid goldenrod; */
`

export const Content = styled.div`
  max-width: 1160px;
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent};
  margin: 0 auto;
  margin-top: ${({ marginTop }) => marginTop};
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
