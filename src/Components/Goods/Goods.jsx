import { useSelector } from "react-redux";
import s from "./Goods.module.scss";
import { Container } from "../Layout/Container/Container.jsx";
import { Product } from "../Product/Product.jsx";
import { Pagination } from "../Common/Pagintaion/Pagintion.jsx";
import { Preloader } from "../Common/Preloader/Preloader.jsx";
export const Goods = ({ title, noCount = false }) => {
  const { goodsList, totalCount, status } = useSelector((state) => state.goods);

  return (
    <section className={s.goods}>
      <Container>
        <h2 className={s.title}>
          {title ?? "Новинки"}
          {totalCount && totalCount > 0 && !noCount ? (
            <sup>&nbsp;({totalCount})</sup>
          ) : (
            ""
          )}
        </h2>
        {status === "loading" ? (
          <Preloader />
        ) : (
          <>
            <ul className={s.list}>
              {goodsList.map((item) => (
                <li key={item.id}>
                  <Product {...item} />
                </li>
              ))}
            </ul>
            <Pagination />
          </>
        )}
      </Container>
    </section>
  );
};
