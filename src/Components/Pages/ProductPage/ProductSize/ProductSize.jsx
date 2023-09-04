import { Field } from "formik";
import s from "./ProductSize.module.scss";

export const ProductSize = ({ size }) => (
  <div className={s.size}>
    <p className={s.title}>Размер</p>
    <div className={s.list}>
      {size?.map((item) => {
        return (
          <label className={s.item} key={item}>
            <Field className={s.input} type="radio" name="size" value={item} />
            <span className={s.check}>{item}</span>
          </label>
        );
      })}
    </div>
  </div>
);
