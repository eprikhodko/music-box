import Header from "../components/Header/index"
import Footer from "../components/Footer"
import ProfileContent from "../components/ProfileContent"
import {
  ContainerMain,
  Content,
  PageBody,
} from "../components/shared/Containers"

function Profile() {
  return (
    <ContainerMain>
      <Header noSearchBox />
      <PageBody>
        <Content $marginTop="5em">
          <ProfileContent />
        </Content>
      </PageBody>
      <Footer />
    </ContainerMain>
  )
}

export default Profile
