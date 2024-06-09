import { DetailedHTMLProps, SelectHTMLAttributes } from "react";

import "./ec-select.css";
import "../EcTypography/ec-typography.css";

type EcSelectItem = {
  label: string;
  value: string;
};

type EcSelectProps = DetailedHTMLProps<
  SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
> & {
  unselectedLabel?: string;
  selectItems: EcSelectItem[];
  helperText?: string;
  error?: boolean;
};

const EcSelect = ({
  unselectedLabel,
  selectItems,
  helperText = "",
  error = false,
  ...props
}: EcSelectProps) => {
  return (
    <div
      className={[
        "ec-select-container",
        error ? "ec-select-container--error" : "",
      ].join(" ")}
    >
      <select className="ec-select" {...props}>
        {unselectedLabel && (
          <option value="" hidden>
            {unselectedLabel}
          </option>
        )}
        {selectItems.map((selectItem) => {
          return (
            <option key={selectItem.value} value={selectItem.value}>
              {selectItem.label}
            </option>
          );
        })}
      </select>
      {helperText && (
        <p className="ec-typography ec-typography--capture ec-select-helper-text">
          {helperText}
        </p>
      )}
    </div>
  );
};

export { EcSelect, type EcSelectProps };
