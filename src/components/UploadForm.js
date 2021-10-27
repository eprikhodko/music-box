// import styled from "styled-components"
import { useState } from "react"
import { Content } from "./shared/Containers"
import {
  StyledForm,
  FloatLabel,
  FloatInput,
  ContainerFloatInput,
} from "./shared/FormElements"
import { Button } from "./shared/Button"

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
      <StyledForm onSubmit={handleSubmit}>
        <div>upload album input</div>

        <ContainerFloatInput>
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
          <label htmlFor="addToCollection">add to my collection</label>
          <input id="addToCollection" type="checkbox" name="addToCollection" />
        </div>

        <Button type="submit">Upload</Button>
      </StyledForm>
    </Content>
  )
}

export default UploadForm
