import styled from "styled-components"
import {
  AlbumCoverContainer,
  AlbumCover,
} from "../../components/shared/grids/GridElements"

import { ButtonPrimary } from "../../components/shared/Buttons"

export const Container = styled.div`
  grid-column: 2/-2;

  margin: 1em auto;
  width: 100%;
  max-width: 35em;

  display: grid;
  justify-items: center;

  @media (min-width: 1100px) {
    margin: 0;
    margin-top: 5em;
    max-width: 100%;
    justify-items: left;

    grid-template-columns: minmax(0, 35em) minmax(0, 8em) min-content 2em auto;

    grid-template-rows: ${({ currentUser }) =>
      currentUser
        ? "auto auto auto auto 3em auto 1.5em auto 1.5em auto"
        : "auto auto 4em auto 6em 1fr"};

    grid-template-areas: ${({ currentUser }) =>
      currentUser
        ? `
      "image . album-title album-title album-title"
      "image . artist artist artist"
      "image . year year year"
      "image . genre genre genre"
      "image . . . ."
      "image . button-collection button-collection button-collection"
      "image . . . ."
      "image . button-wishlist button-wishlist button-wishlist"
      "image . . . ."
      "image . button-remove button-remove button-remove"
      "image . . . .";
      `
        : `
      "image . album-title album-title album-title"
      "image . artist artist artist"
      "image . year year year"
      "image . genre genre genre"
      "image . text text text"
      "image . button-signup . button-login";
      `};
  }
`

export const AlbumCoverImageContainer = styled(AlbumCoverContainer)`
  justify-self: stretch;

  @media (min-width: 1100px) {
    grid-area: image;
  }
`

export const AlbumCoverImage = styled(AlbumCover)`
  box-shadow: 0 4px 25px rgba(0, 0, 0, 0.5);
`

export const AlbumTitle = styled.h1`
  font-size: 2.5rem;
  color: #000;
  text-align: center;

  margin-top: 3em;

  @media (min-width: 600px) {
    font-size: 4.5rem;
    margin-top: ${({ currentUser }) => (currentUser ? "1em" : "1.5em")};
  }

  @media (min-width: 1100px) {
    grid-area: album-title;
    align-self: end;
    text-align: left;
  }
`

export const AlbumArtist = styled.h2`
  font-size: 2.5rem;
  color: rgba(0, 0, 0, 0.7);
  text-align: center;

  @media (min-width: 600px) {
    font-size: 2.5rem;
  }

  @media (min-width: 1100px) {
    grid-area: artist;
    text-align: left;
  }
`

export const AlbumYear = styled.p`
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 1.8rem;
  color: #000;
  text-align: center;

  margin: 0;
  margin-top: 1.5em;

  @media (min-width: 1100px) {
    grid-area: year;
    align-self: end;
    text-align: left;
  }
`

export const AlbumGenre = styled.p`
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 1.8rem;
  color: #000;
  text-align: center;

  margin-top: 0.2em;
  margin-bottom: 2em;

  @media (min-width: 1100px) {
    grid-area: genre;
    text-align: left;
    margin: 0;
    margin-top: 0.2em;
  }
`

export const StyledParagraph = styled.p`
  max-width: 30em;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 1.6rem;
  color: #000;
  text-align: center;

  margin-top: 0.5em;

  @media (min-width: 1100px) {
    grid-area: text;
    text-align: left;
    align-self: end;
    margin: 0;
  }
`

export const ButtonSignup = styled(ButtonPrimary)`
  margin-top: 1.3em;
  justify-self: center;

  @media (min-width: 1100px) {
    grid-area: button-signup;
    align-self: start;
    justify-self: start;
  }
`

export const ButtonLogin = styled(ButtonPrimary)`
  margin-top: 1.3em;
  justify-self: center;

  @media (min-width: 1100px) {
    grid-area: button-login;
    align-self: start;
    justify-self: start;
  }
`

export const ButtonCollection = styled(ButtonPrimary)`
  width: 16.5em;

  @media (min-width: 1100px) {
    grid-area: button-collection;
    align-self: start;
  }
`

export const ButtonWishlist = styled(ButtonPrimary)`
  width: 16.5em;
  margin-top: 1.5em;

  @media (min-width: 1100px) {
    grid-area: button-wishlist;
    align-self: start;

    margin: 0;
  }
`

export const ButtonRemove = styled(ButtonPrimary)`
  width: 16.5em;
  margin-top: 1.5em;

  @media (min-width: 1100px) {
    grid-area: button-remove;
    align-self: start;

    margin: 0;
  }
`
