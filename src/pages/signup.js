import Footer from "../components/Footer"
import Header from "../components/Header/Header"
import {
  ContainerMain,
  Content,
  PageBody,
} from "../components/shared/Containers"
import SignUpForm from "../components/SignUpForm"

function SignUp() {
  return (
    <ContainerMain>
      <Header />
      <PageBody>
        <Content justifyContent="center">
          <SignUpForm />
        </Content>
      </PageBody>
      <Footer />
    </ContainerMain>
  )
}

export default SignUp
