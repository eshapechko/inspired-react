import { useDispatch, useSelector } from "react-redux";
import { Goods } from "../Goods/Goods";
import { fetchAll } from "../../features/goodsSlice";
import s from "./SearchPage.module.scss";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

export const SearchPage = () => {
    const { goodsList } = useSelector((state) => state.goods);
    const dispatch = useDispatch();

    let [searchParams] = useSearchParams();

    useEffect(() => {
        const search = searchParams.get("q");

        const params = { search };
        dispatch(fetchAll(params));
    }, [dispatch, searchParams]);

    return goodsList.length ? (
        <Goods title={searchParams.get("q")} />
    ) : (
        <h3 className={s.empty}>Ничего не найдено по вашему запросу {searchParams.get("q")}</h3>
    );
};
