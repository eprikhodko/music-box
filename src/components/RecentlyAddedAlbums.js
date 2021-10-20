import styled from "styled-components"
import * as ROUTES from "../constants/routes"
import AlbumsGrid from "./AlbumsGrid"

import { Content, ContainerMain } from "./shared/Containers"
import LinkAsButton from "./shared/buttons/LinkAsButton"

const RecentlyAddedAlbumsSection = styled.section`
  margin-top: 4.5em;
`

const Title = styled.h2`
  font-size: 4.5rem;
  color: #000;
  font-weight: 500;
  /* text-align: center; */
  /* border: 1px solid teal; */
`

const CenterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`

function RecentlyAddedAlbums() {
  const slice = {
    start: 0,
    end: 8,
  }
  return (
    <ContainerMain>
      <RecentlyAddedAlbumsSection>
        <Content>
          <CenterContent>
            <Title>Recently added albums</Title>
            <AlbumsGrid albumsSlice={slice} />
            <LinkAsButton to={ROUTES.CATALOG} hero text="View all" />
          </CenterContent>
        </Content>
      </RecentlyAddedAlbumsSection>
    </ContainerMain>
  )
}

export default RecentlyAddedAlbums
