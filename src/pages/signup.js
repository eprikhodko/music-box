import Footer from "../components/Footer"
import Header from "../components/Header/Header"
import { ContainerMain, Content } from "../components/shared/Containers"
import SignUpForm from "../components/SignUpForm"

function SignUp() {
  return (
    <ContainerMain>
      <Header />
      <main>
        <Content justifyContent="center">
          <SignUpForm />
        </Content>
      </main>
      <Footer />
    </ContainerMain>
  )
}

export default SignUp
