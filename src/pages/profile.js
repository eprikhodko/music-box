import Header from "../components/Header/index"
import Footer from "../components/Footer"
import ProfileContent from "../components/ProfileContent"
import { ContainerMain, PageBody } from "../components/shared/Containers"

function Profile() {
  return (
    <ContainerMain>
      <Header noSearchBox />
      <PageBody>
        <ProfileContent />
      </PageBody>
      <Footer $marginTop="12em" />
    </ContainerMain>
  )
}

export default Profile
