import { GrFormClose } from "react-icons/gr";

import "../../styles/CloseIcon/CloseIcon.scss";

interface ICloseIconProps {
  onClick?: () => void;
  theme: string | null;
}

const CloseIcon = ({ onClick, theme }: ICloseIconProps) => {
  return (
    <div
      className={theme === "light" ? "close-icon" : "close-icon dark"}
      onClick={onClick}
    >
      <GrFormClose size={20} />
    </div>
  );
};

export default CloseIcon;
