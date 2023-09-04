import { useEffect, useState } from "react";
import { Container } from "../../Layout/Container/Container.jsx";
import s from "./ProductPage.module.scss";
import cn from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../../../features/productSlice.js";
import { useParams } from "react-router-dom";
import { API_URL } from "../../../const.js";
import { ColorList } from "../../Common/ColorList/ColorList.jsx";
import { Count } from "../../Common/Count/Count.jsx";
import { ProductSize } from "./ProductSize/ProductSize.jsx";
import { Goods } from "../../Goods/Goods.jsx";
import { fetchCategory } from "../../../features/goodsSlice.js";
import { BtnLike } from "../../Common/BtnLike/BtnLike.jsx";
import { Img } from "../../Common/Img/Img.jsx";
import { ErrorMessage, Form, Formik } from "formik";
import * as Yup from "yup";
import { addToCart } from "../../../features/cartSlice.js";

export const ProductPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { product, status: statusProduct } = useSelector(
    (state) => state.product,
  );
  const { colorList, status: statusColor } = useSelector(
    (state) => state.color,
  );

  const { gender, category, colors } = product;

  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  useEffect(() => {
    dispatch(fetchProduct(id));
  }, [id, dispatch]);

  useEffect(() => {
    if ((gender, category)) {
      dispatch(
        fetchCategory({ gender, category, count: 4, top: true, exclude: id }),
      );
    }
  }, [gender, category, id, dispatch]);

  const validationSchema = Yup.object({
    size: Yup.string().required("Размер обязателен"),
  });

  return (
    [statusProduct, statusColor].every((status) => status === "success") && (
      <>
        <section className={s.card}>
          <Container className={s.container}>
            <Img
              className={s.image}
              src={`${API_URL}${product.pic}`}
              alt={`${product.title} ${product.description}`}
            />
            <Formik
              initialValues={{
                color: colorList.filter((item) => colors.includes(item.id))[0]
                  .title,
                size: "",
                count: 1,
              }}
              validationSchema={validationSchema}
              onSubmit={(values) => {
                dispatch(
                  addToCart({
                    id,
                    ...values,
                  }),
                );
              }}>
              <Form className={s.content}>
                <h2 className={s.title}>{product.title}</h2>

                <p className={s.price}>руб {product.price}</p>

                <div className={s.vendorCode}>
                  <span className={s.subtitle}>Артикул</span>
                  <span className={s.id}>{product.id}</span>
                </div>

                <div className={s.color}>
                  <p className={cn(s.subtitle, s.colorTitle)}>Цвет</p>
                  <ColorList colors={colors} validate={true} />
                </div>

                <ProductSize size={product.size} />

                <div className={s.description}>
                  <p className={cn(s.subtitle, s.descriptionTitle)}>Описание</p>
                  <p className={s.descriptionText}>{product.description}</p>
                </div>

                <div className={s.control}>
                  <Count
                    className={s.count}
                    count={count}
                    handleIncrement={handleIncrement}
                    handleDecrement={handleDecrement}
                  />

                  <button className={s.addCart} type="submit">
                    В корзину
                  </button>
                  <ErrorMessage className={s.error} name="size" component="p" />
                  <BtnLike id={id} />
                </div>
              </Form>
            </Formik>
          </Container>
        </section>

        <Goods title="Вам также может понравиться" noCount={true} />
      </>
    )
  );
};
