import AlbumDetails from "../components/AlbumDetails"
import Footer from "../components/Footer"
import Header from "../components/Header/index"
import { ContainerMain, PageBody } from "../components/shared/Containers"
import ScrollToTop from "../components/utils/ScrollToTop"

function Album() {
  return (
    <>
      <ScrollToTop />
      <ContainerMain>
        <Header />
        <PageBody>
          <AlbumDetails />
        </PageBody>
        <Footer />
      </ContainerMain>
    </>
  )
}

export default Album
