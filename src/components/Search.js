import { useState } from "react"
import styled from "styled-components"

import { ReactComponent as SearchIcon } from "../icons/search_24px.svg"

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  width: 224px;
  border: 1px solid #000;
  border-radius: 50px;
  margin-left: 2.5em;
  background-color: #f9f9f9;
  &:hover {
    box-shadow: 5px 5px 1px thistle;
  }
`

const TextInput = styled.input`
  /* flex: 1 0; */
  min-width: 50px;
  font-size: 1.6rem;
  background-color: transparent;
  margin-left: 0.7em;
  border: 0;
  font-family: inherit;
  &:focus {
    outline: 3px solid transparent;
  }
  &::placeholder {
    /* add "opacity: 1;" rule because firefox will render input placeholder semi-transparent */
    opacity: 1;
    color: rgba(0, 0, 0, 0.5);
    font-size: 1.6rem;
    font-weight: 500;
  }
`

const Icon = styled.div`
  display: flex;
  margin-right: 1em;
`

function Search() {
  const [searchQuery, setSearchQuery] = useState("")

  const handleChange = (event) => {
    setSearchQuery(event.target.value)
  }

  const handleSearchSubmit = (event) => {
    event.preventDefault()
    console.log("search submitted")
  }

  console.log(searchQuery)

  return (
    <Container>
      <TextInput
        placeholder="Search"
        value={searchQuery}
        onChange={handleChange}
      />
      <Icon>
        <SearchIcon onClick={handleSearchSubmit} />
      </Icon>
    </Container>
  )
}

export default Search
