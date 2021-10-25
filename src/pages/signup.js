import Footer from "../components/Footer"
import Header from "../components/Header/index"
import { ContainerMain } from "../components/shared/Containers"
import SignUpForm from "../components/SignUpForm"

function SignUp() {
  return (
    <>
      <Header />
      <main>
        <ContainerMain>
          <SignUpForm />
        </ContainerMain>
      </main>
      <Footer />
    </>
  )
}

export default SignUp
