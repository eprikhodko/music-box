import { useParams } from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header"

function Album() {
  const { albumId } = useParams()

  return (
    <>
      <Header />
      <main>
        <div>Hello, this is page of an album with ID number of {albumId}</div>
      </main>
      <Footer />
    </>
  )
}

export default Album
