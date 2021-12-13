import Footer from "../components/Footer"
import Header from "../components/Header/Header"
import LoginForm from "../components/LoginForm"
import { ContainerMain, Content } from "../components/shared/Containers"
import ScrollToTop from "../components/utils/ScrollToTop"

function Login() {
  return (
    <>
      <ScrollToTop />
      <ContainerMain>
        <Header />
        <main>
          <Content justifyContent="center">
            <LoginForm />
          </Content>
        </main>
        <Footer />
      </ContainerMain>
    </>
  )
}

export default Login
