import PropTypes from "prop-types"

import Footer from "../components/Footer"
import Header from "../components/Header/Header"

import {
  Container,
  MainContainer,
  MainGrid,
} from "../components/shared/Containers"

import ScrollToTop from "../components/utils/ScrollToTop"
import WishlistContent from "../components/WishlistContent"

function Wishlist({ componentsCount, setComponentsCount }) {
  return (
    <>
      <ScrollToTop />
      <MainContainer>
        <Header />
        <main>
          <MainGrid>
            <Container $marginTop="4em">
              <WishlistContent
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

export default Wishlist

Wishlist.propTypes = {
  componentsCount: PropTypes.number,
  setComponentsCount: PropTypes.func.isRequired,
}

Wishlist.defaultProps = {
  componentsCount: "",
}
