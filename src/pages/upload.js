import PropTypes from "prop-types"

import Header from "../components/Header/Header"
import Footer from "../components/Footer"
import UploadForm from "../components/UploadForm"
import ScrollToTop from "../components/utils/ScrollToTop"
import { ContainerMain, Content } from "../components/shared/Containers"

function Upload({ isUploadSuccessful, setIsUploadSuccessful }) {
  return (
    <>
      <ScrollToTop />
      <ContainerMain>
        <Header />
        <main>
          <Content justifyContent="center">
            <UploadForm
              isUploadSuccessful={isUploadSuccessful}
              setIsUploadSuccessful={setIsUploadSuccessful}
            />
          </Content>
        </main>
        <Footer />
      </ContainerMain>
    </>
  )
}

export default Upload

Upload.propTypes = {
  isUploadSuccessful: PropTypes.bool.isRequired,
  setIsUploadSuccessful: PropTypes.func.isRequired,
}
