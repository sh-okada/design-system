import { EcLink, EcTypography } from "@/components/core";
import { ArticleSkeleton } from "./ArticleSkeleton";

type ArticleProps = {
  href: string;
  title: string;
  name: string;
};

const Article: React.FunctionComponent<ArticleProps> & {
  Skeleton: typeof ArticleSkeleton;
} = ({ href, title, name }: Readonly<ArticleProps>) => {
  return (
    <div className="p-4">
      <EcTypography intent="capture">{name}</EcTypography>
      <EcLink href={href} label={title} />
    </div>
  );
};

export { Article };

Article.Skeleton = ArticleSkeleton;
