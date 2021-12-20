import Header from "../components/Header/Header"
import Hero from "../components/Hero"
import RecentlyAddedAlbums from "../components/RecentlyAddedAlbums"
import Footer from "../components/Footer"

function Home() {
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
