import { EcLink, EcTypography } from "@/components/core";

type ArticleProps = {
  href: string;
  label: string;
  name: string;
};

const Article = ({ href, label, name }: Readonly<ArticleProps>) => {
  return (
    <div className="p-4 col-span-12">
      <EcTypography intent="capture">{name}</EcTypography>
      <EcLink href={href} label={label} />
    </div>
  );
};

export { Article };
