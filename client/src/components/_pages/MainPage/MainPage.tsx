import { useState, useEffect, useCallback, ChangeEvent } from "react";
import { useSearchParams } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../../redux/hooks/hooks";
import carsOperations from "../../../redux/cars/cars-operations";
import { selectCar } from "../../../redux/cars/cars-slice";

import { ICarResponse } from "../../../model/car/car";

import { useTranslation } from "react-i18next";

import Backdrop from "../../Backdrop/Backdrop";
import Button from "../../Button/Button";
import CarsList from "../../CarsList/CarsList";
import Container from "../../Container/Container";
import AddForm from "../../AddForm/AddForm";
import SelectedCarSection from "../../SelectedCarSection/SelectedCarSection";
import FilterSection from "../../FilterSection/FilterSection";
import Loader from "../../Loader/Loader";

import { MdAdd } from "react-icons/md";

import "../../../styles/MainPage/MainPage.scss";

interface IMainPageProps {
  theme: string | null;
}

const MainPage = ({ theme }: IMainPageProps) => {
  const [backdrop, setBackdrop] = useState(false);
  const [checkedOptions, setCheckedOptions] = useState<string[]>([]);

  const [searchParams, setSearchParams] = useSearchParams();

  const cars = useAppSelector((state) => state.cars.carsCollection);
  const userRole = useAppSelector((state) => state.auth.user.role);
  const isLoading = useAppSelector((state) => state.cars.loading);
  const dispatch = useAppDispatch();

  const { t } = useTranslation();

  //fetch all cars
  useEffect(() => {
    dispatch(carsOperations.getAllCars());
  }, [dispatch]);

  //clear params while reload
  useEffect(() => {
    if (!checkedOptions.length) {
      setSearchParams({});
    }
  }, [checkedOptions.length, setSearchParams]);

  //select a car to show on the main screen
  const selectCarHandler = useCallback(
    (id: string) => {
      const selectedCar = cars.find((car) => car._id === id);
      if (selectedCar) {
        dispatch(selectCar(selectedCar));
      }
    },
    [cars, dispatch]
  );

  const toggleBackdrop = useCallback(() => {
    setBackdrop(!backdrop);
  }, [backdrop]);

  const filterCarsHandler = useCallback(
    (elements: ICarResponse[]) => {
      ///////////////if not selected any filter parameter render whole list/////////////
      if (!checkedOptions.length) return elements;

      //////////////retrieve car all classes and car body types//////////////////
      const avaliableCarClasses = elements.map((el) => el.vehicleClass);
      const avaliableCarBodyTypes = elements.map((el) => el.bodyType);

      ////////////////make array of unique class names and body types/////////////////////
      const uniqueCarClasses = avaliableCarClasses.filter((item, index) => {
        return avaliableCarClasses.indexOf(item.toLowerCase()) === index;
      });
      const uniqueCarBodyTypes = avaliableCarBodyTypes.filter((item, index) => {
        return avaliableCarBodyTypes.indexOf(item.toLowerCase()) === index;
      });

      ////////////////////make filtered collections//////////////////////
      const filteredByClass = elements.filter((car) =>
        checkedOptions.includes(car.vehicleClass)
      );

      const filteredByBody = elements.filter((car) =>
        checkedOptions.includes(car.bodyType)
      );

      const filteredByClassAndBody = filteredByClass.filter((car) =>
        checkedOptions.includes(car.bodyType)
      );

      if (checkedOptions.length === 1) {
        for (let i = 0; i <= checkedOptions.length; i++) {
          const filterOption = checkedOptions[i];
          let carClass;
          let carBody;

          for (let c = 0; c <= uniqueCarClasses.length; c++) {
            carClass = uniqueCarClasses[c];

            if (filterOption === carClass) {
              return filteredByClass;
            }
          }

          for (let b = 0; b <= uniqueCarBodyTypes.length; b++) {
            carBody = uniqueCarBodyTypes[b];
            if (filterOption === carBody) {
              return filteredByBody;
            }
          }
        }
      } else if (!filteredByClassAndBody.length && !filteredByBody.length) {
        return filteredByClass;
      } else if (!filteredByClassAndBody.length && !filteredByClass.length) {
        return filteredByBody;
      } else {
        return filteredByClassAndBody;
      }
    },
    [checkedOptions]
  );

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      let checkedFilterOptions = [...checkedOptions];
      const params: any = {};

      if (e.target.checked) {
        checkedFilterOptions = [...checkedOptions, e.target.name];
        checkedFilterOptions.map((item) => (params[item] = true));
      } else {
        checkedFilterOptions.splice(checkedOptions.indexOf(e.target.name), 1);
        checkedFilterOptions.map((item) => (params[item] = true));
      }
      setCheckedOptions(checkedFilterOptions);
      setSearchParams(params);
    },
    [checkedOptions, setSearchParams, setCheckedOptions]
  );

  return (
    <>
      <main className="main">
        {/* <Loader/> */}
        <Container>
          {!isLoading ? (
            <>
              {userRole === "ADMIN" && (
                <Button
                  type="button"
                  text={t("add")}
                  variant="add"
                  onClick={toggleBackdrop}
                >
                  <MdAdd size={16} />
                </Button>
              )}
              <CarsList
                theme={theme}
                cars={filterCarsHandler(cars)}
                onClick={selectCarHandler}
              />
              <section className="section">
                <FilterSection
                  onChange={handleChange}
                  searchParams={searchParams}
                  checkedOptions={checkedOptions}
                  theme={theme}
                />
                <SelectedCarSection theme={theme} />
              </section>
            </>
          ) : (
            <Loader />
          )}
        </Container>
      </main>
      {backdrop && (
        <Backdrop>
          <AddForm toggleBackdrop={toggleBackdrop} theme={theme}/>
        </Backdrop>
      )}
    </>
  );
};

export default MainPage;
