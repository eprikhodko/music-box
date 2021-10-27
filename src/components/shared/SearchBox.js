import { useState } from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

import { ReactComponent as SearchIcon } from "../../icons/icon-search.svg"
import { ReactComponent as ArrowIcon } from "../../icons/search-arrow-icon.svg"

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 2.5em;
  width: 14em;
  border: 1px solid #000;
  border-radius: 50px;
  /* margin-left: 2.5em; */
  background-color: #ebebeb;
  &:hover {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  &:focus-within {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`

const ContainerBig = styled(Container)`
  height: 5.35em;
  width: 30em;
  margin-left: 0;
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
    font-weight: 500;
  }
`

const TextInputBig = styled(TextInput)`
  font-size: 1.8rem;
  margin-left: 0;
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

function SearchBox({ placeholder, big }) {
  const [searchQuery, setSearchQuery] = useState("")

  const handleChange = (event) => {
    setSearchQuery(event.target.value)
  }

  const handleSearchSubmit = (event) => {
    event.preventDefault()
    console.log("search submitted")
  }

  console.log(searchQuery)

  return !big ? (
    // return regular sized search box, if it is rendered in header
    <Container>
      <ContainerSearchIcon>
        <SearchIcon onClick={handleSearchSubmit} />
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
    </Container>
  ) : (
    // return big search box, if search box is rendered at search page body below the header, as a separate component
    <ContainerBig>
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
    </ContainerBig>
  )
}

export default SearchBox

SearchBox.propTypes = {
  placeholder: PropTypes.string,
  big: PropTypes.bool,
}

SearchBox.defaultProps = {
  placeholder: "Search",
  big: false,
}
