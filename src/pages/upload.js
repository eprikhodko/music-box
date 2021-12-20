import PropTypes from "prop-types"

import Header from "../components/Header/Header"
import Footer from "../components/Footer"
import UploadForm from "../components/UploadForm"
import ScrollToTop from "../components/utils/ScrollToTop"

function Upload({ isUploadSuccessful, setIsUploadSuccessful }) {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <UploadForm
          isUploadSuccessful={isUploadSuccessful}
          setIsUploadSuccessful={setIsUploadSuccessful}
        />
      </main>
      <Footer />
    </>
  )
}

export default Upload

Upload.propTypes = {
  isUploadSuccessful: PropTypes.bool.isRequired,
  setIsUploadSuccessful: PropTypes.func.isRequired,
}
