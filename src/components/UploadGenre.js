import PropTypes from "prop-types"

import styled from "styled-components"
import { useState } from "react"

import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage"
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  serverTimestamp,
} from "firebase/firestore"

import {
  FloatLabel,
  FloatInput,
  ContainerFloatInput,
} from "./shared/FormElements"
import { Button } from "./shared/Button"
import { ReactComponent as IconImagePlaceholder } from "../icons/image-placeholder.svg"
// import UserContext from "../context/user"

const ContainerUploadForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* set default margin-top of 10em for container */
  margin-top: ${({ marginTop }) => marginTop || "10em"};
  /* border: 2px solid goldenrod; */
`

// style label element to visually represent interactive upload box
const ImageUploadBox = styled.label`
  font-size: 1.8rem;
  color: rgba(0, 0, 0, 0.5);
  font-weight: 500;
  margin-top: 0.6em;

  background-image: url(${({ fileUrl }) => fileUrl});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  /* set image upload box dimensions and background color */
  width: 31em;
  height: 31em;
  background-color: #c2c2c2;

  /* center content inside of image upload box */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /* set transition animation duration */
  will-change: transform;
  transition: background-color 450ms, transform 450ms;

  /* on hover: show pointer cursor, change background color, move image upload box up for 10px */
  &:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.2);
    transform: translateY(-10px);
  }
  /* change image icon color on hover */
  &:hover svg path {
    fill: rgba(0, 0, 0, 0.3);
  }

  /* show focus outline at image upload box when hidden file input receives focus too */
  &:focus-within {
    outline: 2px solid #000;
    outline-offset: 3px;
  }
`

const ImagePlaceholderIcon = styled(IconImagePlaceholder)`
  width: 3em;
  height: 3em;
  margin-bottom: 1em;
`

const HiddenFileInput = styled.input`
  /* height: 0; */
  padding: 0;
  opacity: 0;
`

const MessageController = styled.div`
  /* property name | duration */
  transition: color 5s; // <- the second value defines transition duration
  color: ${({ triggerTransition }) => (triggerTransition ? "red" : "green")};
`

const Message = styled.p`
  opacity: ${({ showMessage }) => (showMessage ? "1" : "0")};
  transition: all 250ms linear 0.5s; // <- the last value defines transition-delay, so 'opacity:' changes after half a second
  cursor: default;
