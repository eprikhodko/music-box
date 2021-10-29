import styled from "styled-components"
import { Link } from "react-router-dom"
import * as ROUTES from "../constants/routes"
import AlbumsGrid from "./shared/grids/AlbumsGrid"

import { Content } from "./shared/Containers"
import { HeroButton } from "./shared/Button"

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
    <Content flexDirection="column" alignItems="center" $marginTop="4.5em">
      <Title>Recently added albums</Title>
      <AlbumsGrid albumsSlice={slice} />
      <HeroButton as={Link} to={ROUTES.CATALOG}>
        View all
      </HeroButton>
    </Content>
  )
}

export default RecentlyAddedAlbums
