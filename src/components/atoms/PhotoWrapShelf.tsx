import * as React from "react";
import { Link } from "react-router-dom";

import "_scss/atoms/_photoWrap";

import { InterPhotoWrap } from "../types/atoms/InterPhotoWrap";

type Props = {
  data: InterPhotoWrap;
  pageType: number;
  rank: number;
  shelfType: number;
};

const PhotoWrapShelf = (props: Props): JSX.Element => {
  const photo = props.data;
  const shelfType = props.shelfType;
  const link_to =
    shelfType === 0
      ? `/bookshelf-detail/` + photo.id_series
      : `/browser-viewer/` + photo.id_book;
  return (
    <Link to={link_to} className="photoWrap">
      <span className="imgBox">
        <img src={photo.url_img} alt={photo.name_book} />
      </span>
    </Link>
  );
};
export default PhotoWrapShelf;
