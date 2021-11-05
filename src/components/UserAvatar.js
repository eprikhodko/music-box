import { useState } from "react"
import styled from "styled-components"

import { getStorage, ref, uploadBytes } from "firebase/storage"

import { ReactComponent as IconPers } from "../icons/person_24px.svg"
import { ReactComponent as ImagePlaceholder } from "../icons/image-placeholder.svg"

const AvatarText = styled.p`
  font-size: 2.5rem;
  color: rgba(0, 0, 0, 0.7);
  font-weight: 500;
  margin-top: 0.6em;
`

const IconImagePlaceholder = styled(ImagePlaceholder)`
  width: 4em;
  height: 4em;
  margin-top: 2em;
`

const IconPerson = styled(IconPers)`
  width: 8em;
  height: 8em;
`

// style label element to visually represent interactive upload container
const ImageUploadBox = styled.label`
  font-size: 1.8rem;
  color: rgba(0, 0, 0, 0.5);
  font-weight: 500;
  margin-top: 0.6em;

  /* set image upload container dimensions and background color */
  width: 17em;
  height: 17em;

  border: 1px solid #000;
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
  }
`

const HiddenFileInput = styled.input`
  height: 0;
  padding: 0;
  opacity: 0;
`

function UserAvatar() {
  const [hovered, setHovered] = useState(false)

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
    const userAvatarsRef = ref(storageRef, "user-avatars")

    // Points to 'user-avatars/file.name'
    // Note that you can use variables to create child values
    const fileName = file.name
    const avatarRef = ref(userAvatarsRef, fileName)

    // File path is 'user-avatars/fileName'
    const path = avatarRef.fullPath
    console.log(path)

    // File name is 'fileName'
    const { name } = avatarRef
    console.log(name)

    // Points to 'user-avatars'
    const userAvatarsRefAgain = avatarRef.parent
    console.log(userAvatarsRefAgain)

    // upload file to the Firebase Storage
    // 'file' comes from the Blob or File API
    // https://firebase.google.com/docs/storage/web/upload-files#web-version-9_1
    await uploadBytes(avatarRef, file)

    // after we're uploaded our file to the firebase Storage, we need to get an URL to this file. We will need this fileUrl later, when we will be creating user record with the username and avatar. We need to store this url in the state.
    //  const fileUrl = await fileReference.getDownloadURL()
    // save URL in the state
    //  setFileUrl(fileUrl)
    //  setFileName(file.name)
  }

  return (
    <ImageUploadBox
      htmlFor="imageUpload"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {!hovered ? (
        <IconPerson />
      ) : (
        <>
          <IconImagePlaceholder />
          <AvatarText>Upload picture</AvatarText>
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
