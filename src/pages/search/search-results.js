import PropTypes from "prop-types"
import styled from "styled-components"

import { useContext, useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"

import AlbumsDataContext from "../../context/albumsData"

import AlbumsGrid from "../../components/shared/grids/AlbumsGrid"
// import { Content } from "../../components/shared/Containers"
import ShowMoreAndBackToTopButtons from "../../components/shared/ShowMoreAndBackToTopButtons"
import { ReactComponent as IconNeutralFace } from "../../icons/sentiment_neutral_24px.svg"

import * as ROUTES from "../../constants/routes"
import ScrollToTop from "../../components/utils/ScrollToTop"

const StyledParagraph = styled.p`
  font-size: 4.5rem;
  text-align: center;
`

const StyledLink = styled(Link)`
  color: #000;
`

const PokerFace = styled.div`
  margin-top: 3em;

  svg {
    width: 5em;
    height: 5em;
  }

  svg path {
    fill: rgba(0, 0, 0, 0.5);
  }
`

function SearchResults({ componentsCount, setComponentsCount }) {
  // { searchQuery } should match with <Route path="/search/:searchQuery">
  const { searchQuery } = useParams()
  const { searchQuer } = useParams()
  console.log(searchQuer)

  const { albumsData } = useContext(AlbumsDataContext)

  const [albumsSlice, setAlbumsSlice] = useState({
    start: 0,
    end: 12,
  })

  const [filteredAlbums, setFilteredAlbums] = useState([])

  console.log(searchQuery)

  useEffect(() => {
    const filterAlbums = () => {
      const filteredByGenre = albumsData.filter((album) =>
        album.genre.toLowerCase().includes(searchQuery.toLowerCase())
      )

      const filteredByAlbumName = albumsData.filter((album) =>
        album.albumName.toLowerCase().includes(searchQuery.toLowerCase())
      )

      const filteredByYear = albumsData.filter((album) =>
        album.year.toLowerCase().includes(searchQuery.toLowerCase())
      )

      const filteredByArtist = albumsData.filter((album) =>
        album.artist.toLowerCase().includes(searchQuery.toLowerCase())
      )

      const filtered = filteredByGenre.concat(
        filteredByAlbumName,
        filteredByArtist,
        filteredByYear
      )

      // create new array which contains only unique values. All duplicate albums will not appear in the array
      const uniqueAlbums = [...new Set(filtered)]
      setFilteredAlbums(uniqueAlbums)
    }

    filterAlbums()
  }, [albumsData, searchQuery])

  return (
    <>
      <ScrollToTop />
      <h2>search results for &quot;{searchQuery}&quot;</h2>
      {filteredAlbums.length > 0 ? (
        <>
          <AlbumsGrid
            albumsSlice={albumsSlice}
            albumsData={filteredAlbums}
            setComponentsCount={setComponentsCount}
          />
          {/* Show 'Show more' button only if there is more then 11 albums in user collection */}
          <ShowMoreAndBackToTopButtons
            albumsSlice={albumsSlice}
            setAlbumsSlice={setAlbumsSlice}
            albumsData={filteredAlbums}
            componentsCount={componentsCount}
            setComponentsCount={setComponentsCount}
          />
        </>
      ) : (
        <>
          <PokerFace>
            <IconNeutralFace />
          </PokerFace>
          <StyledParagraph>
            Nothing found on search, please change your request or{" "}
            <StyledLink to={ROUTES.UPLOAD}>upload</StyledLink> a new album
          </StyledParagraph>
        </>
      )}
    </>
  )
}

export default SearchResults

SearchResults.propTypes = {
  componentsCount: PropTypes.number,
  setComponentsCount: PropTypes.func.isRequired,
}

SearchResults.defaultProps = {
  componentsCount: "",
}
