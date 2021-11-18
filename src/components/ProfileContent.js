import { useContext, useEffect, useState } from "react"
import {
  getFirestore,
  collection,
  getDocs,
  query,
  orderBy,
  limit,
  // where
} from "firebase/firestore"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { HeroButton } from "./shared/Button"
import { CenterContent } from "./shared/Containers"
import { HeroTitle } from "./shared/HeroTitle"
import UserAvatar from "./UserAvatar"
import SearchBox from "./shared/SearchBox"

import * as ROUTES from "../constants/routes"
import UserContext from "../context/user"

const Username = styled.p`
  font-size: 2.5rem;
  color: rgba(0, 0, 0, 0.7);
  font-weight: 500;
  margin-top: 0.6em;
`

const ContainerFlex = styled.div`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection};
`

const ContainerTextBlock = styled(ContainerFlex)`
  max-width: 32em;
  margin-top: 7em;
  margin-left: 19em;
`

// fetch 5 last albums ids from albumsInUserCollection
// fetch 5 last albums ids from albumsInUserWishlist
// merge this arrays
// sort by doc.dateCreated
// fetch 5 last albums from that merged array from albums collection

function ProfileContent() {
  const currentUser = useContext(UserContext)

  const [albumsInUserCollection, setAlbumsInUserCollection] = useState([])
  const [albumsInUserWishlist, setAlbumsInUserWishlist] = useState([])
  const [albumsIDs, setAlbumsIDs] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchAlbumsInUserCollection = async () => {
      const db = getFirestore()

      const albumsRef = collection(
        db,
        "users",
        currentUser.uid,
        "albumsInUserCollection"
      )
      const q = query(albumsRef, orderBy("dateAdded", "desc"), limit(5))
      const querySnapshot = await getDocs(q)

      // map through albums and return new array with albums ids
      const albumsIDsList = querySnapshot.docs.map((doc) => doc.data())

      // write sorted albums to the state
      setAlbumsInUserCollection(albumsIDsList)
      setIsLoading(false)
    }

    const fetchAlbumsInUserWishlist = async () => {
      const db = getFirestore()

      const albumsRef = collection(
        db,
        "users",
        currentUser.uid,
        "albumsInUserWishlist"
      )
      const q = query(albumsRef, orderBy("dateAdded", "desc"), limit(5))
      const querySnapshot = await getDocs(q)

      // map through albums and return new array with albums ids
      const albumsIDsList = querySnapshot.docs.map((doc) => doc.data())

      // write sorted albums to the state
      setAlbumsInUserWishlist(albumsIDsList)
      setIsLoading(false)
    }
    // fetch albums
    if (currentUser) {
      fetchAlbumsInUserCollection()
      fetchAlbumsInUserWishlist()
    }
  }, [currentUser])

  // console.log("this is loading state", isLoading)

  useEffect(() => {
    const mergedArray = albumsInUserCollection.concat(albumsInUserWishlist)
    const firstFiveAlbums = mergedArray.slice(0, 5)

    // sort albums according to provided sorting array
    const sortFunc = (a, b) =>
      firstFiveAlbums.indexOf(a.dateCreated) -
      firstFiveAlbums.indexOf(b.dateCreated)

    // sort albums
    const sortedAlbums = firstFiveAlbums.sort(sortFunc)
    // console.log("sorted albums", sortedAlbums)

    // extract albums IDs
    const iDs = sortedAlbums.map((album) => album.albumId)
    // console.log("albums ids", iDs)

    setAlbumsIDs(iDs)
  }, [isLoading])

  console.log("this is albums ids state", albumsIDs)

  return (
    <ContainerFlex flexDirection="column">
      <ContainerFlex>
        <CenterContent>
          <UserAvatar />
          <Username>{currentUser?.displayName}</Username>
          <HeroButton as={Link} to={`/collection/${currentUser?.displayName}`}>
            Collection
          </HeroButton>
          <HeroButton
            as={Link}
            to={`/wishlist/${currentUser?.displayName}`}
            $marginTop="1em"
          >
            Wishlist
          </HeroButton>
          <HeroButton as={Link} to={ROUTES.UPLOAD} $marginTop="1em">
            Upload
          </HeroButton>
          <HeroButton as={Link} to={ROUTES.UPLOADED_BY} $marginTop="1em">
            My Uploads
          </HeroButton>
        </CenterContent>
        <ContainerTextBlock flexDirection="column">
          <HeroTitle>Build your music library</HeroTitle>
          <h3>
            Add some albums to your collection or wishlist and they will appear
            in your profile
          </h3>
          <SearchBox placeholder="Search music!" marginTop="2em" />
        </ContainerTextBlock>
      </ContainerFlex>
    </ContainerFlex>
  )
}

export default ProfileContent
