import UploadAlbumImage from "../../icons/upload-album-image.svg"

import * as ROUTES from "../../constants/routes"

import {
  AlbumContainer,
  StyledLink,
  AlbumCover,
  AlbumTitle,
  AlbumCoverContainer,
  // UploadNewAlbumBox,
} from "./grids/GridElements"

function UploadNewAlbum() {
  return (
    <StyledLink to={ROUTES.UPLOAD} key="upload-album-box">
      <AlbumContainer>
        <AlbumCoverContainer>
          <AlbumCover src={UploadAlbumImage} alt="upload new album" />
        </AlbumCoverContainer>
        <AlbumTitle>Upload new album</AlbumTitle>
      </AlbumContainer>
    </StyledLink>
  )
}

export default UploadNewAlbum
