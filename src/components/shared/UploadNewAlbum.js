import styled from "styled-components"
import { ReactComponent as Cloud } from "../../icons/cloud_upload_24px.svg"

import * as ROUTES from "../../constants/routes"

import {
  AlbumContainer,
  StyledLink,
  AlbumTitle,
  UploadNewAlbumBox,
} from "./grids/GridElements"

const IconCloud = styled(Cloud)`
  width: 4.5em;
  height: 3em;

  margin-bottom: 1em;
`

const StyledParagraph = styled.p`
  color: rgba(0, 0, 0, 0.5);
  line-height: 1;
  margin: 0;
`

function UploadNewAlbum() {
  return (
    <StyledLink to={ROUTES.UPLOAD} key="upload-album-box">
      <AlbumContainer>
        <UploadNewAlbumBox>
          <IconCloud />
          <StyledParagraph>Upload</StyledParagraph>
        </UploadNewAlbumBox>
        <AlbumTitle>Upload new album</AlbumTitle>
      </AlbumContainer>
    </StyledLink>
  )
}

export default UploadNewAlbum