import { useSelector } from "react-redux";
import s from "./ColorList.module.scss";
import { Color } from "./Color/Color.jsx";
import { ColorLabel } from "./ColorLabel/ColorLabel.jsx";

export const ColorList = ({ colors, validate }) => {
  const { colorList } = useSelector((state) => state.color);

  return validate ? (
    <div className={s.colorList}>
      {colors?.map((id, i) => {
        const color = colorList.find((color) => color.id === id);
        return <ColorLabel key={id} color={color} check={!i} />;
      })}
    </div>
  ) : (
    <ul className={s.colorList}>
      {colors.map((id, i) => {
        const color = colorList.find((color) => color.id === id);
        return <Color key={id} color={color?.code} check={!i} />;
      })}
    </ul>
  );
};
