import styled from "styled-components"

// import Header from "../components/Header/Header"
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

const Section = styled.section`
  display: grid;
  grid-template-columns: minmax(1em, 1fr) minmax(0, 500px) minmax(1em, 1fr);

  & > * {
    grid-column: 2 / -2;
  }
`

const StyledFooter = styled.footer`
  display: grid;
  grid-template-columns: minmax(1em, 1fr) minmax(0, 500px) minmax(1em, 1fr);

  & > * {
    grid-column: 2 / -2;
  }
`

function Home() {
  // const isMobileResolution = useMatchMedia("(min-width: 400px)", true)
  // console.log(isMobileResolution)
  return (
    <>
      {/* <MainGrid> */}
      {/* <Header /> */}
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
