import styled from "styled-components"

export const MainGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(1em, 1fr) minmax(0, 700px) minmax(1em, 1fr);

  @media (min-width: 700px) {
    grid-template-columns: minmax(1em, 1fr) minmax(0, 1160px) minmax(1em, 1fr);
  }
`

export const Container = styled.div`
  grid-column: 2/-2;

  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${({ $marginTop }) => $marginTop};
`

export const MainContainer = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
`
