import PropTypes from "prop-types"

import AlbumDetails from "../components/AlbumDetails"
import Footer from "../components/Footer"
import Header from "../components/Header/index"
import {
  ContainerMain,
  Content,
  PageBody,
} from "../components/shared/Containers"
import ScrollToTop from "../components/utils/ScrollToTop"

function Album({
  setIsAlbumRemovedFromDatabase,
  isAlbumInUserCollection,
  setIsAlbumInUserCollection,
  isAlbumInUserWishlist,
  setIsAlbumInUserWishlist,
}) {
  return (
    <>
      <ScrollToTop />
      <ContainerMain>
        <Header />
        <PageBody>
          <Content $marginTop="5em">
            <AlbumDetails
              setIsAlbumRemovedFromDatabase={setIsAlbumRemovedFromDatabase}
              isAlbumInUserCollection={isAlbumInUserCollection}
              setIsAlbumInUserCollection={setIsAlbumInUserCollection}
              isAlbumInUserWishlist={isAlbumInUserWishlist}
              setIsAlbumInUserWishlist={setIsAlbumInUserWishlist}
            />
          </Content>
        </PageBody>
        <Footer />
      </ContainerMain>
    </>
  )
}

export default Album

Album.propTypes = {
  setIsAlbumRemovedFromDatabase: PropTypes.func.isRequired,
  isAlbumInUserCollection: PropTypes.bool.isRequired,
  setIsAlbumInUserCollection: PropTypes.func.isRequired,
  isAlbumInUserWishlist: PropTypes.bool.isRequired,
  setIsAlbumInUserWishlist: PropTypes.func.isRequired,
}
