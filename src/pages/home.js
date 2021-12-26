import Header from "../components/Header/Header"
import Hero from "../components/home/Hero"
import RecentlyAddedAlbums from "../components/home/RecentlyAddedAlbums"
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
