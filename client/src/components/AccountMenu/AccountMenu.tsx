import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { MdLogout } from "react-icons/md";
import UseOnClickOutside from "../../hooks/UseOnClickOutside/UseOnClickOutside";

import "../../styles/AccountMenu/AccountMenu.scss";

interface IAccountMenuProps {
  email: string | null;
  logoutHandler: () => void;
  theme: string | null;
  closeMenu: () => void;
}

const AccountMenu = ({
  email,
  logoutHandler,
  theme,
  closeMenu,
}: IAccountMenuProps) => {
  const { t } = useTranslation();
  const menuRef = useRef<HTMLDivElement>(null);

  UseOnClickOutside(menuRef, closeMenu);

  return (
    <div
      ref={menuRef}
      className={theme === "light" ? "account-menu" : "account-menu dark"}
    >
      <p
        className={
          theme === "light" ? "account-menu__email" : "account-menu__email dark"
        }
      >
        {email}
      </p>
      <p className="account-menu__item">{t("updateProfile")}</p>
      <div className="sign-out" onClick={logoutHandler}>
        <p className="account-menu__item">{t("signOut")}</p>
        <MdLogout size={20} />
      </div>
    </div>
  );
};

export default AccountMenu;
