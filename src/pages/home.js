import styled, { css } from "styled-components"

import Header from "../components/Header/Header"
import Hero from "../components/Hero"
import RecentlyAddedAlbums from "../components/RecentlyAddedAlbums"
import Footer from "../components/Footer"
// import { PageBody } from "../components/shared/Containers"
// import useMatchMedia from "../hooks/useMatchMedia"

// const MainGrid = styled.div`
//   display: grid;
//   grid-template-columns: 1fr minmax(0, 72.5em) 1fr;
//   grid-template-columns: minmax(1em, 1fr) minmax(0, 500px) minmax(1em, 1fr);

//   & > * {
//     grid-column: 2 / -2;
//   }

//   /* & :nth-child(1)  {
//     background: #ff00ff;
//   } */

//   /* grid-template-areas:
//     "header header header"
//     ". hero hero"
//     "content content content"
//     "footer footer footer"; */

//   /* grid-template-rows: repeat(4, auto) 7.5em auto; */
//   /* grid-column-gap: 2em; */

//   /* border: 3px solid coral; */
// `

const MainGridSharedStyle = css`
  display: grid;
  grid-template-columns: minmax(1em, 1fr) minmax(0, 500px) minmax(1em, 1fr);

  /* > * {
    grid-column: 2 / -2;
  } */

  /* @media (min-width: 600px) {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1160px) minmax(0, 1fr);
  } */

  @media (min-width: 700px) {
    grid-template-columns: minmax(1em, 1fr) minmax(0, 1160px) minmax(1em, 1fr);

    /* & > * {
      grid-column: 2 / -2;
    } */
  }
`

export const GridColumnsSharedStyle = "grid-column: 2 / -2;"

const Section = styled.section`
  ${MainGridSharedStyle}/* &:first-child {
    background-color: green;
    grid-column: 1/4;
  } */
`

// const MainGrid = styled.div`
//   display: grid;
//   grid-template-columns: minmax(0, 1fr) minmax(0, 1160px) minmax(0, 1fr);
// `

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
      {/* <MainGrid> */}
      <main>
        <Section>
          <Hero />
        </Section>

        <Section>
          <RecentlyAddedAlbums />
        </Section>
      </main>
      <StyledFooter>
        <Footer />
      </StyledFooter>
      {/* </MainGrid> */}
    </>
  )
}

export default Home

// {/* <PageBody> */}
// {/* {isMobileResolution && <RecentlyAddedAlbums />} */}

// {/* </PageBody> */}
