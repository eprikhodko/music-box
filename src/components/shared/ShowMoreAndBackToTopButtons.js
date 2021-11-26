import PropTypes from "prop-types"
import styled from "styled-components"
import { Button } from "./Button"
import { ReactComponent as ArrowIcon } from "../../icons/search-arrow-icon.svg"

const ButtonsContainer = styled.div`
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

function ShowMoreAndBackToTopButtons({ showMore, albumsSlice, albumsData }) {
  return (
    <ButtonsContainer>
      {albumsSlice.end < albumsData.length && (
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
  showMore: PropTypes.func.isRequired,
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
