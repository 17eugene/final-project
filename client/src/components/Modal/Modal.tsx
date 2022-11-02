import { ReactNode } from "react";
import "../../styles/Modal/Modal.scss";

interface IModalProps {
  children: ReactNode | ReactNode[];
}

const Modal = ({ children }: IModalProps) => {
  return <div className="modal">{children}</div>;
};

export default Modal;
