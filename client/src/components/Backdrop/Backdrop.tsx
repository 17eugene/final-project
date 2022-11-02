import { ReactNode } from "react";
import "../../styles/Backdrop/Backdrop.scss";

interface IBackdropProps {
  children: ReactNode | ReactNode[];
}

const Backdrop = ({ children }: IBackdropProps) => {
  return <div className="backdrop">{children}</div>;
};

export default Backdrop;
