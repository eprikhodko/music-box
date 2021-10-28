import styled from "styled-components"
import { useState } from "react"
import { Content } from "./shared/Containers"
import {
  StyledForm,
  FloatLabel,
  FloatInput,
  ContainerFloatInput,
} from "./shared/FormElements"
import { Button } from "./shared/Button"
import { ReactComponent as ImageIcon } from "../icons/image-placeholder.svg"

const ImageUpload = styled.div`
  width: 35em;
  height: 35em;
  background-color: #c2c2c2;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  will-change: transform;
  transition: all 450ms;

  &:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.2);
    transform: translateY(-10px);
  }
  &:hover svg path {
    fill: rgba(0, 0, 0, 0.3);
  }
`

const UploadIconText = styled.p`
  font-size: 1.8rem;
  color: rgba(0, 0, 0, 0.5);
  font-weight: 500;
  margin-top: 0.6em;
`

const Checkbox = styled.input`
  -webkit-appearance: none;
  appearance: none;

  position: relative;
  width: 1em;
  height: 1em;
  border: 1px solid gray;
  /* Adjusts the position of the checkboxes on the text baseline */
  vertical-align: -2px;
  /* Set here so that Windows' High-Contrast Mode can override */
  color: green;

  &::before {
    content: "✔";
    position: absolute;
    font-size: 1.2em;
    right: -1px;
    top: -0.3em;
    visibility: hidden;
  }
  &:checked::before {
    /* Use 'visibility' instead of 'display' to avoid recalculating layout */
    visibility: visible;
  }
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
      <StyledForm onSubmit={handleSubmit} marginTop="5em">
        <ImageUpload>
          <ImageIcon />
          <UploadIconText>Click to upload album picture</UploadIconText>
        </ImageUpload>

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

        <div>
          <Checkbox
            id="addToCollection"
            type="checkbox"
            name="addToCollection"
            // checked
          />
          <label htmlFor="addToCollection">add to my collection</label>
        </div>

        <div>
          <input id="addToWishlist" type="checkbox" name="addToWishlist" />
          <label htmlFor="addToWishlist">add to my wishlist</label>
        </div>

        <Button type="submit">Upload</Button>
      </StyledForm>
    </Content>
  )
}

export default UploadForm
