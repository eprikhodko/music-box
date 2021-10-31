import Footer from "../components/Footer"
import Header from "../components/Header"
import { ContainerMain, PageBody } from "../components/shared/Containers"

function Collection() {
  return (
    <ContainerMain>
      <Header />
      <PageBody>
        <div>Collection title</div>
        <div>collection grid</div>
        <button type="button">show more</button>
      </PageBody>
      <Footer />
    </ContainerMain>
  )
}

export default Collection
