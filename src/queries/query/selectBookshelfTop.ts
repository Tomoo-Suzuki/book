import { select_bookshelf_top } from "_redux/actions/action";
import request from "_lib/request";

export const selectBookshelfTop = (id_user, dispatch) => {
  const query =
    `{
    selectBookshelfTop(id_user:"` +
    id_user +
    `"){
      id_book,
      no_title,
      name_book,
      point_sales,
      genre,
      name_genre,
      name_category,
      is_complete,
      is_latest,
      is_reserve,
      id_series,
      name_series,
      price_unit,
      price_now,
      book_detail,
      point_id,
      point,
      id_author,
      id_publisher,
      id_shop,
      url_detail,
      url_img,
      url_img_t,
      url_reader,
      date_register,
      date_sales,
      label_free,
      label_free_s,
      label_disc,
      label_disc_s,
      label_new,
      label_off,
      label_complete_s
    }
}`;
  request(query, "selectBookshelfTop").then((res) => {
    dispatch(select_bookshelf_top(res));
  });
};
