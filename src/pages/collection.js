import PropTypes from "prop-types"
import CollectionContent from "../components/CollectionContent"

import Footer from "../components/Footer"
import Header from "../components/Header/Header"

import {
  Container,
  MainContainer,
  MainGrid,
} from "../components/shared/Containers"
import ScrollToTop from "../components/utils/ScrollToTop"

function Collection({ componentsCount, setComponentsCount }) {
  return (
    <>
      <ScrollToTop />
      <MainContainer>
        <Header />
        <main>
          <MainGrid>
            <Container $marginTop="4em">
              <CollectionContent
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

export default Collection

Collection.propTypes = {
  componentsCount: PropTypes.number,
  setComponentsCount: PropTypes.func.isRequired,
}

Collection.defaultProps = {
  componentsCount: "",
}
