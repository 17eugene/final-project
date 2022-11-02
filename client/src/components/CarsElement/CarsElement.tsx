import { ICar } from "../../model/car/car";

import "../../styles/CarsElement/CarsElement.scss";

interface ICarsElementProps {
  car: ICar;
}

const CarsElement = ({ car }: ICarsElementProps) => {
  return (
    <div className="cars-list__element">
      <div className="cars-list__image-wrapper">
        <img className="car-image" src={car.imageURL} alt="carImage" />
      </div>
    </div>
  );
};

export default CarsElement;
