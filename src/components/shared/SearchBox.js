import styled from "styled-components"
import PropTypes from "prop-types"

import { useState } from "react"

import { useHistory } from "react-router-dom"

import { ReactComponent as SearchIcon } from "../../icons/icon-search.svg"
import { ReactComponent as ArrowIcon } from "../../icons/search-arrow-icon.svg"

const ContainerSearchBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 14em;
  margin-top: ${({ marginTop }) => marginTop};
  margin-right: 2em;

  background-color: #ebebeb;
  border: 1px solid #000;
  border-radius: 50px;
  &:hover {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  &:focus-within {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  /* @media (max-width: 940px) {
    display: none;
  } */
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

const ButtonArrow = styled.button`
  display: flex;
  cursor: pointer;
  background: transparent;
  border: 0;
  svg {
    height: 2.15em;
    width: 2.15em;
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

const ButtonArrowBig = styled(ButtonArrow)`
  margin-right: 0.7em;
  svg {
    height: 4.2em;
    width: 4.2em;
  }
`

function SearchBox({ placeholder, big, marginTop, marginBottom }) {
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

  return !big ? (
    // return regular sized search box, if it is rendered in header
    <form onSubmit={handleSearchSubmit}>
      <ContainerSearchBox marginTop={marginTop}>
        <ContainerSearchIcon>
          <SearchIcon onClick={handleSearchSubmit} />
        </ContainerSearchIcon>
        <TextInput
          placeholder={placeholder}
          value={searchQuery}
          onChange={handleChange}
          big={big}
        />
        <ButtonArrow
          type="submit"
          isEmpty={searchQuery}
          onClick={handleSearchSubmit}
        >
          <ArrowIcon />
        </ButtonArrow>
      </ContainerSearchBox>
    </form>
  ) : (
    // return big search box, if search box is rendered at search page body below the header, as a separate component
    <form onSubmit={handleSearchSubmit}>
      <ContainerSearchBoxBig marginBottom={marginBottom}>
        <ContainerSearchIconBig>
          <SearchIcon onClick={handleSearchSubmit} />
        </ContainerSearchIconBig>
        <TextInputBig
          // type="submit"
          placeholder={placeholder}
          value={searchQuery}
          onChange={handleChange}
        />
        <ButtonArrowBig
          type="submit"
          isEmpty={searchQuery}
          onClick={handleSearchSubmit}
        >
          <ArrowIcon />
        </ButtonArrowBig>
      </ContainerSearchBoxBig>
    </form>
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
