import styled from "styled-components"

import Header from "../components/Header/Header"
import Hero from "../components/Hero"
import RecentlyAddedAlbums from "../components/RecentlyAddedAlbums"
import Footer from "../components/Footer"
// import { PageBody } from "../components/shared/Containers"
// import useMatchMedia from "../hooks/useMatchMedia"

const ContainerMain = styled.div`
  display: grid;
  grid-template-columns: 1fr minmax(0, 72.5em) 1fr;
  grid-template-columns: minmax(1em, 1fr) minmax(0, 72.5em) minmax(1em, 1fr);

  grid-template-areas:
    "header header header"
    ". hero hero"
    "content content content"
    /* "margin-left break margin-right" */
    "footer footer footer";

  /* grid-template-rows: repeat(4, auto) 7.5em auto; */
  /* grid-column-gap: 2em; */

  /* border: 3px solid coral; */
`

function Home() {
  // const isMobileResolution = useMatchMedia("(min-width: 400px)", true)
  // console.log(isMobileResolution)
  return (
    <>
      <ContainerMain>
        <Header />
        <Hero />
        {/* <PageBody> */}
        {/* {isMobileResolution && <RecentlyAddedAlbums />} */}
        <RecentlyAddedAlbums />
        {/* </PageBody> */}
        <Footer />
      </ContainerMain>
    </>
  )
}

export default Home
