import { Outlet } from "react-router-dom";
import { Header } from "../Components/Header/Header.jsx";
import { Main } from "../Components/Layout/Main/Main.jsx";
import { Footer } from "../Components/Footer/Footer.jsx";
import ScrollToTop from '../ScrollTop.js';


export const Root = () => (
  <>
    <ScrollToTop />
    <Header />
    <Main>
      <Outlet />
    </Main>
    <Footer />
  </>
);
