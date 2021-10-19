import AlbumDetails from "../components/AlbumDetails"
import Footer from "../components/Footer"
import Header from "../components/Header/index"
import ScrollToTop from "../components/utils/ScrollToTop"

function Album() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <AlbumDetails />
      </main>
      <Footer />
    </>
  )
}

export default Album
