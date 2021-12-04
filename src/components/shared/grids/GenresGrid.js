import { useState, useEffect } from "react"

import {
  getFirestore,
  collection,
  getDocs,
  query,
  orderBy,
  limit,
} from "firebase/firestore"

import {
  AlbumContainer,
  StyledLink,
  AlbumCover,
  AlbumTitle,
  StyledAlbumsGrid,
} from "./GridElements"

function GenresGrid() {
  const [genresData, setGenresData] = useState([])
  const [genresComponents, setGenresComponents] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchGenresData = async () => {
      const db = getFirestore()

      const albumsRef = collection(db, "genres")
      const q = query(albumsRef, orderBy("dateCreated", "desc"), limit(50))
      const querySnapshot = await getDocs(q)
      const docsData = querySnapshot.docs.map((doc) => doc.data())

      setGenresData(docsData)
      setIsLoading(false)
    }
    // fetch genres data
    fetchGenresData()
  }, [])

  useEffect(() => {
    const createGenresComponents = () => {
      const genres = genresData.map((doc) => (
        <StyledLink
          to={`/search/genres/${doc.genreName.toLowerCase()}`}
          key={doc.genreId}
        >
          <AlbumContainer>
            <AlbumCover albumCoverUrl={doc.albumCover} />

            <AlbumTitle>{doc.genreName}</AlbumTitle>
          </AlbumContainer>
        </StyledLink>
      ))

      return genres
    }

    setGenresComponents(createGenresComponents())
  }, [isLoading])

  return (
    <>
      <h2>Genres</h2>

      <StyledAlbumsGrid>{genresComponents}</StyledAlbumsGrid>
    </>
  )
}

export default GenresGrid
