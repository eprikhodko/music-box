import styled from "styled-components"
import * as ROUTES from "../constants/routes"
import AlbumsGrid from "./shared/AlbumsGrid"

import { Content, ContainerMain } from "./shared/Containers"
import LinkAsButton from "./shared/buttons/LinkAsButton"

const Title = styled.h2`
  font-size: 4.5rem;
  color: #000;
  font-weight: 500;
  /* text-align: center; */
  /* border: 1px solid teal; */
`

function RecentlyAddedAlbums() {
  const slice = {
    start: 0,
    end: 8,
  }
  return (
    <section>
      <ContainerMain>
        <Content flexDirection="column" alignItems="center" marginTop="4.5em">
          <Title>Recently added albums</Title>
          <AlbumsGrid albumsSlice={slice} />
          <LinkAsButton to={ROUTES.CATALOG} hero text="View all" />
        </Content>
      </ContainerMain>
    </section>
  )
}

export default RecentlyAddedAlbums
