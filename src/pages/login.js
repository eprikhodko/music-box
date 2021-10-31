import Footer from "../components/Footer"
import Header from "../components/Header/index"
import LoginForm from "../components/LoginForm"
import { ContainerMain, PageBody } from "../components/shared/Containers"
import ScrollToTop from "../components/utils/ScrollToTop"

function Login() {
  return (
    <>
      <ScrollToTop />
      <ContainerMain>
        <Header />
        <PageBody>
          <LoginForm />
        </PageBody>
        <Footer />
      </ContainerMain>
    </>
  )
}

export default Login
