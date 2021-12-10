import PropTypes from "prop-types"
import styled from "styled-components"
import { useEffect } from "react"
import { CatalogButton } from "./Buttons"
import { ReactComponent as ArrowIcon } from "../../icons/search-arrow-icon.svg"
import useMatchMedia from "../../hooks/useMatchMedia"

const ButtonsContainer = styled.div`
  /* set width to 100% to avoid shrinking because of alignItems="center" at parent <Content /> component */
  width: 100%;
  margin-top: 2em;
  display: grid;
  grid-template-columns: 1fr 1fr 1em 1fr;
  grid-template-areas: ". show-more-button . back-to-top-button";
  justify-items: center;
  /* border: 1px solid; */
`

const ShowMoreButton = styled(CatalogButton)`
  grid-area: show-more-button;
`

const ContainerArrowIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  svg {
    height: 1.65em;
    width: 1.65em;
  }
  svg circle {
    fill: transparent;
    stroke-width: 1px;
  }
  &:hover {
    svg circle {
      fill: #000;
    }
    svg path {
      fill: #fff;
    }
  }
`

const ContainerArrowIconBig = styled(ContainerArrowIcon)`
  margin-left: auto;
  grid-area: back-to-top-button;
  svg {
    height: 3.5em;
    width: 3.5em;
    transform: rotate(270deg);
  }
`

function ShowMoreAndBackToTopButtons({
  albumsSlice,
  setAlbumsSlice,
  albumsData,
  componentsCount,
}) {
  const isTabletOrMobile = useMatchMedia("(min-width: 600px)", true)
  const isDesktopResolution = useMatchMedia("(min-width: 1024px)", true)

  console.log(isTabletOrMobile, isDesktopResolution)

  const howManyAlbumsToShow = () => {
    // show 8 albums by default
    let slice = 8

    // console.log("default value, render 8 albums")

    if (isTabletOrMobile && isDesktopResolution) {
      slice = 8
      // console.log("render 8 albums")
    } else if (isTabletOrMobile) {
      slice = 9
      // console.log("render 9 albums")
    }
    return slice
  }

  //   const albumsSlice = howManyAlbumsToShow()
  // console.log(albumsSlice)

  useEffect(() => {
    console.log(howManyAlbumsToShow())
  }, [isTabletOrMobile, isDesktopResolution])

  const showMore = () => {
    setAlbumsSlice((prevSlice) => ({
      ...prevSlice,
      end: prevSlice.end + howManyAlbumsToShow(),
    }))
  }

  //   console.log(componentsCount)
  //   console.log(albumsData)

  return (
    <ButtonsContainer>
      {componentsCount < albumsData.length && (
        <ShowMoreButton onClick={showMore}>Show more</ShowMoreButton>
      )}
      {albumsSlice.end > 24 && (
        <ContainerArrowIconBig>
          <ArrowIcon onClick={() => window.scrollTo(0, 0)} />
        </ContainerArrowIconBig>
      )}
    </ButtonsContainer>
  )
}

export default ShowMoreAndBackToTopButtons

ShowMoreAndBackToTopButtons.propTypes = {
  setAlbumsSlice: PropTypes.func.isRequired,
  albumsSlice: PropTypes.shape({
    start: PropTypes.number,
    end: PropTypes.number,
  }).isRequired,
  albumsData: PropTypes.arrayOf(
    PropTypes.shape({
      albumCover: PropTypes.string.isRequired,
      albumId: PropTypes.string.isRequired,
      albumName: PropTypes.string.isRequired,
      artist: PropTypes.string.isRequired,
    })
  ).isRequired,
  componentsCount: PropTypes.number,
}

ShowMoreAndBackToTopButtons.defaultProps = {
  componentsCount: "",
}
