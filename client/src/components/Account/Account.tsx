import { useAppDispatch } from "../../redux/hooks/hooks";
import authOperations from "../../redux/users/users-operations";
import { useState, useCallback } from "react";
import { useAppSelector } from "../../redux/hooks/hooks";
import { ImUser } from "react-icons/im";
import AccountMenu from "../AccountMenu/AccountMenu";
import "../../styles/Account/Account.scss";

interface IAccountProps {
  theme: string | null;
}

const Account = ({ theme }: IAccountProps) => {
  const dispatch = useAppDispatch();
  const [accountMenuIsOpened, setAccountMenuIsOpened] = useState<boolean>(false);

  const openMenu = () => {
    setAccountMenuIsOpened(true);
  };

  const closeMenu = () => {
    setAccountMenuIsOpened(false);
  };

  const logoutHandler = useCallback(() => {
    dispatch(authOperations.logout());
  }, [dispatch]);

  const userData = useAppSelector((state) => state.auth.user);
  return (
    <>
      <div className="account">
        <p className="account__name" onClick={openMenu}>
          {userData.name}
        </p>
        <div
          className={
            theme === "light" ? "account__avatar" : "account__avatar dark"
          }
        >
          <ImUser
            className={
              theme === "light"
                ? "account__default-icon"
                : "account__default-icon dark"
            }
            size={45}
          />
        </div>
      </div>
      {accountMenuIsOpened && (
        <AccountMenu
          email={userData.email}
          logoutHandler={logoutHandler}
          theme={theme}
          closeMenu={closeMenu}
        />
      )}
    </>
  );
};

export default Account;
