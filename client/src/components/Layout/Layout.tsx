import {Dispatch, SetStateAction} from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

import "../../styles/Layout/Layout.scss"

interface ILayoutProps {
  theme: string | null,
  setTheme: Dispatch<SetStateAction<string | null>>
}

const Layout = ({theme, setTheme}: ILayoutProps) => {
  return (
    <div className={theme === "light" ? "layout" : "layout dark"}>
      <Header theme={theme} setTheme={setTheme}/>
      <Outlet />
      <Footer theme={theme}/>
    </div>
  );
};

export default Layout;
