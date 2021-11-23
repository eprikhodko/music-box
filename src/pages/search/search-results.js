import styled from "styled-components"

import { useContext, useState } from "react"
import { useParams, Link } from "react-router-dom"

import AlbumsDataContext from "../../context/albumsData"

import SearchResultsAlbumsGrid from "../../components/shared/grids/SearchResultsAlbumsGrid"
import { Button } from "../../components/shared/Button"
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

function SearchResults() {
  const { searchQuery } = useParams()

  const { albumsData } = useContext(AlbumsDataContext)

  const [albumsSlice, setAlbumsSlice] = useState({
    start: 0,
    end: 12,
  })

  const showMore = () => {
    setAlbumsSlice((prevSlice) => ({ ...prevSlice, end: prevSlice.end + 8 }))
  }

  const filteredAlbums = albumsData.filter((album) =>
    album.genre.toLowerCase().includes(searchQuery.toLowerCase())
  )

  console.log(filteredAlbums)

  return (
    <>
      <ScrollToTop />
      <h2>search results for &quot;{searchQuery}&quot;</h2>
      {filteredAlbums.length > 0 ? (
        <>
          <SearchResultsAlbumsGrid
            albumsSlice={albumsSlice}
            albumsData={filteredAlbums}
          />
          {/* Show 'Show more' button only if there is more then 11 albums in user collection */}
          {filteredAlbums.length > 11 && (
            <Button marginTop="2em" onClick={showMore}>
              Show more
            </Button>
          )}
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