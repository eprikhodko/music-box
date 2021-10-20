import Header from "../components/Header/index"
import Hero from "../components/Hero"
import RecentlyAddedAlbums from "../components/RecentlyAddedAlbums"
import Footer from "../components/Footer"

function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <RecentlyAddedAlbums />
      </main>
      <Footer />
    </>
  )
}

export default Home
