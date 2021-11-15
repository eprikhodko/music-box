import { useState, useEffect, useContext } from "react"
import {
  getFirestore,
  collection,
  getDocs,
  query,
  orderBy,
  limit,
} from "firebase/firestore"
import UserContext from "../context/user"
import AlbumsDataContext from "../context/albumsData"

import Footer from "../components/Footer"
import Header from "../components/Header"
import CollectionGrid from "../components/shared/grids/CollectionGrid"
import { Button } from "../components/shared/Button"
import {
  ContainerMain,
  Content,
  PageBody,
} from "../components/shared/Containers"

function Collection() {
  const currentUser = useContext(UserContext)
  const { albumsData } = useContext(AlbumsDataContext)

  const [albums, setAlbums] = useState([])
  const [albumsSlice, setAlbumsSlice] = useState({
    start: 0,
    end: 11,
  })

  const fetchAlbumsInUserCollection = async () => {
    const db = getFirestore()
    // const querySnapshot = await getDocs(
    //   collection(db, "users", currentUser.uid, "albumsInUserCollection")
    // )
    // const docsData = querySnapshot.docs.map((doc) => doc.data())

    const albumsRef = collection(
      db,
      "users",
      currentUser.uid,
      "albumsInUserCollection"
    )
    const q = query(albumsRef, orderBy("dateAdded", "desc"), limit(100))
    const querySnapshot = await getDocs(q)
    // map through albums and return new array with albums ids
    const albumsIDsList = querySnapshot.docs.map((doc) => doc.data().albumId)

    console.log(albumsIDsList)

    // create new filteredAlbums array which consists of albums which ids match ids in albumsIDsList array
    const filteredAlbums = albumsData.filter((album) =>
      // run code below for each album in albumsData array and return only those albums which ids match with ids in albumsIDsList
      albumsIDsList.includes(album.albumId)
    )

    console.log(filteredAlbums)

    // function sortFunc(a, b) {
    //   const sortOrderArray = albumsIDsList
    //   return (
    //     sortOrderArray.indexOf(a.albumId) - sortOrderArray.indexOf(b.albumId)
    //   )
    // }
    // const sortedAlbums = filteredAlbums.sort(sortFunc)
    setAlbums(filteredAlbums)
  }

  // console.log(iDs)
  console.log(albumsData)

  useEffect(() => {
    // fetch albums which are in user collection
    if (currentUser && albumsData) fetchAlbumsInUserCollection()
    // pass this albums that are saved in the state to the CollectionGrid child component
    // acceptance criteria:
    // if albums in the collection <1 , show text block "add some albums to your collection and they will show up here"
    // if albums in the collection <12, don't show "show more" button

    // fetch albums data after useAuth hook change currentUser from 'null' to authorized user
  }, [albumsData])

  const handleShowMore = () => {
    setAlbumsSlice((prevSlice) => ({ ...prevSlice, end: prevSlice.end + 8 }))
  }
  return (
    <ContainerMain>
      <Header />
      <PageBody>
        <Content flexDirection="column" alignItems="center" $marginTop="5em">
          <h2>Collection</h2>
          <CollectionGrid albumsSlice={albumsSlice} albumsData={albums} />
          <Button marginTop="2em" onClick={handleShowMore}>
            Show more
          </Button>
        </Content>
      </PageBody>
      <Footer />
    </ContainerMain>
  )
}

export default Collection
