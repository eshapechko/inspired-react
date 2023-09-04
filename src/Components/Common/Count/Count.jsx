import cn from "classnames";
import s from "./Count.module.scss";
import classNames from "classnames";

export const Count = ({
  className,
  count,
  handleIncrement,
  handleDecrement,
}) => (
  <div className={cn(s.count, className)}>
    <button className={s.item} type="button" onClick={handleDecrement}>
      -
    </button>
    <span className={cn(s.item, s.number)}>{count}</span>
    <button className={s.item} type="button" onClick={handleIncrement}>
      +
    </button>
  </div>
);
