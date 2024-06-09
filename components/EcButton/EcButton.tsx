import React from "react";

import "./ec-button.css";
import "../EcTypography/ec-typography.css";

type EcButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  intent?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
};

const EcButton = ({
  intent = "primary",
  size = "medium",
  ...props
}: EcButtonProps) => {
  return (
    <button
      className={[
        "ec-typography",
        "ec-typography--button",
        "ec-button",
        `ec-button--${intent}`,
        `ec-button--${size}`,
      ].join(" ")}
      type="button"
      {...props}
    />
  );
};

export { EcButton, type EcButtonProps };
