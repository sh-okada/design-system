import { Articles } from "./Articles";

const getArticles = async (waitTime: number) => {
  await new Promise((resolve) => setTimeout(resolve, waitTime));

  const res = await fetch("http://localhost:3000/api/articles", {
    cache: "no-store",
  });

  const articles = await res.json();

  return articles;
};

const ArticlesContainer: React.FunctionComponent & {
  Skeleton: typeof Articles.Skeleton;
} = async () => {
  const articles = await getArticles(3000);

  return <Articles articles={articles} />;
};

export { ArticlesContainer };

ArticlesContainer.Skeleton = Articles.Skeleton;
