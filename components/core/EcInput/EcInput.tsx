import { DetailedHTMLProps, InputHTMLAttributes } from "react";

import "./ec-input.css";
import "../EcTypography/ec-typography.css";

type EcInputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  label: string;
  helperText?: string;
  error?: boolean;
};

const EcInput = ({
  label,
  helperText = "",
  error = false,
  ...props
}: EcInputProps) => {
  return (
    <div
      className={[
        "ec-input-container",
        error ? "ec-input-container--error" : "",
      ].join(" ")}
    >
      <label
        className="ec-input-label ec-typography ec-typography--capture"
        htmlFor={label}
      >
        {label}
      </label>
      <input className={["ec-input"].join(" ")} id={label} {...props} />
      {helperText && (
        <p className="ec-typography ec-typography--capture ec-input-helper-text">
          {helperText}
        </p>
      )}
    </div>
  );
};
export { EcInput, type EcInputProps };
