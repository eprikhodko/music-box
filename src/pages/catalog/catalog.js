import PropTypes from "prop-types"
import CatalogContent from "./CatalogContent"
import Footer from "../../components/Footer"
import Header from "../../components/Header/Header"
import ScrollToTop from "../../components/utils/ScrollToTop"

function Catalog({ componentsCount, setComponentsCount }) {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <CatalogContent
          componentsCount={componentsCount}
          setComponentsCount={setComponentsCount}
        />
      </main>
      <Footer />
    </>
  )
}

export default Catalog

Catalog.propTypes = {
  componentsCount: PropTypes.number,
  setComponentsCount: PropTypes.func.isRequired,
}

Catalog.defaultProps = {
  componentsCount: "",
}
