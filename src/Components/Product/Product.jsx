import { NavLink } from "react-router-dom";
import { API_URL } from "../../const.js";
import s from "./Product.module.scss";
import { ColorList } from "../Common/ColorList/ColorList.jsx";
import { BtnLike } from "../Common/BtnLike/BtnLike.jsx";
import { Img } from "../Common/Img/Img.jsx";

export const Product = ({ id, pic, title, price, colors, description }) => (
  <article className={s.product}>
    <NavLink to={`/product/${id}`} className={s.link}>
      <Img
        className={s.image}
        src={`${API_URL}${pic}`}
        alt={`${title} ${description}`}
      />
      <h3 className={s.title}>{title}</h3>
    </NavLink>

    <div className={s.row}>
      <p className={s.price}>руб {price}</p>

      <BtnLike id={id} />
    </div>
    <ColorList colors={colors} />
  </article>
);
