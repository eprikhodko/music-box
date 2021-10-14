import { useContext } from "react"
import { useParams } from "react-router-dom"
import AlbumsDataContext from "../context/albumsData"
import ContainerMain from "./containers/ContainerMain"
import Content from "./containers/Content"

function AlbumDetails() {
  const { albumId } = useParams()
  const { albumsData } = useContext(AlbumsDataContext)

  console.log(albumId)
  console.log(albumsData)

  const album = albumsData.find((element) => element.albumId === albumId)

  console.log(album)

  return (
    <ContainerMain>
      <Content>
        <img src={album.albumCover} alt={album.albumCover} />
        <h2>{album.albumTitle}</h2>
        <p>{album.artist}</p>
        <p>{album.year}</p>
        <p>{album.genre}</p>
      </Content>
    </ContainerMain>
  )
}

export default AlbumDetails
