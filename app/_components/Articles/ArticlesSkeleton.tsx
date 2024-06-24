import { Article } from "../Article/Article";

const ArticlesSkeleton = () => {
  return (
    <div className="col-span-12 divide-y">
      <Article.Skeleton />
      <Article.Skeleton />
      <Article.Skeleton />
      <Article.Skeleton />
      <Article.Skeleton />
      <Article.Skeleton />
      <Article.Skeleton />
      <Article.Skeleton />
      <Article.Skeleton />
      <Article.Skeleton />
    </div>
  );
};

export { ArticlesSkeleton };
