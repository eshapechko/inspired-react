import { NavLink, useLocation } from "react-router-dom";
import s from "./Category.module.scss";
import cn from "classnames";

export const Category = ({ list }) => {
    const location = useLocation();
    const gender = location.pathname.split("/")[1] || "women";

    return (
        <ul className={s.category}>
            {list.map(
                (item) =>
                    item.link === gender &&
                    item.categories.map((category) => (
                        <li key={category.link} className={s.item}>
                            <NavLink
                                className={({ isActive }) => cn(s.link, isActive && s.linkActive)}
                                to={`${item.link}/${category.link}`}
                            >
                                {category.title}
                            </NavLink>
                        </li>
                    ))
            )}
        </ul>
    );
};