`

function UploadGenre({ isUploadSuccessful, setIsUploadSuccessful }) {
  const [fileDownloadUrl, setFileDownloadUrl] = useState("")
  //   const [albumCoverFileName, setAlbumCoverFileName] = useState("")
  const [genreName, setGenreName] = useState("")
  //   const [artist, setArtist] = useState("")
  //   const [genreId, setGenreId] = useState("")
  //   const [genre, setGenre] = useState("")
  //   const [checkboxes, setCheckboxes] = useState({
  //     addToCollection: false,
  //     addToWishList: false,
  //   })

  //   const currentUser = useContext(UserContext)

  // <<-- Upload image to Firebase Storage -->>
  const handleFileUpload = async (event) => {
    // get file object from the file input
    const file = event.target.files[0]
    // console.log(file)

    // Get a reference to the storage service, which is used to create references in your storage bucket
    const storage = getStorage()

    // Create a storage reference from our storage service
    // Points to the root reference
    const storageRef = ref(storage)
    // console.log(storageRef)

    // Points to 'albums-covers' folder at firebase storage
    const albumsCoversRef = ref(storageRef, `genres-covers`)

    // Points to 'albums-covers/file.name'
    // Note that you can use variables to create child values
    const fileName = file && file.name
    const date = Date.now()

    const updatedFileName = file && fileName.concat(date) // make file name unique
    console.log(updatedFileName)
    // setAlbumCoverFileName(updatedFileName)
    const albumCoverRef = ref(albumsCoversRef, updatedFileName)
    console.log("albumCoverRef value:", albumCoverRef)

    // File path is 'album-covers/username/updatedFileName'
    const path = albumCoverRef.fullPath
    console.log("file path:", path)

    // upload image to the Firebase Storage
    try {
      await uploadBytes(albumCoverRef, file)
    } catch (error) {
      console.log(error.message)
    }

    // get download url of an image
    try {
      const downloadUrl = await getDownloadURL(ref(storage, path))
      console.log(downloadUrl)

      // save file download url in the state
      setFileDownloadUrl(downloadUrl)
    } catch (error) {
      console.log(error)
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const db = getFirestore()

    // <<-- Create document in Firestore -->>
    // In some cases, it can be useful to create a document reference with an auto-generated ID, then use the reference later. For this use case, you can call doc():
    // Add a new document with a generated id.
    try {
      const newAlbumRef = await doc(collection(db, "genres"))
      console.log(newAlbumRef)

      // set album data
      const albumData = {
        genreId: newAlbumRef.id,
        genreName,
        albumCover: fileDownloadUrl,
        dateCreated: serverTimestamp(),
      }

      // later...
      // add new document in firestore collection "albums"
      await setDoc(newAlbumRef, albumData)

      // reset inputs after file was uploaded to the database
      setFileDownloadUrl("")
      //   setAlbumCoverFileName("")
      setGenreName("")
      //   setGenreId("")

      // set state to true if upload was successful
      setIsUploadSuccessful(true)
    } catch (error) {
      console.log(error)
    }

    console.log("Form submitted")
  }

  //   const handleGenreIdChange = (event) => {
  //     if (event.target.value.match("^[0-9]*$")) setGenreId(event.target.value)
  //   }

  return (
    <form onSubmit={handleSubmit}>
      <ContainerUploadForm marginTop="5em">
        <ImageUploadBox htmlFor="imageUpload" fileUrl={fileDownloadUrl}>
          {!fileDownloadUrl && (
            <>
              <ImagePlaceholderIcon /> Click to upload genre picture
            </>
          )}

          <HiddenFileInput
            id="imageUpload"
            name="imageUpload"
            type="file"
            required
            onChange={handleFileUpload}
          />
        </ImageUploadBox>

        <ContainerFloatInput marginTop="3em">
          <FloatLabel htmlFor="genreName" isNotEmpty={genreName}>
            Genre name
          </FloatLabel>
          <FloatInput
            id="genreName"
            type="text"
            name="genreName"
            aria-label="Genre name"
            required
            value={genreName}
            onChange={(event) => {
              setGenreName(event.target.value)
            }}
          />
        </ContainerFloatInput>

        {/* <ContainerFloatInput>
          <FloatLabel htmlFor="artistName" isNotEmpty={artist}>
            Artist name
          </FloatLabel>
          <FloatInput
            id="artistName"
            type="text"
            name="artistName"
            aria-label="Artist name"
            required
            value={artist}
            onChange={(event) => {
              setArtist(event.target.value)
            }}
          />
        </ContainerFloatInput> */}

        {/* <ContainerFloatInput>
          <FloatLabel htmlFor="genreID" isNotEmpty={genreId}>
            Genre ID
          </FloatLabel>
          <FloatInput
            id="genreID"
            type="text"
            name="genreID"
            aria-label="Genre ID"
            minLength="1"
            maxLength="2"
            required
            value={genreId}
            onChange={handleGenreIdChange}
          />
        </ContainerFloatInput> */}
        {/* 
        <ContainerFloatInput>
          <FloatLabel htmlFor="albumGenre" isNotEmpty={genre}>
            Genre
          </FloatLabel>
          <FloatInput
            id="albumGenre"
            type="text"
            name="albumGenre"
            aria-label="Album genre"
            required
            value={genre}
            onChange={(event) => {
              setGenre(event.target.value)
            }}
          />
        </ContainerFloatInput> */}
      </ContainerUploadForm>

      <ContainerUploadForm marginTop="3em">
        <Button type="submit">Upload</Button>

        {/* <<-- Show message to the user after successful upload-->> */}
        {/* this is an empty div that controls how long <Message /> componet will be showing to the user */}
        <MessageController
          triggerTransition={isUploadSuccessful}
          onTransitionEnd={() => setIsUploadSuccessful(false)}
        />

        {/* <<-- a hidden message that will be shown to the user if upload to the database was successful -->>

        // <Message /> is a Styled Component. Visibility of this component controlled by 'opacity:' property inside this component, and 'opacity:' property value controlled by 'showMessage' prop value
        // if 'showMessage' value is 'false', opacity is '0'. If 'showMessage' value is 'true', opacity is '1'

        // 'showMessage' value equal and depends on 'isUploadSuccessful' state
        // 'isUploadSuccessful' state is 'false' by default. This means that 'showMessage' prop recieves 'false', so opacity of <Message /> component is 0, and it won't visible at the screen.

        // after user submit upload form, in case of successful upload, 'isUploadSuccessful' state changes to 'true'. Opacity of <Message /> changes to 1, and <Message /> appear at the screen. 

        // the duration of how long <Message /> is showing at screen controlled by <MessageController /> Styled Component by its 'transition:' property
        // for example, if we have 'transition: all 5s linear;', this means that transition duration is five seconds 
        // we trigger transition by passing 'isUploadSuccessful' state value to the 'triggerTransition' prop like we did in the <Message /> component
        // 'triggerTransition' prop simply changes 'color:' property of <MessageController /> component from 'green' to 'red' 
        // when 'color:' property changes, transition is triggered 
        // transition lasts for 5 seconds and after it ends, 'onTransitionEnd' event of <MessageController /> component fire 'setIsUploadSuccessful' hook and set state to 'false', so now our <Message /> component dissapears because now 'showMessage' prop receieves 'false' value

        // check https://stackoverflow.com/questions/42733986/react-how-to-wait-and-fade-out for more info
        */}
        <Message showMessage={isUploadSuccessful}>
          You&apos;re successfully uploaded genre to the database!
        </Message>
      </ContainerUploadForm>
    </form>
  )
}

export default UploadGenre

UploadGenre.propTypes = {
  isUploadSuccessful: PropTypes.bool.isRequired,
  setIsUploadSuccessful: PropTypes.func.isRequired,
}
