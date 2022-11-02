import { useEffect, useState, useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";

import { getDefaultCar } from "../../redux/cars/cars-slice";
import carsOperations from "../../redux/cars/cars-operations";

import CarViewArea from "../CarViewArea/CarViewArea";
import CarFeaturesArea from "../CarFeaturesArea/CarFeaturesArea";
import UpdateForm from "../UpdateForm/UpdateForm";
import Backdrop from "../Backdrop/Backdrop";

import "../../styles/SelectedCarSection/SelectedCarSection.scss";

interface ISelectedCarSectionProps {
  theme: string | null;
}

const SelectedCarSection = ({ theme }: ISelectedCarSectionProps) => {
  const [isOpenedEdit, setIsOpenedEdit] = useState<boolean>(false);
  const [isOpenedUpdateForm, setIsOpenedUpdateForm] = useState<boolean>(false);

  const cars = useAppSelector((state) => state.cars.carsCollection);
  const selectedCar = useAppSelector((state) => state.cars.selectedCar);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getDefaultCar(selectedCar || cars[0]));
  }, [dispatch, cars, selectedCar]);

  const toggleEdit = useCallback(() => {
    setIsOpenedEdit(!isOpenedEdit);
  }, [isOpenedEdit]);

  const toggleUpdateForm = useCallback(() => {
    setIsOpenedUpdateForm(!isOpenedUpdateForm);
    setIsOpenedEdit(false);
  }, [isOpenedUpdateForm]);

  const deleteCarHandler = useCallback(() => {
    if (selectedCar) {
      dispatch(carsOperations.deleteCar({ _id: selectedCar._id }));
    }
    setIsOpenedEdit(false);
  }, [dispatch, selectedCar]);

  return (
    <div className="selected-car-wrapper">
      {selectedCar && (
        <>
          <CarViewArea />
          {isOpenedUpdateForm ? (
            <>
              <Backdrop>
                <div></div>
              </Backdrop>
              <UpdateForm theme={theme} toggleUpdateForm={toggleUpdateForm} />
            </>
          ) : (
            <CarFeaturesArea
              deleteCarHandler={deleteCarHandler}
              toggleEdit={toggleEdit}
              isOpenedEdit={isOpenedEdit}
              selectedCar={selectedCar}
              toggleUpdateForm={toggleUpdateForm}
              theme={theme}
            />
          )}
        </>
      )}
    </div>
  );
};

export default SelectedCarSection;
