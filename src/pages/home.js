import Header from "../components/Header"
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
      {/* <div>This is home page</div> */}
    </>
  )
}

export default Home
