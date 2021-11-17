import PropTypes from "prop-types"

import Header from "../components/Header/index"
import Footer from "../components/Footer"
import ProfileContent from "../components/ProfileContent"
import {
  ContainerMain,
  Content,
  PageBody,
} from "../components/shared/Containers"

function Profile({ albumsInUserCollection, albumsInUserWishlist }) {
  return (
    <ContainerMain>
      <Header noSearchBox />
      <PageBody>
        <Content $marginTop="5em">
          <ProfileContent
            albumsInUserCollection={albumsInUserCollection}
            albumsInUserWishlist={albumsInUserWishlist}
          />
        </Content>
      </PageBody>
      <Footer />
    </ContainerMain>
  )
}

export default Profile

Profile.propTypes = {
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
