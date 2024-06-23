import Link, { LinkProps } from "next/link";
import "./ec-link.css";
import "../EcTypography/ec-typography.css";

type EcLinkProps = LinkProps & {
  label: string;
};

const EcLink = ({ label, ...props }: EcLinkProps) => {
  return (
    <Link className="ec-typography ec-typography--body1 ec-link" {...props}>
      {label}
    </Link>
  );
};

export { EcLink, type EcLinkProps };
