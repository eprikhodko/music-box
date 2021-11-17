import PropTypes from "prop-types"

import styled from "styled-components"
import { Link } from "react-router-dom"

import { useState } from "react"

import * as ROUTES from "../constants/routes"
import Footer from "../components/Footer"
import Header from "../components/Header"
import CollectionGrid from "../components/shared/grids/CollectionGrid"
import { Button } from "../components/shared/Button"
import {
  ContainerMain,
  Content,
  PageBody,
} from "../components/shared/Containers"

const StyledParagraph = styled.p`
  font-size: 2.5rem;
  text-align: center;
  width: 40em;
`

const StyledLink = styled(Link)`
  color: #000;
`

function Collection({ albumsInUserCollection }) {
  const [albumsSlice, setAlbumsSlice] = useState({
    start: 0,
    end: 11,
  })

  const showMore = () => {
    setAlbumsSlice((prevSlice) => ({ ...prevSlice, end: prevSlice.end + 8 }))
  }
  return (
    <ContainerMain>
      <Header />
      <PageBody>
        <Content flexDirection="column" alignItems="center" $marginTop="5em">
          <h2>Collection</h2>
          {albumsInUserCollection.length > 0 ? (
            <>
              <CollectionGrid
                albumsSlice={albumsSlice}
                albumsData={albumsInUserCollection}
              />
              {/* Show 'Show more' button only if there is more then 11 albums in user collection */}
              {albumsInUserCollection.length > 11 && (
                <Button marginTop="2em" onClick={showMore}>
                  Show more
                </Button>
              )}
            </>
          ) : (
            <StyledParagraph>
              There is no albums in your collection yet. Would you like to add
              some from <StyledLink to={ROUTES.CATALOG}>catalog</StyledLink> or
              maybe <StyledLink to={ROUTES.UPLOAD}>upload</StyledLink> a new
              album yourself?
            </StyledParagraph>
          )}
        </Content>
      </PageBody>
      <Footer />
    </ContainerMain>
  )
}

export default Collection

Collection.propTypes = {
  albumsInUserCollection: PropTypes.arrayOf(
    PropTypes.shape({
      albumCover: PropTypes.string.isRequired,
      albumId: PropTypes.string.isRequired,
      albumName: PropTypes.string.isRequired,
      artist: PropTypes.string.isRequired,
    })
  ).isRequired,
}
