import "./ec-stack.css";

type EcStackProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  spacing?: 10 | 20 | 30 | 40;
};

const EcStack = ({ spacing = 10, ...props }: EcStackProps) => {
  return (
    <div
      {...props}
      className={[
        "ec-stack",
        `ec-stack-spacing--${spacing}`,
        props.className?.split(" "),
      ].join(" ")}
    />
  );
};

export { EcStack, type EcStackProps };
