import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as LikeSVG } from "../../../assets/heart.svg";
import s from "./BtnLike.module.scss";
import {
  addToFavorite,
  removeFromFavorite,
} from "../../../features/favoritesSlice.js";
import cn from "classnames";

export const BtnLike = ({ id }) => {
  const dispatch = useDispatch();
  const isFavorite = useSelector((state) => state.favorites.includes(id));

  const handleToggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFromFavorite({ id }));
    } else {
      dispatch(addToFavorite({ id }));
    }
  };

  return (
    <button
      className={isFavorite ? cn(s.like, s.active) : s.like}
      aria-label="Добавить в избранное"
      type="button"
      onClick={handleToggleFavorite}>
      <LikeSVG />
    </button>
  );
};
