import { useDispatch, useSelector } from "react-redux";
import { Cart } from "./Cart/Cart";
import { Order } from "./Order/Order";
import { useEffect, useState } from "react";
import { fetchAll } from "../../features/goodsSlice";
import { OrderModal } from "./OrderModal/OrderModal";
import { Preloader } from "../Preloader/Preloader";

export const CartPage = () => {
    const { cartItems, countItems } = useSelector((state) => state.cart);
    const { goodsList, status } = useSelector((state) => state.goods);
    const { orderStatus } = useSelector((state) => state.cart);

    const [count, setCount] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        if (count !== countItems) {
            dispatch(fetchAll({ list: cartItems.map((item) => item.id) }));
            setCount(countItems);
        }
    }, [cartItems, count, dispatch, countItems]);

    return status === "loading" ? (
        <Preloader />
    ) : (
        <>
            <Cart cartItems={cartItems} goodsList={goodsList} />
            {cartItems.length ? <Order cartItems={cartItems} /> : ""}
            {orderStatus === "success" && <OrderModal />}
        </>
    );
};
