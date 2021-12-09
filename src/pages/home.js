import Header from "../components/Header/Header"
import Hero from "../components/Hero"
import RecentlyAddedAlbums from "../components/RecentlyAddedAlbums"
import Footer from "../components/Footer"
// import { PageBody } from "../components/shared/Containers"
// import useMatchMedia from "../hooks/useMatchMedia"

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
      <Footer />
    </>
  )
}

export default Home

// {/* {isMobileResolution && <RecentlyAddedAlbums />} */}
