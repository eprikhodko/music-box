import Header from "../components/Header/index"
import Hero from "../components/Hero"
import RecentlyAddedAlbums from "../components/RecentlyAddedAlbums"
import Footer from "../components/Footer"
import { ContainerMain } from "../components/shared/Containers"

function Home() {
  return (
    <>
      <Header />
      <main>
        <section>
          <ContainerMain>
            <Hero />
          </ContainerMain>
        </section>
        <section>
          <ContainerMain>
            <RecentlyAddedAlbums />
          </ContainerMain>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Home
