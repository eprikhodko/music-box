import { Link } from "react-router-dom"
import * as ROUTES from "../constants/routes"
import AlbumsGrid from "./shared/grids/AlbumsGrid"

import { Content } from "./shared/Containers"
import { HeroButton } from "./shared/Button"

function RecentlyAddedAlbums() {
  const slice = {
    start: 0,
    end: 8,
  }
  return (
    <Content flexDirection="column" alignItems="center" $marginTop="4.5em">
      <h2>Recently added albums</h2>
      <AlbumsGrid albumsSlice={slice} />
      <HeroButton as={Link} to={ROUTES.CATALOG}>
        View all
      </HeroButton>
    </Content>
  )
}

export default RecentlyAddedAlbums
