import { useParams } from "react-router-dom"

function AlbumDetails() {
  const { albumId } = useParams()

  return <div>Hello, this is page of an album with ID number of {albumId}</div>
}

export default AlbumDetails
