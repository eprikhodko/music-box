import Header from "../components/Header/Header"
import Footer from "../components/Footer"
import ProfileContent from "../components/ProfileContent"

function Profile() {
  return (
    <>
      <Header />
      <main>
        {/* <Content $marginTop="5em" flexDirection="column"> */}
        <ProfileContent />
        {/* </Content> */}
      </main>
      <Footer />
    </>
  )
}

export default Profile
