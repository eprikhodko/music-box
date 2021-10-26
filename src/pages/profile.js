import Header from "../components/Header/index"
import Footer from "../components/Footer"
import { ContainerMain, Content } from "../components/shared/Containers"
import ProfileContent from "../components/ProfileContent"

function Profile() {
  return (
    <>
      <Header />
      <main>
        <ContainerMain>
          <Content marginTop="5em">
            <ProfileContent />
          </Content>
        </ContainerMain>
      </main>
      <Footer />
    </>
  )
}

export default Profile
