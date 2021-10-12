import styled from "styled-components"
import * as ROUTES from "../constants/routes"
import AlbumsGrid from "./AlbumsGrid"

import Container from "./containers/Container"
import ContainerMain from "./containers/ContainerMain"
import LinkAsButton from "./LinkAsButton"

const RecentlyAddedAlbumsSection = styled.section`
  margin-top: 4.5em;
`

const Title = styled.h2`
  font-size: 4.5rem;
  color: #000;
  font-weight: 500;
`

const ContainerFlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  /* border: 1px solid; */
`

function RecentlyAddedAlbums() {
  return (
    <ContainerMain>
      <RecentlyAddedAlbumsSection>
        <Container>
          <ContainerFlexColumn>
            <Title>Recently added albums</Title>
            <AlbumsGrid gridForHomePage />
            <LinkAsButton to={ROUTES.CATALOG} text="Show more" />
          </ContainerFlexColumn>
        </Container>
      </RecentlyAddedAlbumsSection>
    </ContainerMain>
  )
}

export default RecentlyAddedAlbums
