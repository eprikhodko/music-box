import { useParams } from "react-router-dom"
import Header from "../components/Header"

function Album() {
  const params = useParams()

  console.log(params)

  return (
    <>
      <Header />
      <div>Hello, this is page of </div>
    </>
  )
}

export default Album
