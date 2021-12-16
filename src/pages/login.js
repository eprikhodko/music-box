import Footer from "../components/Footer"
import Header from "../components/Header/Header"
import LoginForm from "../components/LoginForm"
import ScrollToTop from "../components/utils/ScrollToTop"

function Login() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <LoginForm />
      </main>
      <Footer />
    </>
  )
}

export default Login
