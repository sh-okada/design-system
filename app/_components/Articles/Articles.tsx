import { Article } from "../Article/Article";
import { ArticlesSkeleton } from "./ArticlesSkeleton";

type ArticleProps = {
  articles: { id: string; title: string; name: string }[];
};

const Articles: React.FunctionComponent<ArticleProps> & {
  Skeleton: typeof ArticlesSkeleton;
} = ({ articles }: ArticleProps) => {
  return (
    <div className="col-span-12 divide-y">
      {articles.map((article) => (
        <Article
          key={article.id}
          title={article.title}
          name={article.name}
          href="#"
        />
      ))}
    </div>
  );
};

export { Articles };

Articles.Skeleton = ArticlesSkeleton;
