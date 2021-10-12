import { useParams } from "react-router-dom"
import Header from "../components/Header"

function Album() {
  const { albumId } = useParams()

  return (
    <>
      <Header />
      <div>Hello, this is page of an album with ID number of {albumId}</div>
    </>
  )
}

export default Album
