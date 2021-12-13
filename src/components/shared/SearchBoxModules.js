import styled from "styled-components"

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  /* width: 14em; */
  margin-top: ${({ marginTop }) => marginTop};
  margin-right: ${({ marginRight }) => marginRight || "2em"};
  margin-bottom: ${({ marginBottom }) => marginBottom};

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

export const SearchFormMobile = styled(SearchForm)`
  margin-top: 3.75em;
  margin-bottom: 3.75em;
  margin-right: 0;
`

export const ContainerSearchBoxBig = styled(SearchForm)`
  max-width: 35em;
  width: 100%;
  margin-left: 0;
  margin-right: 0;
  margin: 10em 0 0;
  margin-bottom: ${({ marginBottom }) => marginBottom};
`

export const TextInput = styled.input`
  padding: 0.6em 0;
  width: 100%;
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

export const TextInputMobile = styled(TextInput)`
  padding: 1em 0;
`

export const TextInputBig = styled(TextInput)`
  font-size: 2.2rem;
  margin-left: 0;
  padding: 1.3em 1em;
`

export const ContainerSearchIcon = styled.div`
  display: flex;
  margin-left: 0.6em;
  svg {
    height: 1em;
    width: 1em;
  }
  /* border: 1px solid green; */
`

export const ContainerSearchIconMobile = styled(ContainerSearchIcon)`
  svg {
    height: 1.3em;
    width: 1.3em;
  }
`

export const ContainerSearchIconBig = styled(ContainerSearchIcon)`
  margin-left: 1.5em;
  svg {
    height: 2em;
    width: 2em;
  }
`

export const ButtonArrow = styled.button`
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

export const ButtonArrowMobile = styled(ButtonArrow)`
  margin-right: 0.2em;

  svg {
    height: 2.5em;
    width: 2.5em;
  }
`

export const ButtonArrowBig = styled(ButtonArrow)`
  margin-right: 0.7em;
  svg {
    height: 4.2em;
    width: 4.2em;
  }
`
