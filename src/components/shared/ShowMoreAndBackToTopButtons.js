import PropTypes from "prop-types"
import styled from "styled-components"
import { Button } from "./Button"
import { ReactComponent as ArrowIcon } from "../../icons/search-arrow-icon.svg"

const ButtonsContainer = styled.div`
  /* set width to 100% to avoid shrinking because of alignItems="center" at parent <Content /> component */
  width: 100%;
  margin-top: 2em;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  /* border: 1px solid; */
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
}) {
  const showMore = () => {
    setAlbumsSlice((prevSlice) => ({ ...prevSlice, end: prevSlice.end + 8 }))
  }

  console.log("albums slice:", albumsSlice.end)
  console.log("albumsData.length:", albumsData.length)

  return (
    <ButtonsContainer>
      {albumsSlice.end <= albumsData.length && (
        <Button
          onClick={showMore}
          style={{
            gridColumnStart: "2",
          }}
        >
          Show more
        </Button>
      )}
      {albumsSlice.end > 24 && (
        <ContainerArrowIconBig
          style={{
            gridColumnStart: "3",
          }}
        >
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
}
