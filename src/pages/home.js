import Header from "../components/Header/Header"
import Hero from "../components/Hero"
import RecentlyAddedAlbums from "../components/RecentlyAddedAlbums"
import Footer from "../components/Footer"
import { ContainerMain, PageBody } from "../components/shared/Containers"

function Home() {
  return (
    <ContainerMain>
      <Header />
      <PageBody>
        <section>
          <Hero />
        </section>
        <section>
          <RecentlyAddedAlbums />
        </section>
      </PageBody>
      <Footer />
    </ContainerMain>
  )
}

export default Home
