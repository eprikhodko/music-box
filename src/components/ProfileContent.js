import PropTypes from "prop-types"

import { useContext } from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { HeroButton } from "./shared/Button"
import { CenterContent } from "./shared/Containers"
import { HeroTitle } from "./shared/HeroTitle"
import UserAvatar from "./UserAvatar"
import SearchBox from "./shared/SearchBox"

import * as ROUTES from "../constants/routes"
import UserContext from "../context/user"

const Username = styled.p`
  font-size: 2.5rem;
  color: rgba(0, 0, 0, 0.7);
  font-weight: 500;
  margin-top: 0.6em;
`

const ContainerFlex = styled.div`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection};
`

const ContainerTextBlock = styled(ContainerFlex)`
  max-width: 32em;
  margin-top: 7em;
  margin-left: 19em;
`

// fetch 5 last albums in user collection
// fetch 5 last albums in user wishlist
// merge this arrays
// sort by doc.dateAdded

function ProfileContent({ albumsInUserCollection, albumsInUserWishlist }) {
  const currentUser = useContext(UserContext)

  console.log("albumsInUserCollection", albumsInUserCollection)
  console.log("albumsInUserWishlist", albumsInUserWishlist)
  console.log(albumsInUserCollection.concat(albumsInUserWishlist))

  const mergedArray = albumsInUserCollection.concat(albumsInUserWishlist)

  // sort albums according to provided sorting array
  const sortFunc = (a, b) =>
    mergedArray.indexOf(a.dateCreated) - mergedArray.indexOf(b.dateCreated)

  // sort albums
  const sortedAlbums = mergedArray.sort(sortFunc)
  console.log("sorted albums", sortedAlbums)

  return (
    <ContainerFlex flexDirection="column">
      <ContainerFlex>
        <CenterContent>
          <UserAvatar />
          <Username>{currentUser?.displayName}</Username>
          <HeroButton as={Link} to={`/collection/${currentUser?.displayName}`}>
            Collection
          </HeroButton>
          <HeroButton
            as={Link}
            to={`/wishlist/${currentUser?.displayName}`}
            $marginTop="1em"
          >
            Wishlist
          </HeroButton>
          <HeroButton as={Link} to={ROUTES.UPLOAD} $marginTop="1em">
            Upload
          </HeroButton>
          <HeroButton as={Link} to={ROUTES.UPLOADED_BY} $marginTop="1em">
            My Uploads
          </HeroButton>
        </CenterContent>
        <ContainerTextBlock flexDirection="column">
          <HeroTitle>Build your music library</HeroTitle>
          <h3>
            Add some albums to your collection or wishlist and they will appear
            in your profile
          </h3>
          <SearchBox placeholder="Search music!" marginTop="2em" />
        </ContainerTextBlock>
      </ContainerFlex>
    </ContainerFlex>
  )
}

export default ProfileContent

ProfileContent.propTypes = {
  albumsInUserCollection: PropTypes.arrayOf(
    PropTypes.shape({
      albumCover: PropTypes.string.isRequired,
      albumId: PropTypes.string.isRequired,
      albumName: PropTypes.string.isRequired,
      artist: PropTypes.string.isRequired,
    })
  ).isRequired,
  albumsInUserWishlist: PropTypes.arrayOf(
    PropTypes.shape({
      albumCover: PropTypes.string.isRequired,
      albumId: PropTypes.string.isRequired,
      albumName: PropTypes.string.isRequired,
      artist: PropTypes.string.isRequired,
    })
  ).isRequired,
}
