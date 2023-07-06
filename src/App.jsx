import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

import { MainPage } from "./Components/MainPage/MainPage";
import { Root } from "./routes/Root";
import { ErrorPage } from "./Components/ErrorPage/ErrorPage";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Root />}>
            <Route index element={<MainPage />} />
            <Route path="women" element={<MainPage gender="women" />} />
            <Route path="men" element={<MainPage gender="men" />} />
            <Route path="women/:category" element={<MainPage gender="women" />} />
            <Route path="men/:category" element={<MainPage gender="men" />} />
            <Route path="*" element={<ErrorPage />} />
        </Route>
    )
);

export const App = () => {
    return (
        <>
            <RouterProvider router={router}></RouterProvider>
        </>
    );
};
