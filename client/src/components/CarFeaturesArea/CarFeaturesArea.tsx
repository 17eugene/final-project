import { useAppSelector } from "../../redux/hooks/hooks";
import Button from "../Button/Button";
import EditMenu from "../EditMenu/EditMenu";

import { ICarResponse } from "../../model/car/car";

import { formatCurrency } from "../../utils/formatCurrency";
import { BsThreeDots } from "react-icons/bs";

import { useTranslation } from "react-i18next";
import "../../styles/CarFeaturesArea/CarFeaturesArea.scss";

interface ICarFeaturesArea {
  deleteCarHandler: () => void;
  toggleEdit: () => void;
  isOpenedEdit: boolean;
  selectedCar: ICarResponse;
  toggleUpdateForm: () => void;
  theme: string | null;
}

const CarFeaturesArea = ({
  deleteCarHandler,
  toggleEdit,
  isOpenedEdit,
  selectedCar,
  toggleUpdateForm,
  theme,
}: ICarFeaturesArea) => {
  const userRole = useAppSelector((state) => state.auth.user.role);

  const { t } = useTranslation();
  return (
    <div className={theme === "light" ? "car-features" : "car-features dark"}>
      {isOpenedEdit && (
        <EditMenu
          onClick={toggleEdit}
          deleteCarHandler={deleteCarHandler}
          toggleUpdateForm={toggleUpdateForm}
          theme={theme}
        />
      )}
      {userRole === "ADMIN" && (
        <BsThreeDots
          className={
            !isOpenedEdit
              ? theme === "light"
                ? "settings-icon"
                : "settings-icon dark"
              : "disabled-settings"
          }
          size={22}
          onClick={toggleEdit}
        />
      )}
      {/* title */}
      <div className="car-features__header">
        <h3
          className={
            theme === "light"
              ? "car-features__title"
              : "car-features__title dark"
          }
        >
          {selectedCar?.brand} {selectedCar?.model}
        </h3>
        {/* specifications */}
        <p
          className={
            theme === "light"
              ? "car-features__specifications"
              : "car-features__specifications dark"
          }
        >
          <span className="engine-spec">{selectedCar?.engineDisplacement}</span>{" "}
          / <span className="fuel-spec">{t(selectedCar?.fuel)}</span> /{" "}
          <span className="transmission-spec">
            {t(selectedCar?.transmission)}
          </span>
        </p>
        {/* class */}
        <div
          className={
            theme === "light"
              ? "car-features__class"
              : "car-features__class dark"
          }
        >
          {t(selectedCar?.vehicleClass)}
        </div>
      </div>

      {/* price */}
      <div className="car-features__price">
        <ul className={theme === "light"?"price__list":"price__list dark"}>
          <li className="price__item">
            <p className="price__days">1-3 {t("day")}</p>
            <span className="price__price">
              {formatCurrency(Number(selectedCar?.price))}
              <span>/{t("per day")}</span>
            </span>
          </li>
          <li className="price__item">
            <p className="price__days">4-9 {t("days")}</p>
            <span className="price__price">
              {formatCurrency(
                Number(selectedCar?.price) - Number(selectedCar?.price) * 0.1
              )}
              <span>/{t("per day")}</span>
            </span>
          </li>
          <li className="price__item">
            <p className="price__days">10-25 {t("days")}</p>
            <span className="price__price">
              {formatCurrency(
                Number(selectedCar?.price) - Number(selectedCar?.price) * 0.15
              )}
              <span>/{t("per day")}</span>
            </span>
          </li>
          <li className="price__item">
            <p className="price__days">26+ {t("days")}</p>
            <span className="price__price">
              {formatCurrency(
                Number(selectedCar?.price) - Number(selectedCar?.price) * 0.2
              )}
              <span>/{t("per day")}</span>
            </span>
          </li>
        </ul>
      </div>
      <Button type="button" text={t("book")} variant="book" />
    </div>
    // </div>
  );
};

export default CarFeaturesArea;
