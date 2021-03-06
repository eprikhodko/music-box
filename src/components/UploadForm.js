import PropTypes from "prop-types"

import styled from "styled-components"
import { useContext, useState } from "react"

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
  Form,
  ContainerCheckboxes,
  CheckboxLabel,
  HiddenCheckbox,
  CustomCheckbox,
  MessageController,
  Message,
  ImageUploadBox,
  HiddenFileInput,
} from "./shared/FormElements"
import { Button } from "./shared/Buttons"

import UserContext from "../context/user"
import { MainGrid } from "./shared/Containers"

const ButtonUpload = styled(Button)`
  margin-top: 3em;
`

const CenterContent = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  padding-top: 5em;
`

const StyledText = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  margin: 0;
`

function UploadForm({ isUploadSuccessful, setIsUploadSuccessful }) {
  const [fileDownloadUrl, setFileDownloadUrl] = useState("")
  const [albumCoverFileName, setAlbumCoverFileName] = useState("")
  const [albumName, setAlbumName] = useState("")
  const [artist, setArtist] = useState("")
  const [year, setYear] = useState("")
  const [genre, setGenre] = useState("")
  const [checkboxes, setCheckboxes] = useState({
    addToCollection: false,
    addToWishList: false,
  })

  const currentUser = useContext(UserContext)

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
    const albumsCoversRef = ref(storageRef, `albums-covers`)

    // Points to 'albums-covers/file.name'
    // Note that you can use variables to create child values
    const fileName = file && file.name
    const date = Date.now()

    const updatedFileName = file && fileName.concat(date) // make file name unique
    console.log(updatedFileName)
    setAlbumCoverFileName(updatedFileName)
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
      const newAlbumRef = await doc(collection(db, "albums"))
      console.log(newAlbumRef)

      // set album data
      const albumData = {
        albumId: newAlbumRef.id,
        albumName,
        artist,
        year,
        genre,
        albumCover: fileDownloadUrl,
        albumCoverFileName,
        uploadedBy: currentUser.uid,
        dateCreated: serverTimestamp(),
      }

      // later...
      // add new document in firestore collection "albums"
      await setDoc(newAlbumRef, albumData)

      // add to collection
      // add album to user collection if user checked 'add to my collection' checkbox
      if (checkboxes.addToCollection) {
        const docRef = doc(
          db,
          "users",
          currentUser.uid,
          "albumsInUserCollection",
          newAlbumRef.id
        )
        await setDoc(docRef, {
          albumId: newAlbumRef.id,
          dateAdded: serverTimestamp(),
        })
      }

      // add to wishlist
      // add album to user wishlist if user checked 'add to my wishlist' checkbox
      if (checkboxes.addToWishList) {
        const docRef = doc(
          db,
          "users",
          currentUser.uid,
          "albumsInUserWishlist",
          newAlbumRef.id
        )
        await setDoc(docRef, {
          albumId: newAlbumRef.id,
          dateAdded: serverTimestamp(),
        })
      }

      // reset inputs after file was uploaded to the database
      setFileDownloadUrl("")
      setAlbumCoverFileName("")
      setAlbumName("")
      setArtist("")
      setYear("")
      setGenre("")
      setCheckboxes({
        addToCollection: false,
        addToWishList: false,
      })

      // set state to true if upload was successful
      setIsUploadSuccessful(true)
    } catch (error) {
      console.log(error)
    }

    console.log("Form submitted")
  }

  const handleChange = (event) => {
    const { name, checked } = event.target
    setCheckboxes({
      ...checkboxes,
      [name]: checked,
    })
  }

  const handleYearChange = (event) => {
    if (event.target.value.match("^[0-9]*$")) setYear(event.target.value)
  }

  return (
    <MainGrid>
      <Form onSubmit={handleSubmit}>
        <ImageUploadBox htmlFor="imageUpload" fileUrl={fileDownloadUrl}>
          {!fileDownloadUrl && (
            <>
              <StyledText>
                <CenterContent>Click to upload album picture</CenterContent>
              </StyledText>
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
          <FloatLabel htmlFor="albumName" isNotEmpty={albumName}>
            Album name
          </FloatLabel>
          <FloatInput
            id="albumName"
            type="text"
            name="albumName"
            aria-label="Album name"
            required
            value={albumName}
            onChange={(event) => {
              setAlbumName(event.target.value)
            }}
          />
        </ContainerFloatInput>

        <ContainerFloatInput>
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
        </ContainerFloatInput>

        <ContainerFloatInput>
          <FloatLabel htmlFor="albumYear" isNotEmpty={year}>
            Year
          </FloatLabel>
          <FloatInput
            id="albumYear"
            type="text"
            name="albumYear"
            aria-label="Album year"
            minLength="4"
            maxLength="4"
            required
            value={year}
            onChange={handleYearChange}
          />
        </ContainerFloatInput>

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
        </ContainerFloatInput>

        <ContainerCheckboxes>
          <CheckboxLabel htmlFor="addToCollection">
            <HiddenCheckbox
              type="checkbox"
              id="addToCollection"
              name="addToCollection"
              checked={checkboxes.addToCollection}
              onChange={handleChange}
            />
            <CustomCheckbox />
            add to my collection
          </CheckboxLabel>

          <CheckboxLabel htmlFor="addToWishList">
            <HiddenCheckbox
              type="checkbox"
              id="addToWishList"
              // a small note: be shure that 'name' property matching checked property, or checkbox wouldn't work at all.
              // addToWishlist and addToWishList are not the same! Watch for case and 'L' letter!
              name="addToWishList"
              checked={checkboxes.addToWishList}
              onChange={handleChange}
            />
            <CustomCheckbox />
            add to wishlist
          </CheckboxLabel>
        </ContainerCheckboxes>

        <ButtonUpload type="submit">Upload</ButtonUpload>

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
          You&apos;re successfully uploaded album to the database!
        </Message>
      </Form>
    </MainGrid>
  )
}

export default UploadForm

UploadForm.propTypes = {
  isUploadSuccessful: PropTypes.bool.isRequired,
  setIsUploadSuccessful: PropTypes.func.isRequired,
}
