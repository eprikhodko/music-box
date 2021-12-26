import PropTypes from "prop-types"

import Footer from "../components/Footer"
import Header from "../components/Header/Header"

import {
  Container,
  MainContainer,
  MainGrid,
} from "../components/shared/Containers"
import ScrollToTop from "../components/utils/ScrollToTop"
import MyUploadsContent from "../components/MyUploadsContent"

function MyUploads({ componentsCount, setComponentsCount }) {
  return (
    <>
      <ScrollToTop />
      <MainContainer>
        <Header />
        <main>
          <MainGrid>
            <Container $marginTop="4em">
              <MyUploadsContent
                componentsCount={componentsCount}
                setComponentsCount={setComponentsCount}
              />
            </Container>
          </MainGrid>
        </main>
        <Footer />
      </MainContainer>
    </>
  )
}

export default MyUploads

MyUploads.propTypes = {
  componentsCount: PropTypes.number,
  setComponentsCount: PropTypes.func.isRequired,
}

MyUploads.defaultProps = {
  componentsCount: "",
}
