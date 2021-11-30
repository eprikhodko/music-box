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
        <Hero />
        <RecentlyAddedAlbums />
      </PageBody>
      <Footer />
    </ContainerMain>
  )
}

export default Home
