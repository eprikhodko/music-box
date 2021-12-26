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
import { ButtonPrimary } from "../shared/Buttons"
import UserAvatar from "./UserAvatar"

import {
  AlbumContainer,
  StyledLink,
  AlbumCoverContainer,
  AlbumCover,
  AlbumTitle,
  AlbumArtist,
  StyledAlbumsGrid,
} from "../shared/grids/GridElements"

import * as ROUTES from "../../constants/routes"
import UserContext from "../../context/user"

import { MainGrid } from "../shared/Containers"
import useMatchMedia from "../../hooks/useMatchMedia"

const Container = styled.div`
  grid-column: 2 / -2;
  margin-top: 3.75em;

  display: grid;
  grid-template-columns: 1fr 1fr;
`

const Username = styled.p`
  font-size: 2.5rem;
  color: rgba(0, 0, 0, 0.7);
  font-weight: 500;
  margin-top: 0.6em;
`

const Title = styled.h2`
  margin-bottom: 0.3em;
`

const HeroTitle = styled.h1`
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  align-self: end;

  font-size: 7rem;
  line-height: 1.15;
`

const Subtitle = styled.h3`
  grid-column: 2 / 3;
  grid-row: 2 / 3;

  margin-top: 1em;
`

const ContainerFlex = styled.div`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection};
  justify-content: ${({ justifyContent }) => justifyContent};
`

export const CenterContent = styled.div`
  grid-column: 1 / 3;
  grid-row: 1 / 3;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1024px) {
    grid-column: 1 / 2;
    justify-self: start;
  }
`

const AlbumName = styled.p`
  font-size: 1.8rem;
  color: #000;
  margin: 0;
  margin-top: 0.8em;
`

const AlbumArtistName = styled.p`
  font-size: 1.6rem;
  color: #000;
  margin: 0;
`

const AddAlbumsLink = styled(StyledLink)`
  text-decoration: underline;
`

const ProfileAlbums = styled(StyledAlbumsGrid)`
  grid-column: 1/3;
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

  const isDesktopResolution = useMatchMedia("(min-width: 1024px)", true)

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

      // write sorted albums to the state
      setAlbumsInUserWishlist(newArray)
    }
    // fetch albums
    if (currentUser) {
      fetchAlbumsInUserCollection()
      fetchAlbumsInUserWishlist()
    }
  }, [currentUser])

  useEffect(() => {
    const mergedArray = albumsInUserCollection.concat(albumsInUserWishlist)
    console.log("albums in user collection", albumsInUserCollection)
    console.log("albums in user wishlist", albumsInUserWishlist)

    const sortFunction = (a, b) => b.dateAdded - a.dateAdded

    // sort albums
    const sortedAlbums = mergedArray.sort(sortFunction)
    console.log("sorted albums", sortedAlbums)

    // extract albums IDs
    const iDs = sortedAlbums.map((album) => album.albumId)
    console.log("albums ids", iDs)
    // remove duplicate ids
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

  useEffect(() => {
    const createAlbumsComponents = () => {
      const albums = albumsData.map((album) => (
        <StyledLink to={`/albums/${album.albumId}`} key={album.albumId}>
          <AlbumContainer>
            <AlbumCoverContainer>
              <AlbumCover
                src={album.albumCover}
                alt={`album cover for ${album.albumName}`}
              />
            </AlbumCoverContainer>
            <AlbumTitle>{album.albumName}</AlbumTitle>
            <AlbumArtist>{album.artist}</AlbumArtist>
          </AlbumContainer>
        </StyledLink>
      ))
      return albums
    }

    setAlbumsComponents(createAlbumsComponents())
  }, [albumsData])

  return (
    <MainGrid>
      <Container>
        <CenterContent>
          <UserAvatar />
          <Username>{currentUser?.displayName}</Username>
          <ButtonPrimary
            as={Link}
            to={`/collection/${currentUser?.displayName}`}
          >
            Collection
          </ButtonPrimary>
          <ButtonPrimary
            as={Link}
            to={`/wishlist/${currentUser?.displayName}`}
            $marginTop="1em"
          >
            Wishlist
          </ButtonPrimary>
          <ButtonPrimary as={Link} to={ROUTES.UPLOAD} $marginTop="1em">
            Upload
          </ButtonPrimary>
          <ButtonPrimary
            as={Link}
            to={`/my-uploads/${currentUser?.displayName}`}
            $marginTop="1em"
          >
            My Uploads
          </ButtonPrimary>
        </CenterContent>

        {isDesktopResolution && (
          <>
            {albumsComponents.length > 0 ? (
              <ContainerFlex flexDirection="column">
                <Title>Recently added</Title>
                <StyledLink
                  to={albumsData[0] && `/albums/${albumsData[0].albumId}`}
                >
                  <AlbumCoverContainer>
                    <AlbumCover
                      src={albumsData[0] && albumsData[0].albumCover}
                      alt={`album cover for ${albumsData[0].albumName}`}
                    />
                  </AlbumCoverContainer>
                </StyledLink>

                <AlbumName>
                  {albumsData[0] && albumsData[0].albumName}
                </AlbumName>
                <AlbumArtistName>
                  {albumsData[0] && albumsData[0].artist}
                </AlbumArtistName>
              </ContainerFlex>
            ) : (
              <>
                <HeroTitle>Build your music library</HeroTitle>
                <Subtitle>
                  <AddAlbumsLink to={ROUTES.CATALOG}>
                    Add some albums
                  </AddAlbumsLink>{" "}
                  to your collection or wishlist and they will appear in your
                  profile
                </Subtitle>
              </>
            )}

            {albumsComponents.length > 1 && (
              <ProfileAlbums>{albumsComponents.slice(1, 5)}</ProfileAlbums>
            )}
          </>
        )}
      </Container>
    </MainGrid>
  )
}

export default ProfileContent
