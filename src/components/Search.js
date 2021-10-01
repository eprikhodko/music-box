import { useState } from "react"
import styled from "styled-components"

import { ReactComponent as IconSearch } from "../icons/search_24px.svg"

const SearchForm = styled.form`
  margin-left: 2.5em;
`

const SearchInput = styled.input`
  /* font-size: 1rem; */
  border: 1px solid #000;
  border-radius: 50px;
  padding: 0.863em;
  ::placeholder {
    color: rgba(0, 0, 0, 0.5);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 5em 0 5em 1em;
  }
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
    <SearchForm onSubmit={handleSearchSubmit}>
      {/* <label htmlFor="search input"> */}
      {/* Search */}
      <SearchInput
        type="text"
        placeholder="Search"
        value={searchQuery}
        onChange={handleChange}
      />
      <IconSearch />
      {/* </label> */}
      <input type="submit" value="Submit" />
    </SearchForm>
  )
}

export default Search
