import styled from "styled-components"

import Header from "../components/Header/Header"
import Hero from "../components/Hero"
import RecentlyAddedAlbums from "../components/RecentlyAddedAlbums"
import Footer from "../components/Footer"
// import { PageBody } from "../components/shared/Containers"
// import useMatchMedia from "../hooks/useMatchMedia"

// const Container = styled.div`

//   border: 3px solid green;
// `

const ContainerMain = styled.div`
  /* width: 95%; */
  /* max-width: 90em; */
  /* margin: 0 auto; */

  display: grid;
  grid-template-columns: 1fr minmax(0, 72.5em) 1fr;
  grid-column-gap: 1em;

  /* border: 3px solid coral; */
`

function Home() {
  // const isMobileResolution = useMatchMedia("(min-width: 400px)", true)
  // console.log(isMobileResolution)
  return (
    // <Container>
    <>
      <ContainerMain>
        <Header />
        <Hero />
        {/* <PageBody> */}
        {/* {isMobileResolution && <RecentlyAddedAlbums />} */}
        <RecentlyAddedAlbums />
        {/* </PageBody> */}
      </ContainerMain>
      <Footer />
    </>
    // </Container>
  )
}

export default Home
