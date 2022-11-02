import { Dispatch, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks/hooks";

import Container from "../Container/Container";
import Logo from "../Logo/Logo";
import Navbar from "../Navbar/Navbar";
import Button from "../Button/Button";
import HeaderSwitchBlock from "../HeaderSwitchBlock/HeaderSwitchBlock";
import Account from "../Account/Account";

import { useTranslation } from "react-i18next";

import "../../styles/Header/Header.scss";

interface IHeaderProps {
  theme: string | null;
  setTheme: Dispatch<SetStateAction<string | null>>;
}

const Header = ({ theme, setTheme }: IHeaderProps) => {
  const isLoggenInStatus = useAppSelector((state) => state.auth.isLoggedIn);
  const navigate = useNavigate();

  const { t } = useTranslation();

  const authPageNavigate = () => {
    navigate("/signin");
  };

  return (
    <header className={theme === "light" ? "header" : "header dark"}>
      <Container>
        <div className="header-container">
          <Logo />
          <Navbar theme={theme} />
          <HeaderSwitchBlock theme={theme} setTheme={setTheme} />
          {!isLoggenInStatus ? (
            <Button
              onClick={authPageNavigate}
              type="button"
              text={t("header.login")}
            />
          ) : (
            <Account theme={theme} />
          )}
        </div>
      </Container>
    </header>
  );
};

export default Header;
