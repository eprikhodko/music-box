import { useContext } from "react"
import { useParams } from "react-router-dom"
import AlbumsDataContext from "../context/albumsData"

function AlbumDetails() {
  const { albumId } = useParams()
  const { albumsData } = useContext(AlbumsDataContext)

  console.log(albumId)
  console.log(albumsData)

  const album = albumsData.find((element) => element.albumId === albumId)

  console.log(album)

  return (
    <div>
      Hello, this is page of an album with ID number of {albumId}.
      <img src={album.albumCover} alt={album.albumCover} />
      <h2>{album.albumTitle}</h2>
      <p>{album.artist}</p>
      <p>{album.year}</p>
      <p>{album.genre}</p>
    </div>
  )
}

export default AlbumDetails
