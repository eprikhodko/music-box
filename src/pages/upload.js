import Header from "../components/Header/index"
import Footer from "../components/Footer"
import UploadForm from "../components/UploadForm"
import ScrollToTop from "../components/utils/ScrollToTop"
import {
  ContainerMain,
  Content,
  PageBody,
} from "../components/shared/Containers"

function Upload() {
  return (
    <>
      <ScrollToTop />
      <ContainerMain>
        <Header />
        <PageBody>
          <Content justifyContent="center">
            <UploadForm />
          </Content>
        </PageBody>
        <Footer />
      </ContainerMain>
    </>
  )
}

export default Upload
