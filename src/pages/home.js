import styled from "styled-components"

import Header from "../components/Header/Header"
import Hero from "../components/Hero"
import RecentlyAddedAlbums from "../components/RecentlyAddedAlbums"
import Footer from "../components/Footer"
import MainGridSharedStyle from "./sharedStyles"
// import { PageBody } from "../components/shared/Containers"
// import useMatchMedia from "../hooks/useMatchMedia"

const StyledFooter = styled.footer`
  ${MainGridSharedStyle}

  background-color: #c2c2c2;
`

function Home() {
  // const isMobileResolution = useMatchMedia("(min-width: 400px)", true)
  // console.log(isMobileResolution)
  return (
    <>
      <Header />
      <main>
        <section>
          <Hero />
        </section>

        <section>
          <RecentlyAddedAlbums />
        </section>
      </main>
      <StyledFooter>
        <Footer />
      </StyledFooter>
    </>
  )
}

export default Home

// {/* {isMobileResolution && <RecentlyAddedAlbums />} */}
