import { useState } from "react"
import { useHistory } from "react-router-dom"

import { ReactComponent as SearchIcon } from "../../icons/icon-search.svg"
import { ReactComponent as ArrowIcon } from "../../icons/search-arrow-icon.svg"
import {
  ButtonArrow,
  SearchForm,
  TextInput,
  ContainerSearchIcon,
} from "../shared/SearchBoxModules"

function SearchBox() {
  const [searchQuery, setSearchQuery] = useState("")

  const handleChange = (event) => {
    setSearchQuery(event.target.value)
  }

  const history = useHistory()

  const handleSearchSubmit = (event) => {
    event.preventDefault()
    console.log("search submitted")
    event.stopPropagation()

    // clean up search query
    const cleanedSearchQuery = searchQuery
      // make search query lowercase
      .toLowerCase()
      // remove white spaces from the start and from the end of a string
      .trim()
      // replace multiple spaces with a single space
      .replace(/\s\s+/g, " ")

    history.push(`/search/${cleanedSearchQuery}`)
    // reset input in search box
    setSearchQuery("")
  }

  return (
    <SearchForm onSubmit={handleSearchSubmit}>
      <ContainerSearchIcon>
        <SearchIcon onClick={handleSearchSubmit} />
      </ContainerSearchIcon>
      <TextInput
        placeholder="Search music..."
        value={searchQuery}
        onChange={handleChange}
      />
      <ButtonArrow
        type="submit"
        isEmpty={searchQuery}
        onClick={handleSearchSubmit}
      >
        <ArrowIcon />
      </ButtonArrow>
    </SearchForm>
  )
}

export default SearchBox
