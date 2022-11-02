import { MouseEvent, ReactNode } from "react";
import "../../styles/Button/Button.scss";

interface IButtonProps {
  type: "button" | "submit";
  text: string;
  variant?: string;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  children?: ReactNode;
}

const Button = ({
  type,
  text,
  variant,
  onClick,
  children,
}: IButtonProps) => {
  return (
    <button
      className={
        variant === "form"
          ? "button__fullWidth button"
          : variant === "add"
          ? "button__add button"
          : variant === "book"
          ? "button__book button"
          : variant === "theme"
          ? "button__switch button"
          : "button"
      }
      type={type}
      onClick={onClick}
    >
      {children}
      {text}
    </button>
  );
};

export default Button;
