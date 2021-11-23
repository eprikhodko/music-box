import { useContext } from "react"
import { useParams } from "react-router-dom"

import AlbumsDataContext from "../../context/albumsData"

function SearchResults() {
  const { searchQuery } = useParams()

  const { albumsData } = useContext(AlbumsDataContext)

  console.log(albumsData)
  // get albums data from context
  // find 'searchQuery' string in albumsData array of objects in album.genre string
  // return only that albums that match searchQuery
  // map this albums objects in an albums grid
  // render this albums components

  const filteredAlbums = albumsData.filter((album) =>
    album.genre.toLowerCase().includes(searchQuery.toLowerCase())
  )

  console.log(filteredAlbums)

  return (
    <h2>
      search results for &quot;{searchQuery}&quot; search query should appear
      here <p>if nothing found, show nothing found</p>
    </h2>
  )
}

export default SearchResults
