import { useEffect, useRef } from "react";
import s from "./ColorLabel.module.scss";
import cn from "classnames";
import { Field } from "formik";

export const ColorLabel = ({ color }) => {
  const colorRef = useRef(null);
  useEffect(() => {
    colorRef.current.style.setProperty("--data-color", color?.code);
  }, [color]);

  return (
    <label className={s.color} ref={colorRef}>
      <Field
        className={s.input}
        type="radio"
        name="color"
        value={color?.title}
      />
      <span className={s.colorCheck}></span>
    </label>
  );
};
