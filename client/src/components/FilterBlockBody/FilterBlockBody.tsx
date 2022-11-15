import { useContext } from "react";
import ThemeContext from "../../context/context";
import "../../styles/FilterBlockBody/FilterBlockBody.scss";

import { ReactNode } from "react";

interface IFilterBlockBodyProps {
  children: ReactNode | ReactNode[];
}

const FilterBlockBody = ({ children }: IFilterBlockBodyProps) => {
  const theme = useContext(ThemeContext);
  return (
    <div
      className={
        theme === "light" ? "filter-block__body" : "filter-block__body dark"
      }
    >
      {children}
    </div>
  );
};

export default FilterBlockBody;
