import Footer from "../components/Footer"
import Header from "../components/Header/index"
import { ContainerMain, PageBody } from "../components/shared/Containers"
import SignUpForm from "../components/SignUpForm"

function SignUp() {
  return (
    <ContainerMain>
      <Header />
      <PageBody>
        <SignUpForm />
      </PageBody>
      <Footer />
    </ContainerMain>
  )
}

export default SignUp
