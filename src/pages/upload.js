import PropTypes from "prop-types"

import Header from "../components/Header/index"
import Footer from "../components/Footer"
import UploadForm from "../components/UploadForm"
import ScrollToTop from "../components/utils/ScrollToTop"
import {
  ContainerMain,
  Content,
  PageBody,
} from "../components/shared/Containers"

function Upload({ isUploadSuccessful, setIsUploadSuccessful }) {
  return (
    <>
      <ScrollToTop />
      <ContainerMain>
        <Header />
        <PageBody>
          <Content justifyContent="center">
            <UploadForm
              isUploadSuccessful={isUploadSuccessful}
              setIsUploadSuccessful={setIsUploadSuccessful}
            />
          </Content>
        </PageBody>
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
