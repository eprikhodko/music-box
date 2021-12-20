import PropTypes from "prop-types"

import AlbumDetails from "../components/AlbumDetails"
import Footer from "../components/Footer"
import Header from "../components/Header/Header"
import ScrollToTop from "../components/utils/ScrollToTop"

function Album({ setIsAlbumRemovedFromDatabase }) {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <AlbumDetails
          setIsAlbumRemovedFromDatabase={setIsAlbumRemovedFromDatabase}
        />
      </main>
      <Footer />
    </>
  )
}

export default Album

Album.propTypes = {
  setIsAlbumRemovedFromDatabase: PropTypes.func.isRequired,
}
