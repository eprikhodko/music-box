import { useContext, useEffect, useState } from "react"
import {
  getFirestore,
  collection,
  getDocs,
  query,
  orderBy,
  limit,
  where,
} from "firebase/firestore"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { HeroButton } from "./shared/Button"
import { CenterContent } from "./shared/Containers"
import { HeroTitle } from "./shared/HeroTitle"
import UserAvatar from "./UserAvatar"
import SearchBox from "./shared/SearchBox"

import {
  AlbumContainer,
  StyledLink,
  AlbumCover,
  AlbumTitle,
  AlbumArtist,
  StyledAlbumsGrid,
} from "./shared/grids/GridElements"

import { FallbackBackgroundImage } from "./AlbumDetails"

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

const HeroAlbumCover = styled(AlbumCover)`
  width: 40em;
  height: 40em;
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
  const [albumsData, setAlbumsData] = useState([])
  const [albumsComponents, setAlbumsComponents] = useState([])
  // const [isLoading, setIsLoading] = useState(true)

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

      // map through albums and return new array with albums data
      // const albumsIDsList = querySnapshot.docs.map((doc) => doc.data())
      // console.log("albums ids list with server date", albumsIDsList)
      // console.log("test time", albumsIDsList[0].dateAdded.toMillis())

      const iDs = querySnapshot.docs.map((doc) => doc.data().albumId)
      const timestamps = querySnapshot.docs.map((doc) =>
        doc.data().dateAdded.toDate()
      )

      const newArray = iDs.map((id, index) => ({
        albumId: id,
        dateAdded: timestamps[index],
      }))

      // write sorted albums to the state
      setAlbumsInUserCollection(newArray)
      // setIsLoading(false)
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

      // map through albums and return new array with albums data
      // const albumsIDsList = querySnapshot.docs.map((doc) => doc.data())
      // console.log("albums ids list with server date", albumsIDsList)
      // console.log("test time", albumsIDsList[0].dateAdded.toMillis())

      const iDs = querySnapshot.docs.map((doc) => doc.data().albumId)
      const timestamps = querySnapshot.docs.map((doc) =>
        doc.data().dateAdded.toDate()
      )

      const newArray = iDs.map((id, index) => ({
        albumId: id,
        dateAdded: timestamps[index],
      }))

      // console.log("this is new array", newArray)

      // write sorted albums to the state
      setAlbumsInUserWishlist(newArray)
      // setIsLoading(false)
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
    console.log("albums in user collection", albumsInUserCollection)
    console.log("albums in user wishlist", albumsInUserWishlist)

    // const sortFunc = (a, b) =>
    //   mergedArray.indexOf(a.dateAdded) - mergedArray.indexOf(b.dateAdded)

    const sortFunction = (a, b) => b.dateAdded - a.dateAdded

    // sort albums
    const sortedAlbums = mergedArray.sort(sortFunction)
    console.log("sorted albums", sortedAlbums)

    // extract albums IDs
    const iDs = sortedAlbums.map((album) => album.albumId)
    console.log("albums ids", iDs)
    const uniqueIDs = [...new Set(iDs)]
    console.log("unique ids", uniqueIDs)

    const firstFiveAlbums = uniqueIDs.slice(0, 5)

    setAlbumsIDs(firstFiveAlbums)
  }, [albumsInUserCollection, albumsInUserWishlist])

  console.log("this is albums ids state", albumsIDs)

  useEffect(() => {
    const fetchAlbumsData = async (albumsIds) => {
      const db = getFirestore()

      const albumsRef = collection(db, "albums")
      const q = query(albumsRef, where("albumId", "in", albumsIds))
      const querySnapshot = await getDocs(q)
      console.log(querySnapshot)

      // map through albums and return new array with albums data
      const albumsDocs = querySnapshot.docs.map((doc) => doc.data())
      console.log(albumsDocs)

      // sort albums according to provided sorting array
      const sortFunc = (a, b) => {
        const sortOrderArray = albumsIDs
        return (
          sortOrderArray.indexOf(a.albumId) - sortOrderArray.indexOf(b.albumId)
        )
      }
      // sort albums
      const sortedAlbums = albumsDocs.sort(sortFunc)

      // write sorted albums to the state
      // return albumsIDsList
      setAlbumsData(sortedAlbums)
    }

    if (albumsIDs.length > 0) fetchAlbumsData(albumsIDs)
  }, [albumsIDs])

  console.log(albumsData)

  useEffect(() => {
    const createAlbumsComponents = () => {
      const albums = albumsData.map((album) => (
        <StyledLink to={`/albums/${album.albumId}`} key={album.albumId}>
          <AlbumContainer>
            <AlbumCover
              src={album.albumCover}
              alt={`album cover for ${album.albumName} album`}
            />
            <AlbumTitle>{album.albumName}</AlbumTitle>
            <AlbumArtist>{album.artist}</AlbumArtist>
          </AlbumContainer>
        </StyledLink>
      ))
      return albums
    }

    setAlbumsComponents(createAlbumsComponents())
  }, [albumsData])

  const setDisplayToNone = (e) => {
    e.target.style.display = "none"
  }

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

        {albumsComponents ? (
          <>
            <StyledLink
              to={albumsData[0] && `/albums/${albumsData[0].albumId}`}
            >
              <FallbackBackgroundImage>
                <HeroAlbumCover
                  src={albumsData[0] && albumsData[0].albumCover}
                  alt="cover for album"
                  onError={setDisplayToNone}
                />
              </FallbackBackgroundImage>
            </StyledLink>

            {/* <AlbumDescription>
                <h2>{album.albumName}</h2>
                <h3>{album.artist}</h3>
                <AlbumYear>Year: {album.year}</AlbumYear>
                <AlbumGenre>Genre: {album.genre}</AlbumGenre>
                    
              </AlbumDescription> */}
          </>
        ) : (
          <ContainerTextBlock flexDirection="column">
            <HeroTitle>Build your music library</HeroTitle>
            <h3>
              Add some albums to your collection or wishlist and they will
              appear in your profile
            </h3>
            <SearchBox placeholder="Search music!" marginTop="2em" />
          </ContainerTextBlock>
        )}
      </ContainerFlex>
      <StyledAlbumsGrid>{albumsComponents.slice(1, 5)}</StyledAlbumsGrid>
    </ContainerFlex>
  )
}

export default ProfileContent
