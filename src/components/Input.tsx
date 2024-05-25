import { HTMLAttributes, HTMLInputTypeAttribute } from "react";

interface inputProps extends HTMLAttributes<HTMLInputElement> {
  label?: string;
  placeHolder?: string;
  error?: string;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
  value: any;
  type: Extract<HTMLInputTypeAttribute, "number" | "password" | "text">;
}

function Input({
  label,
  handleChange,
  value,
  error,
  placeHolder,
  type,
  ...rest
}: inputProps) {
  return (
    <div>
      <label htmlFor={rest.id} className="block mb-2">
        {label}
      </label>
      <input
        className={rest.className}
        type={type}
        id={rest.id}
        value={value}
        onChange={handleChange}
        placeholder={placeHolder}
        {...rest}
      />
      {error && <div className="">{error}</div>}
    </div>
  );
}

export default Input;
