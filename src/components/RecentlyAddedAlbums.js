import styled from "styled-components"

import { useContext } from "react"
import { Link } from "react-router-dom"
import * as ROUTES from "../constants/routes"
import AlbumsGrid from "./shared/grids/AlbumsGrid"

import { Content } from "./shared/Containers"
import { HeroButton } from "./shared/Buttons"
import AlbumsDataContext from "../context/albumsData"

const Subtitle = styled.h2`
  font-size: 3rem;
  text-align: center;
`

function RecentlyAddedAlbums() {
  const slice = {
    start: 0,
    end: 8,
  }

  const { albumsData } = useContext(AlbumsDataContext)

  return (
    <Content flexDirection="column" alignItems="center" $marginTop="4.5em">
      <Subtitle>Recently added albums</Subtitle>
      <AlbumsGrid albumsSlice={slice} albumsData={albumsData} />
      <HeroButton as={Link} to={ROUTES.CATALOG} $marginTop="2em">
        View all
      </HeroButton>
    </Content>
  )
}

export default RecentlyAddedAlbums
