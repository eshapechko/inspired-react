import { useEffect, useRef } from "react";
import s from "./ColorLabel.module.scss";

export const ColorLabel = ({ color, check, selectedColor, handleColorChange }) => {
    const colorRef = useRef(null);

    useEffect(() => {
        colorRef.current.style.setProperty("--data-color", color?.code);
    }, [color]);

    return (
        <label className={s.color} ref={colorRef}>
            <input
                className={s.input}
                type="radio"
                name="color"
                value={color?.title}
                checked={selectedColor ? selectedColor === color?.title : check}
                onChange={handleColorChange}
            />
            <span className={s.colorCheck}></span>
        </label>
    );
};
