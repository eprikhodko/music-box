import PropTypes from "prop-types"

import AlbumDetails from "./AlbumDetails"
import Footer from "../../components/Footer"
import Header from "../../components/Header/Header"
import ScrollToTop from "../../components/utils/ScrollToTop"
import { MainContainer } from "../../components/shared/Containers"

function Album({ setIsAlbumRemovedFromDatabase }) {
  return (
    <>
      <ScrollToTop />
      <MainContainer>
        <Header />
        <main>
          <AlbumDetails
            setIsAlbumRemovedFromDatabase={setIsAlbumRemovedFromDatabase}
          />
        </main>
        <Footer />
      </MainContainer>
    </>
  )
}

export default Album

Album.propTypes = {
  setIsAlbumRemovedFromDatabase: PropTypes.func.isRequired,
}
