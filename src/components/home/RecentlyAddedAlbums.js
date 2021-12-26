import { useContext } from "react"
import { Link } from "react-router-dom"
import * as ROUTES from "../../constants/routes"
import AlbumsGrid from "../shared/grids/AlbumsGrid"

import { ButtonPrimary } from "../shared/Buttons"
import AlbumsDataContext from "../../context/albumsData"
import useMatchMedia from "../../hooks/useMatchMedia"
import { MainGrid, Container } from "../shared/Containers"
import SectionTitle from "../shared/TypographyElements"

function RecentlyAddedAlbums() {
  const isTablet = useMatchMedia("(min-width: 600px)", true)
  const isDesktopResolution = useMatchMedia("(min-width: 1024px)", true)

  const howManyAlbumsToShow = () => {
    // show 8 albums by default if screen width is 0px - 600px
    let slice = {
      start: 0,
      end: 8,
    }

    // show 8 albums if screen width is more than 1024px
    if (isTablet && isDesktopResolution) {
      slice = {
        start: 0,
        end: 8,
      }

      // show 9 albums if screen width is 600px-1024px
    } else if (isTablet) {
      slice = {
        start: 0,
        end: 9,
      }
    }
    return slice
  }

  const albumsSlice = howManyAlbumsToShow()

  const { albumsData } = useContext(AlbumsDataContext)

  return (
    <MainGrid>
      <Container $marginTop="4em">
        <SectionTitle>Recently added albums</SectionTitle>
        <AlbumsGrid albumsSlice={albumsSlice} albumsData={albumsData} />
        <ButtonPrimary as={Link} to={ROUTES.CATALOG} $marginTop="2em">
          View all
        </ButtonPrimary>
      </Container>
    </MainGrid>
  )
}

export default RecentlyAddedAlbums
