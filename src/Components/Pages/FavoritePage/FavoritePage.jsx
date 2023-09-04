import { useDispatch, useSelector } from "react-redux";
import { Goods } from "../../Goods/Goods.jsx";
import { useEffect } from "react";
import { fetchCategory } from "../../../features/goodsSlice.js";
import { usePageFromSearchParams } from "../../../hooks/usePageFromSearchParams.js";
import { useNavigate } from "react-router-dom";

export const FavoritePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);
  const page = usePageFromSearchParams(dispatch);

  useEffect(() => {
    if (favorites) {
      const param = { list: favorites };
      const isLastPage = page === Math.ceil((favorites.length + 1) / 12);
      if (page > 1 && favorites.length % 12 === 0 && isLastPage) {
        navigate(`/favorite?page=${page - 1}`);
        return;
      }

      if (page) {
        param.page = page;
      }

      dispatch(fetchCategory(param));
    }
  }, [page, favorites, navigate, dispatch]);

  return favorites.length ? (
    <Goods title="Избранное" />
  ) : (
    <h3>Вы ничего не добавили в избранное</h3>
  );
};
