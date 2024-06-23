import { DetailedHTMLProps, HTMLAttributes } from "react";
import "./ec-typography.css";

type EcTypographyProps = DetailedHTMLProps<
  HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
> & {
  intent?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "button"
    | "body1"
    | "body2"
    | "capture"
    | "overline";
};

const EcTypography = ({ intent = "body1", ...props }: EcTypographyProps) => {
  return (
    <p
      className={["ec-typography", `ec-typography--${intent}`].join(" ")}
      {...props}
    />
  );
};

export { EcTypography, type EcTypographyProps };
