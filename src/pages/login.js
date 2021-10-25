import Footer from "../components/Footer"
import Header from "../components/Header/index"
import LoginForm from "../components/LoginForm"
import { ContainerMain } from "../components/shared/Containers"
import ScrollToTop from "../components/utils/ScrollToTop"

function Login() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <ContainerMain>
          <LoginForm />
        </ContainerMain>
      </main>
      <Footer />
    </>
  )
}

export default Login
