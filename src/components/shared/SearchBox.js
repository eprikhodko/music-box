import styled from "styled-components"
import PropTypes from "prop-types"

import { useContext } from "react"

import { useHistory } from "react-router-dom"

import { ReactComponent as SearchIcon } from "../../icons/icon-search.svg"
import { ReactComponent as ArrowIcon } from "../../icons/search-arrow-icon.svg"

import SearchContext from "../../context/search"

const ContainerSearchBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 14em;
  margin-top: ${({ marginTop }) => marginTop};

  background-color: #ebebeb;
  border: 1px solid #000;
  border-radius: 50px;
  &:hover {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  &:focus-within {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`

const ContainerSearchBoxBig = styled(ContainerSearchBox)`
  width: 35em;
  margin-left: 0;
  margin-bottom: ${({ marginBottom }) => marginBottom};
`

const TextInput = styled.input`
  /* flex: 1 0; */
  padding: 0.6em 0;
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
    font-weight: 500;
  }
`

const TextInputBig = styled(TextInput)`
  font-size: 2.2rem;
  margin-left: 0;
  padding: 1.3em 1em;
`

const ContainerSearchIcon = styled.div`
  display: flex;
  margin-left: 0.6em;
  svg {
    height: 1em;
    width: 1em;
  }
  /* border: 1px solid green; */
`

const ContainerSearchIconBig = styled(ContainerSearchIcon)`
  margin-left: 1.5em;
  svg {
    height: 2em;
    width: 2em;
  }
`

const ContainerArrowIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.5em;
  cursor: ${({ isEmpty }) => isEmpty && "pointer"};
  cursor: pointer;
  svg {
    height: 1.65em;
    width: 1.65em;
  }
  svg circle {
    fill: transparent;
    stroke-width: 1px;
  }
  &:hover {
    svg circle {
      fill: ${({ isEmpty }) => isEmpty && "#dbdbdb"};
    }
  }
`

const ContainerArrowIconBig = styled(ContainerArrowIcon)`
  margin-right: 0.9em;
  svg {
    height: 3.5em;
    width: 3.5em;
  }
`

function SearchBox({ placeholder, big, marginTop, marginBottom }) {
  // take searchQuery, setSearchQuery, handleChange values from context
  const { searchQuery, setSearchQuery, handleChange } =
    useContext(SearchContext)

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

  return !big ? (
    // return regular sized search box, if it is rendered in header
    <ContainerSearchBox marginTop={marginTop}>
      <ContainerSearchIcon>
        <SearchIcon
          onClick={handleSearchSubmit}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              handleSearchSubmit()
            }
          }}
        />
      </ContainerSearchIcon>
      <TextInput
        placeholder={placeholder}
        value={searchQuery}
        onChange={handleChange}
        big={big}
      />
      <ContainerArrowIcon isEmpty={searchQuery}>
        <ArrowIcon onClick={handleSearchSubmit} />
      </ContainerArrowIcon>
    </ContainerSearchBox>
  ) : (
    // return big search box, if search box is rendered at search page body below the header, as a separate component
    <ContainerSearchBoxBig marginBottom={marginBottom}>
      <ContainerSearchIconBig>
        <SearchIcon onClick={handleSearchSubmit} />
      </ContainerSearchIconBig>
      <TextInputBig
        placeholder={placeholder}
        value={searchQuery}
        onChange={handleChange}
      />
      <ContainerArrowIconBig isEmpty={searchQuery}>
        <ArrowIcon onClick={handleSearchSubmit} />
      </ContainerArrowIconBig>
    </ContainerSearchBoxBig>
  )
}

export default SearchBox

SearchBox.propTypes = {
  placeholder: PropTypes.string,
  big: PropTypes.bool,
  marginTop: PropTypes.string,
  marginBottom: PropTypes.string,
}

SearchBox.defaultProps = {
  placeholder: "Search",
  big: false,
  marginTop: "0",
  marginBottom: "0",
}
