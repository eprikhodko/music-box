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
      <Header />
      <PageBody>
        <Content
          $marginTop="5em"
          // justifyContent="space-between"
          flexDirection="column"
        >
          <ProfileContent />
        </Content>
      </PageBody>
      <Footer />
    </ContainerMain>
  )
}

export default Profile
