import Header from "../components/Header/Header"
import Footer from "../components/Footer"
import ProfileContent from "../components/ProfileContent"
import { ContainerMain, Content } from "../components/shared/Containers"

function Profile() {
  return (
    <ContainerMain>
      <Header />
      <main>
        <Content $marginTop="5em" flexDirection="column">
          <ProfileContent />
        </Content>
      </main>
      <Footer />
    </ContainerMain>
  )
}

export default Profile
