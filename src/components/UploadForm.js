import styled from "styled-components"
import { useState } from "react"
import { Content } from "./shared/Containers"
import {
  FloatLabel,
  FloatInput,
  ContainerFloatInput,
} from "./shared/FormElements"
import { Button } from "./shared/Button"
import { ReactComponent as IconImagePlaceholder } from "../icons/image-placeholder.svg"
import { ReactComponent as CheckboxCircleIcon } from "../icons/check_circle_24px.svg"

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
  const [albumName, setAlbumName] = useState("")
  const [artistName, setArtistName] = useState("")
  const [albumYear, setAlbumYear] = useState("")
  const [albumGenre, setAlbumGenre] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("Form submitted")
  }

  return (
    <Content justifyContent="center">
      <form onSubmit={handleSubmit}>
        <ContainerUploadForm marginTop="5em">
          <ImageUploadBox htmlFor="imageUpload">
            <ImagePlaceholderIcon />
            Click to upload album picture
            <HiddenFileInput id="imageUpload" name="imageUpload" type="file" />
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
                setAlbumName(event.target.value.toLowerCase())
              }}
            />
          </ContainerFloatInput>

          <ContainerFloatInput>
            <FloatLabel htmlFor="artistName" isNotEmpty={artistName}>
              Artist name
            </FloatLabel>
            <FloatInput
              id="artistName"
              type="text"
              name="artistName"
              aria-label="Artist name"
              required
              value={artistName}
              onChange={(event) => {
                setArtistName(event.target.value.toLowerCase())
              }}
            />
          </ContainerFloatInput>

          <ContainerFloatInput>
            <FloatLabel htmlFor="albumYear" isNotEmpty={albumYear}>
              Year
            </FloatLabel>
            <FloatInput
              id="albumYear"
              type="number"
              name="albumYear"
              aria-label="Album year"
              minLength="4"
              required
              value={albumYear}
              onChange={(event) => {
                setAlbumYear(event.target.value)
              }}
            />
          </ContainerFloatInput>

          <ContainerFloatInput>
            <FloatLabel htmlFor="albumGenre" isNotEmpty={albumGenre}>
              Genre
            </FloatLabel>
            <FloatInput
              id="albumGenre"
              type="text"
              name="albumGenre"
              aria-label="Album genre"
              required
              value={albumGenre}
              onChange={(event) => {
                setAlbumGenre(event.target.value.toLowerCase())
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
            />
            <CustomCheckbox />
            add to my collection
          </CheckboxLabel>

          <CheckboxLabel htmlFor="addToWishlist">
            <HiddenCheckbox
              type="checkbox"
              id="addToWishlist"
              name="addToWishlist"
            />
            <CustomCheckbox />
            add to wishlist
          </CheckboxLabel>
        </ContainerCheckboxes>

        <ContainerUploadForm marginTop="3em">
          <Button type="submit">Upload</Button>
        </ContainerUploadForm>
      </form>
    </Content>
  )
}

export default UploadForm
