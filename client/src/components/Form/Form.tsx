import { FormEvent, ReactNode } from "react";

import "../../styles/Form/Form.scss";

interface IFormProps {
  children: ReactNode | ReactNode[];
  onSubmit?: (e: FormEvent<HTMLFormElement>) => void;
  variant?: string;
}

const Form = ({ children, onSubmit, variant }: IFormProps) => {
  return (
    <form
      onSubmit={onSubmit}
      className={variant === "add" ? "form form__add" : "form form__update"}
    >
      {children}
    </form>
  );
};

export default Form;
