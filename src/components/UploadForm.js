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
} from "./shared/FormElements"
import { Button } from "./shared/Button"
import { ReactComponent as IconImagePlaceholder } from "../icons/image-placeholder.svg"
import { ReactComponent as CheckboxCircleIcon } from "../icons/check_circle_24px.svg"
import UserContext from "../context/user"

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
  height: 0;
  padding: 0;
  opacity: 0;
`

const CheckboxLabel = styled.label`
  font-size: 1.6rem;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.7);

  display: flex;
  align-items: center;
  margin-right: 6em;
  margin-top: 2.5em;

  cursor: pointer;
`

const CustomCheckbox = styled(CheckboxCircleIcon)`
  width: 1.3em;
  height: 1.3em;
  border: 2px solid rgba(0, 0, 0, 0.3);
  border-radius: 50px;
  margin-right: 0.5em;
  margin-bottom: 0.1em;

  path {
    fill: transparent;
  }

  * {
    transition: all 0.1s linear;
  }
`

const HiddenCheckbox = styled.input`
  -webkit-appearance: none;
  appearance: none;
  margin: 0;

  &:checked + ${CustomCheckbox} {
    border: none;
    path {
      fill: #333333;
    }
  }

  /* visually show focus outline when the SVG receives focus */
  &:focus + ${CustomCheckbox} {
    outline: 2px solid #000;
    outline-offset: 3px;
  }

  /* hide the focus styles for mouse users */
  &:focus:not(:focus-visible) + ${CustomCheckbox} {
    outline: none;
  }
`

const ContainerCheckboxes = styled.div`
  display: flex;
  /* border: 1px solid green; */
`

function UploadForm() {
  const [fileDownloadUrl, setFileDownloadUrl] = useState("")
  const [albumCoverFileName, setAlbumCoverFileName] = useState("")
  const [albumName, setAlbumName] = useState("")
  const [artist, setArtist] = useState("")
  const [year, setYear] = useState("")
  const [genre, setGenre] = useState("")
  // const [addToCollection, setAddToCollection] = useState(false)
  const [checkboxes, setCheckboxes] = useState({
    addToCollection: false,
    addToWishList: false,
  })

  const currentUser = useContext(UserContext)

  const handleFileUpload = async (event) => {
    // get file object from the file input
    const file = event.target.files[0]
    console.log(file)

    // Get a reference to the storage service, which is used to create references in your storage bucket
    const storage = getStorage()

    // Create a storage reference from our storage service
    // Points to the root reference
    const storageRef = ref(storage)
    console.log(storageRef)

    // Points to 'albums-covers' folder at firebase storage
    const albumsCoversRef = ref(storageRef, `albums-covers`)

    // Points to 'albums-covers/file.name'
    // Note that you can use variables to create child values
    const fileName = file && file.name
    setAlbumCoverFileName(fileName)
    const albumCoverRef = ref(albumsCoversRef, fileName)
    console.log("albumCoverRef value:", albumCoverRef)

    // File path is 'user-avatars/username/fileName'
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
    // check Add data chapter in Firebase docs
    // https://firebase.google.com/docs/firestore/manage-data/add-data#web-v8_11

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
        console.log("hey, this is docRef for album in collection:", docRef)
        await setDoc(docRef, {
          albumId: newAlbumRef.id,
          dateAdded: serverTimestamp(),
        })
      }

      // add to wishlist
      // add album to user collection if user checked 'add to my collection' checkbox
      if (checkboxes.addToWishList) {
        const docRef = doc(
          db,
          "users",
          currentUser.uid,
          "albumsInUserWishlist",
          newAlbumRef.id
        )
        console.log("hey, this is docRef for album in wishlist:", docRef)
        await setDoc(docRef, {
          albumId: newAlbumRef.id,
          dateAdded: serverTimestamp(),
        })
      }
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

  return (
    <form onSubmit={handleSubmit}>
      <ContainerUploadForm marginTop="5em">
        <ImageUploadBox htmlFor="imageUpload" fileUrl={fileDownloadUrl}>
          {!fileDownloadUrl && (
            <>
              <ImagePlaceholderIcon /> Click to upload album picture
            </>
          )}

          <HiddenFileInput
            id="imageUpload"
            name="imageUpload"
            type="file"
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
            type="number"
            name="albumYear"
            aria-label="Album year"
            minLength="4"
            required
            value={year}
            onChange={(event) => {
              setYear(event.target.value)
            }}
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
      </ContainerUploadForm>

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
            // a small remark: be shure that 'name' property matching checked property, or checkbox wouldn't be work at all.
            // addToWishlist and addToWishList are not the same! Watch for case and 'L' letter!
            name="addToWishList"
            checked={checkboxes.addToWishList}
            onChange={handleChange}
          />
          <CustomCheckbox />
          add to wishlist
        </CheckboxLabel>
      </ContainerCheckboxes>

      <ContainerUploadForm marginTop="3em">
        <Button type="submit">Upload</Button>
      </ContainerUploadForm>
    </form>
  )
}

export default UploadForm
