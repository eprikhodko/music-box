import styled from "styled-components"
import Footer from "../components/Footer"
import Header from "../components/Header"
import { ContainerMain } from "../components/shared/Containers"

const PageBody = styled.main`
  /* flex-grow defines how much a flexbox item should grow if there's space available */
  /* make PageBody fill up all remaining space if no other flexbox item has a flex-grow value*/
  flex-grow: 1;
`

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
