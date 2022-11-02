import { useTranslation } from "react-i18next";
import CloseIcon from "../CloseIcon/CloseIcon";

import "../../styles/EditMenu/EditMenu.scss";

interface IEditMenuProps {
  onClick: () => void;
  deleteCarHandler: () => void;
  toggleUpdateForm: () => void;
  theme: string | null;
}

const EditMenu = ({
  onClick,
  deleteCarHandler,
  toggleUpdateForm,
  theme,
}: IEditMenuProps) => {
  const { t } = useTranslation();
  return (
    <div className="edit-menu">
      <CloseIcon theme={theme} onClick={onClick} />
      <p className="edit-menu__text" onClick={deleteCarHandler}>
        {t("deleteCar")}
      </p>
      <p className="edit-menu__text" onClick={toggleUpdateForm}>
        {t("updateCar")}
      </p>
    </div>
  );
};

export default EditMenu;
