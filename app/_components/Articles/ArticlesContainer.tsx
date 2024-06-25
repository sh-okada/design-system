import { createCaller } from "@/server";
import { Articles } from "./Articles";

const ArticlesContainer: React.FunctionComponent & {
  Skeleton: typeof Articles.Skeleton;
} = async () => {
  const caller = createCaller({});
  const articles = await caller.articles.list();

  return <Articles articles={articles} />;
};

export { ArticlesContainer };

ArticlesContainer.Skeleton = Articles.Skeleton;
