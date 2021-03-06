import { useContext, useEffect, useState } from "react"
import styled from "styled-components"

import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { getAuth, updateProfile } from "firebase/auth"

import { ReactComponent as IconPers } from "../../icons/person_24px.svg"
import UserContext from "../../context/user"

const AvatarText = styled.p`
  font-size: 1.6rem;
  color: rgba(0, 0, 0, 0.7);
  font-weight: 500;

  @media (min-width: 600px) {
    font-size: 2.5rem;
  }
`

const AvatarImage = styled.div`
  width: 8.5em;
  height: 8.5em;

  background-image: url(${({ fileUrl }) => fileUrl});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  border-radius: 999px;

  @media (min-width: 600px) {
    width: 17em;
    height: 17em;
  }
`

const IconPerson = styled(IconPers)`
  width: 4em;
  height: 4em;

  @media (min-width: 600px) {
    width: 8em;
    height: 8em;
  }
`

// style label element to visually represent interactive upload container
const ImageUploadBox = styled.label`
  font-size: 1.8rem;
  color: rgba(0, 0, 0, 0.5);
  font-weight: 500;
  margin-top: 0.6em;

  /* set image upload container dimensions and background color */
  width: 8.5em;
  height: 8.5em;

  border-radius: 999px;

  /* center content inside of image upload container */
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
    background-color: rgba(0, 0, 0, 0.1);
    outline: 2px solid #000;
    outline-offset: 5px;
  }

  @media (min-width: 600px) {
    width: 17em;
    height: 17em;
  }
`

const HiddenFileInput = styled.input`
  height: 0;
  padding: 0;
  opacity: 0;
`

function UserAvatar() {
  const [hovered, setHovered] = useState(false)
  const [isAvatarUpdated, setIsAvatarUpdated] = useState(false)

  const currentUser = useContext(UserContext)

  // clean up username in order to use it as a link name to the user profile (/profile/username)
  const cleanedUpUsername = currentUser?.displayName
    // make username lowercase
    .toLowerCase()
    // remove spaces from beginning and from the end of the username
    .trim()
    // replace spaces in the middle of the username with dashes
    .replace(/\s+/g, "-")

  useEffect(() => {
    setIsAvatarUpdated(false)
  }, [isAvatarUpdated])

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

    // Points to 'user-avatars' folder at firebase storage
    const userAvatarsRef = ref(storageRef, `user-avatars/${cleanedUpUsername}`)

    // Points to 'user-avatars/username/file.name'
    // Note that you can use variables to create child values
    const fileName = file && file.name
    const avatarRef = ref(userAvatarsRef, fileName)
    console.log("avatarRef value:", avatarRef)

    // File path is 'user-avatars/username/fileName'
    const path = avatarRef.fullPath
    console.log("file path:", path)

    // File name is 'fileName'
    // const { name } = avatarRef
    // console.log(name)

    // Points to 'user-avatars'
    // const userAvatarsRefAgain = avatarRef.parent
    // console.log(userAvatarsRefAgain)

    // upload file to the Firebase Storage
    // 'file' comes from the Blob or File API
    // https://firebase.google.com/docs/storage/web/upload-files#web-version-9_1
    try {
      await uploadBytes(avatarRef, file)
    } catch (error) {
      console.log(error.message)
    }

    // get download url
    try {
      const downloadUrl = await getDownloadURL(ref(storage, path))

      // update user profile photoUrl
      const auth = getAuth()
      await updateProfile(auth.currentUser, {
        photoURL: downloadUrl,
      })
      // after user uploaded new image to the Firebase Storage, we're set isAvatarUpdated to "true", causing re-render of the main UserAvatar component. Then useEffect hook switch isAvatarUpdated state back to "false". If user decides to upload new avatar, this loop will run again, causing main UserAvatar component re-render and show us new avatar image.
      setIsAvatarUpdated(true)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <ImageUploadBox
      htmlFor="imageUpload"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {!hovered ? (
        (!currentUser?.photoURL && <IconPerson />) || (
          <AvatarImage fileUrl={currentUser?.photoURL} />
        )
      ) : (
        <>
          <AvatarText>Upload image</AvatarText>
        </>
      )}
      <HiddenFileInput
        id="imageUpload"
        name="imageUpload"
        type="file"
        onChange={handleFileUpload}
      />
    </ImageUploadBox>
  )
}

export default UserAvatar
