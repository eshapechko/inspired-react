import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { MainPage } from "./Components/Pages/MainPage/MainPage.jsx";
import { Root } from "./routes/Root.jsx";
import { ErrorPage } from "./Components/Pages/ErrorPage/ErrorPage.jsx";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchNavigation } from "./features/navigationSlice.js";
import { fetchColors } from "./features/colorSlice.js";
import { ProductPage } from "./Components/Pages/ProductPage/ProductPage.jsx";
import { FavoritePage } from "./Components/Pages/FavoritePage/FavoritePage.jsx";
import { CartPage } from "./Components/Pages/CartPage/CartPage.jsx";
import { SearchPage } from "./Components/Pages/SearchPage/SearchPage.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<MainPage />} />
      <Route path="/favorite" element={<FavoritePage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/product/:id" element={<ProductPage />} />
      <Route path="/catalog/:gender/:category?" element={<MainPage />} />

      <Route path="*" element={<ErrorPage />} />
    </Route>,
  ),
);

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNavigation());
    dispatch(fetchColors());
  }, [dispatch]);

  return <RouterProvider router={router}></RouterProvider>;
};
