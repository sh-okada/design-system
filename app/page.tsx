import { Suspense } from "react";
import { ArticlesContainer } from "./_components";

export default async function Page() {
  return (
    <Suspense fallback={<ArticlesContainer.Skeleton />}>
      <ArticlesContainer />
    </Suspense>
  );
}
