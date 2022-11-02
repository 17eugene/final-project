import { ChangeEvent, FocusEvent } from "react";
import "../../styles/FormInput/FormInput.scss";

interface IFormInputProps {
  name: string;
  type: "text" | "checkbox" | "email" | "password";
  placeholder?: string;
  value: string | undefined;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  variant?: string;
}

const FormInput = ({
  name,
  type,
  placeholder,
  value,
  onChange,
  onBlur,
  variant,
}: IFormInputProps) => {
  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      className={
        variant === "authorization" ? "auth-form__input" : "form__input"
      }
    />
  );
};

export default FormInput;
