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
    const docsData = querySnapshot.docs.map((doc) => doc.data())
    console.log(docsData)
  }

  useEffect(() => {
    // fetch albums which are in user collection
    if (currentUser) fetchAlbumsInUserCollection()
    // save them in the state
    // pass this albums that are saved in the state to the CollectionGrid child component
    // acceptance criteria:
    // if albums in the collection <1 , show text block "add some albums to your collection and they will show up here"
    // if albums in the collection <12, don't show "show more" button

    // fetch albums data after useAuth hook change currentUser from 'null' to authorized user
  }, [currentUser])

  const handleShowMore = () => {
    setAlbumsSlice((prevSlice) => ({ ...prevSlice, end: prevSlice.end + 8 }))
  }
  return (
    <ContainerMain>
      <Header />
      <PageBody>
        <Content flexDirection="column" alignItems="center" $marginTop="5em">
          <h2>Collection</h2>
          <CollectionGrid albumsSlice={albumsSlice} />
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
