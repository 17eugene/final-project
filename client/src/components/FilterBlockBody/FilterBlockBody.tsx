import "../../styles/FilterBlockBody/FilterBlockBody.scss";

import { ReactNode } from "react";

interface IFilterBlockBodyProps {
  children: ReactNode | ReactNode[];
  theme: string | null;
}

const FilterBlockBody = ({ children, theme }: IFilterBlockBodyProps) => {
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
