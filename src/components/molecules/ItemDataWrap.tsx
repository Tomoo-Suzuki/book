import * as React from "react";
import { Link } from "react-router-dom";
import "_scss/molecules/_itemDataWrap";

import { useSelector } from "react-redux";

const ui_display_style = (state) => state.ui;

export const ItemDataWrap = (props) => {
  const uiState = useSelector(ui_display_style);
  const data = props.data;
  return (
    <span className="itemDataWrap">
      <Link to={`/detail/` + data.id_book} className="name_book">
        {data.name_book}
      </Link>
      <Link to={`/detail/` + data.id_book} className="name_auther">
        {data.id_author}
      </Link>
      {uiState.display_style === 2 || uiState.display_style === undefined ? (
        <>
          <Link to={`/detail/` + data.id_book} className="name_publisher">
            {data.id_publisher}
          </Link>
          <p className="name_series">{data.name_series}</p>
          <p className="name_label">{data.label}</p>
        </>
      ) : null}
      <p className="price_now">
        <span>{data.price_now}</span> 円(税込)
      </p>
      {uiState.display_style === 2 || uiState.display_style === undefined ? (
        <>
          <p className="point">
            <span>{data.point}</span> ポイント
          </p>
          <p className="date_sales">{data.date_sales}</p>
          <p className="book_detail">{data.book_detail}</p>
        </>
      ) : null}
    </span>
  );
};
