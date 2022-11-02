import { ReactNode, useCallback, MouseEvent, useRef } from "react";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";

import "../../styles/CarsSlider/CarsSlider.scss";

interface ICarsSliderProps {
  children: ReactNode | ReactNode[];
  theme: string | null;
}

const CarsSlider = ({ children, theme }: ICarsSliderProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleRightClick = useCallback((e: MouseEvent<HTMLDivElement>) => {
    if (
      e.currentTarget.className.includes("arrow-right") &&
      carouselRef.current !== null
    ) {
      carouselRef.current.scrollLeft += carouselRef.current.offsetWidth;
      return;
    }
  }, []);

  const handleLeftClick = useCallback((e: MouseEvent<HTMLDivElement>) => {
    if (
      e.currentTarget.className.includes("arrow-left") &&
      carouselRef.current !== null
    ) {
      carouselRef.current.scrollLeft -= carouselRef.current.offsetWidth;
      return;
    }
  }, []);

  return (
    <div className="slider">
      <div className={
          theme === "light"
            ? "slider__arrow arrow-left"
            : "slider__arrow arrow-left dark"
        } onClick={handleLeftClick}>
        <SlArrowLeft className="slider__icon" />
      </div>
      <div
        className={theme === "light" ? "slider__bar" : "slider__bar dark"}
        ref={carouselRef}
      >
        {children}
      </div>
      <div
        className={
          theme === "light"
            ? "slider__arrow arrow-right"
            : "slider__arrow arrow-right dark"
        }
        onClick={handleRightClick}
      >
        <SlArrowRight className="slider__icon" />
      </div>
    </div>
  );
};

export default CarsSlider;
