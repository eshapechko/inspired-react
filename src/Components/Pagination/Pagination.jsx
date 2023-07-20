import { NavLink, useLocation } from "react-router-dom";
import s from "./Pagintaion.module.scss";
import cn from "classnames";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { ReactComponent as PrevBtn } from "../../assets/left_arrow.svg";
import { ReactComponent as NextBtn } from "../../assets/right_arrow.svg";

export const Pagination = () => {
    const [pagePagination, setPagePagination] = useState("");
    const pathname = useLocation().pathname;
    const { page, pages } = useSelector((state) => state.goods);

    useEffect(() => {
        setPagePagination(page);
    }, [page, setPagePagination]);

    const handlePageChange = (newPage) => {
        setPagePagination(newPage);
    };

    const handlePrevPage = () => {
        if (pagePagination > 1) {
            handlePageChange(pagePagination - 1);
        }
    };

    const handleNextPage = () => {
        if (pagePagination < pages) {
            handlePageChange(pagePagination + 1);
        }
    };

    const renderPaginationItems = () => {
        const paginationItems = [];

        let startPage = pagePagination === pages && pages >= 3 ? pagePagination - 2 : Math.max(1, pagePagination - 1);

        let endPage = Math.min(startPage + 2, pages);

        for (let i = startPage; i <= endPage; i++) {
            paginationItems.push(
                <li key={i} className={s.item}>
                    <NavLink
                        className={cn(s.link, i === pagePagination && s.linkActive)}
                        to={`${pathname}?page=${i}`}
                        onClick={() => handlePageChange(i)}
                    >
                        {i}
                    </NavLink>
                </li>
            );
        }
        return paginationItems;
    };

    return (
        pages > 1 && (
            <div className={s.pagination}>
                <button className={s.arrow} onClick={handlePrevPage} disabled={pagePagination <= 2}>
                    <PrevBtn />
                </button>

                <ul className={s.list}>{renderPaginationItems()}</ul>

                <button className={s.arrow} onClick={handleNextPage} disabled={pagePagination >= pages - 1 || pages <= 3}>
                    <NextBtn />
                </button>
            </div>
        )
    );
};
