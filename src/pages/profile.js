import Header from "../components/Header/index"
import Footer from "../components/Footer"
import ProfileContent from "../components/ProfileContent"

function Profile() {
  return (
    <>
      <Header />
      <main>
        <ProfileContent />
      </main>
      <Footer $marginTop="0" />
    </>
  )
}

export default Profile
