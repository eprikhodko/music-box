import styled from "styled-components"

import { useContext } from "react"
import { Link } from "react-router-dom"
import * as ROUTES from "../constants/routes"
import AlbumsGrid from "./shared/grids/AlbumsGrid"

import { Content } from "./shared/Containers"
import { HeroButton } from "./shared/Buttons"
import AlbumsDataContext from "../context/albumsData"
import useMatchMedia from "../hooks/useMatchMedia"

const Subtitle = styled.h2`
  font-size: 3rem;
  text-align: center;
`

function RecentlyAddedAlbums() {
  const isTabletOrMobile = useMatchMedia("(min-width: 600px)", true)
  const isDesktopResolution = useMatchMedia("(min-width: 1024px)", true)

  // console.log(isTabletOrMobile, isDesktopResolution)

  const howManyAlbumsToShow = () => {
    // show 8 albums by default
    let slice = {
      start: 0,
      end: 8,
    }
    // console.log("default value, render 8 albums")

    if (isTabletOrMobile && isDesktopResolution) {
      slice = {
        start: 0,
        end: 8,
      }
      // console.log("render 8 albums")
    } else if (isTabletOrMobile) {
      slice = {
        start: 0,
        end: 9,
      }
      // console.log("render 9 albums")
    }
    return slice
  }

  const albumsSlice = howManyAlbumsToShow()

  const { albumsData } = useContext(AlbumsDataContext)

  return (
    <Content flexDirection="column" alignItems="center" $marginTop="4.5em">
      <Subtitle>Recently added albums</Subtitle>
      <AlbumsGrid albumsSlice={albumsSlice} albumsData={albumsData} />
      <HeroButton as={Link} to={ROUTES.CATALOG} $marginTop="2em">
        View all
      </HeroButton>
    </Content>
  )
}

export default RecentlyAddedAlbums
