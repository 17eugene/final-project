import { useContext } from "react";
import { useTranslation } from "react-i18next";
import Backdrop from "../Backdrop/Backdrop";
import Modal from "../Modal/Modal";
import Button from "../Button/Button";

import ThemeContext from "../../context/context";
import "../../styles/DeleteConfirmation/DeleteConfirmation.scss";

interface IDeleteConfirmationProps {
  deleteCarHandler: () => void;
  toggleDeleteConfirmation: () => void;
}

const DeleteConfirmation = ({deleteCarHandler, toggleDeleteConfirmation}: IDeleteConfirmationProps) => {
  const theme = useContext(ThemeContext);
  const { t } = useTranslation();
  return (
    <Backdrop>
      <Modal>
        <div
          className={
            theme === "light"
              ? "delete-confirmation"
              : "delete-confirmation dark"
          }
        >
          <p className="delete-confirmation__title">
            {t("deleteConfirmation")}?
          </p>
          <div className="button-group">
            <Button type="button" text={t("btnDelete")} onClick={deleteCarHandler}/>
            <Button type="button" text={t("booking.btnCancel")} onClick={toggleDeleteConfirmation}/>
          </div>
        </div>
      </Modal>
    </Backdrop>
  );
};

export default DeleteConfirmation;
