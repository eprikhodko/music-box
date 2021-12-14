import PropTypes from "prop-types"
import styled from "styled-components"

import { useContext, useState, useLayoutEffect } from "react"
import { useParams, Link } from "react-router-dom"

import AlbumsDataContext from "../../context/albumsData"

import AlbumsGrid from "../../components/shared/grids/AlbumsGrid"
import ShowMoreAndBackToTopButtons from "../../components/shared/ShowMoreAndBackToTopButtons"
import { ReactComponent as IconNeutralFace } from "../../icons/sentiment_neutral_24px.svg"

import * as ROUTES from "../../constants/routes"
import ScrollToTop from "../../components/utils/ScrollToTop"
import { Button } from "../../components/shared/Buttons"
import { MainGrid, Container } from "../../components/shared/Containers"
import SectionTitle from "../../components/shared/TypographyElements"

const StyledParagraph = styled.p`
  font-size: 3rem;
  text-align: center;

  @media (min-width: 1024px) {
    font-size: 4.5rem;
  }
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

const FilterAlbumsButtons = styled.div`
  margin: 2em 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5em;

  @media (min-width: 1080px) {
    flex-direction: row;
  }
`

const FilterAlbumsTitle = styled.h3`
  margin: 0;

  @media (min-width: 1080) {
    margin-right: 1em;
  }
`

function SearchResults({ componentsCount, setComponentsCount }) {
  // { searchQuery } should match with <Route path="/search/:searchQuery">
  // looks like react router takes value from ':searchQuery', from search page
  const { searchQuery } = useParams()
  console.log(searchQuery)

  const { albumsData } = useContext(AlbumsDataContext)

  const [albumsSlice, setAlbumsSlice] = useState({
    start: 0,
    end: 12,
  })

  const [filteredAlbums, setFilteredAlbums] = useState([])
  const [filteredByGenre, setFilteredByGenre] = useState([])
  const [filteredByAlbumName, setFilteredByAlbumName] = useState([])
  const [filteredByArtist, setFilteredByArtist] = useState([])
  const [allAlbums, setAllAlbums] = useState([])

  useLayoutEffect(() => {
    const filterAlbums = () => {
      const filterByGenre = albumsData.filter((album) =>
        album.genre.toLowerCase().includes(searchQuery.toLowerCase())
      )
      setFilteredByGenre(filterByGenre)

      const filterByAlbumName = albumsData.filter((album) =>
        album.albumName.toLowerCase().includes(searchQuery.toLowerCase())
      )
      setFilteredByAlbumName(filterByAlbumName)

      const filteredByYear = albumsData.filter((album) =>
        album.year.toLowerCase().includes(searchQuery.toLowerCase())
      )

      const filterByArtist = albumsData.filter((album) =>
        album.artist.toLowerCase().includes(searchQuery.toLowerCase())
      )
      setFilteredByArtist(filterByArtist)

      const filtered = filterByGenre.concat(
        filterByAlbumName,
        filterByArtist,
        filteredByYear
      )

      // create new array which contains only unique values. All duplicate albums will not appear in the array
      const uniqueAlbums = [...new Set(filtered)]
      setFilteredAlbums(uniqueAlbums)
      setAllAlbums(uniqueAlbums)
    }

    filterAlbums()
  }, [albumsData, searchQuery])

  const filterByGenre = () => {
    const filtered = albumsData.filter((album) =>
      album.genre.toLowerCase().includes(searchQuery.toLowerCase())
    )
    return setFilteredAlbums(filtered)
  }

  const filterByAlbumName = () => {
    const filtered = albumsData.filter((album) =>
      album.albumName.toLowerCase().includes(searchQuery.toLowerCase())
    )
    return setFilteredAlbums(filtered)
  }

  const filterByArtist = () => {
    const filtered = albumsData.filter((album) =>
      album.artist.toLowerCase().includes(searchQuery.toLowerCase())
    )
    return setFilteredAlbums(filtered)
  }

  const showAllAlbums = () => setFilteredAlbums(allAlbums)

  console.log(filteredAlbums)

  return (
    <>
      <ScrollToTop />
      <MainGrid>
        <Container>
          <SectionTitle>
            search results for &quot;{searchQuery}&quot;
          </SectionTitle>

          {/* show filter buttons only if filteredAlbums is not empty. If nothing found on search, don't show filter buttons */}
          {filteredAlbums.length > 0 && (
            <>
              <FilterAlbumsButtons>
                <FilterAlbumsTitle>filter albums:</FilterAlbumsTitle>
                {filteredByGenre.length > 0 && (
                  <Button
                    type="button"
                    // $marginRight="2em"
                    onClick={filterByGenre}
                  >
                    genre
                  </Button>
                )}

                {filteredByAlbumName.length > 0 && (
                  <Button
                    type="button"
                    // $marginRight="2em"
                    onClick={filterByAlbumName}
                  >
                    album name
                  </Button>
                )}

                {filteredByArtist.length > 0 && (
                  <Button
                    type="button"
                    // $marginRight="2em"
                    onClick={filterByArtist}
                  >
                    artist
                  </Button>
                )}

                <Button type="button" onClick={showAllAlbums}>
                  all albums
                </Button>
              </FilterAlbumsButtons>
            </>
          )}

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
        </Container>
      </MainGrid>
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
