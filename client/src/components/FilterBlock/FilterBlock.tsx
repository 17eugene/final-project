import { ReactNode, MouseEvent } from "react";

import "../../styles/FilterBlock/FilterBlock.scss";

interface IFilterBlockProps {
  children: ReactNode | ReactNode[];
  onClick?: (e: MouseEvent<HTMLDivElement>) => void;
  theme: string | null;
}

const FilterBlock = ({ children, onClick, theme }: IFilterBlockProps) => {
  return (
    <div
      className={theme === "light" ? "filter-block" : "filter-block dark"}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default FilterBlock;
